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
				show:true,
				navPic: [{
						id: 1,
						title: "待接待",
						picUrl: "../../static/takeType/typelogin/img_daijiedai@2x.png",
						urlSkip: "../typeQuery/typeQuery"
					},
					{
						id: 2,
						title: "取型已接待",
						picUrl: "../../static/takeType/typelogin/img_yaijiedai@2x.png",
						urlSkip: "../receptionEnd/receptionEnd"
					},
					{
						id: 3,
						title: "取型待验收",
						picUrl: "../../static/takeType/typelogin/img_daiyanshou@2x.png",
						urlSkip: "../acceptance/acceptance"
					},
					{
						id: 4,
						title: "取型已验收",
						picUrl: "../../static/takeType/typelogin/img_yiyanshou@2x.png",
						urlSkip: "../approved/approved"
					},
					{
						id: 5,
						title: "取型统计报表统计",
						picUrl: "../../static/takeType/typelogin/img_tongji@2x.png",
						urlSkip: "../statistics/statistics"
					},

				]
			};
		},
		onReady() {
			// this.show = true
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
			width: 33.333333%;
			text-align: center;

			image {
				width: 197rpx;
			}
		}

	}
</style>
