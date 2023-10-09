<!--
 * @Author: 
 * @Date: 2023-10-08 13:21:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-10-09 14:56:28
 * @Description: 请填写简介
-->
<script setup lang="ts">
import { SEchart } from "s-echart";
import { onMounted, ref, watch } from "vue";

const option = ref({
	title: {
		text: "Stacked Line",
	},
	tooltip: {
		trigger: "axis",
	},
	legend: {
		data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
	},
	grid: {
		left: "3%",
		right: "4%",
		bottom: "3%",
		containLabel: true,
	},
	toolbox: {
		feature: {
			saveAsImage: {},
		},
	},
	xAxis: {
		type: "category",
		boundaryGap: false,
		data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	},
	yAxis: {
		type: "value",
	},
	series: [
		{
			name: "Email",
			type: "line",
			stack: "Total",
			data: [120, 132, 101, 134, 90, 230, 210],
		},
		{
			name: "Union Ads",
			type: "line",
			stack: "Total",
			data: [220, 182, 191, 234, 290, 330, 310],
		},
		{
			name: "Video Ads",
			type: "line",
			stack: "Total",
			data: [150, 232, 201, 154, 190, 330, 410],
		},
		{
			name: "Direct",
			type: "line",
			stack: "Total",
			data: [320, 332, 301, 334, 390, 330, 320],
		},
		{
			name: "Search Engine",
			type: "line",
			stack: "Total",
			data: [820, 932, 901, 934, 1290, 1330, 1320],
		},
	],
});
const textarea_value = ref();

onMounted(() => {
	textarea_value.value = JSON.stringify(option.value);
});
watch(
	() => textarea_value.value,
	(newVlaue) => {
		option.value = JSON.parse(newVlaue);
	}
);
</script>

<template>
	<div style="width: 100vw; height: 100vh; display: flex">
		<div style="width: 50%; height: 100%">
			<textarea name="" id="" cols="30" rows="10" v-model="textarea_value"></textarea>
		</div>
		<div style="width: 50vw; height: 100vh">
			<s-echart :option="option" :theme="'light'"></s-echart>
		</div>
	</div>
</template>

<style scoped></style>
