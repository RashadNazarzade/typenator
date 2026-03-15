/**
 * Simplify a type by  flattening the type.
 * @template T - The type to flatten
 * @returns The flattened type
 * @example
 * ```ts
 * type Result = Simplify<{ name: string, age: number, friends: User[] }>
 * // { name: string, age: number, friends: User[] }
 * ```
 */
export type Simplify<T> = { [K in keyof T]: T[K] } & {};