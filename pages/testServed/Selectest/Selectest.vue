<template>
	<view class="content">
		<!-- 取型验收 -->
		<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- nav -->
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">选择测评项</text>
			</view>
			<view class="filtration">
				<text class="typeQueryTitle" @click="trdownOpen">下一步</text>
			</view>
		</view>
		<!-- 中间选择 -->
		<view class="Selectcenter">
			<scroll-view scroll-y="true">
				<view @click="isSelectcenter(item)" class="centerxiang" v-for="item in items" :key="item.id">
					<text>{{item.name}}</text>
					<text :class="['iconfont','cuowuicon',item.isSelect?'iconxianshi_xuanzetianchong activegouxuan':'iconyuancircle46']"></text>
				</view>
			</scroll-view>
		</view>
		<!-- 底部list -->
		<view class="Selectfoot">
			<view class="foottop">
				已选择测评({{this.lists.length}})
			</view>
			<scroll-view scroll-x="true">
				<view class="scrollSelect">
					<view class="xiang" v-for="list in lists" :key="list.id">
						<text>{{list.name}}</text>
						<text @click="delSelect(list)" class="iconfont iconcuowu cuowuicon">

						</text>
					</view>

				</view>


			</scroll-view>
		</view>
	</view>
</template>
<script>
	export default {
		components: {},
		data() {
			return {
				trdown: false,
				visable: false,
				bqvisable: false,
				title: "取型详情",
				datas: [{
					id: 1,
					name: "小李",
					sex: "男",
					age: 20,
					birthtime: "2015-07-12",
					waiter: "小王",
					creattime: "2018-5-05"
				}],
				lists: [],
				items: [{
						id: 1,
						name: "体格测量",
						isSelect: false
					},
					{
						id: 2,
						name: "足弓发育测评",
						isSelect: false
					},
					{
						id: 3,
						name: "根骨发育测评",
						isSelect: false
					},
					{
						id: 4,
						name: "足底压力分析",
						isSelect: false
					},
					{
						id: 5,
						name: "膝关节矢状面测评",
						isSelect: false
					},
					{
						id: 6,
						name: "膝关冠状面测评",
						isSelect: false
					},
					{
						id: 7,
						name: "下肢发育测评",
						isSelect: false
					},
					{
						id: 8,
						name: "3D足部扫描",
						isSelect: false
					},
					{
						id: 9,
						name: "肩胛骨测评",
						isSelect: false
					},
					{
						id: 10,
						name: "颈部活动度测评",
						isSelect: false
					},
					{
						id: 11,
						name: "盆骨测评",
						isSelect: false
					},
					{
						id: 12,
						name: "脊柱发育测评",
						isSelect: false
					},
					{
						id: 13,
						name: "3D全身扫描",
						isSelect: false
					},
					{
						id: 14,
						name: "胸骨测评",
						isSelect: false
					},
					{
						id: 15,
						name: "脊柱活动趋势测评",
						isSelect: false
					},
					{
						id: 16,
						name: "骨密度测评",
						isSelect: false
					},



				]
			};
		},
		methods: {
			// 点击删除
			delSelect(list) {
				for (var i = 0; i < this.items.length; i++) {
					if (this.items[i] === list) {
						this.items[i].isSelect=false
						
					}
				}
				for (var i = 0; i < this.lists.length; i++) {
					if (this.lists[i] === list) {
						this.lists.splice(i, 1)
						i--
					}
				}
			},
			// 点击选择
			isSelectcenter(item) {
				var ishave = false
				for (var i = 0; i < this.lists.length; i++) {
					if (this.lists[i] === item) {
						this.lists.splice(i, 1)
						item.isSelect = false
						ishave = true
						// console.log("重复点击")
					}
				}
					
				if(ishave){
					console.log("重复点击")
				} else {
					item.isSelect = true
					this.lists.push(item)
				}
				
			},
			trdownOpen() {
				uni.navigateTo({
					url:"../../testServed/Selectest/testStart"
				})
			},
			trdownClose() {
				this.trdown = false
			},
			// 合格
			qualified() {
				uni.showModal({
					title: "确认取型合格吗",
					content: "",
					success(res) {
						if (res.confirm) {
							console.log("111")
						} else if (res.cancel) {
							console.log("222")
						}
					}

				})
			},
			// 修改
			detailesxgClick() {
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
			cfDilogClose() {
				this.bqvisable = false
			},
		}
	}
</script>
<style lang="scss" scoped>
	.content {
		// position: relative;

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

				.detailesxg {
					border-right: 1rpx solid #ccc;
					padding-right: 10rpx;
					margin-right: 10rpx;
				}
			}
		}

		.Selectcenter {
			width: 100%;
			height: calc(100vh - 135rpx);
			overflow: hidden;

			scroll-view {
				display: flex;
				flex-wrap: wrap;
				height: 100%;
				width: 100%;
				justify-content: center;

				.centerxiang {
					display: inline-block;
					position: relative;
					width: 20%;
					margin: 2%;
					height: 70rpx;
					background-color: #ECECEC;
					line-height: 70rpx;
					border-radius: 10rpx;
					text-align: center;

					.cuowuicon {
						position: absolute;
						height: 10rpx;
						font-size: 16rpx;
						// color: #ECECEC;
						top: 26rpx;
						right: 2rpx;
					}

					.activegouxuan {
						color: #A3CB64;
					}
				}
			}

		}

		.Selectfoot {
			position: absolute;
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			height: 100rpx;
			// background-color: #ccc;
			border-top: 1rpx solid #ECECEC;
			bottom: 0;
			left: 0;

			.foottop {
				width: 100%;
				height: 20rpx;
				text-align: center;
				line-height: 20rpx;
			}

			scroll-view {
				width: 100%;
				height: 80rpx;

				.scrollSelect {
					width: 2000rpx;
					margin-top: 10rpx;
					height: 60rpx;

					.xiang {
						display: inline-block;
						position: relative;
						width: 100rpx;
						margin: 0 10rpx;
						height: 60rpx;
						background-color: #ECECEC;
						font-size: 10rpx;
						border-radius: 10rpx;
						line-height: 60rpx;
						text-align: center;

						.cuowuicon {
							position: absolute;
							height: 10rpx;
							font-size: 16rpx;
							color: #DD4A68;
							top: -22rpx;
							left: 2rpx;
						}
					}

					.activecolor {}
				}
			}

		}
	}
</style>
