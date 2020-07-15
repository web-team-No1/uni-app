<template>
	<!-- 体格测量 -->
	<view>
		<view class="information">
			<view class="inforinput">
				<text>身高</text>
				<input type="number" value="" placeholder="请输入" />
				<text>CM</text>
			</view>
			<view class="inforinput">
				<text>体重</text>
				<input type="number" value="" placeholder="请输入" />
				<text>CM</text>
			</view>
			<view class="inforinput">
				<button type="default">保存</button>
			</view>
		</view>
		<view class="history">
			历史数据
		</view>
		<view class="vipInformation">

			<view class="tbTh">
				<view style="width: 10%;" class="tbThclass">测评日期</view>
				<view style="width: 10%;" class="tbThclass">客户姓名</view>
				<view style="width: 10%;" class="tbThclass">年龄</view>
				<view style="width: 10%;" class="tbThclass">测评人</view>
				<view style="width: 7%;" class="tbThclass">身高</view>
				<view style="width: 8%;" class="tbThclass">体重</view>
				<view style="width: 10%;" class="tbThclass">BMI</view>
				<view style="width: 10%;" class="tbThclass">身高正常范围</view>
				<view style="width: 10%;" class="tbThclass">BMI正常范围</view>
				<view style="width: 15%;" class="tbThclass">测评结果</view>
			</view>
			<view v-for="(j,index) in datas" :key="index" :class="['tbTd',index==datas.length - 1? 'notbTd':'']">
				<view style="width: 10%;" name="序号" class="tbTdclass">{{j.id}}</view>
				<view style="width:	10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width:	10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width:	10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width:	7%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width:	8%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width:	10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width:	10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width:	10%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
				<view style="width:	15%;" name="客户姓名" class="tbTdclass">{{j.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datas: []
			};
		}
	}
</script>

<style lang="scss">
	.information {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 50rpx;

		.inforinput {
			position: relative;
			width: 30%;
			height: 50rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			button:after{
				border: none;
			}
			button{
				position: absolute;
				right: 0;
				top:50%;
				transform: translateY(-50%);
				width: 60rpx;
				height: 30rpx;
				font-size: 10rpx;
				line-height: 30rpx;
				// text-align: center ;
				border-radius: 15rpx;
				background-color: #007AFF;
				color: #fff;
				box-shadow: 1px 1px 1px 0 #ccc;
			}
			input {
				width: 60%;
				height: 30rpx;
				font-size: 10rpx;
				line-height: 50rpx;
				border-radius: 15rpx;
				background-color: #ececec;
				padding: 0 10rpx;
			}

			text {
				width: 20%;
				height: 50rpx;
				line-height: 50rpx;
				text-align: center;
				font-size: 10rpx;
			}
		}
	}

	.history {
		width: 100%;
		height: 20rpx;
		border-top: 1rpx solid #ececec;
		line-height: 20rpx;
		text-align: center;
	}

	.vipInformation {
		width: 96%;
		margin: 0 2%;
		border-radius: 10rpx;
		height: 60rpx;

		background-color: $uni-color-fygray;
		margin-top: 10rpx;

		.tbTh {
			display: flex;
			justify-content: space-between;
			width: 100%;
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
			width: 100%;
			height: 30rpx;
			border-bottom: 1px solid #ccc;
			font-size: 10rpx;
			line-height: 30rpx;

			.tbTdclass {
				text-align: center;

				input {
					font-size: 10rpx;
					margin-top: 5rpx;
					height: 20rpx;
				}

				button {
					width: 90%;
					font-size: 10rpx;
					background-color: #A3CB64;
					margin-top: 5rpx;
					color: #fff;
					height: 20rpx;
					line-height: 20rpx;
					border-radius: 15rpx;
				}

				::after {
					border: none;
				}
			}

			.testclass {
				display: flex;
				justify-content: space-around;
			}
		}

		.notbTd {
			border: none;
		}
	}
</style>
