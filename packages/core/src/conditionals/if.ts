/**
 * Conditional type: if Condition extends true, resolve to Then, else Else.
 * @template Condition - The condition to check (must be a boolean)
 * @template Then - The type to resolve to if the condition is true
 * @template Else - The type to resolve to if the condition is false
 * @returns The type resolved to if the condition is true, otherwise the type resolved to if the condition is false
 * @example
 * ```ts
 * type Result = If<true, 'yes', 'no'>
 * // 'yes'
 * type Result2 = If<false, 'yes', 'no'>
 * // 'no'
 * ```
 */
export type If<Condition extends boolean, Then, Else> = Condition extends true ? Then : Else
