export interface Children {
  title: string;
  data: {
    code: string;
    option: string;
  };
}
export interface menuAvt {
  content: string;
  icon: string;
  param?: string;
  children?: Children;
}
export interface Data {
  data: menuAvt[];
}
