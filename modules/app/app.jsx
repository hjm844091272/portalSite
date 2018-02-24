var Banner = require('../components/banner/banner.jsx');
var TypeAction = require('../actions/type.jsx');
var SearchAction = require('../actions/search.jsx');

// 应用程序
module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<Banner></Banner>
				{/*第一步  定义渲染位置*/}
				{this.props.children}
				{/*<Home></Home>
				<Search></Search>
				<Type></Type>*/}
			</div>
		)
	},
	// 检测是否是分类页面
	checkPage: function() {
		// console.log(this)
		if (this.props.location.pathname.indexOf('/type/') === 0) {
			TypeAction.changeType(this.props.params.id)
		// 判断搜索页面
		} else if (this.props.location.pathname.indexOf('/search/') === 0) {
			// 发布搜索消息
			SearchAction.showSearchResult(this.props.params.query)
		}
	},
	componentDidMount: function() {
		this.checkPage()
	},
	// 组件更新也要发布消息
	componentDidUpdate: function() {
		this.checkPage()
	} 
})