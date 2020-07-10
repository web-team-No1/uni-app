<template>
	<view>
		<!-- nav -->
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">{{title}}</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props:{
			title:String
		},
		data() {
			return {
			};
		},
		methods:{
			iconBack() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	}
</script>
<style lang="scss">
@import "../../common/typeNav.scss";

</style>
