<template>
	<!-- 待试穿 -->
	<view>
		<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- nav -->
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">待试穿</text>
			</view>
			<view @click="filtrationClick" class="filtration">
				<text class="iconfont iconshaixuan"></text>
				<text class="typeQueryTitle">筛选</text>
			</view>
		</view>

		<!-- 表格 -->
		<view class="tbTh">
			<view style="width: 5%;" class="tbThclass">序号</view>
			<view style="width: 10%;" class="tbThclass">客户姓名</view>
			<view style="width: 10%;" class="tbThclass">性别</view>
			<view style="width: 8%;" class="tbThclass">联系电话</view>
			<view style="width: 15%;" class="tbThclass">产品昵称</view>
			<view style="width: 10%;" class="tbThclass">预约试穿日期</view>
			<view style="width: 10%;" class="tbThclass">试穿人员</view>
			<view style="width: 7%;" class="tbThclass">下欠金额</view>
			<view style="width: 15%;" class="tbThclass">下单时间</view>
			<view style="width: 10%;" class="tbThclass">操作</view>
		</view>
		<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
			<view style="width: 5%;" name="序号" class="tbTdclass">{{j.id}}</view>
			<view style="width: 10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
			<view style="width: 10%;" name="性别" class="tbTdclass">{{j.phone}}</view>
			<view style="width: 8%;" name="联系电话" class="tbTdclass">{{j.sex}}</view>
			<view style="width: 15%;" name="产品昵称" class="tbTdclass">{{j.productName}}</view>
			<view style="width: 10%;" name="交货日期" class="tbTdclass">{{j.typePerson}}</view>
			<view style="width: 10%;" name="是否加急" class="tbTdclass">{{j.typeTime}}</view>
			<view style="width: 7%;" name="X光片" class="tbTdclass">{{j.state}}</view>
			<view style="width: 15%;" name="下单时间" class="tbTdclass">{{j.patriarchRe}}</view>
			<view style="width: 10%;" name="操作" class="tbTdclass">
				<button style="width: 50%;" type="default" @click="typeQueryReception" size="mini">接待</button>
				<button style="width: 40%;background-color: #007AFF;margin-left: 2rpx;" type="default" @click="typeQueryReception" size="mini">详</button>
				
			</view>
		</view>
		<!-- 弹出框病情 -->
		<view class="dilog" v-if="bqvisable">
			<view class="infocheckbox">
				<view class="viewData">
					<view class="">验收详情(验收合格)</view>
					<button @click="cfDilogClose" type="default">关闭</button>
				</view>
				<view class="viewDataSize">
					其他验收情况
					<textarea class="textareaStyle" />
				</view>
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
				bqvisable:false,
				title: '',
				datas: [{
						id: 1,
						name: "小李",
						phone: 18991807988,
						sex: "女",
						productName: "包膝式踝足矫形器111111111(动踝)",
						typePerson: "2017-00-00",
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
			cfDilogClose(){
				this.bqvisable = false
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
					url: "../tryonwait/trwdetial"
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
		.filtration {
			position: absolute;
			right: 10rpx;
		}
	}
	// 弹出框
	.dilog{
		position: absolute;
		top:0;
		left: 0;
		z-index: 99;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.5);
		.infocheckbox{
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			background-color: #fff;
			width: 80%;
			border-radius: 10rpx;	
		.viewData{
			width: 100%;
			height: 40rpx;
			line-height: 40rpx;
			border-bottom: 1px solid #ccc;
			view{
				float: left;
				font-size: 10rpx;
				margin-left: 10rpx;
			}
			button{
				float: right;
				margin-right: 20rpx;
				margin-top: 5rpx;
				width: 60rpx;
				height: 30rpx;
				line-height: 30rpx;
				border: none;
				color: #fff;
				font-size: 10rpx;
				background-color: #FF707D;
				border-radius: 15rpx;
			}
			button::after{
				border: none;
			}
		}
		.viewDataSize{
			.measureSize{
				margin-top: 10rpx;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				width: 100%;
				padding-bottom: 10rpx;
				.mSize{
					display: flex;
					align-items: center;
					justify-content: center;
					flex-wrap: wrap;
					width: 50%;
					height: 80rpx;
					textarea{
						margin: 5rpx;
						padding: 5rpx;
						border-radius: 5rpx;
						width: 100%;
						height: 50rpx;
						background-color: #ccc;
					}
				}
			}
			.textareaStyle{
				margin: 5rpx;
				width: calc(100% - 20rpx);
				background-color: #ECECEC;
				height: 60rpx;
				border-radius: 10rpx;
				padding: 5rpx;
				}
		}
		}
	}
	
</style>
