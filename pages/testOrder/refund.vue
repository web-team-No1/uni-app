<template>
	<view>
		<!-- 订单退款 -->
		<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- nav -->
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">订单退款</text>
			</view>
			<view @click="filtrationClick" class="filtration">
				<text class="iconfont iconwancheng"></text>
				<text class="typeQueryTitle">确认提交</text>
			</view>
		</view>
		
		<view class="vipInformation">
			<view class="tbTh">
				<view style="width: 14%;" class="tbThclass">序号</view>
				<view style="width: 14%;" class="tbThclass">产品昵称</view>
				<view style="width: 14%;" class="tbThclass">产品规格</view>
				<view style="width: 14%;" class="tbThclass">产品型号</view>
				<view style="width: 14%;" class="tbThclass">标准价格</view>
				<view style="width: 14%;" class="tbThclass">实际价格</view>
				<view style="width: 14%;" class="tbThclass">退款金额</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 14%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 14%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 14%;" name="性别" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 14%;" name="出生日期" class="tbTdclass">{{j.age}}</view>
				<view style="width: 14%;" name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
				<view style="width: 14%;"  name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
				<view style="width: 14%;" name="服务人员" class="tbTdclass">
					<input type="text" value="" placeholder="请输入"/>
				</view>
			</view>
		</view>
		
		<view class="refundCause">
			退款原因
			<textarea value="" placeholder="输入退款原因" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datas: [{
					id: 1,
					name: "小李",
					sex: "男",
					age: 20,
					birthtime: "2015-07-12",
					waiter: "小王",
					creattime: "2018-5-05"
				}]
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
	@import "./typeDetails.scss";
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
			.detailesxg{
				border-right: 1rpx solid #ccc;
				padding-right: 10rpx;
				margin-right: 10rpx;
			}
			.trdeSelsct{
				position: absolute;
				right: 0rpx;
				top: 25rpx;
				width: 90rpx;
				height: 0rpx;
				overflow: hidden;
				border-radius: 5rpx;
				background-color: #fff;
				transition: all .5s ease;
				.clickSelect{
					
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 30rpx;
					line-height: 30rpx;
				}
			}
			.openSelsct{
				height: 90rpx;
			}
		}
	}
	.refundCause{
		width: calc(100% - 30rpx);
		height: 100rpx;
		padding: 15rpx;
		textarea{
			background-color: $uni-color-fygray;
			height: 100rpx;
			width: 100%;
			margin-top: 10rpx;
			border-radius: 5rpx;
		}
	}
</style>
