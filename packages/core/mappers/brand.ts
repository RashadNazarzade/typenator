/**
 * Brand a type with a unique phantom type.
 *
 * @template T - The underlying type
 * @template B - The brand (string literal, e.g. 'UserId' | 'Email')
 *
 * @example
 * ```ts`
 * type UserId = Brand<number, 'UserId'>;
 * type Email = Brand<string, 'Email'>;
 *
 * const id: UserId = 123 as UserId;
 * const email: Email = 'a@b.com' as Email;
 * // id = email; // Error: Type 'Email' is not assignable to type 'UserId'
 * ```
 */
export type Brand<T, B extends string | symbol> = T & { __brand: B };
