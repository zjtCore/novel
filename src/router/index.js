import vue from "vue"
import VueRouter from "vue-router";

//懒加载路由
const home = ()=>import("../views/home/Home");
const category = ()=>import("../views/category/Category");
const cart = ()=>import("../views/cart/Cart");
const me = ()=>import("../views/me/Me");

//解决路由重复点击报错的问题
const originalPush = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
	return originalPush.call(this, location).catch(err => err)
}

vue.use(VueRouter)

const routes = [
	{
		path:"/",
		redirect:"/home"
	},
	{
		path:"/home",
		component:home
	},
	{
		path:"/category",
		component:category
	},
	{
		path:"/cart",
		component:cart
	},
	{
		path:"/me",
		component:me
	}
];
const router = new VueRouter({
	mode:"hash",
	routes
})
export default router