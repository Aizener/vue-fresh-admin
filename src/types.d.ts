type MenuItem = {
  index: string,
  title: string,
  path: string,
  icon?: Component,
  children?: Menu
}

type Menu = Array<MenuItem>;
