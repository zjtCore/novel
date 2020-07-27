<template>
	<div id="cart">
		<nav-bar>
			<div slot="center">购物车({{shoppingInfoNum}})</div>
		</nav-bar>
		<div class="shopping">
			<div class="shoppingInfo" v-for="(shopping,i) in shoppingInfo" :key="i">
				<div class="shoppingInfo-item">
					<span ref="checkBtn" class="checkBtn" @click="isCheck(i)"></span>
				</div>
				<div class="shoppingInfo-item">
					<img :src="shopping.imgSrc" alt="">
				</div>
				<div class="shoppingInfo-item">
					<div class="desc">{{shopping.shoppingDesc}}</div>
					<div class="price">{{shopping.price}}</div>
					<div class="num">×{{shopping.num}}</div>
				</div>
			</div>
		</div>
		<div class="cart-bottom-bar">
			<div class="sum">
				<span ref="selectAll" class="checkBtn" @click="selectAll"></span>
			</div>
			<div class="totalPrice">
				总价￥<span>{{totalPrice}}</span>
			</div>
			<div class="calc">
				<span @click="calc">计算({{calcLen}})</span>
			</div>
		</div>
	</div>
</template>

<script>
	import NavBar from "../../components/navbar/NavBar";
	import {getShopping} from "../../networks/home";
	import {delShoppingInfo} from "../../networks/home";

	export default {
		name: "Cart",
		data() {
			return {
				shoppingInfo: [],
				calcLen: 0,
				shoppingInfoNum: 0,
				totalPrice: 0
			}
		},
		created() {
			this.getShoppingInfo();
		},
		components: {
			NavBar
		},
		computed: {},
		methods: {
			isCheck(i) {
				if (this.$refs.checkBtn[i].className.indexOf("bC") !== -1) {
					this.$refs.checkBtn[i].classList.remove("bC")
					this.calcLen--;
					let price = parseFloat(this.shoppingInfo[i].price.substring(4));
					this.totalPrice -= price * parseInt(this.shoppingInfo[i].num);
				} else {
					this.$refs.checkBtn[i].classList.add("bC")
					this.calcLen++;
					let price = parseFloat(this.shoppingInfo[i].price.substring(4));
					this.totalPrice += price * parseInt(this.shoppingInfo[i].num);
				}
				if (this.calcLen != this.shoppingInfoNum) {
					this.$refs.selectAll.classList.remove("bC")
				} else {
					this.$refs.selectAll.classList.add("bC")
				}
			},
			selectAll() {
				if (this.$refs.selectAll.className.indexOf("bC") !== -1) {
					this.$refs.selectAll.classList.remove("bC")
					this.calcLen = 0;
					for (let i = 0; i < this.shoppingInfoNum; i++) {
						this.$refs.checkBtn[i].classList.remove("bC")
					}
					this.totalPrice = 0;
				} else {
					this.$refs.selectAll.classList.add("bC")
					this.calcLen = this.shoppingInfoNum;
					for (let i = 0; i < this.shoppingInfoNum; i++) {
						this.$refs.checkBtn[i].classList.add("bC")
						let price = parseFloat(this.shoppingInfo[i].price.substring(4));
						this.totalPrice += price * parseInt(this.shoppingInfo[i].num);
					}
				}
			},
			getShoppingInfo() {
				getShopping().then(res => {
					let data = res.data.data;
					this.shoppingInfo = data.shoppingInfos;
					this.shoppingInfoNum = data.shoppingInfos.length;
				})
			},
			calc() {
				if (this.calcLen == 0) {
					this.$mytoast.show("请选择商品", 3000);
				} else {
					let imgSrcStr = "";
					let _this = this
					console.log(imgSrcStr)
					for (let i = 0; i < this.shoppingInfoNum; i++) {
						if (this.$refs.checkBtn[i].className.indexOf("bC") !== -1) {
							imgSrcStr += this.shoppingInfo[i].imgSrc + ",";
						}
					}
					console.log(imgSrcStr.substring(0, imgSrcStr.length - 1))
					delShoppingInfo(imgSrcStr.substring(0, imgSrcStr.length - 1)).then(res => {
						this.$mytoast.show("购买成功", 3000);
						for (let i = 0; i < this.shoppingInfoNum; i++) {
							this.$refs.checkBtn[i].classList.remove("bC")
						}
						_this.totalPrice = 0;
						_this.calcLen = 0;
						if (_this.calcLen == 0) {
							_this.$refs.selectAll.classList.remove("bC")
						}
						_this.getShoppingInfo();
					})
				}

			}
		}
	}
</script>

<style scoped lang="less">
	.bC {
		background-color: #70ec11;
	}

	.shopping {
		margin-bottom: 80/50rem;
		.shoppingInfo {
			width: 100%;
			overflow: hidden;
			display: flex;
			background-color: white;
			text-align: center;
			border-radius: 20/50rem;
			padding: 10/50rem 0px;
			margin-bottom: 10/50rem;

			.shoppingInfo-item {
				width: 100%;
				img {
					width: 180/50rem;
					height: 200/50rem;
					border-radius: 5px;
					vertical-align: bottom;
				}

				.checkBtn {
					display: inline-block;
					width: 60/50rem;
					height: 60/50rem;
					border-radius: 50%;
					border: 1px solid gray;
				}

				.desc {
					width: 60%;
					height: 50/50rem;
					line-height: 50/50rem;
					font-size: 28/50rem;
					color: gray;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}

			.shoppingInfo-item:nth-child(1) {
				width: 80/50rem;
				padding-top: 80/50rem;
			}

			.shoppingInfo-item:nth-child(2) {
				padding-left: 30/50rem;
			}

			.shoppingInfo-item:nth-child(3) {
				position: relative;
				.price {
					position: absolute;
					color: red;
					bottom: 50/50rem;
					left: 10/50rem;
					font-size: 32/50rem;
				}
				.num {
					font-size: 40/50rem;
				}
			}

		}

	}

	.cart-bottom-bar {
		position: fixed;
		height: 80/50rem;
		left: 0;
		right: 0;
		bottom: 100/50rem;
		line-height: 80/50rem;
		background-color: #eee;
		box-shadow: 0px 0px 3px rgba(100, 100, 100, .3);

		.sum {
			float: left;

			.checkBtn {
				display: inline-block;
				width: 40/50rem;
				height: 40/50rem;
				margin-top: 20/50rem;
				margin-left: 20/50rem;
				border-radius: 50%;
				border: 1px solid gray;
				/*background-color: white;*/
			}
		}

		.totalPrice {
			float: left;
			color: gray;
			font-size: 40/50rem;
			margin-top: 3/50rem;

			span {
				color: red;
			}
		}

		.calc {
			font-size: 40/50rem;
			float: right;
			background-color: orange;
			color: white;
			padding: 0 15/50rem;
		}
	}
</style>