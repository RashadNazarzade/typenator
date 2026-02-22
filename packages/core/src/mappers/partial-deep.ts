/**
 * Make all properties of a record or array recursive optional.
 * @template T - Type to make all properties recursive optional
 * @returns Type with all properties recursive optional
 * @example
 * ```ts
 * type Result = PartialDeep<{ name: string, age: number, friends: User[] }>
 * // { name?: string, age?: number, friends?: (User | undefined)[] }
 * ```
 */
export type PartialDeep<T> = 
    T extends object 
        ? { [K in keyof T]?: PartialDeep<T[K]> } 
        : T extends Array<infer U> 
            ? Array<PartialDeep<U>> 
            : T;