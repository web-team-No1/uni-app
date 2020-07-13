<template>
	<view>
		<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- nav -->
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">取型详情</text>
			</view>
			<view class="filtration">
				<text class="detailesxg" @click="detailesxgClick">修改</text>
				<text class="typeQueryTitle">模型自检</text>
			</view>
		</view>
		<!-- 用户基本信息 -->
		<view class="information">
			<view class="informationPic">
				<image src="../../../static/userHead.png" mode="widthFix"></image>
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
		<!-- 病情表格 -->
		<view class="diseaseInformation">
			<view class="tbTh">
				<view style="width: 50%;" class="tbThclass">处方病情</view>
				<view style="width: 50%;" class="tbThclass">新增病例</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 50%;color: #007AFF;" name="序号" @click="cfDilog" class="tbTdclass">{{j.id}}</view>
				<view style="width: 50%;color: #007AFF;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
			</view>
		</view>
		<!-- 会员信息表格 -->
		<view class="vipInformation">
			<view class="tbTh">
				<view style="width: 20%;" class="tbThclass">产品名称</view>
				<view style="width: 20%;" class="tbThclass">产品型号</view>
				<view style="width: 20%;" class="tbThclass">下单人员</view>
				<view style="width: 20%;" class="tbThclass">交货日期</view>
				<view style="width: 20%;" class="tbThclass">是否加急</view>
				<view style="width: 20%;" class="tbThclass">特殊要求</view>
				<view style="width: 20%;" class="tbThclass">订单号</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 20%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 20%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 20%;" name="性别" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 20%;" name="出生日期" class="tbTdclass">{{j.age}}</view>
				<view style="width: 20%;" name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
				<view style="width: 20%;" name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
				<view style="width: 20%;" name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
			</view>
		</view>

		<!-- 产品名称表格 -->
		<view class="productInformation">
			<view class="tbTh">
				<view style="width: 10%;" class="tbThclass">取型时间</view>
				<view style="width: 10%;" class="tbThclass">主取型人</view>
				<view style="width: 10%;" class="tbThclass">辅助取型人</view>
				<view style="width: 10%;" class="tbThclass"></view>
				<view style="width: 10%;" class="tbThclass">家长反映</view>
				<view style="width: 10%;" class="tbThclass">是否有X光片</view>
				<view style="width: 10%;" class="tbThclass">取型数据</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 10%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 10%;" name="性别" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 10%;" name="出生日期" class="tbTdclass"></view>
				<view style="width: 10%;" name="分配时间" class="tbTdclass">{{j.waiter}}</view>
				<view style="width: 10%;" name="是否会员" class="tbTdclass">{{j.creattime}}</view>
				<view style="width: 10%;color: #007AFF;" @click="visableClick" name="是否会员" class="tbTdclass">查看详细</view>
			</view>
		</view>
		<!-- 自检 -->
		<view class="typeDetePer">
			<view class="tbTh">
				<view style="width: 10%;" class="tbThclass">取型自检人</view>
				<view style="width: 10%;" class="tbThclass">取型自检时间</view>
				<view style="width: 10%;" class="tbThclass">自检结果</view>
				<view style="width: 10%;" class="tbThclass"></view>
				<view style="width: 10%;" class="tbThclass"></view>
				<view style="width: 10%;" class="tbThclass"></view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 10%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 10%;" name="性别" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 10%;" name="性别" class="tbTdclass"></view>
				<view style="width: 10%;" name="性别" class="tbTdclass"></view>
				<view style="width: 10%;" name="性别" class="tbTdclass"></view>
			</view>
		</view>
		<!-- 验收 -->
		<view class="typeCheck">
			<view class="tbTh">
				<view style="width: 10%;" class="tbThclass">取型验收人</view>
				<view style="width: 10%;" class="tbThclass">取型验收时间</view>
				<view style="width: 10%;" class="tbThclass">模型状态</view>
				<view style="width: 10%;" class="tbThclass">问题反馈</view>
				<view style="width: 10%;" class="tbThclass"></view>
				<view style="width: 10%;" class="tbThclass"></view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 10%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 10%;" name="性别" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 10%;" name="性别" class="tbTdclass"></view>
				<view style="width: 10%;" name="性别" class="tbTdclass"></view>
				<view style="width: 10%;" name="性别" class="tbTdclass"></view>
			</view>
		</view>

		<!-- 弹出框 -->
		<view class="dilog" v-if="visable">
			<view class="infocheckbox">
				<view class="viewData">
					<view class="">取型数据查看</view>
					<button @click="closedlog" type="default">关闭</button>
				</view>
				<view class="viewDataSize">
					<view class="measureSize">
						<view class="mSize">
							<text style="width: 30%;">足宽</text>
							<input style="width: 60%;" type="text" placeholder="请输入">
							<text style="width: 10%;">CM</text>
						</view>
						<view class="mSize">
							<text style="width: 30%;">足长</text>
							<input style="width: 50%;" type="text" placeholder="请输入">
							<text style="width: 20%;">CM</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		<!-- 弹出框病情 -->
		<view class="dilog" v-if="bqvisable">
			<view class="infocheckbox">
				<view class="viewData">
					<view class="">处方病情</view>
					<button @click="cfDilogClose" type="default">关闭</button>
				</view>
				<view class="viewDataSize">
					<textarea class="textareaStyle"  @blur="bindTextAreaBlur" />
				</view>
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
			}
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
		}
	}
</style>
