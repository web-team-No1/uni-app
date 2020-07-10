<template>
	<!-- 待接待 -->
	<view>
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">待接待</text>
			</view>
			<view class="typeQuerySearch">
				<input type="text" value="" placeholder="请输入客户姓名/联系电话" />
				<uni-icons @click="iconBack" class="backIcon" type="search" size="22"></uni-icons>
			</view>

		</view>
		<ttable :items="items" :datas="datas" :widthtr="widthtr"></ttable>

	</view>
</template>

<script>
	import ttable from "../../components/tables/tables.vue"
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons,
			ttable
		},
		data() {
			return {
				widthtr:10,
				title: '',
				datas: [{
						id: 1,
						name: "小李",
						sex: "男",
						age: 20,
						birthtime: "2015-07-12",
						waiter: "小王",
						creattime: "2018-5-05"
					},
					{
						id: 1,
						name: "小李",
						sex: "男",
						age: 20,
						birthtime: "2015-07-12",
						waiter: "小王",
						creattime: "2018-5-05"
					}
				],
				items: [{
						key: "序号"
					},
					{
						key: "客户姓名"
					},
					{
						key: "性别"
					},
					{
						key: "出生日期"
					},
					{
						key: "服务人员"
					},
					{
						key: "分配时间"
					},
					{
						key: "是否会员"
					},
					{
						key: "操作"
					},
				]
			};
		},
		methods: {
			iconBack() {
				uni.navigateBack({
					delta: 1
				})
			}
		},
		onLoad(option) {
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
				font-size: 14px;
				color: #434343;
			}
		}

		.typeQuerySearch {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			display: flex;
			align-items: center;
			width: 400rpx;
			height: 35rpx;

			input {
				text-align: center;
				padding: 0 20rpx;
				border-radius: 15rpx;
				width: 80%;
				margin-right: 20rpx;
				height: 30rpx;
				background-color: #ECECEC;
			}
		}

	}
</style>
