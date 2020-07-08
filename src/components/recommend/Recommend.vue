<template>
	<div id="recommend">
		<h2>推荐分类</h2>
			<div class="recommends">
				<a href="http://discount.dangdang.com/list/01.03.html">
					<div class="recommends-item"><img src="~assets/img/recomend/hot.png" alt="">特价小说</div>
				</a>
				<a href="http://category.dangdang.com/cp01.58.03.00.00.00.html">
					<div class="recommends-item"><img src="~assets/img/recomend/yuanban.png" alt="">原版小说</div>
				</a>
				<a href="http://e.dangdang.com/error_page.html">
					<div class="recommends-item"><img src="~assets/img/recomend/dianzi.png" alt="">小说电子书</div>
				</a>
				<a href="http://e.dangdang.com/new_original_index_page.html">
					<div class="recommends-item"><img src="~assets/img/recomend/network.png" alt="">网路文学</div>
				</a>
			</div>
	</div>
</template>

<script>
	export default {
		name: "Recommend",
		props:{

		},
		data(){
			return{
			}
		}
	}
</script>

<style scoped lang="less">
#recommend{
	margin: 20/50rem 0px;
	padding: 10/50rem 0px;
	background-color: white;
	border-radius: 5px;
	box-shadow: 0px 0px 1px gray;
	h2{
		font-size: 32/50rem;
		text-align: center;
	}
	.recommends{
		width: 100%;
		height: 250/50rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-content: space-around;
		a{
			display: block;
			width: 300/50rem;
				height: 100/50rem;
				line-height: 100/50rem;
				text-align: center;
				background-color: #10a1e6;
				border-radius: 5px;
				font-size: 28/50rem;
			color: white;
		}
		.recommends-item{
			img{
				position: relative;
				width: 80/50rem;
				height: 40/50rem;
				top: 10/50rem;
				right: 20/50rem;
			}
		}
	}
}
</style>