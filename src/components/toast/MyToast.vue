<template>
	<div class="toast" v-show="isShow">
		<span>{{message}}</span>
	</div>
</template>

<script>
	export default {
		name: "MyToast",
		data(){
			return{
				message:'',
				isShow:false
			}
		},
		methods:{
			toastShow(message,duration = 3000){
					this.isShow = true;
					this.message = message;
					setTimeout(()=>{
						this.isShow = false;
						this.message = ""
					},duration)
			}
		}
	}
</script>

<style scoped lang="less">
	.toast {
		font-size: 32/50rem;
		position: fixed;
		z-index: 1000;
		top: 50%;
		left: 50%;
		margin: auto;
		padding:8/50rem 15/50rem;
		transform: translate(-50%, -50%);
		color: white;
		background-color: rgba(0, 0, 0, 0.75);
	}
</style>