import axios from "axios"

// http://localhost:5555/zjt/novel
export function request(config) {

	const instance = axios.create({
		baseURL: "http://106.53.24.225:8080/",
		timeout: 5000,

	})
	// /zjt/novel

	//axios拦截器
	//请求拦截
	instance.interceptors.request.use(config => {
		// console.log(config);

		return config
	}, err => {
		console.log(err);
	})

	//响应拦截
	instance.interceptors.response.use(res => {
		// console.log(res);
		return res
	}, err => {
		console.log(err);
	})
	return instance(config);


}