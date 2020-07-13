<template>
	<!-- 已维修 -->
	<view>
		<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- nav -->
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">已维修</text>
			</view>
			<view @click="filtrationClick" class="filtration">
				<text class="iconfont iconshaixuan"></text>
				<text class="typeQueryTitle">筛选</text>
			</view>
		</view>
<!-- 5 -->
		<!-- 表格 -->
		<view class="tbTh">
			<view style="width: 5%;" class="tbThclass">序号</view>
			<view style="width: 10%;" class="tbThclass">客户姓名</view>
			<view style="width: 10%;" class="tbThclass">联系电话</view>
			<view style="width: 17%;" class="tbThclass">产品昵称</view>
			<view style="width: 10%;" class="tbThclass">维修方式</view>
			<view style="width: 18%;" class="tbThclass">报修时间</view>
			<view style="width: 10%;" class="tbThclass">报修人</view>
			<view style="width: 10%;" class="tbThclass">维修人</view>
			<view style="width: 10%;" class="tbThclass">操作</view>
		</view>
		<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
			<view style="width: 5%;" name="序号" class="tbTdclass">{{j.id}}</view>
			<view style="width: 10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
			<view style="width: 10%;" name="联系电话" class="tbTdclass">{{j.phone}}</view>
			<view style="width: 17%;" name="产品昵称" class="tbTdclass">{{j.productName}}</view>
			<view style="width: 10%;" name="维修方式" class="tbTdclass">{{j.typePerson}}</view>
			<view style="width: 18%;" name="报修时间" class="tbTdclass">{{j.typeTime}}</view>
			<view style="width: 10%;" name="报修人" class="tbTdclass">{{j.state}}</view>
			<view style="width: 10%;" name="维修人" class="tbTdclass">{{j.patriarchRe}}</view>
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
						productName: "包膝式踝足矫形器(动踝)",
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
					url: "../serviced/serviceddetails/serviceddetails"
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
</style>
