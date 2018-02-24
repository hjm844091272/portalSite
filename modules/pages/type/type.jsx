var ViewUtil = require('../../mixins/view.jsx');
var TypeStore = require('../../stores/type.jsx')

// 分类页面
module.exports = React.createClass({
	// 使用混合
	// 第三步 绑定store
	mixins: [ViewUtil, Reflux.connect(TypeStore, 'data')]
})
