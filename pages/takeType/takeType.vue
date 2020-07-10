<template>
	<!-- 取型首页 -->
	<view class="content">
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="typeTop">
			<image class="leftPic" src="../../static/takeType/typelogin/title@2x.png" mode="widthFix"></image>
			<view class="rightSelect">
				<uniIcons type="person" size="15"></uniIcons>
				<text>admin</text>
			</view>
		</view>
		<view class="typeNav">
			<view class="typeNavPic" v-for="i in navPic">
				<image  :src="i.picUrl" @click="navClick(i)" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components: {uniIcons},
		data() {
			return {
				navPic:[
					{
						id:1,
						title:"待接待",
						picUrl:"../../static/takeType/typelogin/img_daijiedai@2x.png",
						urlSkip:"../typeQuery/typeQuery"
					},
					{
						id:2,
						title:"取型已接待",
						picUrl:"../../static/takeType/typelogin/img_yaijiedai@2x.png",
						urlSkip:"../receptionEnd/receptionEnd"
					},
					{
						id:3,
						title:"取型待验收",
						picUrl:"../../static/takeType/typelogin/img_daiyanshou@2x.png",
						urlSkip:"../acceptance/acceptance"
					},
					{
						id:4,
						title:"取型已验收",
						picUrl:"../../static/takeType/typelogin/img_yiyanshou@2x.png",
						urlSkip:"../approved/approved"
					},
					{
						id:5,
						title:"取型统计报表统计",
						picUrl:"../../static/takeType/typelogin/img_tongji@2x.png",
						urlSkip:"../statistics/statistics"
					},
					
				]
			};
		},
		methods:{
			navClick(i){
				console.log(i)
				uni.navigateTo({
					url:i.urlSkip
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.typeTop {
		width: calc(100% - 20rpx);
		height: 30rpx;
		background-color: #fff;
		padding: 5rpx 10rpx 0rpx 10rpx;
		display: flex;
		justify-content: space-between;
	}
	.typeTop .leftPic {
		width: 120rpx;

	}
	.typeTop .rightSelect {
		width: 100rpx;
		display: flex;
		justify-content: space-around;
		font-size: 12rpx;
	}
	.typeTop .rightSelect .icon {
		margin-right: 10rpx;
	}
	
	.content .typeNav{
		// padding-left: 30rpx;
		display: flex;
		flex-wrap: wrap;
		height: calc(100vh - 50rpx);
		align-items: center;
		width: 100%;
		.typeNavPic{
			width: 33.333333%;
			text-align: center;
			image{
				width: 197rpx;
			}
		}
		
	}
</style>
