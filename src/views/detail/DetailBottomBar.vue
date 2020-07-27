<template>
	<div class="detail-bottom-bar">
		<div class="detail-bottom-bar-item">
			<img src="../../assets/img/detail/service.png" alt=""><br>
			<span>客服</span>
		</div>
		<div class="detail-bottom-bar-item">
			<img src="../../assets/img/detail/shop.png" alt=""><br>
			<span>店铺</span>
		</div>
		<div class="detail-bottom-bar-item">
			<img src="../../assets/img/detail/collect.png" alt=""><br>
			<span>收藏</span>
		</div>
		<div class="detail-bottom-bar-item" @click="addShopping">
			加入购物车
		</div>
		<div class="detail-bottom-bar-item">
			购买
		</div>
	</div>
</template>

<script>
	import {addShopping} from "../../networks/home";

	export default {
		name: "DetailBottomBar",
		props:{
			bookDetail:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			addShopping(){
				console.log(this.bookDetail)
				addShopping(this.bookDetail.imgSrc,this.bookDetail.desc,this.bookDetail.price,1).then(res=>{
					this.$mytoast.show("添加成功",3000)
				})

			}
		}
	}
</script>

<style scoped lang="less">
	.detail-bottom-bar{
		position: fixed;
		display: flex;
		bottom: 100/50rem;
		left: 0;
		right: 0;
		background-color: white;
		height: 100/50rem;
		box-shadow: 0px 0px 1px gray;
		.detail-bottom-bar-item{
			flex: 1;
			text-align: center;
			font-size: 28/50rem;
			color: gray;
			img{
				position: relative;
				top: 6/50rem;
				width: 50/50rem;
				vertical-align: bottom;
			}
			span{
				display: inline-block;
				padding: 6/50rem;
			}
		}
		.detail-bottom-bar-item:nth-child(4){
			background-color: yellow;
			line-height: 100/50rem;
			flex: 1.5;
			color: black;
		}
		.detail-bottom-bar-item:nth-child(5){
			background-color: pink;
			line-height: 100/50rem;
			flex: 1.5;
			color: white;
		}

	}
</style>