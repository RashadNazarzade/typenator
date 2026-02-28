/**
 * Make all properties of a record or array recursive readonly.
 * @template T - Type to make all properties recursive readonly
 * @returns Type with all properties recursive readonly
 * @example
 * ```ts
 * type Result = ReadonlyDeep<{ name: string, age: number, friends: User[] }>
 * // { readonly name: string, readonly age: number, readonly friends: User[] }
 * ```
 */
export type ReadonlyDeep<T> = T extends object
  ? { readonly [K in keyof T]: ReadonlyDeep<T[K]> }
  : T extends Array<infer U>
    ? Array<ReadonlyDeep<U>>
    : T;
