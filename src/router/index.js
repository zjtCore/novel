import vue from "vue"
import VueRouter from "vue-router";

//懒加载路由
const login = () => import("../views/login/Login")
const reg = () => import("../views/reg/Reg")
const home = ()=>import("../views/home/Home");
const category = ()=>import("../views/category/Category");
const cart = ()=>import("../views/cart/Cart");
const me = ()=>import("../views/me/Me");
const detail =() => import("../views/detail/Detail")
// const hot =()=>import("../views/home/hot/Hot");
// const classisc =()=>import("../views/home/classics/Classics");
// const news =()=>import("../views/home/news/News");


//解决路由重复点击报错的问题
const originalPush = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
	return originalPush.call(this, location).catch(err => err)
}

vue.use(VueRouter)

const routes = [
	{
		path:"/",
		redirect:"/login"
	},
	{
		path:"/login",
		component:login
	},
	{
		path:"/reg",
		component:reg
	},
	{
		path:"/home",
		component:home,
		// children:[
		// 	{
		// 		path:"",
		// 		redirect:"home/news"
		// 	},
		// 	{
		// 		path:"hot",
		// 		component:hot
		// 	},
		// 	{
		// 		path:"news",
		// 		component:news
		// 	},
		// 	{
		// 		path:"classics",
		// 		component:classisc
		// 	}
		// ]
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
	},
	{
		path:"/detail",
		component:detail
	}
];
const router = new VueRouter({
	mode:"hash",
	routes
})
export default router