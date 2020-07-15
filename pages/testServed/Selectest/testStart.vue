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
				<!-- <uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons> -->
				<text class="typeQueryTitle">{{title}}</text>
			</view>
			<view class="filtration">
				<text style="color: #DD4A68;" class="typeQueryTitle" @click="trdownOpen">本次结束</text>
			</view>
		</view>
		<!-- 中间选择 -->
		<view class="Selectcenter">
			<scroll-view scroll-y="true">
				<component :is="iscomponent"></component>
			</scroll-view>
			<!-- 话术提示 -->
			<view class="speakmethod">
				<text>提示话术</text>
				<textarea disabled v-model="haushu" value="" placeholder="" />
			</view>
		</view>
		 
		<!-- 底部list -->
		<view class="Selectfoot">
			<view class="foottop">
				本次测评({{0}}/{{this.items.length}})
			</view>
			<scroll-view scroll-x="true">
				<view class="scrollSelect">
					<view @click="dianjiscroll(list)" class="xiang" v-for="list in items" :key="list.id">
						<text>{{list.name}}</text>
						</text>
					</view>

				</view>


			</scroll-view>
		</view>
	</view>
</template>
<script>
	import physique from "@/components/startTest/physique.vue";
	import footarch from "@/components/startTest/footarch.vue";
	import calcaneus from "@/components/startTest/calcaneus.vue";
	import footbottom from "@/components/startTest/footbottom.vue";
	import kneesagittal from "@/components/startTest/kneesagittal.vue";
	import lowerlimbs from "@/components/startTest/lowerlimbs.vue";
	import coronalknee from "@/components/startTest/coronalknee.vue";
	import threedsao from "@/components/startTest/threedsao.vue";
	import scapula from "@/components/startTest/scapula.vue";
	import necktest from "@/components/startTest/necktest.vue";
	import pelvis from "@/components/startTest/pelvis.vue";
	import spinetest from "@/components/startTest/spinetest.vue";
	import chesttest from "@/components/startTest/chesttest.vue";
	import threebody from "@/components/startTest/threebody.vue";
	import bonemd from "@/components/startTest/bonemd.vue";
	export default {
		
		components: {
			physique,
			footarch,
			calcaneus,
			footbottom,
			kneesagittal,
			coronalknee,
			lowerlimbs,
			threedsao,
			scapula,
			necktest,
			pelvis,
			spinetest,
			chesttest,
			threebody,
			bonemd
		},
		data() {
			return {
				iscomponent:"physique",
				haushu:"ssss",
				trdown: false,
				visable: false,
				bqvisable: false,
				title: "体格测量",
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
						isSelect: false,
						iscomponent:"physique"
					},
					{
						id: 2,
						name: "足弓发育测评",
						isSelect: false,
						iscomponent:"footarch"
					},
					{
						id: 3,
						name: "跟骨发育测评",
						isSelect: false,
						iscomponent:"calcaneus"
					},
					{
						id: 4,
						name: "足底压力分析",
						isSelect: false,
						iscomponent:"footbottom"
					},
					{
						id: 5,
						name: "膝关节矢状面测评",
						isSelect: false,
						iscomponent:"kneesagittal"
					},
					{
						id: 6,
						name: "膝关冠状面测评",
						isSelect: false,
						iscomponent:"coronalknee"
					},
					{
						id: 7,
						name: "下肢发育测评",
						isSelect: false,
						iscomponent:"lowerlimbs"
					},
					{
						id: 8,
						name: "3D足部扫描",
						isSelect: false,
						iscomponent:"threedsao"
					},
					{
						id: 9,
						name: "肩胛骨测评",
						isSelect: false,
						iscomponent:"scapula"
						
					},
					{
						id: 10,
						name: "颈部活动度测评",
						isSelect: false,
						iscomponent:"necktest"
					},
					{
						id: 11,
						name: "盆骨测评",
						isSelect: false,
						iscomponent:"pelvis"
					},
					{
						id: 12,
						name: "脊柱发育测评",
						isSelect: false,
						iscomponent:"spinetest"
					},
					{
						id: 13,
						name: "3D全身扫描",
						isSelect: false,
						iscomponent:"threebody"
					},
					{
						id: 14,
						name: "胸骨测评",
						isSelect: false,
						iscomponent:"chesttest"
					},
					
					{
						id: 15,
						name: "骨密度测评",
						isSelect: false,
						iscomponent:"bonemd"
					},



				]
			};
		},
		methods: {
			dianjiscroll(list){
				console.log(list)
				this.iscomponent = list.iscomponent
				this.title = list.name
			},
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
					url:"../../testServed/Selectest/finishtest"
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
				height: 80%;
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
			.speakmethod{
				width: 100%;
				height: 20%;
				border-top: 1rpx solid #ececec;
				
				textarea{
					width: calc(100% - 10rpx);
					height: 70%;
					margin: 5rpx;
					border-radius: 10rpx;
					font-size: 10rpx;
					background-color: #ececec;
					color: #333333;
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
