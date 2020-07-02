<template>
	<div>
	<div id="slider" class="mui-slider">
		<div class="mui-slider-group mui-slider-loop">
			<div class="mui-slider-item mui-slider-item-duplicate">
				<a href="http://store.dangdang.com/gys_0015875_u0lb">
					<img src="http://img62.ddimg.cn/upload_img/00796/ts/guomai750-315-1591325741.jpg">
				</a>
			</div>
			<div v-for="(b,i) in banner" class="mui-slider-item" :key="i"><a :href="b.a_href"><img :src="b.img_src" /></a></div>
			<div class="mui-slider-item mui-slider-item-duplicate">
				<a href="http://book.dangdang.com/20200528_guof">
					<img src="http://img60.ddimg.cn/upload_img/00822/cxtc/750x315_0530-1591163803.jpg">
				</a>
			</div>

		</div>
		<div class="mui-slider-indicator">
			<div class="mui-indicator mui-active"></div>
			<div class="mui-indicator" v-for="i in 11"></div>
		</div>
	</div>
	</div>
</template>

<script>

	export default {
		name: "Swiper",
		props:{
			banner:{
				type:Array,
				default(){
					return []
				}
			},

		},
		data(){
			return{
				// lastImg:""
			}
		},
		updated() {
			this.$mui.init({
				swipeBack:true //启用右滑关闭功能
			});
			let slider = this.$mui("#slider");
			slider.slider({
				interval: 3000
			});
		},
		methods:{

		}


	}

</script>

<style>
#slider{
	border-radius: 5px;
}


</style>