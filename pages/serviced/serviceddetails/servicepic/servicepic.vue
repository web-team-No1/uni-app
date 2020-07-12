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
				<text class="typeQueryTitle">试穿照片</text>
			</view>
		</view>
		<view class="beforePic">
			<text>试穿前照片</text>
			<image src="../../../../static/appraisalTab/img_daijiedai.png" mode=""></image>
		</view>
		<view class="beforePic">
			<text>试穿后照片</text>
			<image src="../../../../static/appraisalTab/img_daijiedai.png" mode=""></image>
		</view>
		<view class="beforePic">
			<text>试穿备注</text>
			<textarea value="" placeholder="" />
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
			.detailesxg{
				border-right: 1rpx solid #ccc;
				padding-right: 10rpx;
				margin-right: 10rpx;
				}
		}
	}
	.beforePic{
		display: flex;
		flex-wrap: wrap;
		width: calc(100% - 20rpx);
		height: 300rpx;
		background-color: $uni-color-fygray;
		margin: 10rpx;
		border-radius: 10rpx;
		text{
			width: 100%;
			height: 30rpx;
			line-height: 30rpx;
			text-align: center;
			border-bottom: 1rpx solid #ccc;
		}
		
	}
</style>
