import { defineStore } from "pinia";
import { test2Store } from "@pinia/test2";
export const indexStore = defineStore("index", {
	state: () => {
		return {
			name: "liy",
			age: 20,
		};
	},
	actions: {
		addAgeHandle() {
			this.age += 5;
		},
	},
});
