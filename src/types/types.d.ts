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

type DayType = {
  month: number,
  day: number,
  title: string
}
