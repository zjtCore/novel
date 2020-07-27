const path = require('path');//引入path模块
function resolve(dir) {
	return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
	//打包
	// devServer: {
	// 	host: '192.168.1.114',  //将浏览地址的本地服务修改为本机ip地址，用来到手机上测试//端口号
	// },

	// devServer: {
	// 	proxy: {
	// 		'/api': {
	// 			target: 'http://localhost:5555',//设置你调用的接口域名和端口号 别忘了加http
	// 			changeOrigin: true,//这里设置是否跨域
	// 			pathRewrite: {
	// 				'^/api': ''
	// 			}
	// 		}
	// 	}
	// 	},
		publicPath: './',
		// 输出文件目录
		outputDir: 'dist',
		// // 关闭esLint规范
		lintOnSave: false,

		chainWebpack: (config) => {
			config.resolve.alias
			//set第一个参数：设置的别名，第二个参数：设置的路径
					.set('@', resolve('./src'))
					.set('assets', resolve('./src/assets'))
					.set('common', resolve('./src/common'))
					.set('components', resolve('./src/components'))
					.set('network', resolve('./src/network'))
					.set('views', resolve('./src/views'))

			// 192.168.1.109
		}
	}
