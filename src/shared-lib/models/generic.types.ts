export interface IDynamicProps {
  [key: string]: any;
}

export type TPropsName<T extends IDynamicProps> = {
  [P in keyof T]?: any;
};
