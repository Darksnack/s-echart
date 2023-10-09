<!--
 * @Author: 
 * @Date: 2023-10-08 14:55:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-10-09 09:59:54
 * @Description: 请填写简介
-->
<template>
	<div class="s_echart" ref="sChartDom" :style="{ width: prop.width, height: prop.height }"></div>
</template>
<script lang="ts" setup name="s-echart">
import * as echarts from "echarts";
import { type EChartsType } from "echarts/core";
import { debounce } from "lodash";
import { Ref, markRaw, onBeforeUnmount, onMounted, ref } from "vue";
const sChartDom = ref<Ref<HTMLDivElement>>();
const chartInstance = ref<EChartsType>();
const prop = defineProps({
	option: Object,
	width: {
		default: "100%",
		type: String,
	},
	height: {
		default: "100%",
		type: String,
	},
	theme: {
		default: "dark",
		type: String,
	},
});

// 初始化
const init = () => {
	if (!sChartDom.value) return;

	// 校验 Dom 节点上是否已经挂载了 ECharts 实例，只有未挂载时才初始化
	chartInstance.value = echarts.getInstanceByDom(sChartDom.value as unknown as HTMLDivElement) as unknown as EChartsType;
	if (!chartInstance.value) {
		chartInstance.value = markRaw(
			echarts.init(sChartDom.value as unknown as HTMLDivElement, prop.theme, { renderer: "canvas" })
		) as unknown as EChartsType;

		draw();
	}
};
// 绘制
const draw = () => {
	if (chartInstance.value) {
		chartInstance.value.setOption(prop.option as any, { notMerge: true });
	}
};
const resize = () => {
	if (chartInstance.value) {
		chartInstance.value.resize({ animation: { duration: 300 } });
	}
};

onMounted(() => {
	init();
	window.addEventListener(
		"resize",
		debounce(() => {
			resize();
		})
	);
});
onBeforeUnmount(() => {
	// 容器被销毁之后，销毁实例，避免内存泄漏
	chartInstance.value?.dispose();
	window.removeEventListener(
		"resize",
		debounce(() => {
			resize();
		})
	);
});
</script>
<style></style>
