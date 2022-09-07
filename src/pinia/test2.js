import { defineStore } from "pinia";
export const test2Store = defineStore("test2", {
	state: () => {
		return {
			name: "zhagnsan",
			age: 80,
		};
	},
	actions: {
		addAgeHandle() {
			this.age += 1;
		},
	},
});
