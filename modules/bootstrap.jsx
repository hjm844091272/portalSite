// 引入相应的模块
var ImageLoader = require('./plugins/imageloader.jsx')
var Conf = require('./conf.jsx')
var routes = require('./router/router.jsx')

// 缓存加载进度DOM元素
var TextDom = $('.loader-text');

// 测试
new ImageLoader(function(total) {
	// 百分比，并保留两位小数
	TextDom.text('installing 100.00%')
	// 请求数据并存储，
	$.get('data/sites.json', function(res) {
		// console.log(res)
		// 如果加载成功，存储数据
		if (res && res.errno === 0) {
			Conf.DATA_BASE = res.data;
			// 渲染视图
			// ReactDOM.render(<App></App>, ickt)
			// 渲染路由组件
			ReactDOM.render(routes, $('#ickt').get(0))
		}
	})
}, function(num, total) {
	// 百分比，并保留两位小数
	TextDom.text('installing ' + (num / total * 100).toFixed(2) + '%')
}, function(num, total) {
	// 百分比，并保留两位小数
	TextDom.text('installing ' + (num / total * 100).toFixed(2) + '%')
})