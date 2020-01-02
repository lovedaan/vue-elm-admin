import axios from 'axios'
import { Notification } from 'element-ui';

console.log('当前的环境变量是', process.env.NODE_ENV);

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 60000,
  headers: {'X-Custom-Header': 'foobar'}
});


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
		const token = window.localStorage.getItem('token');
    if(token) {
			config.headers = {
				...config.headers,
				Authorization: token
			};
		}
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
		if(response.data.meta.status != 200) {
			Notification.error({
				title: '错误',
				message: response.data.meta.msg || '出错了,请重新试一下~~'
			});
			return;
		}
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
