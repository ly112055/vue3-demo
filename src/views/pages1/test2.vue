<script setup>
import { test2Store } from "@pinia/test2";
import { getCurrentInstance, ref, onMounted } from "vue";

const num = ref(0);
const obj = ref(null);
const store = test2Store();
// 自定义指令
const vFocus = {
	mounted: (el) => el.focus(),
};
const vOnec = {
	mounted: (el, binding) => {
		el.addEventListener("click", () => {
			if (!el.disabled) {
				el.disabled = true;
				setTimeout(() => {
					el.disabled = false;
				}, binding.value || 1000);
			}
		});
	},
};
const buttonHandle = function () {
	num.value++;
};

const vm = getCurrentInstance();
onMounted(() => {
	setTimeout(() => {
		obj.value = {
			age: 22,
			test: "1231346",
		};
		console.log(obj.value, "0000");
	}, 1000);
});
</script>
<template>
	<div>
		<el-input v-focus v-model="num" style="width: 200px"></el-input>
		<el-button v-onec @click="buttonHandle">按钮{{ num }}</el-button>
		<div>pinia数据：name:{{ store.name }}--age:{{ store.age }}</div>
		<div>{{ store.auth }}:{{ store.phone }}</div>
		<div v-if="obj">{{ obj.test }}</div>

		<div style="display: flex">
			<div class="cor">202201马勒卡</div>
			<div class="cor">202201马勒卡马勒卡马勒卡</div>
		</div>
	</div>
</template>
<style lang="less">
.cor {
	line-height: 48px;
	padding: 0 20px 0 30px;
	background: radial-gradient(
		circle at -30px center,
		transparent 40px,
		orange 0
	);
	border-radius: 0 30px 30px 0;
	color: #fff;
}
</style>
