var ViewUtil = require('../../mixins/view.jsx');
var SearchStore = require('../../stores/search.jsx')


// 搜索页面
module.exports = React.createClass({
	// 使用混合 
	// 3 绑定store
	mixins: [ViewUtil, Reflux.connect(SearchStore, 'data')],
	// 不使用reflxu
	// mixins: [ViewUtil],
	// updateShowData: function(newProps) {
	// 	if (newProps.location.pathname.indexOf('/search/') === 0) {
	// 		// 获取query
	// 		var query = newProps.params.query;
	// 		// 遍历数据，更新状态
	// 		var result = DATA_BASE.filter(function(obj) {
	// 			// obj是否包含query 
	// 			for (var i in obj) {
	// 				// 判断属性值obj[i]
	// 				if (obj[i].indexOf(query) >= 0) {
	// 					return true;
	// 				}
	// 			}
	// 		})
	// 		// 更新状态
	// 		this.setState({
	// 			data: result
	// 		})
	// 	}
	// },
	// componentDidMount: function() {
	// 	// console.log(this)
	// 	this.updateShowData(this.props)
	// },
	// // 接收属性数据的时候，更新状态
	// componentWillReceiveProps: function(newProps) {
	// 	this.updateShowData(newProps)
	// }
})