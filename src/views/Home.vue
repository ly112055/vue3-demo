<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import {
	Document,
	Menu as IconMenu,
	Location,
	Setting,
} from "@element-plus/icons-vue";
import routes from "../routes/routes";

const routeList = routes[0].children;
console.log(routeList, "1111");
const isCollapse = ref(true);
const handleOpen = (key, keyPath) => {
	console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
	console.log(key, keyPath);
};
const router = useRouter();
const route = useRoute();
console.log(router, route.fullPath, "123456");
</script>
<template>
	<div>
		<el-container class="common-layout">
			<el-aside width="200px" class="aside-box">
				<div class="aside-title">xxxx管理后台</div>
				<el-menu
					:router="true"
					class="el-menu-vertical-demo"
					:collapse="false"
					:default-active="route.fullPath"
					@open="handleOpen"
					@close="handleClose"
				>
					<template v-for="(item, index) in routeList" :key="index">
						<el-menu-item v-if="item.children.length <= 0" :index="item.path">
							<el-icon><icon-menu /></el-icon>
							<span>{{ item.title }}</span>
						</el-menu-item>
						<el-sub-menu v-else index="/pages1">
							<template #title>
								<el-icon><Location /></el-icon>
								<span>{{ item.title }}</span>
							</template>
							<template v-for="(itemT, indexT) in item.children" :key="indexT">
								<el-menu-item :index="item.path + '/' + itemT.path">{{
									itemT.title
								}}</el-menu-item>
							</template>
						</el-sub-menu>
					</template>
				</el-menu>
			</el-aside>
			<el-container>
				<el-header class="header-box">
					<!-- 面包屑 -->
					<el-breadcrumb separator="/">
						<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item>promotion list</el-breadcrumb-item>
					</el-breadcrumb>
				</el-header>
				<el-main>
					<router-view></router-view>
				</el-main>
				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
	</div>
</template>

<style lang="less" scoped>
.common-layout {
	width: 100vw;
	height: 100vh;

	.aside-box {
		height: 100%;
		background: #f2f2f2;

		.aside-title {
			height: 60px;
			line-height: 60px;
		}
	}

	.header-box {
		display: flex;
		align-items: center;
		height: 60px;
		border-bottom: 1px solid #f2f2f2;
	}
}

.el-menu-item.is-active {
	color: #409eff;
	background: rgb(217, 236, 255);
}
</style>
