<script setup>
import { indexStore } from "@pinia/index.js";

const store = indexStore();
// store.$patch({
// 	name: "zhagnsan",
// 	age: 30,
// });
// store.$state = {
// 	name: "lisi",
// 	age: 40,
// };
// store.age++;
</script>

<template>
	<div>
		<div>-----------------index-----------------</div>
		<div>{{ store.auth }}:{{ store.phone }}</div>
		<div>pinia数据：name:{{ store.name }}--age:{{ store.age }}</div>
		<el-button @click="store.addAgeHandle">增加</el-button>
	</div>
</template>
