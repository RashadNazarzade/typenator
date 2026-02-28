/**
 * Extract the keys of an object.
 * @template T - The type to extract the keys from
 * @returns The keys of the object
 * @example
 * ```ts
 * type Result = KeysOf<{ name: string, age: number }>
 * // 'name' | 'age'
 * ```
 */
export type KeysOf<T> = T extends object ? keyof T : never;
