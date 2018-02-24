var App = require('../app/app.jsx')
var Home = require('../pages/home/home.jsx')
var Search = require('../pages/search/search.jsx')
var Type = require('../pages/type/type.jsx')

// 第二步 定义路由规则
// 为了书写方便，可以换成这些组件
// var obj = {color: 'red'}
// obj.color  
// var color = obj.color;
var Router = ReactRouter.Router;  
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect;
// <ReactRouter.Router></ReactRouter.Router>
module.exports = (
	<Router>
		{/*定义规则*/}
		<Route path="/" component={App}>
			{/*分类页面*/}
			<Route path="type/:id" component={Type} />
			{/*搜索页面*/}
			<Route path="search/:query" component={Search} />
			{/*默认页面是首页*/}
			<IndexRoute component={Home} />
			{/*重定向*/}
			<Redirect path="ickt" to="search/ickt" />
			{/*默认页面*/}
			<Redirect path="*" to="/" />
		</Route>
	</Router>
)