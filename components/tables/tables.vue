<template>
	<view>
		<!-- 头部 -->
		<view class="tbTh">
			<view :style="{'width':widthtr+'%'}" class="tbThclass" v-for="i in items">{{i.key}}</view>
		</view>

		<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
			<view :style="{'width':widthtr+'%'}" class="tbTdclass">{{j.id}}</view>
			<view :style="{'width':widthtr+'%'}" class="tbTdclass">{{j.name}}</view>
			<view :style="{'width':widthtr+'%'}" class="tbTdclass">{{j.sex}}</view>
			<view :style="{'width':widthtr+'%'}" class="tbTdclass">{{j.age}}</view>
			<view :style="{'width':widthtr+'%'}" class="tbTdclass">{{j.birthtime}}</view>
			<view :style="{'width':widthtr+'%'}" class="tbTdclass">{{j.waiter}}</view>
			<view :style="{'width':widthtr+'%'}" class="tbTdclass">{{j.creattime}}</view>
			<view :style="{'width':widthtr+'%'}" class="tbTdclass">
				<button type="default" size="mini">接待</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			items:Array,
			datas:Array,
			widthtr:Number
		},
		data() {
			return {
			};
		},
		onLoad() {
		}
	}
</script>
<style lang="scss" scoped>
	.tbTh {
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx;
		width: calc(100% - 40rpx);
		height: 30rpx;
		border-bottom: 1px solid #ccc;
		font-size: 10rpx;
		line-height: 30rpx;
		.tbThclass {
			text-align: center;
		}
	}
	.tbTd {
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx;
		width: calc(100% - 40rpx);
		height: 30rpx;
		border-bottom: 1px solid #ccc;
		font-size: 10rpx;
		line-height: 30rpx;
		.tbTdclass {
			text-align: center;
			button {
				background-color: #A3CB64;
				margin-top: 5rpx;
				color: #fff;
				border-radius: 15rpx;
			}
			::after {
				border: none;
			}
		}
	}
	.notbTd {
		border: none;
	}
</style>
