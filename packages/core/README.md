# @glitchproof/typenator/core

A TypeScript utility types library. Type-level guards, conditionals, mappers, and extractors for safer, more expressive types.

## Installation

```bash
npm install @glitchproof/typenator/core
```

```bash
pnpm add @glitchproof/typenator/core
```

```bash
bun add @glitchproof/typenator/core
```

## Requirements

- TypeScript >= 4.5
- `strict: true` (or at least `strictNullChecks: true`) in your `tsconfig.json`

## Quick Start

```ts
import type { If, IsArray, PartialDeep, Brand } from '@glitchproof/typenator/core';

// Conditional logic
type Result = If<IsArray<string[]>, 'array', 'not'>;  // 'array'

// Deep partial
type User = { name: string; address: { city: string } };
type PartialUser = PartialDeep<User>;  // { name?: string; address?: { city?: string } }

// Nominal typing
type UserId = Brand<number, 'UserId'>;
const id: UserId = 123 as UserId;
```

## Modules

| Module       | Purpose                                   |
| ------------ | ----------------------------------------- |
| **Guards**   | Check types (`IsArray`, `IsNever`, …)     |
| **Conditionals** | Type-level branching (`If`, `Equals`) |
| **Mappers**  | Transform types (`PartialDeep`, `Brand`)  |
| **Extractors** | Pull out parts of types (`KeysOf`, `ValueOf`) |
| **Primitives**  | Base type unions (`Primitive`, `Primitives`) |

## Guards

Type predicates that resolve to `true` or `false`.

| Type              | Example                          |
| ----------------- | -------------------------------- |
| `IsNever<T>`      | `IsNever<never>` → `true`        |
| `IsAny<T>`        | `IsAny<any>` → `true`            |
| `IsUnknown<T>`    | `IsUnknown<unknown>` → `true`    |
| `IsUnion<T>`      | `IsUnion<string \| number>` → `true` |
| `IsNumber<T>`     | `IsNumber<number>` → `true`      |
| `IsBoolean<T>`    | `IsBoolean<boolean>` → `true`    |
| `IsSymbol<T>`     | `IsSymbol<symbol>` → `true`      |
| `IsBigint<T>`     | `IsBigint<bigint>` → `true`      |
| `IsNull<T>`       | `IsNull<null>` → `true`          |
| `IsArray<T>`      | `IsArray<string[]>` → `true`     |
| `IsTuple<T>`      | `IsTuple<[string, number]>` → `true` |
| `IsReadonlyArray<T>` | `IsReadonlyArray<readonly string[]>` → `true` |
| `IsRecord<T>`     | `IsRecord<Record<string, unknown>>` → `true` |

## Conditionals

| Type                 | Example                         |
| -------------------- | ------------------------------- |
| `If<Cond, Then, Else>` | `If<true, 'a', 'b'>` → `'a'`  |
| `Equals<A, B>`       | `Equals<string, string>` → `true` |
| `Extends<A, B>`      | `Extends<string, unknown>` → `true` |

## Mappers

| Type               | Example                                    |
| ------------------ | ------------------------------------------ |
| `Cast<A, B>`       | `Cast<string, unknown>` → `string`         |
| `ToUnknown<T>`     | `ToUnknown<string>` → `unknown`            |
| `ToNever<T>`       | `ToNever<string>` → `never`                |
| `Brand<T, B>`      | `Brand<number, 'UserId'>` → nominal type   |
| `PartialDeep<T>`   | All properties optional, recursive         |
| `RequiredDeep<T>`  | All properties required, recursive         |
| `Mutable<T>`       | Remove `readonly` modifiers                |
| `MutableDeep<T>`   | Remove `readonly` recursively              |
| `ReadonlyDeep<T>`  | Add `readonly` recursively                 |

## Extractors

| Type        | Example                                      |
| ----------- | -------------------------------------------- |
| `KeysOf<T>` | `KeysOf<{ a: 1; b: 2 }>` → `'a' \| 'b'`      |
| `ValueOf<T>`| `ValueOf<{ a: 1; b: 2 }>` → `1 \| 2`         |

## Primitives

| Type               | Description                                      |
| ------------------ | ------------------------------------------------ |
| `Primitive`        | `string \| number \| boolean \| symbol \| bigint`|
| `NullityPrimitive` | `null \| undefined`                              |
| `Primitives`       | `Primitive \| NullityPrimitive`                  |
| `UnknownIdentity<T>` | Identity for `unknown`                         |
| `NeverIdentity<T>` | Identity for `never`                             |

## Import Options

```ts
// Main entry
import type { IsArray, If, PartialDeep } from '@glitchproof/typenator/core';

// Namespaced
import type { Guards, Mappers, Conditionals } from '@glitchproof/typenator/core';
type IsArr = Guards.IsArray<string[]>;
type Part = Mappers.PartialDeep<{ a: string }>;

// Subpath imports
import type { IsArray, IsTuple } from '@glitchproof/typenator/core/guards';
import type { PartialDeep, Brand } from '@glitchproof/typenator/core/mappers';
import type { If, Equals } from '@glitchproof/typenator/core/conditionals';
import type { KeysOf, ValueOf } from '@glitchproof/typenator/core/extractors';
import type { Primitive, Primitives } from '@glitchproof/typenator/core/primitives';
```

## License

MIT
