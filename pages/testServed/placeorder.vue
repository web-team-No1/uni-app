<template>
	<view>
		<!-- 下单 -->
		<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- nav -->
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">下单</text>
			</view>
		</view>
		<!-- 用户基本信息 -->
		<view class="information">
			<view class="informationPic">
			</view>
			<view class="informationText">
				<view class="userText">
					<view class="userTextLeft">
						<view>客户姓名 :</view>
					</view>
					<view class="userTextRight">
						<view>小王</view>
					</view>
				</view>
				<view class="userText" style="width: 30%;">
					<view class="userTextLeft" style="width: 25%;">
						<view>出生日期 :</view>
					</view>
					<view class="userTextRight">
						<view>1998/12/11</view>
					</view>
				</view>
				<view class="userText" style="width: 30%;">
					<view class="userTextLeft" style="width: 25%;">
						<view>年龄 :</view>
					</view>
					<view class="userTextRight">
						<view>7</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 会员表格 -->
		<view class="vipInformation">
			<view class="tbTh">
				<view style="width: 20%;" class="tbThclass">病单编号</view>
				<view style="width: 10%;" class="tbThclass">医院名称</view>
				<view style="width: 10%;" class="tbThclass">科室</view>
				<view style="width: 30%;" class="tbThclass">医生</view>
				<view style="width: 10%;" class="tbThclass">病单类型</view>
				<view style="width: 20%;" class="tbThclass">病情</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 20%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 10%;" name="性别" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 30%;" name="出生日期" class="tbTdclass">{{j.age}}</view>
				<view style="width: 10%;" name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
				<view style="width: 20%;" name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
			</view>
		</view>
		<!-- 选择下单产品 -->

		<view class="product">
			<view class="productleft">
				<text>添加产品：</text>
				<button @click="addproduct" type="default">+</button>
			</view>
			<view class="productleft">
				<text>下单人员：</text>
				<input type="text" value="" placeholder="请输入" />
			</view>
			<view class="productleft">
				<button style="width: 80rpx; font-size: 10rpx;line-height: 20rpx;" type="default">订单加急</button>
			</view>

		</view>
		<!-- 治疗周期 -->
		<view class="vipInformation">
			<view class="tbTh">
				<view style="width: 10%;" class="tbThclass">产品昵称</view>
				<view style="width: 10%;" class="tbThclass">产品资质</view>
				<view style="width: 10%;" class="tbThclass">规格</view>
				<view style="width: 10%;" class="tbThclass">下单类型</view>
				<view style="width: 10%;" class="tbThclass">标准价格</view>
				<view style="width: 10%;" class="tbThclass">实际价格</view>
				<view style="width: 10%;" class="tbThclass">交货日期</view>
				<view style="width: 30%;" class="tbThclass">操作</view>
			</view>
			<view v-for="(j,index) in add" :key="index" :class="['tbTd',index==add.length - 1? 'notbTd':'']">
				<view style="width: 10%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width:	10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width:	10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width:	10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width:	10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width:	10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width:	10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width:	30%;" name="客户姓名" class="tbTdclass testclass">
					<button style="width: 29%;background-color: #EE9900;" type="default">尺寸录入</button>
					<button style="width: 29%;background-color: #007AFF;" type="default">特殊要求</button>
					<button style="width: 19%;" type="default">折扣</button>
					<button style="width: 19%;background-color: #DD4A68;" type="default">删除</button>
				</view>
			</view>
		</view>
		<view class="allmoney">
			<view>
				<text>拉卡拉金额：</text>
				<input type="text" placeholder="请输入金额">
			</view>
			<view>
				<text>现金付款：</text>
				<input type="text" placeholder="请输入金额">
			</view>
			<view>
				<text>转账金额：</text>
				<input type="text" placeholder="请输入金额">
			</view>
			<view class="money">
				<text>应收金额合计：</text>
				<text>当前下欠金额：</text>
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
				add:[],
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
		onShow() {
			console.log(this.add)
		},
		methods: {
			// add
			addproduct(){
				uni.navigateTo({
					url:"../testServed/addproduct"
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
			// 重做
			trdownOpen(){
				uni.navigateTo({
					url:"../readyService/readySerain/reform"
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
	@import "./placeorder.scss";
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
	.testproject{
		display: flex;
		width:	calc(100% - 30rpx);
		// height: 100rpx;
		margin: 0 15rpx;
		border-radius: 10rpx;
		margin-top: 10rpx;
		background-color: #ECECEC;
		.projectLeft{
			display: flex;
			flex-wrap: wrap;
			width: 50%;
			.projecteach{
				display: flex;
				
				justify-content: center;
				align-items: center;
				width: 100%;
				view:nth-child(1){
					width: 30%;
					text-align: center;
				}
				view:nth-child(2){
					display: flex;
					flex-wrap: wrap;
					width: 70%;
					text{
						width: 100%;
						height: 20rpx;
						line-height: 20rpx;
					}
				}
			}
			
		}
		.projectRight{
			width: 50%;
			image{
				width: 100rpx;
			}
		}
	}
	.product{
		display: flex;
		width: calc(100% - 30rpx);
		align-items: center;
		height: 30rpx;
		margin: 15rpx;
		.productleft{
			display: flex;
			width: 150rpx;
			height: 20rpx;
			text{
				width: 50rpx;
				height: 20rpx;
				line-height: 20rpx;
				font-size: 10rpx;
			}
			input{
				width: 100rpx;
				height: 20rpx;
				font-size: 10rpx;
				border-radius: 10rpx;
				background-color: #ECECEC;
			}
			button::after{
				border: none;
			}
			button{
				width: 50rpx;
				height: 20rpx;
				line-height: 18rpx;
				text-align: center;
				font-size: 20rpx;
				color: #fff;
				background-color: #A3CB64;
				border-radius: 15rpx;
				
			}
		}
	}
	.allmoney{
		display: flex;
		width: calc(100% - 15rpx);
		height: 30rpx;
		margin-top: 10rpx;
		padding-left: 15rpx;
		view{
			display: flex;
			align-items: center;
			width: 25%;
			input{
				width: 60%;
				padding-left: 10rpx;
				height: 20rpx;
				font-size: 10rpx;
				background-color: #ECECEC;
				border-radius: 10rpx;
			}
			
		}
		.money{
				display: flex;
				height: 30rpx;
				flex-wrap: wrap;
				text{
					width: 100%;
					height: 15rpx;
				}
			}
	}
</style>
