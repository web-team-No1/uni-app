<template>
	<view>
		<!-- 主体 -->
		<view @click="tabtap"  class="typeNav">
			<view class="typeNavPic" v-for="i in navPic">
				<uniTransition :mode-class="['zoom-in','slide-bottom','fade']" :show="show" @change="change">
				<image :src="i.picUrl" @click="navClick(i)" mode="widthFix"></image>
				</uniTransition>
			</view>
		</view>
	</view>
</template>

<script>
	import uniTransition from "@/components/uni-transition/uni-transition.vue"
	export default {
		components:{
			uniTransition
		},
		data() {
			return {
				show:true,
				navPic: [{
						id: 1,
						title: "待验收",
						picUrl: "../../static/tryon/img_daiyanshou_shichuan.png",
						urlSkip: "../trywaitcheck/trywaitcheck"
					},
					{
						id: 2,
						title: "已验收",
						picUrl: "../../static/tryon/img_yiyanshou_shichuan.png",
						urlSkip: "../trywaited/trywaited"
					},
					{
						id: 3,
						title: "待通知",
						picUrl: "../../static/tryon/img_daitongzhi_shichuan.png",
						urlSkip: "../tryinform/tryinform"
					},
					{
						id: 4,
						title: "待试穿",
						picUrl: "../../static/tryon/img_daishichuan_shichuan.png",
						urlSkip: "../tryonwait/tryonwait"
					},
					{
						id: 5,
						title: "已试穿",
						picUrl: "../../static/tryon/img_yishichuan.png",
						urlSkip: "../tryoned/tryoned"
					},
					{
						id: 6,
						title: "待报修",
						picUrl: "../../static/tryon/img_daibaoxiu_weixiu.png",
						urlSkip: "../readyService/readyService"
					},
					{
						id: 7,
						title: "待维修",
						picUrl: "../../static/tryon/img_daiweixiu_weixiu.png",
						urlSkip: "../tryrepairwait/tryrepairwait"
					},
					{
						id: 8,
						title: "已维修",
						picUrl: "../../static/tryon/img_yiweixiu_weixiu.png",
						urlSkip: "../serviced/serviced"
					},

				]
			};
		},
		methods:{
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
			tabtap(){
				// this.isDlog = false
				this.$emit('tabtap',false)
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
				width: 177rpx;
			}
		}

	}
</style>
