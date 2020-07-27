<template>
	<div class="boolList">
		<div ref="detail" class="book-item" v-for="(book,i) in books" :key="i" @click="toDetail(i)">
			<img :src="book.img_src" alt="">
			<p class="author">作者:{{book.a_link}}</p>
			<p class="desc">{{book.name}}</p>
			<div class="book-price">
			<span class="cost_price">原价:{{book.cost_price}}</span>
			<span class="price">价格:{{book.price}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "BookList",
		props:{
			books:{
				type:Array,
				default(){}
			}

		},
		methods:{
			toDetail(i){
				console.log(this.$refs.detail[i].children[0].getAttribute("src"))
				this.$router.push({
					path:"/detail",
					query:{
						imgSrc:this.$refs.detail[i].children[0].getAttribute("src"),
						author:this.$refs.detail[i].children[1].innerText,
						desc:this.$refs.detail[i].children[2].innerText,
						cost_price:this.$refs.detail[i].children[3].children[0].innerText,
						price:this.$refs.detail[i].children[3].children[1].innerText,
					}
				})
			}
		}
	}
</script>

<style scoped lang="less">
.boolList{
	padding: 20/50rem 0px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	font-size: 28/50rem;
	.book-item{
		width: 325/50rem;
		padding: 10/50rem;
		margin-bottom: 20/50rem;
		box-shadow: 0px 0px 3px #d7d7d7;
		border-radius: 10/50rem;
		img{
			width: 80%;
			margin-left: 10%;
		}
		.author{
			font-size: 26/50rem;
			padding: 10/50rem;
			margin: 0;
		}
		.desc{
			font-size: 26/50rem;
			height: 50/50rem;
			line-height:50/50rem ;
			max-width: 100%;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			margin: 0;
			padding: 0;

		}
		.book-price{
			font-size: 24/50rem;
			.cost_price{
				text-decoration: line-through;
			}
			.price{
				color: red;
				margin-left: 10/50rem;
			}
		}

	}
}

</style>