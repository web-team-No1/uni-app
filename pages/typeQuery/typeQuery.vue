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
				<text class="typeQueryTitle">待接待</text>
			</view>
			<view class="typeQuerySearch">
				<input type="text" value="" placeholder="请输入客户姓名/联系电话" />
				<uni-icons @click="iconBack" class="backIcon" type="search" size="22"></uni-icons>
			</view>
		</view>
		<!-- 表格 -->
		<view class="tbTh">
			<view style="width: 10%;" class="tbThclass">序号</view>
			<view style="width: 10%;" class="tbThclass">客户姓名</view>
			<view style="width: 10%;" class="tbThclass">性别</view>
			<view style="width: 10%;" class="tbThclass">出生日期</view>
			<view style="width: 10%;" class="tbThclass">服务人员</view>
			<view style="width: 10%;" class="tbThclass">分配时间</view>
			<view style="width: 10%;" class="tbThclass">是否会员</view>
			<view style="width: 10%;" class="tbThclass">操作</view>
		</view>
		<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
			<view style="width: 10%;" name="序号" class="tbTdclass">{{j.id}}</view>
			<view style="width: 10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
			<view style="width: 10%;" name="性别" class="tbTdclass">{{j.sex}}</view>
			<view style="width: 10%;" name="出生日期" class="tbTdclass">{{j.age}}</view>
			<view style="width: 10%;" name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
			<view style="width: 10%;" name="分配时间" class="tbTdclass">{{j.waiter}}</view>
			<view style="width: 10%;" name="是否会员" class="tbTdclass">{{j.creattime}}</view>
			<view style="width: 10%;" name="操作" class="tbTdclass">
				<button type="default" @click="typeQueryReception" size="mini">接待</button>
			</view>
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
				]
			};
		},
		methods: {
			// 返回按钮
			iconBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			typeQueryReception() {
				uni.navigateTo({
					url: "../typeQuery/typeQueryReception/typeQueryReception"
				})
			}
		},
		onLoad(option) {}
	}
</script>

<style lang="scss" scoped>
	@import "../../common/typeTable.scss";

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
