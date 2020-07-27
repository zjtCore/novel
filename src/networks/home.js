import {request} from "./request";

export function getHomeData() {
	return request({
		url:"book/novel"
	})
}
//登录
export function login(a,p) {
	return request({
		url:"book/login",
		params:{
			userName:a,
			password:p
		}


	})
}
//注册
export function register(a,p) {
	return request({
		url:"book/register",
		params:{
			userName:a,
			password:p
		}


	})
}
// 添加购物车
export function addShopping(i,s,p,n) {
	return request({
		url:"book/addShoppingInfo",
		params:{
			imgSrc:i,
			shoppingDesc:s,
			price:p,
			num:n
		}


	})
}

// 获取购物车信息
export function getShopping() {
	return request({
		url:"book/getShoppingInfo",
	})
}

// 删除购物车信息
export function delShoppingInfo(i) {
	return request({
		url:"book/delShoppingInfo",
		params:{
			imgSrc: i
		}
	})
}