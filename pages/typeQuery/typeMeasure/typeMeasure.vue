<template>
	<view>
		<!-- 头部隐藏默认nav -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- nav -->
		<view class="typeQueryNav">
			<view class="typeQueryBack">
				<uni-icons @click="iconBack" class="backIcon" type="back" size="22"></uni-icons>
				<text class="typeQueryTitle">{{title}}</text>
			</view>
			<view @click="saveClick" class="saveIcon">
				<uni-icons class="backIcon" type="cloud-download" size="22"></uni-icons>
				<text class="">保存</text>
			</view>
		</view>

		<!-- 各种围长 -->
		<view class="measureSize">
			<view class="mSize">
				<text style="width: 30%;">小腿最粗围长</text>
				<input style="width: 60%;" type="text" placeholder="请输入">
				<text style="width: 10%;">CM</text>
			</view>
			<view class="mSize">
				<text style="width: 30%;">小腿最粗围长</text>
				<input style="width: 50%;" type="text" placeholder="请输入">
				<text style="width: 20%;">CM</text>
			</view>
		</view>
		<!-- 交货日期栏 -->
		<view class="deliveryTime">
			<view class="dtinformation">
				<text>交货日期</text>
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{date}}</view>
				</picker>
			</view>
			<view class="dtinformation">
				<text>主取型人</text>
				<picker @change="bindPickerChange" :value="index" :range="typePerson">
					<view class="uni-input">{{typePerson[index]}}</view>
				</picker>
			</view>
			<view class="dtinformation">
				<text>辅助型人</text>
				<input @click="visableClick" disabled="ipDisb" v-model="dfvalue" type="text" placeholder="请输入">
			</view>
		</view>
		<!-- X光片 -->
		<view class="xplant">
			<text>是否有X光片</text>
			<radio-group @change="radioChange">
				<label class="" v-for="(item, index) in itemrio" :key="item.value">
					<view>
						<radio :value="item.value" style="transform:scale(0.7)" color="#A3CB64" :checked="index === current" />{{item.name}}
					</view>
				</label>
			</radio-group>
		</view>
		<!-- 家长反映 -->
		<view class="coupleback">
			<text>家长反映</text>
			<checkbox-group @change="checkboxChange">
				<label class="" v-for="item in items" :key="item.value">
					<view>
						<checkbox color="#A3CB64" style="transform:scale(0.7)" :value="item.value" :checked="item.checked" />{{item.name}}
					</view>
				</label>
			</checkbox-group>
		</view>
		<!-- 新增病情 -->
		<view class="addDisease">
			<text>新增病情</text>

			<textarea class="textareaStyle"  @blur="bindTextAreaBlur" />
		</view>
		<!-- 弹出框 -->
		<view class="dilog" v-if="visable">
			<view class="infocheckbox">
				<checkbox-group @change="checkboxChange">
					<label class="" v-for="item in items" :key="item.value">
						<view>
							<checkbox color="#A3CB64" :value="item.value" :checked="item.checked" />{{item.name}}
						</view>
					</label>
				</checkbox-group>
				<view class="ifcfoot">
					<text @click="closedlog">取消</text>
					<text @click="checklog">确认</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {

		},
		data() {
			return {
				current:0,
				title: "取型测量内容",
				date: "2010-01-01",
				typePerson: ['井晓梅'],
				assistPerson: ['井晓梅'],
				index: 0,
				visable: false,
				ipDisb: false,
				dfvalue: "111",
				itemrio: [
					{
					value: 'USA',
					name: '否'
					},
					{
						value: 'CHN',
						name: '是',
						checked: 'true'
					}
					
				 ],
				items: [{
						value: 'USA',
						name: '验收账户'
					},
					{
						value: 'CHN',
						name: '张二龙',
						checked: 'true'
					},
					{
						value: 'BRA',
						name: '李泽龙'
					},
					{
						value: 'JPN',
						name: '杨腾飞'
					},
					{
						value: 'ENG',
						name: '刘田'
					},
					{
						value: 'FRA',
						name: '郑婷'
					}
				]
			}
		},
		methods: {
			bindTextAreaBlur: function (e) {
			            console.log(e.detail.value)
			        },
			// 多选
			checkboxChange(e) {
				var items = this.items,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if (values.includes(item.value)) {
						this.$set(item, 'checked', true)
					} else {
						this.$set(item, 'checked', false)
					}
				}
			},
			closedlog() {
				this.ipDisb = false
				this.visable = false
			},
			checklog() {
				console.log('2222')
			},
			visableClick() {
				this.ipDisb = true
				this.visable = true
			},
			iconBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			open() {
				this.$refs.popup.open()
			},
			saveClick() {},
			bindDateChange(e) {
				this.date = e.target.value
			},
			bindPickerChange(e) {
				this.index = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "./typeMeasure.scss";
</style>
