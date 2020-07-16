<template>
	<view class="content">
<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<image class="logoPic" src="../../static/login/logoPic2.png" mode="widthFix"></image>
		<image class="logoWord" src="../../static/login/logoWord.png" mode="widthFix"></image>
		<form @submit="" @reset="">
			<input type="text" value="" placeholder="用户名" />
			<view class="psdText">
				<input type="text" :password="psdActive" value="" placeholder="请输入密码" />
				<image src="../../static/login/icon_yincang(1).png" @click="clickImg" mode="widthFix"></image>
			</view>
			<button class="loginBtn" hover-class="loginBtnActive" @click="loginClick" type="default">登录</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				psdActive: true
			}
		},
		onLoad() {

		},
		methods: {
			clickImg() {
				this.psdActive = !this.psdActive
			},
			loginClick() {
				this.$http({
					url:"http://localhost:8080/#/",
					method:"get",
					data:{}
				}).then(res=>{
					console.log(res)
				}).catch(err=>{
					console.log(err)
				})
				// uni.redirectTo({
				// 	url: "../takeType/takeType",

				// });
			}
		}
	}
</script>

<style lang="scss">
	.content {
		position: relative;
	}

	.logoPic {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 100rpx;
		width: 61.25rpx;
	}

	.logoWord {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 170rpx;
		width: 199rpx;
	}

	form {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 210rpx;
		width: 270rpx;
		display: flex;

		input {
			width: 236rpx;
			padding: 0 17rpx;
			height: 30rpx;
			font-size: 10rpx;
			line-height: 30rpx;
			background: #ECECEC;
			border-radius: 15rpx;
			margin-top: 10rpx;
		}

		.loginBtn {
			width: 270rpx;
			height: 30rpx;
			border-radius: 15rpx;
			font-size: 10rpx;
			margin-top: 10rpx;
			color: #fff;
			line-height: 30rpx;
			background-color: #A3CB64;
			box-shadow: 0rpx 2rpx 3rpx 1rpx #ccc;
			transition: all .2s ease;
		}
	}



	form .loginBtnActive {
		width: 270rpx;
		height: 30rpx;
		border-radius: 15rpx;
		font-size: 10rpx;
		margin-top: 10rpx;
		color: #fff;
		line-height: 30rpx;
		background-color: #A3CB64;
		box-shadow: 0rpx 5rpx 5rpx 1rpx #ccc;
	}

	button::after {
		border: none;
	}

	.psdText {
		position: relative;
		height: 30rpx;
		line-height: 30rpx;
	}

	.psdText input {
		width: 225rpx;
		padding-right: 30rpx;
	}

	.psdText image {
		position: absolute;
		width: 15rpx;
		right: 10rpx;
		top: 7.5rpx;
	}
</style>
