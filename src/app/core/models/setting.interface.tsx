// import { IconProp } from "@fortawesome/fontawesome-svg-core";
export interface Children {
  title: string;
  data: { code: string; content: string }[];
}
export interface Setting {
  content: string;
  svg: any;
  param?: string;
  children?: Children;
}
