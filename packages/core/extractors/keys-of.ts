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


/**
 * Extract required keys of an object.
 * @template T - The type to extract the required keys from
 * @returns The required keys of the object
 * @example
 * ```ts
 * type Result = RequiredKeys<{ name: string, age: number, surname?: string, mother?: string }>
 * // 'name' | 'age'
 * ```
 */
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? never : K }[keyof T];



/**
 * Extract optional keys of an object.
 * @template T - The type to extract the optional keys from
 * @returns The optional keys of the object
 * @example
 * ```ts
 * type Result = OptionalKeys<{ name: string, age: number, surname?: string, mother?: string }>
 * // 'surname' | 'mother'
 * ```
 */
export type OptionalKeys<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? K : never }[keyof T]