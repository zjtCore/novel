import axios from "axios"
// http://localhost:5555/zjt/novel
export function request(config) {

		const instance = axios.create({
					baseURL:"http://localhost:5555/",
					timeout:5000
				})
		// /zjt/novel

		//axios拦截器
	//请求拦截
	instance.interceptors.request.use(config=>{
		// console.log(config);

		return config
	},err=>{
		console.log(err);
	})

		//响应拦截
	instance.interceptors.response.use(res=>{
		console.log(res);
	},err=>{
		console.log(err);
	})
		return instance(config);



}