export interface RawFlow {
  [key: string]: string | number;
  origin: string;
  dest: string;
  count: number;
}

export interface NodeObj {
  node: number;
  name: string;
  key: string;
}
