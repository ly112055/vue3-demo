<template>
	<div class="mask-wrap" :class="showDialog ? 'show' : ''">
		<div class="content-box">123456</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showDialog: false,
		};
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
	background: rgba(255, 255, 255, 0.7);
}

.show {
	display: block;
}

.content-box {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, 50%);
	padding: 20px;
	width: 500px;
	background: #ffffff;
	border-radius: 4px;
}
</style>
