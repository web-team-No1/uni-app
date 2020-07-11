<template>
	<view>
		<!-- 取型统计报表筛选 -->
		<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- nav -->
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">取型统计报表筛选</text>
			</view>
		</view>

		<!-- 删选主体 -->
		<view class="filterBody">
			<view class="filterSelect">
				<text>客户姓名：</text>
				<input class="uni-input" type="text" placeholder="这是一个数字输入框" />
			</view>
			<view class="filterSelect">
				<text>联系方式：</text>
				<input class="uni-input" type="text" placeholder="这是一个数字输入框" />
			</view>
			<view class="filterSelect">
				<text>接待时间：</text>
				<picker style="width: 30%;" mode="date" @change="patriarChange" :value="patriarchindex" :range="patriarch">
					<view>{{patriarch[patriarchindex]}}</view>
				</picker>
				<text style="width: 10%;">至</text>
				<picker style="width: 30%;" mode="date" :value="date" @change="bindDateChange">
					<view>{{date}}</view>
				</picker>
			</view>
			<view class="filterSelect">
				<text>家长反应：</text>
				<picker mode="selector" @change="patriarChange" :value="patriarchindex" :range="patriarch">
					<view>{{patriarch[patriarchindex]}}</view>
				</picker>
			</view>

			<view class="filterSelect">
				<text>主型人：</text>
				<picker mode="selector" @change="patriarChange" :value="patriarchindex" :range="patriarch">
					<view>{{patriarch[patriarchindex]}}</view>
				</picker>
			</view>
		</view>
		<!-- 重置 -->
		<view class="filtery">
			<button type="default">确认筛选</button>
			<button type="default">重置</button>
		</view>
		<view class="filterSelect">

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				patriarchindex: 0,
				patriarch: ["恐慌", "害怕"],
				date: "111",
			};
		},
		methods: {
			// 时间
			bindDateChange(e) {
				this.date = e.target.value
			},
			// 家长反应
			patriarChange(e) {
				console.log(e)
				this.patriarchindex = e.target.value
			},
			// 返回
			iconBack() {
				uni.navigateBack({
					delta: 1
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
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
	}

	// 删选主体
	.filterBody {
		margin-top: 10rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;
		height: 80rpx;
		padding-bottom: 10rpx;
		border-bottom: 1rpx solid #ccc;
		margin-bottom: 10rpx;

		.filterSelect {
			width: 32%;
			height: 40rpx;
			line-height: 40rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			text {
				font-size: 10rpx;
				width: 30%;
				text-align: center;
			}

			input {
				width: 70%;
				background-color: $uni-color-fygray;
				height: 30rpx;
				border-radius: 15rpx;
				padding: 0 10rpx;
				font-size: 10rpx;
			}

			picker {
				width: 70%;
				background-color: $uni-color-fygray;
				height: 30rpx;
				border-radius: 15rpx;
				padding: 0 10rpx;
				font-size: 10rpx;
				line-height: 30rpx;
			}
		}
	}

	// 筛选确定
	.filtery {
		width: 100%;

		button:nth-child(2) {
			float: right;
			width: 80rpx;
			height: 30rpx;
			line-height: 30rpx;
			color: #fff;
			background-color: $uni-color-fygreen;
			border: none;
			border-radius: 15rpx;
			margin-right: 10rpx;
			text-align: center;
		}

		button:nth-child(1) {
			float: right;
			width: 120rpx;
			height: 30rpx;
			line-height: 30rpx;
			margin-right: 10rpx;
			color: #fff;
			background-color: #FF707D;
			border: none;
			border-radius: 15rpx;
			text-align: center;
		}

	}
</style>
