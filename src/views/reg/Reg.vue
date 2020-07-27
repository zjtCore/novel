<template>
	<div>
	<div id="reg">
		<header class="mui-bar mui-bar-nav">
		<a class="mui-icon mui-icon-left-nav mui-pull-left" @click="back"></a>
		<h1 class="mui-title">注册</h1>
		</header>
		<div class="mui-content">
			<form class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input v-model="account" id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input v-model="password" id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
				</div>
				<div class="mui-input-row">
					<label>确认</label>
					<input v-model="confirmPassword"  id='password_confirm' type="password" class="mui-input-clear mui-input" placeholder="请确认密码">
				</div>
			</form>
			<div class="mui-content-padded">
				<button class="mui-btn mui-btn-block mui-btn-primary" @click="roReg">注册</button>
			</div>

		</div>
	</div>
	</div>
</template>

<script>

	import {register} from "../../networks/home";

	export default {
		name: "Reg",
		data(){
			return{
				account:"",
				password:"",
				confirmPassword:""
			}
		},
		methods:{
			back(){
				this.$router.push("/login")
			},
			roReg(){
				let _this = this;
				if(this.account!=""&&this.password!=""&&this.confirmPassword!=""){
					if(this.password!==this.confirmPassword){
						this.$mytoast.show("两次密码不一致!!!",2000);
						this.password="";
						this.confirmPassword="";
					}else{
						register(this.account,this.password).then(res=>{
							let data = res.data;
							if(data.status=="0"){
								this.$mytoast.show(data.msg+" 可以进行登录",2000);
								_this.$router.push("/login")
							}else{
								this.$mytoast.show(data.msg+"!!!",2000);
							}
						})
					}
				}else{
					this.$mytoast.show("全部要填!!!",2000);
				}
			}
		}
	}
</script>

<style scoped lang="less">
#reg{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 10;
	background-color: #efeff4;
}
</style>