//console.log('NODE_ENV: ', process.env.NODE_ENV);
/*
	环境变量：VUE_APP_开头的会被打包进入代码，可以在代码中做环境区分，其他的只会在node环境里面识别
*/

console.log('BUILD_TYPE: ', process.env.BUILD_TYPE);
console.log('VUE_APP_SECRET: ', process.env.VUE_APP_SECRET);

const MAP_TYPE = {
	test: '',
	prev: '',
	prod: '',
};

//console.log(MAP_TYPE[process.env.BUILD_TYPE] || 'test');

module.exports = {
	devServer: {
		port: 8000,
		open: true,
		proxy: {
		  '/search': {  // search为转发路径
			target: 'http://www.acfun.cn', // 目标地址
			ws: true, // 是否代理websockets
			changeOrigin: true  // 设置同源 默认false，是否需要改变原始主机头为目标URL,        
		  }
		}
	}
};