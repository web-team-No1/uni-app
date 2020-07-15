<template>
	<view>
		<!-- 客户详情 -->
		<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- nav -->
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">客户详情</text>
			</view>
			<view class="filtration">
				<text @click="iconClick" class="iconfont iconcaidan"></text>
				<view :class="['trdeSelsct',istrdeSelsct?'openSelsct':'']">
					<view  @click="trdownOpen" class="clickSelect">黑名单详情</view>
					<view @click="isvisable" class="clickSelect">修改客户信息</view>
					<view @click="uploadClick" class="clickSelect">开始新测评</view>
				</view>
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
				<view style="width: 20%;" class="tbThclass">当前是否会员</view>
				<view style="width: 20%;" class="tbThclass">部位剩余次数</view>
				<view style="width: 20%;" class="tbThclass">全身剩余次数</view>
				<view style="width: 20%;" class="tbThclass">是否续费会员</view>
				<view style="width: 20%;" class="tbThclass">会员到期时间</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 20%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 20%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 20%;" name="性别" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 20%;" name="出生日期" class="tbTdclass">{{j.age}}</view>
				<view style="width: 20%;" name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
			</view>
		</view>
		<!-- 初诊 -->
		<view class="firstvisit">
			<text>初诊评价</text>
			<text>无评价</text>
		</view>
		<!-- 治疗周期 -->
		<view class="vipInformation">
			<view class="tbTh">
				<view style="width: 50%;" class="tbThclass">治疗周期</view>
				<view style="width: 50%;" class="tbThclass">创建时间</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 50%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width:	50%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
			</view>
		</view>
		<!-- 病情表格 -->
		<view class="vipInformation">
			<view class="tbTh">
				<view style="width: 15%;" class="tbThclass">病单编号</view>
				<view style="width: 15%;" class="tbThclass">医院名称</view>
				<view style="width: 15%;" class="tbThclass">科室</view>
				<view style="width: 10%;" class="tbThclass">医生</view>
				<view style="width: 10%;" class="tbThclass">病单类型</view>
				<view style="width: 10%;" class="tbThclass">病情</view>
				<view style="width: 20%;" class="tbThclass">创建时间</view>
				<view style="width: 10%;" class="tbThclass">操作</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 15%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 15%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 15%;" name="性别" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 10%;" name="出生日期" class="tbTdclass">{{j.age}}</view>
				<view style="width: 10%;" name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
				<view style="width: 10%;color: #007AFF;" @click="visableClick" name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
				<view style="width: 20%;" name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
				<view style="width: 10%;" name="服务人员" class="tbTdclass">
					<button @click="placeoeder" type="default">下单</button>
				</view>
			</view>
		</view>
		<!-- 验收 -->
		<view class="typeCheck">
			<view class="tbTh">
				<view style="width: 10%;" class="tbThclass">测评人员</view>
				<view style="width: 15%;" class="tbThclass">测评时间</view>
				<view style="width: 10%;" class="tbThclass">治疗周期</view>
				<view style="width: 10%;" class="tbThclass">测评项数</view>
				<view style="width: 10%;" class="tbThclass">身高</view>
				<view style="width: 10%;" class="tbThclass">体重</view>
				<view style="width: 35%;" class="tbThclass">操作</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 10%;" name="铆接开始时间" class="tbTdclass">{{j.id}}</view>
				<view style="width: 15%;" name="铆接结束时间" class="tbTdclass">{{j.name}}</view>
				<view style="width: 10%;" name="铆接人员" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 10%;" name="铆接时长" class="tbTdclass"></view>
				<view style="width: 10%;" name="铆接时长" class="tbTdclass"></view>
				<view style="width: 10%;" name="铆接时长" class="tbTdclass"></view>
				<view style="width: 35%; display: flex;" name="铆接时长" class="tbTdclass testclass">
					<button @click="evaluatClick" style="width: 35%;" type="default">测评详情</button>
					<button style="width: 18%;background-color: #F0AD4E;" type="default">续</button>
					<button style="width: 18%;background-color: #007AFF;" type="default">补</button>
					<button style="width: 18%;" type="default">转</button>
				</view>
			</view>
		</view>
		<!-- 报修时间 -->
		<view class="typeCheck">
			<view class="tbTh">
				<view style="width: 10%;" class="tbThclass">产品昵称</view>
				<view style="width: 10%;" class="tbThclass">产品类型</view>
				<view style="width: 10%;" class="tbThclass">下单人员</view>
				<view style="width: 15%;" class="tbThclass">下单日期</view>
				<view style="width: 10%;" class="tbThclass">订单状态</view>
				<view style="width: 10%;" class="tbThclass">下欠金额</view>
				<view style="width: 15%;" class="tbThclass">交货日期</view>
				<view style="width: 10%;" class="tbThclass">订单编号</view>
				<view style="width: 10%;" class="tbThclass">操作</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 10%;" name="报修时间" class="tbTdclass">{{j.id}}</view>
				<view style="width: 10%;" name="维修完成时间" class="tbTdclass">{{j.name}}</view>
				<view style="width: 10%;" name="报修人员" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 15%;" name="维修人员" class="tbTdclass"></view>
				<view style="width: 10%;" name="维修方式" class="tbTdclass"></view>
				<view style="width: 10%;" @click="cfDilog" name="原因" class="tbTdclass">查看详情</view>
				<view style="width: 15%;" name="维修时长" class="tbTdclass"></view>
				<view style="width: 10%;" name="维修时长" class="tbTdclass"></view>
				<view style="width: 10%;" name="维修时长" class="tbTdclass"></view>
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
			// 下单
			placeoeder(){
				uni.navigateTo({
					url:"../testServed/placeorder"
				})
			},
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
			// 开启新测评
			uploadClick(){
				uni.navigateTo({
					url:"../testServed/Selectest/Selectest"
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
