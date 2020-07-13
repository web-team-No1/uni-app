<template>
	<view>
		<!-- 填写返厂保修信息 -->
		<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- nav -->
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">填写返厂保修信息</text>
			</view>
		</view>
		<view class="scenerperson">
			<text>收货人		：</text>
			<input type="text">
		</view>
		<view class="scenerperson">
			<text>收货电话：</text>
			<input type="text">
		</view>
		<view class="scenerperson">
			<text>收货地址：</text>
			<input type="text">
		</view>
		<view class="reformTet">
			维修部位：
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
				 array: ['中国', '美国', '巴西', '日本'],
				 index: 0,
			};
		},
		methods:{
			 bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            this.index = e.target.value
			        },
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
		border-top: 1rpx solid #ccc;
		textarea{
			width: calc(100% - 10rpx);
			height: 100%;
			font-size: 10rpx;
			background-color: $uni-color-fygray;
			border-radius: 10rpx;
			padding: 5rpx;
			view{
				font-size: 10rpx;
			}
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
			font-size: 10rpx;
			margin: 0 10rpx;
			border-radius: 15rpx;
			color: #fff;
			
		}
		button::after{
			border: none;
		}
	}
	.scenerperson{
		display: flex;
		align-items: center;
		width: calc(100% - 20rpx);
		height: 30rpx;
		padding: 10rpx 10rpx 10rpx 10rpx;
		text{
			width: 70rpx;
			}
		input{
			width: 200rpx;
			height: 30rpx;
			font-size: 10rpx;
			background-color: $uni-color-fygray;
			border-radius: 15rpx;
			line-height: 30rpx;
			padding: 0 10rpx;
		}
	}
</style>
