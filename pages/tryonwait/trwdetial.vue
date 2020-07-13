<template>
	<view>
		<!-- 待试穿详情 -->
		<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- nav -->
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">待试穿详情</text>
			</view>
			<view class="filtration">
				<text @click="iconClick" class="iconfont iconcaidan"></text>
				<view :class="['trdeSelsct',istrdeSelsct?'openSelsct':'']">
					<view @click="isvisable" class="clickSelect">开始/完成铆接</view>
					<view @click="uploadClick" class="clickSelect">上传照片</view>
					<view style="color:red;" @click="trdownOpen" class="clickSelect">重做</view>
					<view style="color:#007AFF;" class="clickSelect">试穿完成</view>
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
		<!-- 病情表格 -->
		<view class="diseaseInformation">
			<view class="tbTh">
				<view style="width: 25%;" class="tbThclass">是否会员</view>
				<view style="width: 25%;" class="tbThclass">部位剩余次数</view>
				<view style="width: 25%;" class="tbThclass">全身剩余次数</view>
				<view style="width: 25%;" class="tbThclass">是否续费会员</view>
				<view style="width: 25%;" class="tbThclass">会员到期时间</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 25%;" name="序号"  class="tbTdclass">{{j.id}}</view>
				<view style="width: 25%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 25%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 25%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 25%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
			</view>
		</view>
		<!-- 会员信息表格 -->
		<view class="vipInformation">
			<view class="tbTh">
				<view style="width: 14%;" class="tbThclass">病单编号</view>
				<view style="width: 14%;" class="tbThclass">医院</view>
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
				<view style="width: 14%;color: #007AFF;" @click="cfDilog" name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
				<view style="width: 14%;" name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
			</view>
		</view>

		<!-- 产品名称表格 -->
		<view class="productInformation">
			<view class="tbTh">
				<view style="width: 14%;" class="tbThclass">产品昵称</view>
				<view style="width: 14%;" class="tbThclass">产品资质</view>
				<view style="width: 14%;" class="tbThclass">特殊要求</view>
				<view style="width: 14%;" class="tbThclass">产品规格</view>
				<view style="width: 14%;" class="tbThclass">交货日期</view>
				<view style="width: 14%;" class="tbThclass">订单编号X光片</view>
				<view style="width: 14%;" class="tbThclass">下欠金额</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 14%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 14%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 14%;" name="性别" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 14%;" name="出生日期" class="tbTdclass"></view>
				<view style="width: 14%;" name="分配时间" class="tbTdclass">{{j.waiter}}</view>
				<view style="width: 14%;" name="是否会员" class="tbTdclass">{{j.creattime}}</view>
				<view style="width: 14%;" @click="visableClick" name="是否会员" class="tbTdclass">查看详细</view>
			</view>
		</view>
		<!-- 自检 -->
		<view class="typeDetePer">
			<view class="tbTh">
				<view style="width: 25%;" class="tbThclass">预约试穿日期</view>
				<view style="width: 25%;" class="tbThclass">试穿人</view>
				<view style="width: 25%;" class="tbThclass"></view>
				<view style="width: 25%;" class="tbThclass"></view>
				<view style="width: 25%;" class="tbThclass"></view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 25%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 25%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 25%;" name="性别" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 25%;" name="性别" class="tbTdclass"></view>
				<view style="width: 25%;" name="性别" class="tbTdclass"></view>
			</view>
		</view>
		<!-- 验收 -->
		<view class="typeCheck">
			<view class="tbTh">
				<view style="width: 25%;" class="tbThclass">取型时间</view>
				<view style="width: 25%;" class="tbThclass">主取型人</view>
				<view style="width: 25%;" class="tbThclass">X光片</view>
				<view style="width: 25%;" class="tbThclass">家长反映</view>
				<view style="width: 25%;" class="tbThclass"></view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 25%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 25%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 25%;" name="性别" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 25%;" name="性别" class="tbTdclass"></view>
				<view style="width: 25%;" name="性别" class="tbTdclass"></view>
			</view>
		</view>
		<!-- 铆接弹出框 -->
		<view @touchmove.stop.prevent="" class="dilog" v-if="visable">
			<view class="infocheckbox">
				<view class="viewData">
					<view class="">取型数据查看</view>
					
					<button @click="closedlog" type="default">关闭</button>
					<button style="background-color: #007AFF;" @click="cfDilogClose" type="default">确定开始</button>
				</view>
				<view class="viewDataSize">
					<view class="measureSize">
						<view class="mSize">
							<text style="width: 30%;">铆接人</text>
							<picker mode="selector"  @change="patriarChange" :value="patriarchindex" :range="patriarch">
								<view>{{patriarch[patriarchindex]}}</view>
							</picker>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 弹出框病情 -->
		<view @touchmove.stop.prevent="" class="dilog" v-if="bqvisable">
			<view class="infocheckbox">
				<view class="viewData">
					<view class="">处方病情</view>
					
					<button @click="cfDilogClose" type="default">关闭</button>
					
				</view>
				<view class="viewDataSize">
					<textarea class="textareaStyle" @blur="bindTextAreaBlur" />
					</view>
			</view>
		</view>
		<!-- 驳回与反馈 -->
		<view @touchmove.stop.prevent="" class="dilog" v-if="trdown">
			<view class="infocheckbox">
				<view class="viewData">
					<view class="">重做原因</view>
					<button @click="trdownClose" type="default">关闭</button>
					<button style="background-color: #007AFF;" @click="trdownClose" type="default">确定重做</button>
				</view>
				<view class="viewDataSize">
					<textarea class="textareaStyle"/>
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
			// 铆接人
			patriarChange(e) {
				console.log(e)
				this.patriarchindex = e.target.value
			},
			iconClick(){
				this.istrdeSelsct = !this.istrdeSelsct
			},
			trdownOpen(){
				this.trdown = true
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
			// 上传照片
			uploadClick(){
				uni.navigateTo({
					url:"../tryonwait/uploadPic"
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
			isvisable() {
				this.istrdeSelsct = false
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
				height: 120rpx;
			}
		}
	}
</style>
