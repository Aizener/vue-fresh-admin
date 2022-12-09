type TabRoute = {
  name: string,
  path: string
}
type RouterStore = {
  routes: TabRoute[],
  currentRoute: RouteRecordNormalized
}