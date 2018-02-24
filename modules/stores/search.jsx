var Conf = require('../conf.jsx')
var SearchAction = require('../actions/search.jsx')

// 2 创建store
module.exports = Reflux.createStore({
	// 监听action
	listenables: [SearchAction],
	// 监听事件
	onShowSearchResult: function(query) {
		// 获取搜索字段
		// console.log(query)
		// 过滤query
		var result = [];
		// 遍历数据
		Conf.DATA_BASE.forEach(function(obj, val) {
			// 解析对象，看每一个属性值是否包含query
			for (var i in obj) {
				// i属性名称， obj[i] 属性值
				if (obj[i].indexOf(query) >= 0) {
					// 存储结果
					result.push(obj)
					// 存储后就不需要再判断了
					return ;
				}
			}
		})
		// 将数据传递给组件
		this.trigger(result)
	}
})