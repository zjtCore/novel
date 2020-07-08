<template>
	<div>
		<div  id="login">
			<header class="mui-bar mui-bar-nav">
				<h1 class="mui-title">登录</h1>
			</header>
			<div class="mui-content">
				<form id='login-form' class="mui-input-group">
					<div class="mui-input-row">
						<label>账号</label>
						<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号">
					</div>
					<div class="mui-input-row">
						<label>密码</label>
						<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码">
					</div>
				</form>
				<div class="mui-content-padded">
					<button type="button" class="mui-btn mui-btn-block mui-btn-primary">登录</button>
					<div class="link-area"><a @click="reg">注册账号</a> <span class="spliter">|</span> <a id='forgetPassword' @click="login">游客登录</a>
					</div>
				</div>
				<div class="mui-content-padded oauth-area">

				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: "Login",
		methods:{
			login(){
				this.$router.push("/home")
			},
			reg(){
				this.$router.push("/reg")
			}
		}
	}
</script>

<style scoped lang="less">
#login{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 10;
	background-color: #efeff4;
	.area {
		margin: 20px auto 0px auto;
	}

	.mui-input-group {
		margin-top: 10px;
	}

	.mui-input-group:first-child {
		margin-top: 20px;
	}

	.mui-input-group label {
		width: 22%;
	}

	.mui-input-row label~input,
	.mui-input-row label~select,
	.mui-input-row label~textarea {
		width: 78%;
	}

	.mui-checkbox input[type=checkbox],
	.mui-radio input[type=radio] {
		top: 6px;
	}

	.mui-content-padded {
		margin-top: 25px;
	}

	.mui-btn {
		padding: 10px;
	}

	.link-area {
		display: block;
		margin-top: 25px;
		text-align: center;
	}

	.spliter {
		color: #bbb;
		padding: 0px 8px;
	}

	.oauth-area {
		position: absolute;
		bottom: 20px;
		left: 0px;
		text-align: center;
		width: 100%;
		padding: 0px;
		margin: 0px;
	}

	.oauth-area .oauth-btn {
		display: inline-block;
		width: 50px;
		height: 50px;
		background-size: 30px 30px;
		background-position: center center;
		background-repeat: no-repeat;
		margin: 0px 20px;
		/*-webkit-filter: grayscale(100%); */
		border: solid 1px #ddd;
		border-radius: 25px;
	}

	.oauth-area .oauth-btn:active {
		border: solid 1px #aaa;
	}

	.oauth-area .oauth-btn.disabled {
		background-color: #ddd;
	}
}
</style>