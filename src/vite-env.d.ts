/// <reference types="vite/client" />
declare module "*.vue" {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: ReturnType<typeof defineComponent>;
	export default component;
}
declare module "lodash";
declare module "s-echart";
