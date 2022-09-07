<script setup>
import { ref, reactive, nextTick, onMounted } from "vue";

defineProps({
	msg: String,
});

onMounted(() => {
	console.log(obj2, obj3, "000000");
});

let obj = { name: "zhangsan", age: 20 };
const testObj = reactive(obj);
console.log(testObj === obj, testObj === reactive(testObj), "proxy1111");
const count = ref(0);
const htmlString = ref("<div><span>123456</span></div>");
const eventName = ref("click");
function clickHandle() {
	alert("111222");
}
function addHandle() {
	testObj.age++;
	nextTick(() => {
		console.log("nextTick:111111111");
	});
	console.log("2222222");
}

const obj2 = ref({ name: "lisi", age: 22 });
console.log(obj2.value, "ref---obj2");

const obj3 = { name: ref("wangwu"), age: ref(25) };
</script>

<template>
	<h1>{{ msg }}</h1>
	<div v-html="htmlString"></div>
	<div @[eventName]="clickHandle">9999</div>
	<div @click="addHandle">{{ testObj.name }}:{{ testObj.age }}</div>
	<div>{{ obj2.name }}:{{ obj2.age }}</div>
	<div>{{ obj3.name }}:{{ obj3.age }}</div>
</template>

<style scoped>
a {
	color: #42b983;
}
</style>
