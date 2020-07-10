<template>
	<view>
		<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- nav -->
		<typeNavBar :title="title"></typeNavBar>
		<!-- 用户基本信息 -->
		<view class="information">
			<view class="informationPic">
				<image src="../../../static/userHead.png" mode="widthFix"></image>
			</view>
			<view class="informationText">
				<view class="userText">
					<view class="userTextLeft">
						<view>客户姓名	:</view>
						<view>性	别	:</view>
						<view>年	龄	:</view>
					</view>
					<view class="userTextRight">
						<view>小王</view>
						<view>男</view>
						<view>25</view>
					</view>
				</view>
				<view class="userText" style="width: 40%;">
					<view class="userTextLeft" style="width: 25%;">
						<view>联系电话	:</view>
						<view>黑名单	:</view>
						<view>地	址	:</view>
					</view>
					<view class="userTextRight">
						<view>18991807988</view>
						<view>男</view>
						<view>西安市新城区五路口万达广场</view>
					</view>
				</view>
				<view class="userText" style="width: 25%;">
					<view class="userTextLeft" style="width: 40%;">
						<view>客户来源	:</view>
						<view>客户初始认知	:</view>
						<view>就读学校	:</view>
					</view>
					<view class="userTextRight">
						<view>小王</view>
						<view>不知道</view>
						<view>铁一中</view>
					</view>
				</view>
				<view class="userText">
					<view class="userTextLeft">
						<view>就诊类型	:</view>
					</view>
					<view class="userTextRight">
						<view>矫形类</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 会员信息表格 -->
		<view class="vipInformation">
			<view class="tbTh">
				<view style="width: 20%;" class="tbThclass">序号</view>
				<view style="width: 20%;" class="tbThclass">客户姓名</view>
				<view style="width: 20%;" class="tbThclass">性别</view>
				<view style="width: 20%;" class="tbThclass">出生日期</view>
				<view style="width: 20%;" class="tbThclass">服务人员</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 20%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 20%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 20%;" name="性别" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 20%;" name="出生日期" class="tbTdclass">{{j.age}}</view>
				<view style="width: 20%;" name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
			</view>
		</view>
		<!-- 病情表格 -->
		<view class="diseaseInformation">
			<view class="tbTh">
				<view style="width: 50%;" class="tbThclass">序号</view>
				<view style="width: 50%;" class="tbThclass">客户姓名</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 50%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 50%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
			</view>
		</view>
		<!-- 产品名称表格 -->
		<view class="productInformation">
			<view class="tbTh">
				<view style="width: 10%;" class="tbThclass">序号</view>
				<view style="width: 10%;" class="tbThclass">客户姓名</view>
				<view style="width: 10%;" class="tbThclass">性别</view>
				<view style="width: 10%;" class="tbThclass">出生日期</view>
				<view style="width: 10%;" class="tbThclass">服务人员</view>
				<view style="width: 10%;" class="tbThclass">分配时间</view>
				<view style="width: 10%;" class="tbThclass">是否会员</view>
				<view style="width: 10%;" class="tbThclass">操作</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 10%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width: 10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width: 10%;" name="性别" class="tbTdclass">{{j.sex}}</view>
				<view style="width: 10%;" name="出生日期" class="tbTdclass">{{j.age}}</view>
				<view style="width: 10%;" name="服务人员" class="tbTdclass">{{j.birthtime}}</view>
				<view style="width: 10%;" name="分配时间" class="tbTdclass">{{j.waiter}}</view>
				<view style="width: 10%;" name="是否会员" class="tbTdclass">{{j.creattime}}</view>
				<view style="width: 10%;" name="操作" class="tbTdclass">
					<button type="default" @click="takeTypeClick" size="mini">取型</button>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import typeNavBar from "../../../components/typeNavBar/typeNavBar.vue"
	export default {
		components:{
			typeNavBar
		},
		data() {
			return {
				title:"取型接待",
				datas: [{
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
		methods:{
			takeTypeClick(){
				uni.navigateTo({
					url:"../../typeQuery/typeMeasure/typeMeasure"
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import "./typeQueryReception.scss";
</style>
