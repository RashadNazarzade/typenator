/**
 * Make all properties of a record or array recursive required.
 * @template T - Type to make all properties recursive required
 * @returns Type with all properties recursive required
 * @example
 * ```ts
 * type Result = RequiredDeep<{ name: string, age: number, friends: User[] }>
 * // { name: string, age: number, friends: User[] }
 * ```
 */
export type RequiredDeep<T> = 
    T extends object 
        ? { [K in keyof T]-?: RequiredDeep<T[K]> } 
        : T extends Array<infer U> 
            ? Array<RequiredDeep<U>> 
            : T;