var Conf = require('../conf.jsx')
var TypeAction = require('../actions/type.jsx')

// 第二步 定义store
module.exports = Reflux.createStore({
	// 监听action
	listenables: [TypeAction],
	// 订阅消息回调函数
	onChangeType: function(id) {
		// console.log(arguments)
		var result = [];
		// 从database中过滤出包含id的数据
		for (var i = 0; i < Conf.DATA_BASE.length; i++) {
			// 如果类型相同
			if (Conf.DATA_BASE[i].type === id) {
				// 存储
				result.push(Conf.DATA_BASE[i])
			}
		}
		// 更新状态
		this.trigger(result)
		// 将数据传递给组件
		// this.trigger(id)
	}
})
