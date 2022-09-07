const routes = [
	{
		path: "/",
		component: () => import("@views/Home.vue"),
		redirect: () => {
			// 重定向
			return { path: "/home" };
		},
		children: [
			{
				path: "/home",
				component: () => import("@views/index.vue"),
				title: "首页",
				children: [],
			},
			{
				path: "/pages1",
				component: () => import("@views/temView.vue"),
				title: "菜单一",
				children: [
					{
						path: "test1",
						component: () => import("@views/pages1/test1.vue"),
						title: "子菜单一",
						children: [],
					},
					{
						path: "test2",
						component: () => import("@views/pages1/test2.vue"),
						title: "子菜单二",
						children: [],
					},
					{
						path: "test3",
						component: () => import("@views/pages1/test3.vue"),
						title: "子菜单三",
						children: [],
					},
				],
			},
		],
	},
];

export default routes;
