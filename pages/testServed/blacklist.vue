<template>
	<view>
		<!-- 黑名单详细 -->
		<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- nav -->
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">黑名单详细</text>
			</view>
		
		</view>
		<!-- 用户基本信息 -->
		<view class="information">
			<view class="informationPic">
				<image src="../../static/userHead.png" mode="widthFix"></image>
			</view>
			<view class="informationText">
				<view class="userText">
					<view class="userTextLeft">
						<view>客户姓名 :</view>
						<view>性 别 :</view>
						<view>年 龄 :</view>
					</view>
					<view class="userTextRight">
						<view>小王</view>
						<view>男</view>
						<view>25</view>
					</view>
				</view>
				<view class="userText" style="width: 40%;">
					<view class="userTextLeft" style="width: 25%;">
						<view>联系电话 :</view>
						<view>黑名单 :</view>
						<view>地 址 :</view>
					</view>
					<view class="userTextRight">
						<view>18991807988</view>
						<view>男</view>
						<view>西安市新城区五路口万达广场</view>
					</view>
				</view>
				<view class="userText" style="width: 25%;">
					<view class="userTextLeft" style="width: 40%;">
						<view>客户来源 :</view>
						<view>客户初始认知 :</view>
						<view>就读学校 :</view>
					</view>
					<view class="userTextRight">
						<view>小王</view>
						<view>不知道</view>
						<view>铁一中</view>
					</view>
				</view>
				<view class="userText">
					<view class="userTextLeft">
						<view>就诊类型 :</view>
					</view>
					<view class="userTextRight">
						<view>矫形类</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 会员表格 -->
		<view class="vipInformation">
			<view class="tbTh">
				<view style="width: 20%;" class="tbThclass">操作类型</view>
				<view style="width: 20%;" class="tbThclass">操作时间</view>
				<view style="width: 20%;" class="tbThclass">操作人</view>
				<view style="width: 40%;" class="tbThclass">操作原因</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 20%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 20%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 20%;" name="性别" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 40%;" name="出生日期" class="tbTdclass">{{j.age}}</view>
			</view>
		</view>
		
	</view>
</template>
<script>
	export default {
		components: {
		},
		data() {
			return {
				ismail:false,
				patriarchindex: 0,
				patriarch: ["恐慌", "害怕"],
				istrdeSelsct:false,
				trdown:false,
				visable: false,
				bqvisable:false,
				title: "取型详情",
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
		methods: {
			evaluatClick(){
				uni.navigateTo({
					url:"../testServed/evaluatdetial"
				})
			},
			// 铆接人
			patriarChange(e) {
				console.log(e)
				this.patriarchindex = e.target.value
			},
			iconClick(){
				this.istrdeSelsct = !this.istrdeSelsct
			},
			
			openismail(){
				this.ismail = true
			},
			closedismail(){
				this.ismail = false
			},
			trdownClose(){
				this.trdown = false
			},
			// 合格
			qualified(){
				uni.showModal({
					title:"确认取型合格吗",
					content:"",
					success(res) {
						if(res.confirm){
							console.log("111")
						} else if (res.cancel){
						console.log("222")
						}
						}
					
				})
			},
			// 无法保修
			dontrepair(){
				uni.navigateTo({
					url:"../readyService/readySerain/dontrepair"
				})
			},
			// 返厂报修
			uploadClick(){
				uni.navigateTo({
					url:"../readyService/readySerain/gobackrepair"
				})
			}	,
			// 修改
			detailesxgClick(){
				uni.navigateTo({
					url: "../../receptionEnd/detailsAmend/detailsAmend"
				})
			},
			// 返回按钮
			iconBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			takeTypeClick() {
				uni.navigateTo({
					url: "../../typeQuery/typeMeasure/typeMeasure"
				})
			},
			visableClick() {
				this.visable = true
			},
			// 黑名单详情
			trdownOpen(){
				uni.navigateTo({
					url:"../testServed/blacklist"
				})
			},
			// 现场报修
			isvisable() {
				uni.navigateTo({
					url: "../testOrder/refund"
				})
				
			},
			closedlog() {
				this.visable = false
			},
			checklog() {
				console.log('2222')
			},
			cfDilog() {
				this.bqvisable = true
			},
			cfDilogClose(){
				this.bqvisable = false
			},
		}
	}
</script>
<style lang="scss" scoped>
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
</style>
