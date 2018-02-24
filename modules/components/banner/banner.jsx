// Banner组件
// 定义导航链接，可以看成是a标签
var Link = ReactRouter.Link;
module.exports = React.createClass({
	// 点击logo，进入首页
	showHomePage: function() {
		// 第一种方式
		// location.hash = '#/'
		ReactRouter.hashHistory.replace('/')
	},
	// 进行搜索
	goToSearch: function(e) {
		// 监听是否输入回车键
		if (e.keyCode === 13) {
			// 获取输入框的值
			var val = this.refs.searchInput.value;
			// 脏值检测
			if (/^\s*$/.test(val)) {
				// 提示用户，停止搜索
				alert('请输入内容')
				return ;
			}
			// 改变路由, 最好url编码
			ReactRouter.hashHistory.replace('/search/' + val);
			// 清空内容
			this.refs.searchInput.value = '';
		}
	},
	render: function() {
		return (
			<div className="header">
				<div className="header-top">
					<div className="container">
						<img src="img/logo.png" alt="" className="pull-left" onClick={this.showHomePage} />
						<div className="pull-right">
							{/*我们实现非约束性组件，一会实现约束性组件*/}
							<input type="text" ref="searchInput" className="form-control" onKeyUp={this.goToSearch} />
						</div>
						<ul className="nav nav-pills nav nav-justified">
							<li>
								<Link to="/type/movie">视频</Link>
							</li>
							<li>
								<Link to="/type/games">游戏</Link>
							</li>
							<li>
								<Link to="/type/news">新闻</Link>
							</li>
							<li>
								<Link to="/type/sports">体育</Link>
							</li>
							<li>
								<Link to="/type/buy">购物</Link>
							</li>
							<li>
								<Link to="/type/friends">社交</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="banner banner-1"></div>
			</div>
		)
	}
})