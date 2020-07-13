<template>
	<view>
		<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- nav -->
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">填写无法维修原因</text>
			</view>
		</view>
		<view class="reformTet">
			<textarea value="" placeholder="" />
		</view>
		<view class="reformbtn">
			
			<button style="background-color: #A3CB64;" type="default">确认处理</button>
			<button style="background-color: #FF707D;" type="default">重新输入</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			// 返回按钮
			iconBack() {
				uni.navigateBack({
					delta: 1
				})
			},
		}
	}
</script>

<style lang="scss">
.typeQueryNav {
		position: relative;
		display: flex;
		align-items: center;
		width: calc(100% - 20rpx);
		height: 35rpx;
		padding: 0 10rpx;
		background-color: #fff;
		.typeQueryBack {
			display: flex;
			align-items: center;
			line-height: 35rpx;
			.typeQueryTitle {
				font-size: 10rpx;
				color: #434343;
			}
		}
		.filtration {
			position: absolute;
			right: 10rpx;
		}
	}
	.reformTet{
		width: calc(100% - 20rpx);
		height: 100rpx;
		padding: 10rpx 10rpx 30rpx 10rpx;
		border-bottom: 1rpx solid #ccc;
		textarea{
			width: calc(100% - 10rpx);
			height: 100%;
			background-color: $uni-color-fygray;
			border-radius: 10rpx;
			padding: 5rpx;
		}
	}
	.reformbtn{
		width: calc(100% - 20rpx);
		height: 50rpx;
		padding: 10rpx;
		button {
			width: 100rpx;
			height: 30rpx;
			text-align: center;
			line-height: 30rpx;
			float: right;
			margin: 0 10rpx;
			border-radius: 15rpx;
			color: #fff;
			
		}
		button::after{
			border: none;
		}
	}
</style>
