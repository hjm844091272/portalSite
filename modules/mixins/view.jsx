var Conf = require('../conf.jsx')

module.exports = {
	// 获取图片地址
	getBackgroundImageUrl: function() {
		return 'url(img/item/item' + Math.floor(Math.random() * Conf.ITEM_NUM) + '.jpg)'
	},
	// 创建视图
	createList: function() {
		return this.state.data.map(function(obj, index) {
			return (
				<li key={index} style={{
					backgroundImage: this.getBackgroundImageUrl()
				}}>
					<a href={obj.site}>
						<div className="content">
							<h2>{obj.name}</h2>
						</div>
						<div className="layer">
							<p>公司: {obj.company}</p>
							<p>{'类型: ' + obj.type}</p>
							<p>{'描述: ' + obj.description}</p>
						</div>
					</a>
				</li>
			) 
		}.bind(this))
	},
	// 初始化状态
	getInitialState: function() {
		return {
			data: Conf.DATA_BASE
		}
	},
	render: function() {
		return (
			<div className="main">
				<div className="container">
					<ul className="clearfix">{this.createList()}</ul>
				</div>
			</div>
		)
	}
}