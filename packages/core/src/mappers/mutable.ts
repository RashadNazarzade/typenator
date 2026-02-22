/**
 * Make all properties of a record mutable.
 * @template T - Type to make all properties mutable
 * @returns Type with all properties mutable
 * @example
 * ```ts
 * type Result = Mutable<{ name: string, age: number }>
 * // { name: string, age: number }
 * ```
 */
export type Mutable<T> = {
    -readonly [K in keyof T]: T[K];
};



/**
 * Make all properties of a record or array recursive mutable.
 * @template T - Type to make all properties recursive mutable
 * @returns Type with all properties recursive mutable
 * @example
 * ```ts
 * type Result = MutableDeep<{ name: string, age: number, friends: User[] }>
 * // { name: string, age: number, friends: User[] }
 */
export type MutableDeep<T> = 
    T extends object 
        ? { -readonly [K in keyof T]: MutableDeep<T[K]> } 
        : T extends Array<infer U> 
            ? Array<MutableDeep<U>> 
            : T;