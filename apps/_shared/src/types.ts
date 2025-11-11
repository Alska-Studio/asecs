export type NestedOmit<T, K extends PropertyKey> = T extends Array<infer U>
  ? Array<NestedOmit<U, K>>
  : T extends object
    ? {
        [P in keyof T as P extends K ? never : P]:
          NestedOmit<T[P], K extends `${Exclude<P, symbol>}.${infer R}` ? R : never>
      }
    : T;
