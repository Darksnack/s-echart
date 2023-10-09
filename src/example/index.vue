<!--
 * @Author: 
 * @Date: 2023-10-09 09:44:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-10-09 09:57:18
 * @Description: 请填写简介
-->
<template>
	<div style="width: 100%; height: 100%; display: flex">
		<div style="width: 50%; height: 100%">
			<textarea name="" id="" cols="30" rows="10" v-model="option"></textarea>
		</div>
		<div style="width: 50%; height: 100%">
			<s-echart :option="option"></s-echart>
		</div>
	</div>
</template>
<script lang="ts" setup>
import SEchart from "s-echart";
import { ref } from "vue";

const option = ref();
</script>
<style></style>
