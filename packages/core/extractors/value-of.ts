/**
 * Extract the values of an object.
 * @template T - The type to extract the values from
 * @returns The values of the object
 * @example
 * ```ts
 * type Result = ValueOf<{ name: string, age: number }>
 * // string | number
 * ```
 */
export type ValueOf<T> = T extends object ? T[keyof T] : never;
