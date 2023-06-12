/// <reference types="vite/client" />
/// <reference types="node" />

declare module '*.vue' {
    import { ComponentOptions } from 'vue';
    const component: ComponentOptions<any>;
    export default component;
}
