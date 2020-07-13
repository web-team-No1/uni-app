<template>
	<view>
		<!-- 主体 -->
		<view @click="tabtap" class="typeNav">
			<view class="typeNavPic" v-for="i in navPic">
				<uniTransition :mode-class="['fade']" :show="show" @change="change">
					<image :src="i.picUrl" @click="navClick(i)" mode="widthFix"></image>
				</uniTransition>
			</view>
		</view>
	</view>
</template>

<script>
	import uniTransition from "@/components/uni-transition/uni-transition.vue"
	export default {

		components: {
			uniTransition
		},
		data() {
			return {
				show: true,
				navPic: [{
						id: 1,
						title: "待接待",
						picUrl: "../../static/appraisalTab/img_daijiedai.png",
						urlSkip: "../testReception/testReception"
					},
					{
						id: 2,
						title: "已接待",
						picUrl: "../../static/appraisalTab/img_yijiedai.png",
						urlSkip: "../testServed/testServed"
					},
					{
						id: 3,
						title: "订单",
						picUrl: "../../static/appraisalTab/img_yibohui.png",
						urlSkip: "../testOrder/testOrder"
					},
					{
						id: 4,
						title: "统计",
						picUrl: "../../static/appraisalTab/img_tongji.png",
						urlSkip: "../testStatistics/testStatistics"
					}
				]
			};
		},
		methods: {
			open(mode) {
				this.show = !this.show
			},
			change() {
				console.log('触发动画')
			},
			navClick(i) {
				console.log(i)
				uni.navigateTo({
					url: i.urlSkip
				})
			},
			tabtap() {
				// this.isDlog = false
				this.$emit('tabtap', false)
			},
		}
	}
</script>

<style lang="scss">
	.typeNav {
		// padding-left: 30rpx;
		display: flex;
		flex-wrap: wrap;
		height: calc(100vh - 50rpx);
		align-items: center;
		width: 100%;

		.typeNavPic {
			width: 50%;
			text-align: center;

			image {
				width: 197rpx;
			}
		}

	}
</style>
