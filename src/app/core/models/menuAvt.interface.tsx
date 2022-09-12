export interface menuAvt {
  content: string;
  icon: string;
  param?: string;
  children?: {
    title: string;
    data: {
      code: string;
      title: string;
    };
  };
}
export interface Data {
  data: menuAvt[];
}
