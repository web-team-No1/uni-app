<template>
	<view>
		<!-- 已试穿详情 -->
		<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- nav -->
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">已试穿详情</text>
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
		<!-- 病情表格 -->
		<view class="diseaseInformation">
			<view class="tbTh">
				<view style="width: 20%;" class="tbThclass">当前是否会员</view>
				<view style="width: 20%;" class="tbThclass">部位剩余次数</view>
				<view style="width: 20%;" class="tbThclass">全身剩余次数</view>
				<view style="width: 20%;" class="tbThclass">是否续会员</view>
				<view style="width: 20%;" class="tbThclass">会员剩余时间</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 20%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 20%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 20%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 20%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 20%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
			</view>
		</view>
		<!-- 会员信息表格 -->
		<view class="vipInformation">
			<view class="tbTh">
				<view style="width: 14%;" class="tbThclass">病单编号</view>
				<view style="width: 14%;" class="tbThclass">医院名称</view>
				<view style="width: 14%;" class="tbThclass">科室</view>
				<view style="width: 14%;" class="tbThclass">医生</view>
				<view style="width: 14%;" class="tbThclass">病单类型</view>
				<view style="width: 14%;" class="tbThclass">病情</view>
				<view style="width: 14%;" class="tbThclass">创建时间</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 14%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 14%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 14%;" name="性别" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 14%;" name="出生日期" class="tbTdclass">{{j.age}}</view>
				<view style="width: 14%;" name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
				<view style="width: 14%;color: #007AFF;" @click="visableClick" name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
				<view style="width: 14%;" name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
			</view>
		</view>

		<!-- 产品名称表格 -->
		<view class="productInformation">
			<view class="tbTh">
				<view style="width: 20%;" class="tbThclass">产品昵称</view>
				<view style="width: 20%;" class="tbThclass">特殊要求</view>
				<view style="width: 20%;" class="tbThclass">产品资质</view>
				<view style="width: 20%;" class="tbThclass">订单编号</view>
				<view style="width: 20%;" class="tbThclass">下欠金额</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 20%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 20%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 20%;" name="性别" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 20%;" name="分配时间" class="tbTdclass">{{j.waiter}}</view>
				<view style="width: 20%;" name="是否会员" class="tbTdclass">{{j.creattime}}</view>
			</view>
		</view>
		<!-- 自检 -->
		<view class="typeDetePer">
			<view class="tbTh">
				<view style="width: 10%;" class="tbThclass">试穿时间</view>
				<view style="width: 10%;" class="tbThclass">试穿时长</view>
				<view style="width: 10%;" class="tbThclass">试穿评价</view>
				<view style="width: 10%;" class="tbThclass">试穿人员</view>
				<view style="width: 20%;" class="tbThclass">操作</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 10%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 10%;color: #007AFF;" @click="cfDilog" name="试穿评价" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 10%;" name="性别" class="tbTdclass"></view>
				<view style="width: 20%;" name="性别" class="tbTdclass">
					<button type="default" @click="openServicepic">查看照片</button>
				</view>
			</view>
		</view>
		<!-- 验收 -->
		<view class="typeCheck">
			<view class="tbTh">
				<view style="width: 25%;" class="tbThclass">铆接开始时间</view>
				<view style="width: 25%;" class="tbThclass">铆接结束时间</view>
				<view style="width: 25%;" class="tbThclass">铆接人员</view>
				<view style="width: 25%;" class="tbThclass">铆接时长</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 25%;" name="铆接开始时间" class="tbTdclass">{{j.id}}</view>
				<view style="width: 25%;" name="铆接结束时间" class="tbTdclass">{{j.name}}</view>
				<view style="width: 25%;" name="铆接人员" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 25%;" name="铆接时长" class="tbTdclass"></view>
			</view>
		</view>
		<!-- 报修时间 -->
		<view class="typeCheck">
			<view class="tbTh">
				<view style="width: 20%;" class="tbThclass">报修时间</view>
				<view style="width: 20%;" class="tbThclass">维修完成时间</view>
				<view style="width: 10%;" class="tbThclass">报修人员</view>
				<view style="width: 10%;" class="tbThclass">维修人员</view>
				<view style="width: 10%;" class="tbThclass">维修方式</view>
				<view style="width: 10%;" class="tbThclass">原因</view>
				<view style="width: 10%;" class="tbThclass">维修时长</view>
				<view style="width: 10%;" class="tbThclass">邮寄信息</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 20%;" name="报修时间" class="tbTdclass">{{j.id}}</view>
				<view style="width: 20%;" name="维修完成时间" class="tbTdclass">{{j.name}}</view>
				<view style="width: 10%;" name="报修人员" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 10%;" name="维修人员" class="tbTdclass"></view>
				<view style="width: 10%;" name="维修方式" class="tbTdclass"></view>
				<view style="width: 10%;color: #007AFF;" @click="cfDilog" name="原因" class="tbTdclass">查看详情</view>
				<view style="width: 10%;" name="维修时长" class="tbTdclass"></view>
				<view style="width: 10%;color: #007AFF;" @click="openismail" name="邮寄信息" class="tbTdclass">查看详情</view>
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
							处方病情
							<textarea value="" disabled placeholder="" />
							</view>
						<view class="mSize">
							新增病情
							<textarea value="" disabled placeholder="" />
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 弹出框病情 -->
		<view class="dilog" v-if="bqvisable">
			<view class="infocheckbox">
				<view class="viewData">
					<button @click="cfDilogClose" type="default">关闭</button>
				</view>
				<view class="viewDataSize">
					评价信息
					<textarea class="textareaStyle" />
					</view>
			</view>
		</view>
		
		
		<!-- 弹出框 -->
		<view class="dilog" v-if="ismail">
			<view class="infocheckbox">
				<view class="viewData">
					<view class="">邮寄信息</view>
					<button @click="closedismail" type="default">关闭</button>
				</view>
				<view class="viewDataSize">
					<view class="measureSize">
						<view class="mSize">
							收货人
							<textarea value="" disabled placeholder="" />
						</view>
						<view class="mSize">
							收货电话
							<textarea value="" disabled placeholder="" />
						</view>
					</view>
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
				ismail:false,
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
			// 邮寄关闭
			openismail(){
				this.ismail = true
			},
			closedismail(){
				this.ismail = false
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
			},
			openServicepic(){
				uni.navigateTo({
					url:"../tryoned/tryonPic"
				})
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
			.detailesxg{
				border-right: 1rpx solid #ccc;
				padding-right: 10rpx;
				margin-right: 10rpx;
				}
		}
	}
</style>
