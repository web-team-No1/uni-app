<template>
	<!-- 添加产品 -->
	<view>
		<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- nav -->
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">添加产品</text>
			</view>
			<view class="typeQuerySearch">
				<input type="text" value="" placeholder="请输入客户姓名/联系电话" />
				<uni-icons @click="iconBack" class="backIcon" type="search" size="22"></uni-icons>
			</view>
			<view @click="queadd" class="addicon">
				<text class="iconfont iconwancheng"></text>确认添加
			</view>
		</view>
		<!-- 表格 -->
		<view class="tbTh">
			<view style="width: 10%;" class="tbThclass">序号</view>
			<view style="width: 10%;" class="tbThclass">产品名称</view>
			<view style="width: 10%;" class="tbThclass">产品昵称</view>
			<view style="width: 10%;" class="tbThclass">产品分类</view>
			<view style="width: 10%;" class="tbThclass">产品资质</view>
			<view style="width: 10%;" class="tbThclass">规格</view>
			<view style="width: 10%;" class="tbThclass">产地</view>
			<view style="width: 10%;" class="tbThclass">标准价格</view>
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
			<view style="width: 10%;" name="是否会员" class="tbTdclass">{{j.creattime}}</view>
			<view style="width: 10%;" name="操作" class="tbTdclass">
				<checkbox-group @change="checkclick(j)" name="add">
					<label>
						<checkbox color="#A3CB64" :value="JSON.stringify(j)" />
					</label>
				</checkbox-group>
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
				addlists: [],
				datas: [{
						id: 1,
						name: "小含",
						sex: "男",
						age: 20,
						birthtime: "2015-07-12",
						waiter: "小含",
						creattime: "2018-5-05"
					},
					{
						id: 2,
						name: "小王",
						sex: "男",
						age: 20,
						birthtime: "2015-07-12",
						waiter: "小王",
						creattime: "2018-5-05"
					},
				]
			};
		},
		onShow() {
			
			// console.log(prevPage)
		},
		methods: {
			checkclick(j) {
				if (this.addlists.length == 0) {
					this.addlists.push(j)
				} else {
					var q = ""
					for (var i = 0; i < this.addlists.length; i++) {

						if (this.addlists[i] === j) {
							q = "ss"
							this.addlists.splice(i, 1)
							i--
						
						}
					}
					if(q !=="ss"){
						this.addlists.push(j)
					}
					
				}
				console.log(this.addlists)
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
			},
			queadd() {
				let pages = getCurrentPages();
				let prevPage = pages[ pages.length - 2 ];
				prevPage.$vm.add = this.addlists;
				uni.navigateBack({
					delta: 1
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

		.addicon {
			position: absolute;
			right: 10rpx;
			top: 50%;
			transform: translateY(-50%);
		}
	}
</style>
