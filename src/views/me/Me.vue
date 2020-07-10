<template>

	<div id="me">
		<nav-bar>
			<div slot="center">小说APP</div>
		</nav-bar>
		<div class="user-info">
			<div class="info-item">
				<img class="profile-img" src="~assets/img/favicon.png" alt="">
			</div>
			<div class="info-item binding-info">
				<div>
					<a href="javascript:;">登录/注册</a>
				</div>
				<div class="banding-phone">
					<a href="javascript:;">
						<span class="mui-icon mui-icon-phone"></span>
						暂无绑定手机
					</a>
				</div>
			</div>
			<div class="info-item back">
				<img  src="../../assets/img/back.png" alt="">
			</div>
		</div>
		<div class="account">
			<div class="account-item">
				<div class="number">
					<span class="balance">0.00</span>元
				</div>
				<div class="account-info">我的余额</div>
			</div>
			<div class="account-item">
				<div class="number">
					<span class="balance">0</span>个
				</div>
				<div class="account-info">我的优惠</div>
			</div>
			<div class="account-item">
				<div class="number">
					<span class="balance">0</span>分
				</div>
				<div class="account-info">我的积分</div>
			</div>
		</div>
		<list-view :list-view-data="listViewData1"></list-view>
		<list-view :list-view-data="listViewData2"></list-view>
	</div>

</template>

<script>
	import NavBar from "../../components/navbar/NavBar";
	import ListView from "../me/ListView";
	export default {
		name: "Me",
		data(){
			return{
				listViewData1:[
					{iconClass:"mui-icon mui-icon-chat",iconColor:"gray",text:"我的消息"},
					{iconClass:"mui-icon mui-icon-starhalf",iconColor:"red",text:"积分商城"},
					{iconClass:"mui-icon mui-icon-info",iconColor:"yellow",text:"会员卡"},
				],
				listViewData2:[
					{iconClass:"mui-icon mui-icon-bars",iconColor:"pink",text:"我的购物车"},
					{iconClass:"mui-icon mui-icon-pulldown",iconColor:"pink",text:"下载购物APP"},
				]
			}
		},
		components:{
			NavBar,
			ListView
		}
	}
</script>

<style scoped lang="less">
.user-info{
	background-image: linear-gradient(#10a1e6, #38ccff);
	display: flex;
	padding: 40/50rem;
	font-size: 28/50rem;
	.info-item{
		flex: 1;
		.profile-img{
			width: 120/50rem;
			height:120/50rem;
			border-radius: 50%;
		}
		.phone{
			width: 40/50rem;
			height: 40/50rem;
		}

		a{
			color: white;
		}
	}
	.back{
		display: flex;
		align-items: center;
		justify-content: center;
		img{
			width: 40/50rem;
			height: 60/50rem;
			transform: rotateY(180deg);
		}
	}
	.binding-info{
		position: relative;
		flex: 2;
		padding: 10/50rem;
		.banding-phone{
			position: absolute;
			bottom: 0px;
			span{
				font-size: 28/50rem;
			}
		}
	}

}
.account {
	display: flex;
	.account-item {
		width: 100%;
		background-color: #fff;
		margin-right: 1px;
		text-align: center;
	}

	.account-item:last-of-type {
		margin-right: 0;
	}

	.account-item {
		color: #666;
		font-size: 26/60rem;
		padding: 36/50rem;
	}

	.account-item .balance {
		font-size: 48/50rem;
		font-weight: 700;
		color: #ff5f3e;
	}

	.account-info {
		margin-top: 12/50rem;
	}
}
</style>