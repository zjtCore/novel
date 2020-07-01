<template>
	<div class="tab_bar_item" @click="itemClick">
		<div v-if="isActive">
			<slot name="item_icon"></slot>
		</div>
		<div v-else>
			<slot name="item_icon_active"></slot>
		</div>
		<div :style="activeStyle">
			<slot name="item_text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TabBarItem",
		props:{
			path:String,
			activeColor:{
				type:String,
				default:"#159CFF"
			}
		},
		data(){
			return{

			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path)==-1
			},
			activeStyle(){
				return this.isActive?{}:{color:this.activeColor}
			}
		},
		methods:{
			itemClick(){
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style lang="less" scoped>
	.tab_bar_item{
		flex: 1;
		padding-top: 10/50rem;
		font-size: 24/50rem;
		text-align: center;
		color: gray;
		line-height: normal;
		img {
			width: 40/50rem;
			height: 40/50rem;
			margin-bottom: 6/50rem;
		}
	}
</style>