<template>
	<!-- 订单管理 -->
	<view>
		<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- nav -->
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">订单管理</text>
			</view>
			<view @click="filtrationClick" class="filtration">
				<text class="iconfont iconshaixuan"></text>
				<text class="typeQueryTitle">筛选</text>
			</view>
		</view>

		<!-- 表格 -->
		<view class="tbTh">
			<view style="width: 5%;" class="tbThclass">序号</view>
			<view style="width: 7%;" class="tbThclass">客户姓名</view>
			<view style="width: 10%;" class="tbThclass">联系电话</view>
			<view style="width: 13%;" class="tbThclass">订单编号</view>
			<view style="width: 10%;" class="tbThclass">下单人</view>
			<view style="width: 15%;" class="tbThclass">下单时间</view>
			<view style="width: 10%;" class="tbThclass">订单状态</view>
			<view style="width: 10%;" class="tbThclass">付款类型</view>
			<view style="width: 10%;" class="tbThclass">下欠金额</view>
			<view style="width: 10%;" class="tbThclass">操作</view>
		</view>
		<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
			<view style="width: 5%;" name="序号" class="tbTdclass">{{j.id}}</view>
			<view style="width: 7%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
			<view style="width: 10%;" name="联系电话" class="tbTdclass">{{j.phone}}</view>
			<view style="width: 13%;" name="产品昵称" class="tbTdclass">{{j.productName}}</view>
			<view style="width: 10%;" name="主取型人" class="tbTdclass">{{j.typePerson}}</view>
			<view style="width: 15%;" name="取型时间" class="tbTdclass">{{j.typeTime}}</view>
			<view style="width: 10%;" name="性别" class="tbTdclass">{{j.sex}}</view>
			<view style="width: 10%;" name="模型状态" class="tbTdclass">{{j.state}}</view>
			<view style="width: 10%;" name="家长反映" class="tbTdclass">{{j.patriarchRe}}</view>
			<view style="width: 10%;" name="操作" class="tbTdclass">
				<button type="default" @click="typeQueryReception" size="mini">详情</button>
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
						phone: 18991807988,
						sex: "女",
						productName: "asd11111111111",
						typePerson: "莎莎",
						typeTime: "2018-05-05 12:40:03",
						state: "待验收",
						patriarchRe: "心疼"
					},
					{
						id: 1,
						name: "小李",
						phone: 18991807988,
						sex: "女",
						productName: "包膝式踝足矫形器(动踝)",
						typePerson: "莎莎",
						typeTime: "2018-05-05 12:40:03",
						state: "待验收",
						patriarchRe: "心疼"
					}
				]
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
					url: "../testOrder/orderDetil"
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
		background-color: #fff;
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
		}
	}
</style>
