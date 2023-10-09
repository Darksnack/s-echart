/*
 * @Author:
 * @Date: 2023-10-08 15:25:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-10-08 16:00:50
 * @Description: 请填写简介
 */
import SEchart from "@/package/s-echart/index.vue";

const components = [SEchart];

// 用于按需导入
export { SEchart };

const install = function (Vue: any) {
	if ((install as any).installed) return;
	(install as any).installed = true; // 遍历并注册全局组件
	components.map((component) => {
		Vue.component(component.name, component);
	});
};
if (typeof window !== "undefined" && (window as any).Vue) {
	install((window as any).Vue);
}
export default install;
