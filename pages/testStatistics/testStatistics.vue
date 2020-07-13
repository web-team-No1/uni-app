<template>
	<!-- 测评统计 -->
	<view class="content">
		<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- nav -->
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">测评统计</text>
			</view>
			<view class="typeQuerySearch">
				<input type="text" value="" placeholder="请输入客户姓名/联系电话" />
				<uni-icons @click="iconBack" class="backIcon" type="search" size="22"></uni-icons>
			</view>
		</view>
		<!-- 表格 -->
		<view class="tbTh">
			<view style="width: 10%;" class="tbThclass">序号</view>
			<view style="width: 10%;" class="tbThclass">测评人员</view>
			<view style="width: 10%;" class="tbThclass">客户姓名</view>
			<view style="width: 20%;" class="tbThclass">测评时间</view>
			<view style="width: 10%;" class="tbThclass">到访类型</view>
			<view style="width: 10%;" class="tbThclass">是否会员</view>
			<view style="width: 10%;" class="tbThclass">是否续会员</view>
			<view style="width: 10%;" class="tbThclass">下单类型</view>
		</view>
		<scroll-view @refresherrefresh="xlscroll" refresher-enabled refresher-background="#f7f7f7" @scrolltolower="scrollactive" scroll-y="true">
				<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 10%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 10%;" name="性别" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 20%;" name="出生日期" class="tbTdclass">{{j.age}}</view>
				<view style="width: 10%;" name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
				<view style="width: 10%;" name="分配时间" class="tbTdclass">{{j.waiter}}</view>
				<view style="width: 10%;" name="是否会员" class="tbTdclass">{{j.creattime}}</view>
				<view style="width: 10%;" name="操作" class="tbTdclass"></view>
			</view>
		</scroll-view>
		<view class="testfoot">
			<view class="footleft">
				<text>合计营业额:</text>
				<text>2999999</text>
			</view>
			<view class="footright">
				<view class="righttext">
					办会员:333
				</view>
				<view class="righttext">
					办会员:333
				</view>
				<view class="righttext">
					办会员:333
				</view>
				<view class="righttext">
					办会员:333
				</view>
				<view class="righttext">
					办会员:333
				</view>
				<view class="righttext">
					办会员:333
				</view>
				<view class="righttext">
					办会员:333
				</view>
				<view class="righttext">
					办会员:333
				</view>
			</view>
			
		</view>
	</view>
</template>
<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js"
	export default {
		mixins: [MescrollMixin], // 使用mixin
		components: {
			uniIcons
		},
		data() {
			return {
				downOption: {},
				upOption: {
					page: {
						size: 10 // 每页数据的数量,默认10
					},
					noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
					empty: {
						tip: '暂无相关数据'
					}
				},
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

			// upCallback(){
			// 	console.log('qwert')
			// },
			// downCallback(){
			// 	console.log('qdsdsrt')
			// 	this.mescroll.resetUpScroll();
			// },
			scrollactive() {
				console.log("ssss")
				uni.showLoading({
					icon: "loading",
					title: '正在加载...'
				});
				setTimeout(function() {
					uni.hideLoading();
				}, 2000);
				this.datas.push({
						id: 3,
						name: "李",
						sex: "男",
						age: 20,
						birthtime: "2015-07-12",
						waiter: "小王",
						creattime: "2018-5-05"
					}
				)

			},
			xlscroll(){
				console.log("我被下拉了")
			},
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

	.content {
		position: relative;
		height: 100vh;
		width: 100%;
		box-sizing: border-box;
		padding: 0 0 50rpx 0;

		.typeQueryNav {
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

		scroll-view {
			width: 100%;
			height: calc(100% - 65rpx);
			background-color: #f7f7f7;
		}

		.testfoot {
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 50rpx;
			left: 0;
			bottom: 0;
			background-color: #A3CB64;
			.footleft{
				display: flex;
				flex-wrap: wrap;
				width: 20%;
				text{
					font-size: 10rpx;
					width: 100%;
					height: 25rpx;
					color: #fff;
					line-height: 25rpx;
					text-align: center;
				}
				
			}
			.footright{
				display: flex;
				flex-wrap: wrap;
				width: 80%;
				view{
					width: 25%;
					height: 25rpx;
					color: #fff;
					line-height: 25rpx;
					text-align: center;
				}
			}
		}
	}
</style>
