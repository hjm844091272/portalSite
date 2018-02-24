// commonjs规范
fis.hook('commonjs')
// 编译jsx语法
fis.match('modules/**.jsx', {
	parser: 'babel2',
	rExt: '.js',
	isMod: true,
	packTo: 'pack/mosules.js'
})
fis.match('lib/**.js', {
	packTo: 'pack/lib.js'
})
// 编译less
fis.match('css/**.less', {
	parser: 'less',
	rExt: '.css',
	packTo: 'pack/module.css'
})
fis.match('css/**.css', {
	packTo: 'pack/lib.css'
})
// 加指纹
fis.match('**.{js,css}', {
	useHash: true
})
// 压缩
fis.match('**.{jsx,js}', {
	optimizer: 'uglify-js'
})
fis.match('**.{less,css}', {
	optimizer: 'clean-css'
})
fis.match('**.png', {
	optimizer: 'png-compressor'
})
// 打包
fis.match('::package', {
	postpackager: 'loader'
})