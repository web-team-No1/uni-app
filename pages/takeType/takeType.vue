<template>
	<!-- 首页 -->
	<view  class="content">
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="typeTop">
			<image class="leftPic" src="../../static/takeType/typelogin/title@2x.png" mode="widthFix"></image>
			<view class="rightSelect">
				<text class="iconfont icondingbudaohang-zhangh"></text>
				<text>admin</text>
				<text @click="DlogClick" class="iconfont iconxiangxia"></text>
				<text class="iconfont iconguanbi"></text>
			</view>
		</view>
		<!-- <home-tab @tabtap="tabtap"></home-tab> -->
		<component :is="tabSelect" @tabtap="tabtap"></component>
		
		
		<!-- 弹出 -->
		<view :class="['homeDilog',isDlog?'homeDilogac':'']">
			<view @click="dianClick(i)" v-for="i in items" class="ulSelect">
				<text>{{i.name}}</text>
				<text :class="['iconfont',isactive == i.name ? 'iconxianshi_xuanzetianchong activeGreen' : 'icondian']"></text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	import homeTab from "@/components/homTab/homTab.vue"
	import tryonTab from "@/components/tryonTab/tryonTab.vue"
	import appraisalTab from "@/components/appraisalTab/appraisalTab.vue"
	import uniTransition from "@/components/uni-transition/uni-transition.vue"
	export default {
		components: {
			uniIcons,
			homeTab,
			tryonTab,
			appraisalTab,
			uniTransition

		},
		data() {
			return {
				tabSelect:"homeTab",
				isactive:"取型",
				items:[
					{
						name:"取型",
						tab:"homeTab"
					},
					{
						name:"测评",
						tab:"appraisalTab"
					},
					{
						name:"试穿",
						tab:"tryonTab"
					},
				],
				isDlog: false
			
			};
		},
		methods: {
			
			dianClick(i){
				this.isactive = i.name
				this.isDlog = false
				this.tabSelect = i.tab
			},
			
			DlogClick() {
				this.isDlog = !this.isDlog
			},
			tabtap(index){
				this.isDlog = index
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		position: relative;

		.typeTop {
			display: flex;
			width: calc(100% - 20rpx);
			height: 30rpx;
			background-color: #fff;
			line-height: 30rpx;
			padding: 0 10rpx;
			align-items: center;
			
			justify-content: space-between;

			.leftPic {
				width: 120rpx;
			}

			.rightSelect {
				width: 150rpx;
				display: flex;
				justify-content: center;
				font-size: 10rpx;

				text {
					font-size: 12rpx;
					margin: 0 7rpx;
				}

				text:nth-child(1),
				text:nth-child(3) {
					font-size: 14rpx;
				}

				text:nth-child(4) {
					font-size: 14rpx;
					color: $uni-color-error;
				}
			}
		}

		.homeDilog {
			position: absolute;
			
			right: 25rpx;
			top: 50rpx;
			width: 90rpx;
			height: 0rpx;
			overflow: hidden;
			border-radius: 5rpx;
			background-color: #fff;
			transition: all .5s ease;
			.ulSelect{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 30rpx;
				line-height: 30rpx;
				text:nth-child(2){
					width: 50%;
					color:#ccc ;
					font-size: 10rpx;
					text-align: center;
				}
				text:nth-child(1){
					width: 50%;
					text-align: center;
				}
				.activeGreen{
					color: $uni-color-fygreen !important;
				}
			}
			
		}

		.homeDilogac {
			
			height: 90rpx;
			
		}

		
	}
</style>
