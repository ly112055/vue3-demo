<template>
	<div>
		<el-button type="primary" @click="showHandler">显示弹窗</el-button>
		<!-- 弹窗 -->
		<div
			class="mask-wrap"
			:class="showDialog ? 'show' : ''"
			@click="showDialog = false"
		>
			<div class="content-box" @click.stop>
				<div class="head">这是头部区域</div>
				<div class="content">这是内容区域</div>
				<div class="footer">这是底部区域</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showDialog: false,
		};
	},
	methods: {
		showHandler() {
			this.showDialog = true;
		},
	},
};
</script>

<style scoped>
.mask-wrap {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	display: none;
	background: rgba(0, 0, 0, 0.7);
	z-index: 1000;
}

.show {
	display: block;
}

.content-box {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 20px;
	width: 500px;
	background: #ffffff;
	border-radius: 4px;
}
</style>
