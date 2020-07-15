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
				<text class="typeQueryTitle">结束测评</text>
			</view>
			<view @click="filtrationClick" class="filtration">
				<text class="iconfont iconsave"></text>
				<text @click="finish" class="typeQueryTitle">保存</text>
			</view>
		</view>
		<view class="finishtop">
			<view class="beizhu">
				<view>新增病情：</view>
				<textarea value="" placeholder="请输入" />
				</view>
			<view class="beizhu">
				<view>结果备注：</view>
				<textarea value="" placeholder="请输入" />
			</view>
		</view>
		<!-- 中间 -->
		<view class="finishcenter">
			<view class="beizhu">
				<text>当前治疗周期：</text>
				<input type="text" value="" />
			</view>
			<view class="beizhu">
				<text>复查日期：</text>
				<input type="text" value="" />
			</view>
		</view>
		
			<view class="foottest">
				<view class="beizhu">
					<text>恢复情况：</text>
					<radio-group name="">
						<label>
							<radio value="a" /><text>变差</text>
							<radio value="b" /><text>反弹</text>
							<radio value="c" /><text>没变化</text>
							<radio value="d" /><text>有改善</text>
							<radio value="f" /><text>恢复好</text>
						</label>
					</radio-group>
				</view>
				<view class="beizhu">
					<text>孩子配合程度：</text>
					<radio-group name="">
						<label>
							<radio value="a" /><text>配合</text>
							<radio value="b" /><text>一般</text>
							<radio value="c" /><text>哭闹</text>
						</label>
					</radio-group>
				</view>
				<view class="beizhu">
					<text>客户分析：</text>
					<radio-group name="">
						<label>
							<radio value="a" /><text>认可</text>
							<radio value="b" /><text>优惠</text>
						</label>
					</radio-group>
				</view>
				<view class="beizhu">
					<text>客户类型：</text>
					<radio-group name="">
						<label>
							<radio value="a" /><text>产品客户</text>
							<radio value="b" /><text>核心客户</text>
							<radio value="b" /><text>持续客户</text>
						</label>
					</radio-group>
				</view>
				<view class="beizhu">
					<text>治疗方案：</text>
					<radio-group name="">
						<label>
							<radio value="a" /><text>更换</text>
							<radio value="b" /><text>不换</text>
							<radio value="b" /><text>巩固</text>
						</label>
					</radio-group>
				</view>
				<view class="beizhu">
					<text>驼背产品问卷：</text>
					<radio-group name="">
						<label>
							<radio value="a" /><text>有意向</text>
							<radio value="b" /><text>无意向</text>
						</label>
					</radio-group>
				</view>
				<view style="width: 100%;" class="beizhu">
					<text style="width: 10%;">老带新活动：</text>
					<radio-group name="">
						<label>
							<radio value="a" /><text>分享</text>
							<radio value="b" /><text>询问优惠</text>
							<radio value="b" /><text>没反应</text>
							<radio value="b" /><text>拒绝</text>
						</label>
					</radio-group>
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
			finish(){
				uni.navigateTo({
					url:"../../testServed/Selectest/testfinish"
				})
			},
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
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-top: 10rpx;
		height: 100rpx;
		.beizhu{
			padding: 0 10rpx;
			width: calc(50% - 20rpx);
			font-size: 10rpx;
			height: 100rpx;
		}
		textarea{
			margin-top: 5rpx;
			width: calc(100% - 10rpx);
			height: 60rpx;
			padding: 5rpx;
			background-color: #ececec;
			font-size: 10rpx;
			border-radius: 10rpx;
		}
	}
	.finishcenter{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-top: 10rpx;
		height: 30rpx;
		.beizhu{
			display: flex;
			padding: 0 10rpx;
			width: calc(50% - 20rpx);
			font-size: 10rpx;
			height: 30rpx;
		}
		text{
			width: 20%;
			height: 30rpx;
			line-height: 30rpx;
			
		}
		input{
			
			width: 50%;
			height: 20rpx;
			padding: 5rpx;
			background-color: #ececec;
			font-size: 10rpx;
			border-radius: 15rpx;
		}
	}
	
	.foottest{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-top: 10rpx;
		.beizhu{
			width: 50%;
			display: flex;
			padding: 0 10rpx;
			width: calc(50% - 20rpx);
			font-size: 10rpx;
			height: 30rpx;
			radio{
				margin-left: 5rpx;
			}
		}
		text{
			width: 20%;
			height: 30rpx;
			line-height: 30rpx;
			
		}
	
	}
</style>
