<script setup>
import { useMouse } from "./mouse";
const { x, y } = useMouse();
</script>

<template>
	<div>Mouse position is at: {{ x }}, {{ y }}</div>
</template>
