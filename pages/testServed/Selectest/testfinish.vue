<template>
	<!-- 待接待 -->
	<view>
		<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- nav -->
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">本次测评结束</text>
			</view>
		</view>
		
		<view class="finishtop">
			<image src="../../../static/img_wanchengcep.png" mode="widthFix"></image>
		</view>
		
		<view class="finishcenter">
			<text>~本次测评已完成~</text>
			<button style="background-color: #64CB8D;" type="default">返回主页</button>
			<button style="background-color: #FF707D;" type="default">客户详情</button>
			<button style="background-color: #A3CB64;" type="default">测评详情</button>
		</view>
	</view>
</template>
<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				title: '',
		
			};
		},
		methods: {
			// 筛选按钮
			filtrationClick() {
				uni.navigateTo({
					url: "../receptionEnd/fiftration/fiftration"
				})
			},
			// 返回按钮
			iconBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			typeQueryReception() {
				uni.navigateTo({
					url: "../receptionEnd/typeDetails/typeDetails"
				})
			}
		},
		onLoad(option) {}
	}
</script>

<style lang="scss" scoped>
	@import "../../../common/typeTable.scss";
	.typeQueryNav {
		position: relative;
		display: flex;
		align-items: center;
		width: calc(100% - 20rpx);
		height: 35rpx;
		background-color: #fff;
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
		}
	}
.finishtop{
	position: relative;
	margin-top: 10rpx;
	width: 100%;
	height: 90rpx;
	image{
		position: absolute;
		width: 100rpx;
		top:0;
		left: 50%;
		transform: translateX(-50%);
	}
}
.finishcenter{
	display: flex;
	position: relative;
	border-top: 1rpx solid #ececec;
	padding-top: 20rpx;
	justify-content: center;
	margin: 20rpx 10rpx 0 10rpx;
	width: calc(100% - 20rpx);
	height: 100rpx;
	button:after{
		border: none;
	}
	button{
		width: 25%;
		height: 30rpx;
		line-height: 30rpx;
		text-align: center;
		border-radius: 15rpx;
		font-size: 10rpx;
		color: #fff;
	}
	text{
		position: absolute;
		left: 50%;
		top:-15rpx;
		transform: translateX(-50%);
	}
}
</style>
