declare module 'element-plus/dist/locale/zh-cn.mjs';
type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

type ExpandObject<T> = T extends infer P ? { [K in keyof P]: P[K] } : never;

type AxiosResponseType<T> = {
  code: number,
  msg: string,
  data: ExpandObject<T>,
  err: string | null
}

type TabRoute = {
  name: string,
  path: string
}
type RouterStore = {
  routes: TabRoute[],
  currentRoute: RouteRecordNormalized
}

type DayType = {
  month: number,
  day: number,
  title: string
}

type MainState = {
  version: string,
  collapse: boolean,
  locale: string,
  showDrawer: boolean,
  theme: string,
  viewType: 'default' | 'dark'
}

type MenuItem = {
  index: string,
  title: string,
  path: string,
  icon?: Component,
  children?: Menu
}

type Menu = Array<ExpandObject<MenuItem>>;
