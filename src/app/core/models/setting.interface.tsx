export interface Children {
  title: string;
  data: { code: string; content: string }[];
}
export interface Setting {
  content: string;
  icon: string;
  param?: string;
  children?: Children;
}
