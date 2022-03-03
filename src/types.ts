// 路由对象约束
export interface RouterObj {
    id: number,
    path: string,
    name: string,
    component: string,
    key: string,
    redirect?: string,
    icon?: string,
    children?: RouterObj[],
    pid?: number,
    hidden?: boolean,
    keepAlive?: boolean
}