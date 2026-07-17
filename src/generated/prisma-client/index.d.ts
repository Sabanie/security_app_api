
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Guest
 * 
 */
export type Guest = $Result.DefaultSelection<Prisma.$GuestPayload>
/**
 * Model Surat_Masuk
 * 
 */
export type Surat_Masuk = $Result.DefaultSelection<Prisma.$Surat_MasukPayload>
/**
 * Model Surat_Keluar
 * 
 */
export type Surat_Keluar = $Result.DefaultSelection<Prisma.$Surat_KeluarPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Absensi
 * 
 */
export type Absensi = $Result.DefaultSelection<Prisma.$AbsensiPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  SECURITYDS8: 'SECURITYDS8',
  SECURITYDELTAMAS: 'SECURITYDELTAMAS'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Plant: {
  DS8: 'DS8',
  DELTAMAS: 'DELTAMAS'
};

export type Plant = (typeof Plant)[keyof typeof Plant]


export const Kendaraan: {
  MOTOR: 'MOTOR',
  MOBIL: 'MOBIL',
  NONE: 'NONE'
};

export type Kendaraan = (typeof Kendaraan)[keyof typeof Kendaraan]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Plant = $Enums.Plant

export const Plant: typeof $Enums.Plant

export type Kendaraan = $Enums.Kendaraan

export const Kendaraan: typeof $Enums.Kendaraan

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guest`: Exposes CRUD operations for the **Guest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guests
    * const guests = await prisma.guest.findMany()
    * ```
    */
  get guest(): Prisma.GuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.surat_Masuk`: Exposes CRUD operations for the **Surat_Masuk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Surat_Masuks
    * const surat_Masuks = await prisma.surat_Masuk.findMany()
    * ```
    */
  get surat_Masuk(): Prisma.Surat_MasukDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.surat_Keluar`: Exposes CRUD operations for the **Surat_Keluar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Surat_Keluars
    * const surat_Keluars = await prisma.surat_Keluar.findMany()
    * ```
    */
  get surat_Keluar(): Prisma.Surat_KeluarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.absensi`: Exposes CRUD operations for the **Absensi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Absensis
    * const absensis = await prisma.absensi.findMany()
    * ```
    */
  get absensi(): Prisma.AbsensiDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Guest: 'Guest',
    Surat_Masuk: 'Surat_Masuk',
    Surat_Keluar: 'Surat_Keluar',
    Employee: 'Employee',
    Absensi: 'Absensi'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "guest" | "surat_Masuk" | "surat_Keluar" | "employee" | "absensi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Guest: {
        payload: Prisma.$GuestPayload<ExtArgs>
        fields: Prisma.GuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findFirst: {
            args: Prisma.GuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          findMany: {
            args: Prisma.GuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          create: {
            args: Prisma.GuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          createMany: {
            args: Prisma.GuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          delete: {
            args: Prisma.GuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          update: {
            args: Prisma.GuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          deleteMany: {
            args: Prisma.GuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>[]
          }
          upsert: {
            args: Prisma.GuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuestPayload>
          }
          aggregate: {
            args: Prisma.GuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuest>
          }
          groupBy: {
            args: Prisma.GuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuestCountArgs<ExtArgs>
            result: $Utils.Optional<GuestCountAggregateOutputType> | number
          }
        }
      }
      Surat_Masuk: {
        payload: Prisma.$Surat_MasukPayload<ExtArgs>
        fields: Prisma.Surat_MasukFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Surat_MasukFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_MasukPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Surat_MasukFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_MasukPayload>
          }
          findFirst: {
            args: Prisma.Surat_MasukFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_MasukPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Surat_MasukFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_MasukPayload>
          }
          findMany: {
            args: Prisma.Surat_MasukFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_MasukPayload>[]
          }
          create: {
            args: Prisma.Surat_MasukCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_MasukPayload>
          }
          createMany: {
            args: Prisma.Surat_MasukCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Surat_MasukCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_MasukPayload>[]
          }
          delete: {
            args: Prisma.Surat_MasukDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_MasukPayload>
          }
          update: {
            args: Prisma.Surat_MasukUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_MasukPayload>
          }
          deleteMany: {
            args: Prisma.Surat_MasukDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Surat_MasukUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Surat_MasukUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_MasukPayload>[]
          }
          upsert: {
            args: Prisma.Surat_MasukUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_MasukPayload>
          }
          aggregate: {
            args: Prisma.Surat_MasukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurat_Masuk>
          }
          groupBy: {
            args: Prisma.Surat_MasukGroupByArgs<ExtArgs>
            result: $Utils.Optional<Surat_MasukGroupByOutputType>[]
          }
          count: {
            args: Prisma.Surat_MasukCountArgs<ExtArgs>
            result: $Utils.Optional<Surat_MasukCountAggregateOutputType> | number
          }
        }
      }
      Surat_Keluar: {
        payload: Prisma.$Surat_KeluarPayload<ExtArgs>
        fields: Prisma.Surat_KeluarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Surat_KeluarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_KeluarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Surat_KeluarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_KeluarPayload>
          }
          findFirst: {
            args: Prisma.Surat_KeluarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_KeluarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Surat_KeluarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_KeluarPayload>
          }
          findMany: {
            args: Prisma.Surat_KeluarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_KeluarPayload>[]
          }
          create: {
            args: Prisma.Surat_KeluarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_KeluarPayload>
          }
          createMany: {
            args: Prisma.Surat_KeluarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Surat_KeluarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_KeluarPayload>[]
          }
          delete: {
            args: Prisma.Surat_KeluarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_KeluarPayload>
          }
          update: {
            args: Prisma.Surat_KeluarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_KeluarPayload>
          }
          deleteMany: {
            args: Prisma.Surat_KeluarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Surat_KeluarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Surat_KeluarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_KeluarPayload>[]
          }
          upsert: {
            args: Prisma.Surat_KeluarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Surat_KeluarPayload>
          }
          aggregate: {
            args: Prisma.Surat_KeluarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurat_Keluar>
          }
          groupBy: {
            args: Prisma.Surat_KeluarGroupByArgs<ExtArgs>
            result: $Utils.Optional<Surat_KeluarGroupByOutputType>[]
          }
          count: {
            args: Prisma.Surat_KeluarCountArgs<ExtArgs>
            result: $Utils.Optional<Surat_KeluarCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Absensi: {
        payload: Prisma.$AbsensiPayload<ExtArgs>
        fields: Prisma.AbsensiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbsensiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbsensiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          findFirst: {
            args: Prisma.AbsensiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbsensiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          findMany: {
            args: Prisma.AbsensiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>[]
          }
          create: {
            args: Prisma.AbsensiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          createMany: {
            args: Prisma.AbsensiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AbsensiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>[]
          }
          delete: {
            args: Prisma.AbsensiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          update: {
            args: Prisma.AbsensiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          deleteMany: {
            args: Prisma.AbsensiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AbsensiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AbsensiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>[]
          }
          upsert: {
            args: Prisma.AbsensiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AbsensiPayload>
          }
          aggregate: {
            args: Prisma.AbsensiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbsensi>
          }
          groupBy: {
            args: Prisma.AbsensiGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbsensiGroupByOutputType>[]
          }
          count: {
            args: Prisma.AbsensiCountArgs<ExtArgs>
            result: $Utils.Optional<AbsensiCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    guest?: GuestOmit
    surat_Masuk?: Surat_MasukOmit
    surat_Keluar?: Surat_KeluarOmit
    employee?: EmployeeOmit
    absensi?: AbsensiOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    guests: number
    surat_keluar_pengirim: number
    surat_keluar_tujuan: number
    surat_masuk: number
    tujuan_masuk: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guests?: boolean | UserCountOutputTypeCountGuestsArgs
    surat_keluar_pengirim?: boolean | UserCountOutputTypeCountSurat_keluar_pengirimArgs
    surat_keluar_tujuan?: boolean | UserCountOutputTypeCountSurat_keluar_tujuanArgs
    surat_masuk?: boolean | UserCountOutputTypeCountSurat_masukArgs
    tujuan_masuk?: boolean | UserCountOutputTypeCountTujuan_masukArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSurat_keluar_pengirimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Surat_KeluarWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSurat_keluar_tujuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Surat_KeluarWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSurat_masukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Surat_MasukWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTujuan_masukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Surat_MasukWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    absensi: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    absensi?: boolean | EmployeeCountOutputTypeCountAbsensiArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountAbsensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsensiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    departement: string | null
    name: string | null
    plant: $Enums.Plant | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    refresh_token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    departement: string | null
    name: string | null
    plant: $Enums.Plant | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    refresh_token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    departement: number
    name: number
    plant: number
    username: number
    password: number
    role: number
    refresh_token: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    departement?: true
    name?: true
    plant?: true
    username?: true
    password?: true
    role?: true
    refresh_token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    departement?: true
    name?: true
    plant?: true
    username?: true
    password?: true
    role?: true
    refresh_token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    departement?: true
    name?: true
    plant?: true
    username?: true
    password?: true
    role?: true
    refresh_token?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    departement: string
    name: string
    plant: $Enums.Plant
    username: string
    password: string
    role: $Enums.Role
    refresh_token: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departement?: boolean
    name?: boolean
    plant?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    refresh_token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guests?: boolean | User$guestsArgs<ExtArgs>
    surat_keluar_pengirim?: boolean | User$surat_keluar_pengirimArgs<ExtArgs>
    surat_keluar_tujuan?: boolean | User$surat_keluar_tujuanArgs<ExtArgs>
    surat_masuk?: boolean | User$surat_masukArgs<ExtArgs>
    tujuan_masuk?: boolean | User$tujuan_masukArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departement?: boolean
    name?: boolean
    plant?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    refresh_token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departement?: boolean
    name?: boolean
    plant?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    refresh_token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    departement?: boolean
    name?: boolean
    plant?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    refresh_token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "departement" | "name" | "plant" | "username" | "password" | "role" | "refresh_token" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guests?: boolean | User$guestsArgs<ExtArgs>
    surat_keluar_pengirim?: boolean | User$surat_keluar_pengirimArgs<ExtArgs>
    surat_keluar_tujuan?: boolean | User$surat_keluar_tujuanArgs<ExtArgs>
    surat_masuk?: boolean | User$surat_masukArgs<ExtArgs>
    tujuan_masuk?: boolean | User$tujuan_masukArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      guests: Prisma.$GuestPayload<ExtArgs>[]
      surat_keluar_pengirim: Prisma.$Surat_KeluarPayload<ExtArgs>[]
      surat_keluar_tujuan: Prisma.$Surat_KeluarPayload<ExtArgs>[]
      surat_masuk: Prisma.$Surat_MasukPayload<ExtArgs>[]
      tujuan_masuk: Prisma.$Surat_MasukPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      departement: string
      name: string
      plant: $Enums.Plant
      username: string
      password: string
      role: $Enums.Role
      refresh_token: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guests<T extends User$guestsArgs<ExtArgs> = {}>(args?: Subset<T, User$guestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    surat_keluar_pengirim<T extends User$surat_keluar_pengirimArgs<ExtArgs> = {}>(args?: Subset<T, User$surat_keluar_pengirimArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Surat_KeluarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    surat_keluar_tujuan<T extends User$surat_keluar_tujuanArgs<ExtArgs> = {}>(args?: Subset<T, User$surat_keluar_tujuanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Surat_KeluarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    surat_masuk<T extends User$surat_masukArgs<ExtArgs> = {}>(args?: Subset<T, User$surat_masukArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Surat_MasukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tujuan_masuk<T extends User$tujuan_masukArgs<ExtArgs> = {}>(args?: Subset<T, User$tujuan_masukArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Surat_MasukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly departement: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly plant: FieldRef<"User", 'Plant'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly refresh_token: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.guests
   */
  export type User$guestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    where?: GuestWhereInput
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    cursor?: GuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * User.surat_keluar_pengirim
   */
  export type User$surat_keluar_pengirimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Keluar
     */
    select?: Surat_KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Keluar
     */
    omit?: Surat_KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_KeluarInclude<ExtArgs> | null
    where?: Surat_KeluarWhereInput
    orderBy?: Surat_KeluarOrderByWithRelationInput | Surat_KeluarOrderByWithRelationInput[]
    cursor?: Surat_KeluarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Surat_KeluarScalarFieldEnum | Surat_KeluarScalarFieldEnum[]
  }

  /**
   * User.surat_keluar_tujuan
   */
  export type User$surat_keluar_tujuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Keluar
     */
    select?: Surat_KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Keluar
     */
    omit?: Surat_KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_KeluarInclude<ExtArgs> | null
    where?: Surat_KeluarWhereInput
    orderBy?: Surat_KeluarOrderByWithRelationInput | Surat_KeluarOrderByWithRelationInput[]
    cursor?: Surat_KeluarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Surat_KeluarScalarFieldEnum | Surat_KeluarScalarFieldEnum[]
  }

  /**
   * User.surat_masuk
   */
  export type User$surat_masukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Masuk
     */
    select?: Surat_MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Masuk
     */
    omit?: Surat_MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_MasukInclude<ExtArgs> | null
    where?: Surat_MasukWhereInput
    orderBy?: Surat_MasukOrderByWithRelationInput | Surat_MasukOrderByWithRelationInput[]
    cursor?: Surat_MasukWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Surat_MasukScalarFieldEnum | Surat_MasukScalarFieldEnum[]
  }

  /**
   * User.tujuan_masuk
   */
  export type User$tujuan_masukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Masuk
     */
    select?: Surat_MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Masuk
     */
    omit?: Surat_MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_MasukInclude<ExtArgs> | null
    where?: Surat_MasukWhereInput
    orderBy?: Surat_MasukOrderByWithRelationInput | Surat_MasukOrderByWithRelationInput[]
    cursor?: Surat_MasukWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Surat_MasukScalarFieldEnum | Surat_MasukScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Guest
   */

  export type AggregateGuest = {
    _count: GuestCountAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  export type GuestMinAggregateOutputType = {
    id: string | null
    name: string | null
    company: string | null
    phone: string | null
    plateNumber: string | null
    purpose: string | null
    identity: string | null
    plant: $Enums.Plant | null
    itemName: string | null
    quantity: string | null
    description: string | null
    isActive: boolean | null
    isAprove: boolean | null
    picId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuestMaxAggregateOutputType = {
    id: string | null
    name: string | null
    company: string | null
    phone: string | null
    plateNumber: string | null
    purpose: string | null
    identity: string | null
    plant: $Enums.Plant | null
    itemName: string | null
    quantity: string | null
    description: string | null
    isActive: boolean | null
    isAprove: boolean | null
    picId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuestCountAggregateOutputType = {
    id: number
    name: number
    company: number
    phone: number
    plateNumber: number
    purpose: number
    identity: number
    plant: number
    itemName: number
    quantity: number
    description: number
    isActive: number
    isAprove: number
    picId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuestMinAggregateInputType = {
    id?: true
    name?: true
    company?: true
    phone?: true
    plateNumber?: true
    purpose?: true
    identity?: true
    plant?: true
    itemName?: true
    quantity?: true
    description?: true
    isActive?: true
    isAprove?: true
    picId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuestMaxAggregateInputType = {
    id?: true
    name?: true
    company?: true
    phone?: true
    plateNumber?: true
    purpose?: true
    identity?: true
    plant?: true
    itemName?: true
    quantity?: true
    description?: true
    isActive?: true
    isAprove?: true
    picId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuestCountAggregateInputType = {
    id?: true
    name?: true
    company?: true
    phone?: true
    plateNumber?: true
    purpose?: true
    identity?: true
    plant?: true
    itemName?: true
    quantity?: true
    description?: true
    isActive?: true
    isAprove?: true
    picId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guest to aggregate.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guests
    **/
    _count?: true | GuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuestMaxAggregateInputType
  }

  export type GetGuestAggregateType<T extends GuestAggregateArgs> = {
        [P in keyof T & keyof AggregateGuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuest[P]>
      : GetScalarType<T[P], AggregateGuest[P]>
  }




  export type GuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuestWhereInput
    orderBy?: GuestOrderByWithAggregationInput | GuestOrderByWithAggregationInput[]
    by: GuestScalarFieldEnum[] | GuestScalarFieldEnum
    having?: GuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuestCountAggregateInputType | true
    _min?: GuestMinAggregateInputType
    _max?: GuestMaxAggregateInputType
  }

  export type GuestGroupByOutputType = {
    id: string
    name: string
    company: string
    phone: string
    plateNumber: string
    purpose: string
    identity: string
    plant: $Enums.Plant
    itemName: string | null
    quantity: string | null
    description: string | null
    isActive: boolean
    isAprove: boolean
    picId: string | null
    createdAt: Date
    updatedAt: Date
    _count: GuestCountAggregateOutputType | null
    _min: GuestMinAggregateOutputType | null
    _max: GuestMaxAggregateOutputType | null
  }

  type GetGuestGroupByPayload<T extends GuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuestGroupByOutputType[P]>
            : GetScalarType<T[P], GuestGroupByOutputType[P]>
        }
      >
    >


  export type GuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    company?: boolean
    phone?: boolean
    plateNumber?: boolean
    purpose?: boolean
    identity?: boolean
    plant?: boolean
    itemName?: boolean
    quantity?: boolean
    description?: boolean
    isActive?: boolean
    isAprove?: boolean
    picId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pic?: boolean | Guest$picArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    company?: boolean
    phone?: boolean
    plateNumber?: boolean
    purpose?: boolean
    identity?: boolean
    plant?: boolean
    itemName?: boolean
    quantity?: boolean
    description?: boolean
    isActive?: boolean
    isAprove?: boolean
    picId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pic?: boolean | Guest$picArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    company?: boolean
    phone?: boolean
    plateNumber?: boolean
    purpose?: boolean
    identity?: boolean
    plant?: boolean
    itemName?: boolean
    quantity?: boolean
    description?: boolean
    isActive?: boolean
    isAprove?: boolean
    picId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pic?: boolean | Guest$picArgs<ExtArgs>
  }, ExtArgs["result"]["guest"]>

  export type GuestSelectScalar = {
    id?: boolean
    name?: boolean
    company?: boolean
    phone?: boolean
    plateNumber?: boolean
    purpose?: boolean
    identity?: boolean
    plant?: boolean
    itemName?: boolean
    quantity?: boolean
    description?: boolean
    isActive?: boolean
    isAprove?: boolean
    picId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "company" | "phone" | "plateNumber" | "purpose" | "identity" | "plant" | "itemName" | "quantity" | "description" | "isActive" | "isAprove" | "picId" | "createdAt" | "updatedAt", ExtArgs["result"]["guest"]>
  export type GuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pic?: boolean | Guest$picArgs<ExtArgs>
  }
  export type GuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pic?: boolean | Guest$picArgs<ExtArgs>
  }
  export type GuestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pic?: boolean | Guest$picArgs<ExtArgs>
  }

  export type $GuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guest"
    objects: {
      pic: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      company: string
      phone: string
      plateNumber: string
      purpose: string
      identity: string
      plant: $Enums.Plant
      itemName: string | null
      quantity: string | null
      description: string | null
      isActive: boolean
      isAprove: boolean
      picId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guest"]>
    composites: {}
  }

  type GuestGetPayload<S extends boolean | null | undefined | GuestDefaultArgs> = $Result.GetResult<Prisma.$GuestPayload, S>

  type GuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuestCountAggregateInputType | true
    }

  export interface GuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guest'], meta: { name: 'Guest' } }
    /**
     * Find zero or one Guest that matches the filter.
     * @param {GuestFindUniqueArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuestFindUniqueArgs>(args: SelectSubset<T, GuestFindUniqueArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuestFindUniqueOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuestFindUniqueOrThrowArgs>(args: SelectSubset<T, GuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuestFindFirstArgs>(args?: SelectSubset<T, GuestFindFirstArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindFirstOrThrowArgs} args - Arguments to find a Guest
     * @example
     * // Get one Guest
     * const guest = await prisma.guest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuestFindFirstOrThrowArgs>(args?: SelectSubset<T, GuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guests
     * const guests = await prisma.guest.findMany()
     * 
     * // Get first 10 Guests
     * const guests = await prisma.guest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guestWithIdOnly = await prisma.guest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuestFindManyArgs>(args?: SelectSubset<T, GuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guest.
     * @param {GuestCreateArgs} args - Arguments to create a Guest.
     * @example
     * // Create one Guest
     * const Guest = await prisma.guest.create({
     *   data: {
     *     // ... data to create a Guest
     *   }
     * })
     * 
     */
    create<T extends GuestCreateArgs>(args: SelectSubset<T, GuestCreateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guests.
     * @param {GuestCreateManyArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuestCreateManyArgs>(args?: SelectSubset<T, GuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guests and returns the data saved in the database.
     * @param {GuestCreateManyAndReturnArgs} args - Arguments to create many Guests.
     * @example
     * // Create many Guests
     * const guest = await prisma.guest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuestCreateManyAndReturnArgs>(args?: SelectSubset<T, GuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guest.
     * @param {GuestDeleteArgs} args - Arguments to delete one Guest.
     * @example
     * // Delete one Guest
     * const Guest = await prisma.guest.delete({
     *   where: {
     *     // ... filter to delete one Guest
     *   }
     * })
     * 
     */
    delete<T extends GuestDeleteArgs>(args: SelectSubset<T, GuestDeleteArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guest.
     * @param {GuestUpdateArgs} args - Arguments to update one Guest.
     * @example
     * // Update one Guest
     * const guest = await prisma.guest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuestUpdateArgs>(args: SelectSubset<T, GuestUpdateArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guests.
     * @param {GuestDeleteManyArgs} args - Arguments to filter Guests to delete.
     * @example
     * // Delete a few Guests
     * const { count } = await prisma.guest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuestDeleteManyArgs>(args?: SelectSubset<T, GuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuestUpdateManyArgs>(args: SelectSubset<T, GuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guests and returns the data updated in the database.
     * @param {GuestUpdateManyAndReturnArgs} args - Arguments to update many Guests.
     * @example
     * // Update many Guests
     * const guest = await prisma.guest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guests and only return the `id`
     * const guestWithIdOnly = await prisma.guest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GuestUpdateManyAndReturnArgs>(args: SelectSubset<T, GuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guest.
     * @param {GuestUpsertArgs} args - Arguments to update or create a Guest.
     * @example
     * // Update or create a Guest
     * const guest = await prisma.guest.upsert({
     *   create: {
     *     // ... data to create a Guest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guest we want to update
     *   }
     * })
     */
    upsert<T extends GuestUpsertArgs>(args: SelectSubset<T, GuestUpsertArgs<ExtArgs>>): Prisma__GuestClient<$Result.GetResult<Prisma.$GuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestCountArgs} args - Arguments to filter Guests to count.
     * @example
     * // Count the number of Guests
     * const count = await prisma.guest.count({
     *   where: {
     *     // ... the filter for the Guests we want to count
     *   }
     * })
    **/
    count<T extends GuestCountArgs>(
      args?: Subset<T, GuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GuestAggregateArgs>(args: Subset<T, GuestAggregateArgs>): Prisma.PrismaPromise<GetGuestAggregateType<T>>

    /**
     * Group by Guest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuestGroupByArgs['orderBy'] }
        : { orderBy?: GuestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guest model
   */
  readonly fields: GuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pic<T extends Guest$picArgs<ExtArgs> = {}>(args?: Subset<T, Guest$picArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Guest model
   */
  interface GuestFieldRefs {
    readonly id: FieldRef<"Guest", 'String'>
    readonly name: FieldRef<"Guest", 'String'>
    readonly company: FieldRef<"Guest", 'String'>
    readonly phone: FieldRef<"Guest", 'String'>
    readonly plateNumber: FieldRef<"Guest", 'String'>
    readonly purpose: FieldRef<"Guest", 'String'>
    readonly identity: FieldRef<"Guest", 'String'>
    readonly plant: FieldRef<"Guest", 'Plant'>
    readonly itemName: FieldRef<"Guest", 'String'>
    readonly quantity: FieldRef<"Guest", 'String'>
    readonly description: FieldRef<"Guest", 'String'>
    readonly isActive: FieldRef<"Guest", 'Boolean'>
    readonly isAprove: FieldRef<"Guest", 'Boolean'>
    readonly picId: FieldRef<"Guest", 'String'>
    readonly createdAt: FieldRef<"Guest", 'DateTime'>
    readonly updatedAt: FieldRef<"Guest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Guest findUnique
   */
  export type GuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findUniqueOrThrow
   */
  export type GuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest findFirst
   */
  export type GuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findFirstOrThrow
   */
  export type GuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guest to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest findMany
   */
  export type GuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter, which Guests to fetch.
     */
    where?: GuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guests to fetch.
     */
    orderBy?: GuestOrderByWithRelationInput | GuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guests.
     */
    cursor?: GuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guests.
     */
    distinct?: GuestScalarFieldEnum | GuestScalarFieldEnum[]
  }

  /**
   * Guest create
   */
  export type GuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to create a Guest.
     */
    data: XOR<GuestCreateInput, GuestUncheckedCreateInput>
  }

  /**
   * Guest createMany
   */
  export type GuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guest createManyAndReturn
   */
  export type GuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to create many Guests.
     */
    data: GuestCreateManyInput | GuestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guest update
   */
  export type GuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The data needed to update a Guest.
     */
    data: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
    /**
     * Choose, which Guest to update.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest updateMany
   */
  export type GuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
  }

  /**
   * Guest updateManyAndReturn
   */
  export type GuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * The data used to update Guests.
     */
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyInput>
    /**
     * Filter which Guests to update
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guest upsert
   */
  export type GuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * The filter to search for the Guest to update in case it exists.
     */
    where: GuestWhereUniqueInput
    /**
     * In case the Guest found by the `where` argument doesn't exist, create a new Guest with this data.
     */
    create: XOR<GuestCreateInput, GuestUncheckedCreateInput>
    /**
     * In case the Guest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuestUpdateInput, GuestUncheckedUpdateInput>
  }

  /**
   * Guest delete
   */
  export type GuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
    /**
     * Filter which Guest to delete.
     */
    where: GuestWhereUniqueInput
  }

  /**
   * Guest deleteMany
   */
  export type GuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guests to delete
     */
    where?: GuestWhereInput
    /**
     * Limit how many Guests to delete.
     */
    limit?: number
  }

  /**
   * Guest.pic
   */
  export type Guest$picArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Guest without action
   */
  export type GuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guest
     */
    select?: GuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guest
     */
    omit?: GuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuestInclude<ExtArgs> | null
  }


  /**
   * Model Surat_Masuk
   */

  export type AggregateSurat_Masuk = {
    _count: Surat_MasukCountAggregateOutputType | null
    _min: Surat_MasukMinAggregateOutputType | null
    _max: Surat_MasukMaxAggregateOutputType | null
  }

  export type Surat_MasukMinAggregateOutputType = {
    id: string | null
    perusahaanPengirim: string | null
    namaPengirimInternalId: string | null
    namaPengirimEksternal: string | null
    tujuanId: string | null
    satpam: string | null
    kurir: string | null
    plant: $Enums.Plant | null
    isAccepted: boolean | null
    keterangan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Surat_MasukMaxAggregateOutputType = {
    id: string | null
    perusahaanPengirim: string | null
    namaPengirimInternalId: string | null
    namaPengirimEksternal: string | null
    tujuanId: string | null
    satpam: string | null
    kurir: string | null
    plant: $Enums.Plant | null
    isAccepted: boolean | null
    keterangan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Surat_MasukCountAggregateOutputType = {
    id: number
    perusahaanPengirim: number
    namaPengirimInternalId: number
    namaPengirimEksternal: number
    tujuanId: number
    satpam: number
    kurir: number
    plant: number
    isAccepted: number
    keterangan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Surat_MasukMinAggregateInputType = {
    id?: true
    perusahaanPengirim?: true
    namaPengirimInternalId?: true
    namaPengirimEksternal?: true
    tujuanId?: true
    satpam?: true
    kurir?: true
    plant?: true
    isAccepted?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Surat_MasukMaxAggregateInputType = {
    id?: true
    perusahaanPengirim?: true
    namaPengirimInternalId?: true
    namaPengirimEksternal?: true
    tujuanId?: true
    satpam?: true
    kurir?: true
    plant?: true
    isAccepted?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Surat_MasukCountAggregateInputType = {
    id?: true
    perusahaanPengirim?: true
    namaPengirimInternalId?: true
    namaPengirimEksternal?: true
    tujuanId?: true
    satpam?: true
    kurir?: true
    plant?: true
    isAccepted?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Surat_MasukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surat_Masuk to aggregate.
     */
    where?: Surat_MasukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surat_Masuks to fetch.
     */
    orderBy?: Surat_MasukOrderByWithRelationInput | Surat_MasukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Surat_MasukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surat_Masuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surat_Masuks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Surat_Masuks
    **/
    _count?: true | Surat_MasukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Surat_MasukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Surat_MasukMaxAggregateInputType
  }

  export type GetSurat_MasukAggregateType<T extends Surat_MasukAggregateArgs> = {
        [P in keyof T & keyof AggregateSurat_Masuk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurat_Masuk[P]>
      : GetScalarType<T[P], AggregateSurat_Masuk[P]>
  }




  export type Surat_MasukGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Surat_MasukWhereInput
    orderBy?: Surat_MasukOrderByWithAggregationInput | Surat_MasukOrderByWithAggregationInput[]
    by: Surat_MasukScalarFieldEnum[] | Surat_MasukScalarFieldEnum
    having?: Surat_MasukScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Surat_MasukCountAggregateInputType | true
    _min?: Surat_MasukMinAggregateInputType
    _max?: Surat_MasukMaxAggregateInputType
  }

  export type Surat_MasukGroupByOutputType = {
    id: string
    perusahaanPengirim: string
    namaPengirimInternalId: string | null
    namaPengirimEksternal: string | null
    tujuanId: string | null
    satpam: string
    kurir: string | null
    plant: $Enums.Plant
    isAccepted: boolean
    keterangan: string | null
    createdAt: Date
    updatedAt: Date
    _count: Surat_MasukCountAggregateOutputType | null
    _min: Surat_MasukMinAggregateOutputType | null
    _max: Surat_MasukMaxAggregateOutputType | null
  }

  type GetSurat_MasukGroupByPayload<T extends Surat_MasukGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Surat_MasukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Surat_MasukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Surat_MasukGroupByOutputType[P]>
            : GetScalarType<T[P], Surat_MasukGroupByOutputType[P]>
        }
      >
    >


  export type Surat_MasukSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    perusahaanPengirim?: boolean
    namaPengirimInternalId?: boolean
    namaPengirimEksternal?: boolean
    tujuanId?: boolean
    satpam?: boolean
    kurir?: boolean
    plant?: boolean
    isAccepted?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaPengirimInternal?: boolean | Surat_Masuk$namaPengirimInternalArgs<ExtArgs>
    tujuan?: boolean | Surat_Masuk$tujuanArgs<ExtArgs>
  }, ExtArgs["result"]["surat_Masuk"]>

  export type Surat_MasukSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    perusahaanPengirim?: boolean
    namaPengirimInternalId?: boolean
    namaPengirimEksternal?: boolean
    tujuanId?: boolean
    satpam?: boolean
    kurir?: boolean
    plant?: boolean
    isAccepted?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaPengirimInternal?: boolean | Surat_Masuk$namaPengirimInternalArgs<ExtArgs>
    tujuan?: boolean | Surat_Masuk$tujuanArgs<ExtArgs>
  }, ExtArgs["result"]["surat_Masuk"]>

  export type Surat_MasukSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    perusahaanPengirim?: boolean
    namaPengirimInternalId?: boolean
    namaPengirimEksternal?: boolean
    tujuanId?: boolean
    satpam?: boolean
    kurir?: boolean
    plant?: boolean
    isAccepted?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaPengirimInternal?: boolean | Surat_Masuk$namaPengirimInternalArgs<ExtArgs>
    tujuan?: boolean | Surat_Masuk$tujuanArgs<ExtArgs>
  }, ExtArgs["result"]["surat_Masuk"]>

  export type Surat_MasukSelectScalar = {
    id?: boolean
    perusahaanPengirim?: boolean
    namaPengirimInternalId?: boolean
    namaPengirimEksternal?: boolean
    tujuanId?: boolean
    satpam?: boolean
    kurir?: boolean
    plant?: boolean
    isAccepted?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Surat_MasukOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "perusahaanPengirim" | "namaPengirimInternalId" | "namaPengirimEksternal" | "tujuanId" | "satpam" | "kurir" | "plant" | "isAccepted" | "keterangan" | "createdAt" | "updatedAt", ExtArgs["result"]["surat_Masuk"]>
  export type Surat_MasukInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    namaPengirimInternal?: boolean | Surat_Masuk$namaPengirimInternalArgs<ExtArgs>
    tujuan?: boolean | Surat_Masuk$tujuanArgs<ExtArgs>
  }
  export type Surat_MasukIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    namaPengirimInternal?: boolean | Surat_Masuk$namaPengirimInternalArgs<ExtArgs>
    tujuan?: boolean | Surat_Masuk$tujuanArgs<ExtArgs>
  }
  export type Surat_MasukIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    namaPengirimInternal?: boolean | Surat_Masuk$namaPengirimInternalArgs<ExtArgs>
    tujuan?: boolean | Surat_Masuk$tujuanArgs<ExtArgs>
  }

  export type $Surat_MasukPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Surat_Masuk"
    objects: {
      namaPengirimInternal: Prisma.$UserPayload<ExtArgs> | null
      tujuan: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      perusahaanPengirim: string
      namaPengirimInternalId: string | null
      namaPengirimEksternal: string | null
      tujuanId: string | null
      satpam: string
      kurir: string | null
      plant: $Enums.Plant
      isAccepted: boolean
      keterangan: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["surat_Masuk"]>
    composites: {}
  }

  type Surat_MasukGetPayload<S extends boolean | null | undefined | Surat_MasukDefaultArgs> = $Result.GetResult<Prisma.$Surat_MasukPayload, S>

  type Surat_MasukCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Surat_MasukFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Surat_MasukCountAggregateInputType | true
    }

  export interface Surat_MasukDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Surat_Masuk'], meta: { name: 'Surat_Masuk' } }
    /**
     * Find zero or one Surat_Masuk that matches the filter.
     * @param {Surat_MasukFindUniqueArgs} args - Arguments to find a Surat_Masuk
     * @example
     * // Get one Surat_Masuk
     * const surat_Masuk = await prisma.surat_Masuk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Surat_MasukFindUniqueArgs>(args: SelectSubset<T, Surat_MasukFindUniqueArgs<ExtArgs>>): Prisma__Surat_MasukClient<$Result.GetResult<Prisma.$Surat_MasukPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Surat_Masuk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Surat_MasukFindUniqueOrThrowArgs} args - Arguments to find a Surat_Masuk
     * @example
     * // Get one Surat_Masuk
     * const surat_Masuk = await prisma.surat_Masuk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Surat_MasukFindUniqueOrThrowArgs>(args: SelectSubset<T, Surat_MasukFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Surat_MasukClient<$Result.GetResult<Prisma.$Surat_MasukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Surat_Masuk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Surat_MasukFindFirstArgs} args - Arguments to find a Surat_Masuk
     * @example
     * // Get one Surat_Masuk
     * const surat_Masuk = await prisma.surat_Masuk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Surat_MasukFindFirstArgs>(args?: SelectSubset<T, Surat_MasukFindFirstArgs<ExtArgs>>): Prisma__Surat_MasukClient<$Result.GetResult<Prisma.$Surat_MasukPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Surat_Masuk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Surat_MasukFindFirstOrThrowArgs} args - Arguments to find a Surat_Masuk
     * @example
     * // Get one Surat_Masuk
     * const surat_Masuk = await prisma.surat_Masuk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Surat_MasukFindFirstOrThrowArgs>(args?: SelectSubset<T, Surat_MasukFindFirstOrThrowArgs<ExtArgs>>): Prisma__Surat_MasukClient<$Result.GetResult<Prisma.$Surat_MasukPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Surat_Masuks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Surat_MasukFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Surat_Masuks
     * const surat_Masuks = await prisma.surat_Masuk.findMany()
     * 
     * // Get first 10 Surat_Masuks
     * const surat_Masuks = await prisma.surat_Masuk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surat_MasukWithIdOnly = await prisma.surat_Masuk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Surat_MasukFindManyArgs>(args?: SelectSubset<T, Surat_MasukFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Surat_MasukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Surat_Masuk.
     * @param {Surat_MasukCreateArgs} args - Arguments to create a Surat_Masuk.
     * @example
     * // Create one Surat_Masuk
     * const Surat_Masuk = await prisma.surat_Masuk.create({
     *   data: {
     *     // ... data to create a Surat_Masuk
     *   }
     * })
     * 
     */
    create<T extends Surat_MasukCreateArgs>(args: SelectSubset<T, Surat_MasukCreateArgs<ExtArgs>>): Prisma__Surat_MasukClient<$Result.GetResult<Prisma.$Surat_MasukPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Surat_Masuks.
     * @param {Surat_MasukCreateManyArgs} args - Arguments to create many Surat_Masuks.
     * @example
     * // Create many Surat_Masuks
     * const surat_Masuk = await prisma.surat_Masuk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Surat_MasukCreateManyArgs>(args?: SelectSubset<T, Surat_MasukCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Surat_Masuks and returns the data saved in the database.
     * @param {Surat_MasukCreateManyAndReturnArgs} args - Arguments to create many Surat_Masuks.
     * @example
     * // Create many Surat_Masuks
     * const surat_Masuk = await prisma.surat_Masuk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Surat_Masuks and only return the `id`
     * const surat_MasukWithIdOnly = await prisma.surat_Masuk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Surat_MasukCreateManyAndReturnArgs>(args?: SelectSubset<T, Surat_MasukCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Surat_MasukPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Surat_Masuk.
     * @param {Surat_MasukDeleteArgs} args - Arguments to delete one Surat_Masuk.
     * @example
     * // Delete one Surat_Masuk
     * const Surat_Masuk = await prisma.surat_Masuk.delete({
     *   where: {
     *     // ... filter to delete one Surat_Masuk
     *   }
     * })
     * 
     */
    delete<T extends Surat_MasukDeleteArgs>(args: SelectSubset<T, Surat_MasukDeleteArgs<ExtArgs>>): Prisma__Surat_MasukClient<$Result.GetResult<Prisma.$Surat_MasukPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Surat_Masuk.
     * @param {Surat_MasukUpdateArgs} args - Arguments to update one Surat_Masuk.
     * @example
     * // Update one Surat_Masuk
     * const surat_Masuk = await prisma.surat_Masuk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Surat_MasukUpdateArgs>(args: SelectSubset<T, Surat_MasukUpdateArgs<ExtArgs>>): Prisma__Surat_MasukClient<$Result.GetResult<Prisma.$Surat_MasukPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Surat_Masuks.
     * @param {Surat_MasukDeleteManyArgs} args - Arguments to filter Surat_Masuks to delete.
     * @example
     * // Delete a few Surat_Masuks
     * const { count } = await prisma.surat_Masuk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Surat_MasukDeleteManyArgs>(args?: SelectSubset<T, Surat_MasukDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surat_Masuks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Surat_MasukUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Surat_Masuks
     * const surat_Masuk = await prisma.surat_Masuk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Surat_MasukUpdateManyArgs>(args: SelectSubset<T, Surat_MasukUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surat_Masuks and returns the data updated in the database.
     * @param {Surat_MasukUpdateManyAndReturnArgs} args - Arguments to update many Surat_Masuks.
     * @example
     * // Update many Surat_Masuks
     * const surat_Masuk = await prisma.surat_Masuk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Surat_Masuks and only return the `id`
     * const surat_MasukWithIdOnly = await prisma.surat_Masuk.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Surat_MasukUpdateManyAndReturnArgs>(args: SelectSubset<T, Surat_MasukUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Surat_MasukPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Surat_Masuk.
     * @param {Surat_MasukUpsertArgs} args - Arguments to update or create a Surat_Masuk.
     * @example
     * // Update or create a Surat_Masuk
     * const surat_Masuk = await prisma.surat_Masuk.upsert({
     *   create: {
     *     // ... data to create a Surat_Masuk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Surat_Masuk we want to update
     *   }
     * })
     */
    upsert<T extends Surat_MasukUpsertArgs>(args: SelectSubset<T, Surat_MasukUpsertArgs<ExtArgs>>): Prisma__Surat_MasukClient<$Result.GetResult<Prisma.$Surat_MasukPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Surat_Masuks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Surat_MasukCountArgs} args - Arguments to filter Surat_Masuks to count.
     * @example
     * // Count the number of Surat_Masuks
     * const count = await prisma.surat_Masuk.count({
     *   where: {
     *     // ... the filter for the Surat_Masuks we want to count
     *   }
     * })
    **/
    count<T extends Surat_MasukCountArgs>(
      args?: Subset<T, Surat_MasukCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Surat_MasukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Surat_Masuk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Surat_MasukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Surat_MasukAggregateArgs>(args: Subset<T, Surat_MasukAggregateArgs>): Prisma.PrismaPromise<GetSurat_MasukAggregateType<T>>

    /**
     * Group by Surat_Masuk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Surat_MasukGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Surat_MasukGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Surat_MasukGroupByArgs['orderBy'] }
        : { orderBy?: Surat_MasukGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Surat_MasukGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurat_MasukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Surat_Masuk model
   */
  readonly fields: Surat_MasukFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Surat_Masuk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Surat_MasukClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    namaPengirimInternal<T extends Surat_Masuk$namaPengirimInternalArgs<ExtArgs> = {}>(args?: Subset<T, Surat_Masuk$namaPengirimInternalArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tujuan<T extends Surat_Masuk$tujuanArgs<ExtArgs> = {}>(args?: Subset<T, Surat_Masuk$tujuanArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Surat_Masuk model
   */
  interface Surat_MasukFieldRefs {
    readonly id: FieldRef<"Surat_Masuk", 'String'>
    readonly perusahaanPengirim: FieldRef<"Surat_Masuk", 'String'>
    readonly namaPengirimInternalId: FieldRef<"Surat_Masuk", 'String'>
    readonly namaPengirimEksternal: FieldRef<"Surat_Masuk", 'String'>
    readonly tujuanId: FieldRef<"Surat_Masuk", 'String'>
    readonly satpam: FieldRef<"Surat_Masuk", 'String'>
    readonly kurir: FieldRef<"Surat_Masuk", 'String'>
    readonly plant: FieldRef<"Surat_Masuk", 'Plant'>
    readonly isAccepted: FieldRef<"Surat_Masuk", 'Boolean'>
    readonly keterangan: FieldRef<"Surat_Masuk", 'String'>
    readonly createdAt: FieldRef<"Surat_Masuk", 'DateTime'>
    readonly updatedAt: FieldRef<"Surat_Masuk", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Surat_Masuk findUnique
   */
  export type Surat_MasukFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Masuk
     */
    select?: Surat_MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Masuk
     */
    omit?: Surat_MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_MasukInclude<ExtArgs> | null
    /**
     * Filter, which Surat_Masuk to fetch.
     */
    where: Surat_MasukWhereUniqueInput
  }

  /**
   * Surat_Masuk findUniqueOrThrow
   */
  export type Surat_MasukFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Masuk
     */
    select?: Surat_MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Masuk
     */
    omit?: Surat_MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_MasukInclude<ExtArgs> | null
    /**
     * Filter, which Surat_Masuk to fetch.
     */
    where: Surat_MasukWhereUniqueInput
  }

  /**
   * Surat_Masuk findFirst
   */
  export type Surat_MasukFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Masuk
     */
    select?: Surat_MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Masuk
     */
    omit?: Surat_MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_MasukInclude<ExtArgs> | null
    /**
     * Filter, which Surat_Masuk to fetch.
     */
    where?: Surat_MasukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surat_Masuks to fetch.
     */
    orderBy?: Surat_MasukOrderByWithRelationInput | Surat_MasukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surat_Masuks.
     */
    cursor?: Surat_MasukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surat_Masuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surat_Masuks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surat_Masuks.
     */
    distinct?: Surat_MasukScalarFieldEnum | Surat_MasukScalarFieldEnum[]
  }

  /**
   * Surat_Masuk findFirstOrThrow
   */
  export type Surat_MasukFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Masuk
     */
    select?: Surat_MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Masuk
     */
    omit?: Surat_MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_MasukInclude<ExtArgs> | null
    /**
     * Filter, which Surat_Masuk to fetch.
     */
    where?: Surat_MasukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surat_Masuks to fetch.
     */
    orderBy?: Surat_MasukOrderByWithRelationInput | Surat_MasukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surat_Masuks.
     */
    cursor?: Surat_MasukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surat_Masuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surat_Masuks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surat_Masuks.
     */
    distinct?: Surat_MasukScalarFieldEnum | Surat_MasukScalarFieldEnum[]
  }

  /**
   * Surat_Masuk findMany
   */
  export type Surat_MasukFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Masuk
     */
    select?: Surat_MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Masuk
     */
    omit?: Surat_MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_MasukInclude<ExtArgs> | null
    /**
     * Filter, which Surat_Masuks to fetch.
     */
    where?: Surat_MasukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surat_Masuks to fetch.
     */
    orderBy?: Surat_MasukOrderByWithRelationInput | Surat_MasukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Surat_Masuks.
     */
    cursor?: Surat_MasukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surat_Masuks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surat_Masuks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surat_Masuks.
     */
    distinct?: Surat_MasukScalarFieldEnum | Surat_MasukScalarFieldEnum[]
  }

  /**
   * Surat_Masuk create
   */
  export type Surat_MasukCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Masuk
     */
    select?: Surat_MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Masuk
     */
    omit?: Surat_MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_MasukInclude<ExtArgs> | null
    /**
     * The data needed to create a Surat_Masuk.
     */
    data: XOR<Surat_MasukCreateInput, Surat_MasukUncheckedCreateInput>
  }

  /**
   * Surat_Masuk createMany
   */
  export type Surat_MasukCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Surat_Masuks.
     */
    data: Surat_MasukCreateManyInput | Surat_MasukCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Surat_Masuk createManyAndReturn
   */
  export type Surat_MasukCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Masuk
     */
    select?: Surat_MasukSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Masuk
     */
    omit?: Surat_MasukOmit<ExtArgs> | null
    /**
     * The data used to create many Surat_Masuks.
     */
    data: Surat_MasukCreateManyInput | Surat_MasukCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_MasukIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Surat_Masuk update
   */
  export type Surat_MasukUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Masuk
     */
    select?: Surat_MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Masuk
     */
    omit?: Surat_MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_MasukInclude<ExtArgs> | null
    /**
     * The data needed to update a Surat_Masuk.
     */
    data: XOR<Surat_MasukUpdateInput, Surat_MasukUncheckedUpdateInput>
    /**
     * Choose, which Surat_Masuk to update.
     */
    where: Surat_MasukWhereUniqueInput
  }

  /**
   * Surat_Masuk updateMany
   */
  export type Surat_MasukUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Surat_Masuks.
     */
    data: XOR<Surat_MasukUpdateManyMutationInput, Surat_MasukUncheckedUpdateManyInput>
    /**
     * Filter which Surat_Masuks to update
     */
    where?: Surat_MasukWhereInput
    /**
     * Limit how many Surat_Masuks to update.
     */
    limit?: number
  }

  /**
   * Surat_Masuk updateManyAndReturn
   */
  export type Surat_MasukUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Masuk
     */
    select?: Surat_MasukSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Masuk
     */
    omit?: Surat_MasukOmit<ExtArgs> | null
    /**
     * The data used to update Surat_Masuks.
     */
    data: XOR<Surat_MasukUpdateManyMutationInput, Surat_MasukUncheckedUpdateManyInput>
    /**
     * Filter which Surat_Masuks to update
     */
    where?: Surat_MasukWhereInput
    /**
     * Limit how many Surat_Masuks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_MasukIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Surat_Masuk upsert
   */
  export type Surat_MasukUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Masuk
     */
    select?: Surat_MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Masuk
     */
    omit?: Surat_MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_MasukInclude<ExtArgs> | null
    /**
     * The filter to search for the Surat_Masuk to update in case it exists.
     */
    where: Surat_MasukWhereUniqueInput
    /**
     * In case the Surat_Masuk found by the `where` argument doesn't exist, create a new Surat_Masuk with this data.
     */
    create: XOR<Surat_MasukCreateInput, Surat_MasukUncheckedCreateInput>
    /**
     * In case the Surat_Masuk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Surat_MasukUpdateInput, Surat_MasukUncheckedUpdateInput>
  }

  /**
   * Surat_Masuk delete
   */
  export type Surat_MasukDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Masuk
     */
    select?: Surat_MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Masuk
     */
    omit?: Surat_MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_MasukInclude<ExtArgs> | null
    /**
     * Filter which Surat_Masuk to delete.
     */
    where: Surat_MasukWhereUniqueInput
  }

  /**
   * Surat_Masuk deleteMany
   */
  export type Surat_MasukDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surat_Masuks to delete
     */
    where?: Surat_MasukWhereInput
    /**
     * Limit how many Surat_Masuks to delete.
     */
    limit?: number
  }

  /**
   * Surat_Masuk.namaPengirimInternal
   */
  export type Surat_Masuk$namaPengirimInternalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Surat_Masuk.tujuan
   */
  export type Surat_Masuk$tujuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Surat_Masuk without action
   */
  export type Surat_MasukDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Masuk
     */
    select?: Surat_MasukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Masuk
     */
    omit?: Surat_MasukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_MasukInclude<ExtArgs> | null
  }


  /**
   * Model Surat_Keluar
   */

  export type AggregateSurat_Keluar = {
    _count: Surat_KeluarCountAggregateOutputType | null
    _min: Surat_KeluarMinAggregateOutputType | null
    _max: Surat_KeluarMaxAggregateOutputType | null
  }

  export type Surat_KeluarMinAggregateOutputType = {
    id: string | null
    namaPengirimId: string | null
    tujuanInternalId: string | null
    tujuanEksternal: string | null
    perusahaanEksternal: string | null
    satpam: string | null
    kurir: string | null
    plant: $Enums.Plant | null
    isDelivered: boolean | null
    keterangan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Surat_KeluarMaxAggregateOutputType = {
    id: string | null
    namaPengirimId: string | null
    tujuanInternalId: string | null
    tujuanEksternal: string | null
    perusahaanEksternal: string | null
    satpam: string | null
    kurir: string | null
    plant: $Enums.Plant | null
    isDelivered: boolean | null
    keterangan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Surat_KeluarCountAggregateOutputType = {
    id: number
    namaPengirimId: number
    tujuanInternalId: number
    tujuanEksternal: number
    perusahaanEksternal: number
    satpam: number
    kurir: number
    plant: number
    isDelivered: number
    keterangan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Surat_KeluarMinAggregateInputType = {
    id?: true
    namaPengirimId?: true
    tujuanInternalId?: true
    tujuanEksternal?: true
    perusahaanEksternal?: true
    satpam?: true
    kurir?: true
    plant?: true
    isDelivered?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Surat_KeluarMaxAggregateInputType = {
    id?: true
    namaPengirimId?: true
    tujuanInternalId?: true
    tujuanEksternal?: true
    perusahaanEksternal?: true
    satpam?: true
    kurir?: true
    plant?: true
    isDelivered?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Surat_KeluarCountAggregateInputType = {
    id?: true
    namaPengirimId?: true
    tujuanInternalId?: true
    tujuanEksternal?: true
    perusahaanEksternal?: true
    satpam?: true
    kurir?: true
    plant?: true
    isDelivered?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Surat_KeluarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surat_Keluar to aggregate.
     */
    where?: Surat_KeluarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surat_Keluars to fetch.
     */
    orderBy?: Surat_KeluarOrderByWithRelationInput | Surat_KeluarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Surat_KeluarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surat_Keluars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surat_Keluars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Surat_Keluars
    **/
    _count?: true | Surat_KeluarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Surat_KeluarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Surat_KeluarMaxAggregateInputType
  }

  export type GetSurat_KeluarAggregateType<T extends Surat_KeluarAggregateArgs> = {
        [P in keyof T & keyof AggregateSurat_Keluar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurat_Keluar[P]>
      : GetScalarType<T[P], AggregateSurat_Keluar[P]>
  }




  export type Surat_KeluarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Surat_KeluarWhereInput
    orderBy?: Surat_KeluarOrderByWithAggregationInput | Surat_KeluarOrderByWithAggregationInput[]
    by: Surat_KeluarScalarFieldEnum[] | Surat_KeluarScalarFieldEnum
    having?: Surat_KeluarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Surat_KeluarCountAggregateInputType | true
    _min?: Surat_KeluarMinAggregateInputType
    _max?: Surat_KeluarMaxAggregateInputType
  }

  export type Surat_KeluarGroupByOutputType = {
    id: string
    namaPengirimId: string | null
    tujuanInternalId: string | null
    tujuanEksternal: string | null
    perusahaanEksternal: string | null
    satpam: string
    kurir: string | null
    plant: $Enums.Plant
    isDelivered: boolean
    keterangan: string | null
    createdAt: Date
    updatedAt: Date
    _count: Surat_KeluarCountAggregateOutputType | null
    _min: Surat_KeluarMinAggregateOutputType | null
    _max: Surat_KeluarMaxAggregateOutputType | null
  }

  type GetSurat_KeluarGroupByPayload<T extends Surat_KeluarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Surat_KeluarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Surat_KeluarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Surat_KeluarGroupByOutputType[P]>
            : GetScalarType<T[P], Surat_KeluarGroupByOutputType[P]>
        }
      >
    >


  export type Surat_KeluarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaPengirimId?: boolean
    tujuanInternalId?: boolean
    tujuanEksternal?: boolean
    perusahaanEksternal?: boolean
    satpam?: boolean
    kurir?: boolean
    plant?: boolean
    isDelivered?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaPengirim?: boolean | Surat_Keluar$namaPengirimArgs<ExtArgs>
    tujuanInternal?: boolean | Surat_Keluar$tujuanInternalArgs<ExtArgs>
  }, ExtArgs["result"]["surat_Keluar"]>

  export type Surat_KeluarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaPengirimId?: boolean
    tujuanInternalId?: boolean
    tujuanEksternal?: boolean
    perusahaanEksternal?: boolean
    satpam?: boolean
    kurir?: boolean
    plant?: boolean
    isDelivered?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaPengirim?: boolean | Surat_Keluar$namaPengirimArgs<ExtArgs>
    tujuanInternal?: boolean | Surat_Keluar$tujuanInternalArgs<ExtArgs>
  }, ExtArgs["result"]["surat_Keluar"]>

  export type Surat_KeluarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaPengirimId?: boolean
    tujuanInternalId?: boolean
    tujuanEksternal?: boolean
    perusahaanEksternal?: boolean
    satpam?: boolean
    kurir?: boolean
    plant?: boolean
    isDelivered?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    namaPengirim?: boolean | Surat_Keluar$namaPengirimArgs<ExtArgs>
    tujuanInternal?: boolean | Surat_Keluar$tujuanInternalArgs<ExtArgs>
  }, ExtArgs["result"]["surat_Keluar"]>

  export type Surat_KeluarSelectScalar = {
    id?: boolean
    namaPengirimId?: boolean
    tujuanInternalId?: boolean
    tujuanEksternal?: boolean
    perusahaanEksternal?: boolean
    satpam?: boolean
    kurir?: boolean
    plant?: boolean
    isDelivered?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Surat_KeluarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaPengirimId" | "tujuanInternalId" | "tujuanEksternal" | "perusahaanEksternal" | "satpam" | "kurir" | "plant" | "isDelivered" | "keterangan" | "createdAt" | "updatedAt", ExtArgs["result"]["surat_Keluar"]>
  export type Surat_KeluarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    namaPengirim?: boolean | Surat_Keluar$namaPengirimArgs<ExtArgs>
    tujuanInternal?: boolean | Surat_Keluar$tujuanInternalArgs<ExtArgs>
  }
  export type Surat_KeluarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    namaPengirim?: boolean | Surat_Keluar$namaPengirimArgs<ExtArgs>
    tujuanInternal?: boolean | Surat_Keluar$tujuanInternalArgs<ExtArgs>
  }
  export type Surat_KeluarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    namaPengirim?: boolean | Surat_Keluar$namaPengirimArgs<ExtArgs>
    tujuanInternal?: boolean | Surat_Keluar$tujuanInternalArgs<ExtArgs>
  }

  export type $Surat_KeluarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Surat_Keluar"
    objects: {
      namaPengirim: Prisma.$UserPayload<ExtArgs> | null
      tujuanInternal: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      namaPengirimId: string | null
      tujuanInternalId: string | null
      tujuanEksternal: string | null
      perusahaanEksternal: string | null
      satpam: string
      kurir: string | null
      plant: $Enums.Plant
      isDelivered: boolean
      keterangan: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["surat_Keluar"]>
    composites: {}
  }

  type Surat_KeluarGetPayload<S extends boolean | null | undefined | Surat_KeluarDefaultArgs> = $Result.GetResult<Prisma.$Surat_KeluarPayload, S>

  type Surat_KeluarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Surat_KeluarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Surat_KeluarCountAggregateInputType | true
    }

  export interface Surat_KeluarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Surat_Keluar'], meta: { name: 'Surat_Keluar' } }
    /**
     * Find zero or one Surat_Keluar that matches the filter.
     * @param {Surat_KeluarFindUniqueArgs} args - Arguments to find a Surat_Keluar
     * @example
     * // Get one Surat_Keluar
     * const surat_Keluar = await prisma.surat_Keluar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Surat_KeluarFindUniqueArgs>(args: SelectSubset<T, Surat_KeluarFindUniqueArgs<ExtArgs>>): Prisma__Surat_KeluarClient<$Result.GetResult<Prisma.$Surat_KeluarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Surat_Keluar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Surat_KeluarFindUniqueOrThrowArgs} args - Arguments to find a Surat_Keluar
     * @example
     * // Get one Surat_Keluar
     * const surat_Keluar = await prisma.surat_Keluar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Surat_KeluarFindUniqueOrThrowArgs>(args: SelectSubset<T, Surat_KeluarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Surat_KeluarClient<$Result.GetResult<Prisma.$Surat_KeluarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Surat_Keluar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Surat_KeluarFindFirstArgs} args - Arguments to find a Surat_Keluar
     * @example
     * // Get one Surat_Keluar
     * const surat_Keluar = await prisma.surat_Keluar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Surat_KeluarFindFirstArgs>(args?: SelectSubset<T, Surat_KeluarFindFirstArgs<ExtArgs>>): Prisma__Surat_KeluarClient<$Result.GetResult<Prisma.$Surat_KeluarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Surat_Keluar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Surat_KeluarFindFirstOrThrowArgs} args - Arguments to find a Surat_Keluar
     * @example
     * // Get one Surat_Keluar
     * const surat_Keluar = await prisma.surat_Keluar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Surat_KeluarFindFirstOrThrowArgs>(args?: SelectSubset<T, Surat_KeluarFindFirstOrThrowArgs<ExtArgs>>): Prisma__Surat_KeluarClient<$Result.GetResult<Prisma.$Surat_KeluarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Surat_Keluars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Surat_KeluarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Surat_Keluars
     * const surat_Keluars = await prisma.surat_Keluar.findMany()
     * 
     * // Get first 10 Surat_Keluars
     * const surat_Keluars = await prisma.surat_Keluar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surat_KeluarWithIdOnly = await prisma.surat_Keluar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Surat_KeluarFindManyArgs>(args?: SelectSubset<T, Surat_KeluarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Surat_KeluarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Surat_Keluar.
     * @param {Surat_KeluarCreateArgs} args - Arguments to create a Surat_Keluar.
     * @example
     * // Create one Surat_Keluar
     * const Surat_Keluar = await prisma.surat_Keluar.create({
     *   data: {
     *     // ... data to create a Surat_Keluar
     *   }
     * })
     * 
     */
    create<T extends Surat_KeluarCreateArgs>(args: SelectSubset<T, Surat_KeluarCreateArgs<ExtArgs>>): Prisma__Surat_KeluarClient<$Result.GetResult<Prisma.$Surat_KeluarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Surat_Keluars.
     * @param {Surat_KeluarCreateManyArgs} args - Arguments to create many Surat_Keluars.
     * @example
     * // Create many Surat_Keluars
     * const surat_Keluar = await prisma.surat_Keluar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Surat_KeluarCreateManyArgs>(args?: SelectSubset<T, Surat_KeluarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Surat_Keluars and returns the data saved in the database.
     * @param {Surat_KeluarCreateManyAndReturnArgs} args - Arguments to create many Surat_Keluars.
     * @example
     * // Create many Surat_Keluars
     * const surat_Keluar = await prisma.surat_Keluar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Surat_Keluars and only return the `id`
     * const surat_KeluarWithIdOnly = await prisma.surat_Keluar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Surat_KeluarCreateManyAndReturnArgs>(args?: SelectSubset<T, Surat_KeluarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Surat_KeluarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Surat_Keluar.
     * @param {Surat_KeluarDeleteArgs} args - Arguments to delete one Surat_Keluar.
     * @example
     * // Delete one Surat_Keluar
     * const Surat_Keluar = await prisma.surat_Keluar.delete({
     *   where: {
     *     // ... filter to delete one Surat_Keluar
     *   }
     * })
     * 
     */
    delete<T extends Surat_KeluarDeleteArgs>(args: SelectSubset<T, Surat_KeluarDeleteArgs<ExtArgs>>): Prisma__Surat_KeluarClient<$Result.GetResult<Prisma.$Surat_KeluarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Surat_Keluar.
     * @param {Surat_KeluarUpdateArgs} args - Arguments to update one Surat_Keluar.
     * @example
     * // Update one Surat_Keluar
     * const surat_Keluar = await prisma.surat_Keluar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Surat_KeluarUpdateArgs>(args: SelectSubset<T, Surat_KeluarUpdateArgs<ExtArgs>>): Prisma__Surat_KeluarClient<$Result.GetResult<Prisma.$Surat_KeluarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Surat_Keluars.
     * @param {Surat_KeluarDeleteManyArgs} args - Arguments to filter Surat_Keluars to delete.
     * @example
     * // Delete a few Surat_Keluars
     * const { count } = await prisma.surat_Keluar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Surat_KeluarDeleteManyArgs>(args?: SelectSubset<T, Surat_KeluarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surat_Keluars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Surat_KeluarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Surat_Keluars
     * const surat_Keluar = await prisma.surat_Keluar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Surat_KeluarUpdateManyArgs>(args: SelectSubset<T, Surat_KeluarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surat_Keluars and returns the data updated in the database.
     * @param {Surat_KeluarUpdateManyAndReturnArgs} args - Arguments to update many Surat_Keluars.
     * @example
     * // Update many Surat_Keluars
     * const surat_Keluar = await prisma.surat_Keluar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Surat_Keluars and only return the `id`
     * const surat_KeluarWithIdOnly = await prisma.surat_Keluar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Surat_KeluarUpdateManyAndReturnArgs>(args: SelectSubset<T, Surat_KeluarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Surat_KeluarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Surat_Keluar.
     * @param {Surat_KeluarUpsertArgs} args - Arguments to update or create a Surat_Keluar.
     * @example
     * // Update or create a Surat_Keluar
     * const surat_Keluar = await prisma.surat_Keluar.upsert({
     *   create: {
     *     // ... data to create a Surat_Keluar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Surat_Keluar we want to update
     *   }
     * })
     */
    upsert<T extends Surat_KeluarUpsertArgs>(args: SelectSubset<T, Surat_KeluarUpsertArgs<ExtArgs>>): Prisma__Surat_KeluarClient<$Result.GetResult<Prisma.$Surat_KeluarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Surat_Keluars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Surat_KeluarCountArgs} args - Arguments to filter Surat_Keluars to count.
     * @example
     * // Count the number of Surat_Keluars
     * const count = await prisma.surat_Keluar.count({
     *   where: {
     *     // ... the filter for the Surat_Keluars we want to count
     *   }
     * })
    **/
    count<T extends Surat_KeluarCountArgs>(
      args?: Subset<T, Surat_KeluarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Surat_KeluarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Surat_Keluar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Surat_KeluarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Surat_KeluarAggregateArgs>(args: Subset<T, Surat_KeluarAggregateArgs>): Prisma.PrismaPromise<GetSurat_KeluarAggregateType<T>>

    /**
     * Group by Surat_Keluar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Surat_KeluarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Surat_KeluarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Surat_KeluarGroupByArgs['orderBy'] }
        : { orderBy?: Surat_KeluarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Surat_KeluarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurat_KeluarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Surat_Keluar model
   */
  readonly fields: Surat_KeluarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Surat_Keluar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Surat_KeluarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    namaPengirim<T extends Surat_Keluar$namaPengirimArgs<ExtArgs> = {}>(args?: Subset<T, Surat_Keluar$namaPengirimArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tujuanInternal<T extends Surat_Keluar$tujuanInternalArgs<ExtArgs> = {}>(args?: Subset<T, Surat_Keluar$tujuanInternalArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Surat_Keluar model
   */
  interface Surat_KeluarFieldRefs {
    readonly id: FieldRef<"Surat_Keluar", 'String'>
    readonly namaPengirimId: FieldRef<"Surat_Keluar", 'String'>
    readonly tujuanInternalId: FieldRef<"Surat_Keluar", 'String'>
    readonly tujuanEksternal: FieldRef<"Surat_Keluar", 'String'>
    readonly perusahaanEksternal: FieldRef<"Surat_Keluar", 'String'>
    readonly satpam: FieldRef<"Surat_Keluar", 'String'>
    readonly kurir: FieldRef<"Surat_Keluar", 'String'>
    readonly plant: FieldRef<"Surat_Keluar", 'Plant'>
    readonly isDelivered: FieldRef<"Surat_Keluar", 'Boolean'>
    readonly keterangan: FieldRef<"Surat_Keluar", 'String'>
    readonly createdAt: FieldRef<"Surat_Keluar", 'DateTime'>
    readonly updatedAt: FieldRef<"Surat_Keluar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Surat_Keluar findUnique
   */
  export type Surat_KeluarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Keluar
     */
    select?: Surat_KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Keluar
     */
    omit?: Surat_KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_KeluarInclude<ExtArgs> | null
    /**
     * Filter, which Surat_Keluar to fetch.
     */
    where: Surat_KeluarWhereUniqueInput
  }

  /**
   * Surat_Keluar findUniqueOrThrow
   */
  export type Surat_KeluarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Keluar
     */
    select?: Surat_KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Keluar
     */
    omit?: Surat_KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_KeluarInclude<ExtArgs> | null
    /**
     * Filter, which Surat_Keluar to fetch.
     */
    where: Surat_KeluarWhereUniqueInput
  }

  /**
   * Surat_Keluar findFirst
   */
  export type Surat_KeluarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Keluar
     */
    select?: Surat_KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Keluar
     */
    omit?: Surat_KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_KeluarInclude<ExtArgs> | null
    /**
     * Filter, which Surat_Keluar to fetch.
     */
    where?: Surat_KeluarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surat_Keluars to fetch.
     */
    orderBy?: Surat_KeluarOrderByWithRelationInput | Surat_KeluarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surat_Keluars.
     */
    cursor?: Surat_KeluarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surat_Keluars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surat_Keluars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surat_Keluars.
     */
    distinct?: Surat_KeluarScalarFieldEnum | Surat_KeluarScalarFieldEnum[]
  }

  /**
   * Surat_Keluar findFirstOrThrow
   */
  export type Surat_KeluarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Keluar
     */
    select?: Surat_KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Keluar
     */
    omit?: Surat_KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_KeluarInclude<ExtArgs> | null
    /**
     * Filter, which Surat_Keluar to fetch.
     */
    where?: Surat_KeluarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surat_Keluars to fetch.
     */
    orderBy?: Surat_KeluarOrderByWithRelationInput | Surat_KeluarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Surat_Keluars.
     */
    cursor?: Surat_KeluarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surat_Keluars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surat_Keluars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surat_Keluars.
     */
    distinct?: Surat_KeluarScalarFieldEnum | Surat_KeluarScalarFieldEnum[]
  }

  /**
   * Surat_Keluar findMany
   */
  export type Surat_KeluarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Keluar
     */
    select?: Surat_KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Keluar
     */
    omit?: Surat_KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_KeluarInclude<ExtArgs> | null
    /**
     * Filter, which Surat_Keluars to fetch.
     */
    where?: Surat_KeluarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Surat_Keluars to fetch.
     */
    orderBy?: Surat_KeluarOrderByWithRelationInput | Surat_KeluarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Surat_Keluars.
     */
    cursor?: Surat_KeluarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Surat_Keluars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Surat_Keluars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Surat_Keluars.
     */
    distinct?: Surat_KeluarScalarFieldEnum | Surat_KeluarScalarFieldEnum[]
  }

  /**
   * Surat_Keluar create
   */
  export type Surat_KeluarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Keluar
     */
    select?: Surat_KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Keluar
     */
    omit?: Surat_KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_KeluarInclude<ExtArgs> | null
    /**
     * The data needed to create a Surat_Keluar.
     */
    data: XOR<Surat_KeluarCreateInput, Surat_KeluarUncheckedCreateInput>
  }

  /**
   * Surat_Keluar createMany
   */
  export type Surat_KeluarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Surat_Keluars.
     */
    data: Surat_KeluarCreateManyInput | Surat_KeluarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Surat_Keluar createManyAndReturn
   */
  export type Surat_KeluarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Keluar
     */
    select?: Surat_KeluarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Keluar
     */
    omit?: Surat_KeluarOmit<ExtArgs> | null
    /**
     * The data used to create many Surat_Keluars.
     */
    data: Surat_KeluarCreateManyInput | Surat_KeluarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_KeluarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Surat_Keluar update
   */
  export type Surat_KeluarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Keluar
     */
    select?: Surat_KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Keluar
     */
    omit?: Surat_KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_KeluarInclude<ExtArgs> | null
    /**
     * The data needed to update a Surat_Keluar.
     */
    data: XOR<Surat_KeluarUpdateInput, Surat_KeluarUncheckedUpdateInput>
    /**
     * Choose, which Surat_Keluar to update.
     */
    where: Surat_KeluarWhereUniqueInput
  }

  /**
   * Surat_Keluar updateMany
   */
  export type Surat_KeluarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Surat_Keluars.
     */
    data: XOR<Surat_KeluarUpdateManyMutationInput, Surat_KeluarUncheckedUpdateManyInput>
    /**
     * Filter which Surat_Keluars to update
     */
    where?: Surat_KeluarWhereInput
    /**
     * Limit how many Surat_Keluars to update.
     */
    limit?: number
  }

  /**
   * Surat_Keluar updateManyAndReturn
   */
  export type Surat_KeluarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Keluar
     */
    select?: Surat_KeluarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Keluar
     */
    omit?: Surat_KeluarOmit<ExtArgs> | null
    /**
     * The data used to update Surat_Keluars.
     */
    data: XOR<Surat_KeluarUpdateManyMutationInput, Surat_KeluarUncheckedUpdateManyInput>
    /**
     * Filter which Surat_Keluars to update
     */
    where?: Surat_KeluarWhereInput
    /**
     * Limit how many Surat_Keluars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_KeluarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Surat_Keluar upsert
   */
  export type Surat_KeluarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Keluar
     */
    select?: Surat_KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Keluar
     */
    omit?: Surat_KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_KeluarInclude<ExtArgs> | null
    /**
     * The filter to search for the Surat_Keluar to update in case it exists.
     */
    where: Surat_KeluarWhereUniqueInput
    /**
     * In case the Surat_Keluar found by the `where` argument doesn't exist, create a new Surat_Keluar with this data.
     */
    create: XOR<Surat_KeluarCreateInput, Surat_KeluarUncheckedCreateInput>
    /**
     * In case the Surat_Keluar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Surat_KeluarUpdateInput, Surat_KeluarUncheckedUpdateInput>
  }

  /**
   * Surat_Keluar delete
   */
  export type Surat_KeluarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Keluar
     */
    select?: Surat_KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Keluar
     */
    omit?: Surat_KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_KeluarInclude<ExtArgs> | null
    /**
     * Filter which Surat_Keluar to delete.
     */
    where: Surat_KeluarWhereUniqueInput
  }

  /**
   * Surat_Keluar deleteMany
   */
  export type Surat_KeluarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Surat_Keluars to delete
     */
    where?: Surat_KeluarWhereInput
    /**
     * Limit how many Surat_Keluars to delete.
     */
    limit?: number
  }

  /**
   * Surat_Keluar.namaPengirim
   */
  export type Surat_Keluar$namaPengirimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Surat_Keluar.tujuanInternal
   */
  export type Surat_Keluar$tujuanInternalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Surat_Keluar without action
   */
  export type Surat_KeluarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Surat_Keluar
     */
    select?: Surat_KeluarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Surat_Keluar
     */
    omit?: Surat_KeluarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Surat_KeluarInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: string | null
    nama: string | null
    motor1: string | null
    motor2: string | null
    mobil1: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    motor1: string | null
    motor2: string | null
    mobil1: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    nama: number
    motor1: number
    motor2: number
    mobil1: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeMinAggregateInputType = {
    id?: true
    nama?: true
    motor1?: true
    motor2?: true
    mobil1?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    nama?: true
    motor1?: true
    motor2?: true
    mobil1?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    nama?: true
    motor1?: true
    motor2?: true
    mobil1?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: string
    nama: string
    motor1: string | null
    motor2: string | null
    mobil1: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    motor1?: boolean
    motor2?: boolean
    mobil1?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    absensi?: boolean | Employee$absensiArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    motor1?: boolean
    motor2?: boolean
    mobil1?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    motor1?: boolean
    motor2?: boolean
    mobil1?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    nama?: boolean
    motor1?: boolean
    motor2?: boolean
    mobil1?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "motor1" | "motor2" | "mobil1" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    absensi?: boolean | Employee$absensiArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      absensi: Prisma.$AbsensiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      motor1: string | null
      motor2: string | null
      mobil1: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    absensi<T extends Employee$absensiArgs<ExtArgs> = {}>(args?: Subset<T, Employee$absensiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'String'>
    readonly nama: FieldRef<"Employee", 'String'>
    readonly motor1: FieldRef<"Employee", 'String'>
    readonly motor2: FieldRef<"Employee", 'String'>
    readonly mobil1: FieldRef<"Employee", 'String'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.absensi
   */
  export type Employee$absensiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    where?: AbsensiWhereInput
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    cursor?: AbsensiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Absensi
   */

  export type AggregateAbsensi = {
    _count: AbsensiCountAggregateOutputType | null
    _min: AbsensiMinAggregateOutputType | null
    _max: AbsensiMaxAggregateOutputType | null
  }

  export type AbsensiMinAggregateOutputType = {
    id: string | null
    nopol: string | null
    plant: $Enums.Plant | null
    employeeId: string | null
    kendaraan: $Enums.Kendaraan | null
    keterangan: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AbsensiMaxAggregateOutputType = {
    id: string | null
    nopol: string | null
    plant: $Enums.Plant | null
    employeeId: string | null
    kendaraan: $Enums.Kendaraan | null
    keterangan: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AbsensiCountAggregateOutputType = {
    id: number
    nopol: number
    plant: number
    employeeId: number
    kendaraan: number
    keterangan: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AbsensiMinAggregateInputType = {
    id?: true
    nopol?: true
    plant?: true
    employeeId?: true
    kendaraan?: true
    keterangan?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AbsensiMaxAggregateInputType = {
    id?: true
    nopol?: true
    plant?: true
    employeeId?: true
    kendaraan?: true
    keterangan?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AbsensiCountAggregateInputType = {
    id?: true
    nopol?: true
    plant?: true
    employeeId?: true
    kendaraan?: true
    keterangan?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AbsensiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Absensi to aggregate.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Absensis
    **/
    _count?: true | AbsensiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbsensiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbsensiMaxAggregateInputType
  }

  export type GetAbsensiAggregateType<T extends AbsensiAggregateArgs> = {
        [P in keyof T & keyof AggregateAbsensi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbsensi[P]>
      : GetScalarType<T[P], AggregateAbsensi[P]>
  }




  export type AbsensiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbsensiWhereInput
    orderBy?: AbsensiOrderByWithAggregationInput | AbsensiOrderByWithAggregationInput[]
    by: AbsensiScalarFieldEnum[] | AbsensiScalarFieldEnum
    having?: AbsensiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbsensiCountAggregateInputType | true
    _min?: AbsensiMinAggregateInputType
    _max?: AbsensiMaxAggregateInputType
  }

  export type AbsensiGroupByOutputType = {
    id: string
    nopol: string | null
    plant: $Enums.Plant
    employeeId: string
    kendaraan: $Enums.Kendaraan
    keterangan: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AbsensiCountAggregateOutputType | null
    _min: AbsensiMinAggregateOutputType | null
    _max: AbsensiMaxAggregateOutputType | null
  }

  type GetAbsensiGroupByPayload<T extends AbsensiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbsensiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbsensiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbsensiGroupByOutputType[P]>
            : GetScalarType<T[P], AbsensiGroupByOutputType[P]>
        }
      >
    >


  export type AbsensiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nopol?: boolean
    plant?: boolean
    employeeId?: boolean
    kendaraan?: boolean
    keterangan?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absensi"]>

  export type AbsensiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nopol?: boolean
    plant?: boolean
    employeeId?: boolean
    kendaraan?: boolean
    keterangan?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absensi"]>

  export type AbsensiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nopol?: boolean
    plant?: boolean
    employeeId?: boolean
    kendaraan?: boolean
    keterangan?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["absensi"]>

  export type AbsensiSelectScalar = {
    id?: boolean
    nopol?: boolean
    plant?: boolean
    employeeId?: boolean
    kendaraan?: boolean
    keterangan?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AbsensiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nopol" | "plant" | "employeeId" | "kendaraan" | "keterangan" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["absensi"]>
  export type AbsensiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type AbsensiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type AbsensiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $AbsensiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Absensi"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nopol: string | null
      plant: $Enums.Plant
      employeeId: string
      kendaraan: $Enums.Kendaraan
      keterangan: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["absensi"]>
    composites: {}
  }

  type AbsensiGetPayload<S extends boolean | null | undefined | AbsensiDefaultArgs> = $Result.GetResult<Prisma.$AbsensiPayload, S>

  type AbsensiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AbsensiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbsensiCountAggregateInputType | true
    }

  export interface AbsensiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Absensi'], meta: { name: 'Absensi' } }
    /**
     * Find zero or one Absensi that matches the filter.
     * @param {AbsensiFindUniqueArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AbsensiFindUniqueArgs>(args: SelectSubset<T, AbsensiFindUniqueArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Absensi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AbsensiFindUniqueOrThrowArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AbsensiFindUniqueOrThrowArgs>(args: SelectSubset<T, AbsensiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Absensi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiFindFirstArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AbsensiFindFirstArgs>(args?: SelectSubset<T, AbsensiFindFirstArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Absensi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiFindFirstOrThrowArgs} args - Arguments to find a Absensi
     * @example
     * // Get one Absensi
     * const absensi = await prisma.absensi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AbsensiFindFirstOrThrowArgs>(args?: SelectSubset<T, AbsensiFindFirstOrThrowArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Absensis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Absensis
     * const absensis = await prisma.absensi.findMany()
     * 
     * // Get first 10 Absensis
     * const absensis = await prisma.absensi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const absensiWithIdOnly = await prisma.absensi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AbsensiFindManyArgs>(args?: SelectSubset<T, AbsensiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Absensi.
     * @param {AbsensiCreateArgs} args - Arguments to create a Absensi.
     * @example
     * // Create one Absensi
     * const Absensi = await prisma.absensi.create({
     *   data: {
     *     // ... data to create a Absensi
     *   }
     * })
     * 
     */
    create<T extends AbsensiCreateArgs>(args: SelectSubset<T, AbsensiCreateArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Absensis.
     * @param {AbsensiCreateManyArgs} args - Arguments to create many Absensis.
     * @example
     * // Create many Absensis
     * const absensi = await prisma.absensi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AbsensiCreateManyArgs>(args?: SelectSubset<T, AbsensiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Absensis and returns the data saved in the database.
     * @param {AbsensiCreateManyAndReturnArgs} args - Arguments to create many Absensis.
     * @example
     * // Create many Absensis
     * const absensi = await prisma.absensi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Absensis and only return the `id`
     * const absensiWithIdOnly = await prisma.absensi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AbsensiCreateManyAndReturnArgs>(args?: SelectSubset<T, AbsensiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Absensi.
     * @param {AbsensiDeleteArgs} args - Arguments to delete one Absensi.
     * @example
     * // Delete one Absensi
     * const Absensi = await prisma.absensi.delete({
     *   where: {
     *     // ... filter to delete one Absensi
     *   }
     * })
     * 
     */
    delete<T extends AbsensiDeleteArgs>(args: SelectSubset<T, AbsensiDeleteArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Absensi.
     * @param {AbsensiUpdateArgs} args - Arguments to update one Absensi.
     * @example
     * // Update one Absensi
     * const absensi = await prisma.absensi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AbsensiUpdateArgs>(args: SelectSubset<T, AbsensiUpdateArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Absensis.
     * @param {AbsensiDeleteManyArgs} args - Arguments to filter Absensis to delete.
     * @example
     * // Delete a few Absensis
     * const { count } = await prisma.absensi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AbsensiDeleteManyArgs>(args?: SelectSubset<T, AbsensiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Absensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Absensis
     * const absensi = await prisma.absensi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AbsensiUpdateManyArgs>(args: SelectSubset<T, AbsensiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Absensis and returns the data updated in the database.
     * @param {AbsensiUpdateManyAndReturnArgs} args - Arguments to update many Absensis.
     * @example
     * // Update many Absensis
     * const absensi = await prisma.absensi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Absensis and only return the `id`
     * const absensiWithIdOnly = await prisma.absensi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AbsensiUpdateManyAndReturnArgs>(args: SelectSubset<T, AbsensiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Absensi.
     * @param {AbsensiUpsertArgs} args - Arguments to update or create a Absensi.
     * @example
     * // Update or create a Absensi
     * const absensi = await prisma.absensi.upsert({
     *   create: {
     *     // ... data to create a Absensi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Absensi we want to update
     *   }
     * })
     */
    upsert<T extends AbsensiUpsertArgs>(args: SelectSubset<T, AbsensiUpsertArgs<ExtArgs>>): Prisma__AbsensiClient<$Result.GetResult<Prisma.$AbsensiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Absensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiCountArgs} args - Arguments to filter Absensis to count.
     * @example
     * // Count the number of Absensis
     * const count = await prisma.absensi.count({
     *   where: {
     *     // ... the filter for the Absensis we want to count
     *   }
     * })
    **/
    count<T extends AbsensiCountArgs>(
      args?: Subset<T, AbsensiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbsensiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Absensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AbsensiAggregateArgs>(args: Subset<T, AbsensiAggregateArgs>): Prisma.PrismaPromise<GetAbsensiAggregateType<T>>

    /**
     * Group by Absensi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbsensiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AbsensiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbsensiGroupByArgs['orderBy'] }
        : { orderBy?: AbsensiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AbsensiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbsensiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Absensi model
   */
  readonly fields: AbsensiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Absensi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbsensiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Absensi model
   */
  interface AbsensiFieldRefs {
    readonly id: FieldRef<"Absensi", 'String'>
    readonly nopol: FieldRef<"Absensi", 'String'>
    readonly plant: FieldRef<"Absensi", 'Plant'>
    readonly employeeId: FieldRef<"Absensi", 'String'>
    readonly kendaraan: FieldRef<"Absensi", 'Kendaraan'>
    readonly keterangan: FieldRef<"Absensi", 'String'>
    readonly isActive: FieldRef<"Absensi", 'Boolean'>
    readonly createdAt: FieldRef<"Absensi", 'DateTime'>
    readonly updatedAt: FieldRef<"Absensi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Absensi findUnique
   */
  export type AbsensiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi findUniqueOrThrow
   */
  export type AbsensiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi findFirst
   */
  export type AbsensiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Absensis.
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Absensis.
     */
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Absensi findFirstOrThrow
   */
  export type AbsensiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensi to fetch.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Absensis.
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Absensis.
     */
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Absensi findMany
   */
  export type AbsensiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter, which Absensis to fetch.
     */
    where?: AbsensiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Absensis to fetch.
     */
    orderBy?: AbsensiOrderByWithRelationInput | AbsensiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Absensis.
     */
    cursor?: AbsensiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Absensis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Absensis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Absensis.
     */
    distinct?: AbsensiScalarFieldEnum | AbsensiScalarFieldEnum[]
  }

  /**
   * Absensi create
   */
  export type AbsensiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * The data needed to create a Absensi.
     */
    data: XOR<AbsensiCreateInput, AbsensiUncheckedCreateInput>
  }

  /**
   * Absensi createMany
   */
  export type AbsensiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Absensis.
     */
    data: AbsensiCreateManyInput | AbsensiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Absensi createManyAndReturn
   */
  export type AbsensiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * The data used to create many Absensis.
     */
    data: AbsensiCreateManyInput | AbsensiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Absensi update
   */
  export type AbsensiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * The data needed to update a Absensi.
     */
    data: XOR<AbsensiUpdateInput, AbsensiUncheckedUpdateInput>
    /**
     * Choose, which Absensi to update.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi updateMany
   */
  export type AbsensiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Absensis.
     */
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyInput>
    /**
     * Filter which Absensis to update
     */
    where?: AbsensiWhereInput
    /**
     * Limit how many Absensis to update.
     */
    limit?: number
  }

  /**
   * Absensi updateManyAndReturn
   */
  export type AbsensiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * The data used to update Absensis.
     */
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyInput>
    /**
     * Filter which Absensis to update
     */
    where?: AbsensiWhereInput
    /**
     * Limit how many Absensis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Absensi upsert
   */
  export type AbsensiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * The filter to search for the Absensi to update in case it exists.
     */
    where: AbsensiWhereUniqueInput
    /**
     * In case the Absensi found by the `where` argument doesn't exist, create a new Absensi with this data.
     */
    create: XOR<AbsensiCreateInput, AbsensiUncheckedCreateInput>
    /**
     * In case the Absensi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbsensiUpdateInput, AbsensiUncheckedUpdateInput>
  }

  /**
   * Absensi delete
   */
  export type AbsensiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
    /**
     * Filter which Absensi to delete.
     */
    where: AbsensiWhereUniqueInput
  }

  /**
   * Absensi deleteMany
   */
  export type AbsensiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Absensis to delete
     */
    where?: AbsensiWhereInput
    /**
     * Limit how many Absensis to delete.
     */
    limit?: number
  }

  /**
   * Absensi without action
   */
  export type AbsensiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Absensi
     */
    select?: AbsensiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Absensi
     */
    omit?: AbsensiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AbsensiInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    departement: 'departement',
    name: 'name',
    plant: 'plant',
    username: 'username',
    password: 'password',
    role: 'role',
    refresh_token: 'refresh_token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GuestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    company: 'company',
    phone: 'phone',
    plateNumber: 'plateNumber',
    purpose: 'purpose',
    identity: 'identity',
    plant: 'plant',
    itemName: 'itemName',
    quantity: 'quantity',
    description: 'description',
    isActive: 'isActive',
    isAprove: 'isAprove',
    picId: 'picId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuestScalarFieldEnum = (typeof GuestScalarFieldEnum)[keyof typeof GuestScalarFieldEnum]


  export const Surat_MasukScalarFieldEnum: {
    id: 'id',
    perusahaanPengirim: 'perusahaanPengirim',
    namaPengirimInternalId: 'namaPengirimInternalId',
    namaPengirimEksternal: 'namaPengirimEksternal',
    tujuanId: 'tujuanId',
    satpam: 'satpam',
    kurir: 'kurir',
    plant: 'plant',
    isAccepted: 'isAccepted',
    keterangan: 'keterangan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Surat_MasukScalarFieldEnum = (typeof Surat_MasukScalarFieldEnum)[keyof typeof Surat_MasukScalarFieldEnum]


  export const Surat_KeluarScalarFieldEnum: {
    id: 'id',
    namaPengirimId: 'namaPengirimId',
    tujuanInternalId: 'tujuanInternalId',
    tujuanEksternal: 'tujuanEksternal',
    perusahaanEksternal: 'perusahaanEksternal',
    satpam: 'satpam',
    kurir: 'kurir',
    plant: 'plant',
    isDelivered: 'isDelivered',
    keterangan: 'keterangan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Surat_KeluarScalarFieldEnum = (typeof Surat_KeluarScalarFieldEnum)[keyof typeof Surat_KeluarScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    motor1: 'motor1',
    motor2: 'motor2',
    mobil1: 'mobil1',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const AbsensiScalarFieldEnum: {
    id: 'id',
    nopol: 'nopol',
    plant: 'plant',
    employeeId: 'employeeId',
    kendaraan: 'kendaraan',
    keterangan: 'keterangan',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AbsensiScalarFieldEnum = (typeof AbsensiScalarFieldEnum)[keyof typeof AbsensiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Plant'
   */
  export type EnumPlantFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plant'>
    


  /**
   * Reference to a field of type 'Plant[]'
   */
  export type ListEnumPlantFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plant[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Kendaraan'
   */
  export type EnumKendaraanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Kendaraan'>
    


  /**
   * Reference to a field of type 'Kendaraan[]'
   */
  export type ListEnumKendaraanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Kendaraan[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    departement?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    plant?: EnumPlantFilter<"User"> | $Enums.Plant
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    refresh_token?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    guests?: GuestListRelationFilter
    surat_keluar_pengirim?: Surat_KeluarListRelationFilter
    surat_keluar_tujuan?: Surat_KeluarListRelationFilter
    surat_masuk?: Surat_MasukListRelationFilter
    tujuan_masuk?: Surat_MasukListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    departement?: SortOrder
    name?: SortOrder
    plant?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    refresh_token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guests?: GuestOrderByRelationAggregateInput
    surat_keluar_pengirim?: Surat_KeluarOrderByRelationAggregateInput
    surat_keluar_tujuan?: Surat_KeluarOrderByRelationAggregateInput
    surat_masuk?: Surat_MasukOrderByRelationAggregateInput
    tujuan_masuk?: Surat_MasukOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    departement?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    plant?: EnumPlantFilter<"User"> | $Enums.Plant
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    refresh_token?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    guests?: GuestListRelationFilter
    surat_keluar_pengirim?: Surat_KeluarListRelationFilter
    surat_keluar_tujuan?: Surat_KeluarListRelationFilter
    surat_masuk?: Surat_MasukListRelationFilter
    tujuan_masuk?: Surat_MasukListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    departement?: SortOrder
    name?: SortOrder
    plant?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    refresh_token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    departement?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    plant?: EnumPlantWithAggregatesFilter<"User"> | $Enums.Plant
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    refresh_token?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GuestWhereInput = {
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    id?: StringFilter<"Guest"> | string
    name?: StringFilter<"Guest"> | string
    company?: StringFilter<"Guest"> | string
    phone?: StringFilter<"Guest"> | string
    plateNumber?: StringFilter<"Guest"> | string
    purpose?: StringFilter<"Guest"> | string
    identity?: StringFilter<"Guest"> | string
    plant?: EnumPlantFilter<"Guest"> | $Enums.Plant
    itemName?: StringNullableFilter<"Guest"> | string | null
    quantity?: StringNullableFilter<"Guest"> | string | null
    description?: StringNullableFilter<"Guest"> | string | null
    isActive?: BoolFilter<"Guest"> | boolean
    isAprove?: BoolFilter<"Guest"> | boolean
    picId?: StringNullableFilter<"Guest"> | string | null
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    updatedAt?: DateTimeFilter<"Guest"> | Date | string
    pic?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type GuestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    plateNumber?: SortOrder
    purpose?: SortOrder
    identity?: SortOrder
    plant?: SortOrder
    itemName?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isAprove?: SortOrder
    picId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pic?: UserOrderByWithRelationInput
  }

  export type GuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GuestWhereInput | GuestWhereInput[]
    OR?: GuestWhereInput[]
    NOT?: GuestWhereInput | GuestWhereInput[]
    name?: StringFilter<"Guest"> | string
    company?: StringFilter<"Guest"> | string
    phone?: StringFilter<"Guest"> | string
    plateNumber?: StringFilter<"Guest"> | string
    purpose?: StringFilter<"Guest"> | string
    identity?: StringFilter<"Guest"> | string
    plant?: EnumPlantFilter<"Guest"> | $Enums.Plant
    itemName?: StringNullableFilter<"Guest"> | string | null
    quantity?: StringNullableFilter<"Guest"> | string | null
    description?: StringNullableFilter<"Guest"> | string | null
    isActive?: BoolFilter<"Guest"> | boolean
    isAprove?: BoolFilter<"Guest"> | boolean
    picId?: StringNullableFilter<"Guest"> | string | null
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    updatedAt?: DateTimeFilter<"Guest"> | Date | string
    pic?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type GuestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    plateNumber?: SortOrder
    purpose?: SortOrder
    identity?: SortOrder
    plant?: SortOrder
    itemName?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isAprove?: SortOrder
    picId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuestCountOrderByAggregateInput
    _max?: GuestMaxOrderByAggregateInput
    _min?: GuestMinOrderByAggregateInput
  }

  export type GuestScalarWhereWithAggregatesInput = {
    AND?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    OR?: GuestScalarWhereWithAggregatesInput[]
    NOT?: GuestScalarWhereWithAggregatesInput | GuestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Guest"> | string
    name?: StringWithAggregatesFilter<"Guest"> | string
    company?: StringWithAggregatesFilter<"Guest"> | string
    phone?: StringWithAggregatesFilter<"Guest"> | string
    plateNumber?: StringWithAggregatesFilter<"Guest"> | string
    purpose?: StringWithAggregatesFilter<"Guest"> | string
    identity?: StringWithAggregatesFilter<"Guest"> | string
    plant?: EnumPlantWithAggregatesFilter<"Guest"> | $Enums.Plant
    itemName?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    quantity?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    description?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    isActive?: BoolWithAggregatesFilter<"Guest"> | boolean
    isAprove?: BoolWithAggregatesFilter<"Guest"> | boolean
    picId?: StringNullableWithAggregatesFilter<"Guest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Guest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Guest"> | Date | string
  }

  export type Surat_MasukWhereInput = {
    AND?: Surat_MasukWhereInput | Surat_MasukWhereInput[]
    OR?: Surat_MasukWhereInput[]
    NOT?: Surat_MasukWhereInput | Surat_MasukWhereInput[]
    id?: StringFilter<"Surat_Masuk"> | string
    perusahaanPengirim?: StringFilter<"Surat_Masuk"> | string
    namaPengirimInternalId?: StringNullableFilter<"Surat_Masuk"> | string | null
    namaPengirimEksternal?: StringNullableFilter<"Surat_Masuk"> | string | null
    tujuanId?: StringNullableFilter<"Surat_Masuk"> | string | null
    satpam?: StringFilter<"Surat_Masuk"> | string
    kurir?: StringNullableFilter<"Surat_Masuk"> | string | null
    plant?: EnumPlantFilter<"Surat_Masuk"> | $Enums.Plant
    isAccepted?: BoolFilter<"Surat_Masuk"> | boolean
    keterangan?: StringNullableFilter<"Surat_Masuk"> | string | null
    createdAt?: DateTimeFilter<"Surat_Masuk"> | Date | string
    updatedAt?: DateTimeFilter<"Surat_Masuk"> | Date | string
    namaPengirimInternal?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tujuan?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type Surat_MasukOrderByWithRelationInput = {
    id?: SortOrder
    perusahaanPengirim?: SortOrder
    namaPengirimInternalId?: SortOrderInput | SortOrder
    namaPengirimEksternal?: SortOrderInput | SortOrder
    tujuanId?: SortOrderInput | SortOrder
    satpam?: SortOrder
    kurir?: SortOrderInput | SortOrder
    plant?: SortOrder
    isAccepted?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaPengirimInternal?: UserOrderByWithRelationInput
    tujuan?: UserOrderByWithRelationInput
  }

  export type Surat_MasukWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Surat_MasukWhereInput | Surat_MasukWhereInput[]
    OR?: Surat_MasukWhereInput[]
    NOT?: Surat_MasukWhereInput | Surat_MasukWhereInput[]
    perusahaanPengirim?: StringFilter<"Surat_Masuk"> | string
    namaPengirimInternalId?: StringNullableFilter<"Surat_Masuk"> | string | null
    namaPengirimEksternal?: StringNullableFilter<"Surat_Masuk"> | string | null
    tujuanId?: StringNullableFilter<"Surat_Masuk"> | string | null
    satpam?: StringFilter<"Surat_Masuk"> | string
    kurir?: StringNullableFilter<"Surat_Masuk"> | string | null
    plant?: EnumPlantFilter<"Surat_Masuk"> | $Enums.Plant
    isAccepted?: BoolFilter<"Surat_Masuk"> | boolean
    keterangan?: StringNullableFilter<"Surat_Masuk"> | string | null
    createdAt?: DateTimeFilter<"Surat_Masuk"> | Date | string
    updatedAt?: DateTimeFilter<"Surat_Masuk"> | Date | string
    namaPengirimInternal?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tujuan?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type Surat_MasukOrderByWithAggregationInput = {
    id?: SortOrder
    perusahaanPengirim?: SortOrder
    namaPengirimInternalId?: SortOrderInput | SortOrder
    namaPengirimEksternal?: SortOrderInput | SortOrder
    tujuanId?: SortOrderInput | SortOrder
    satpam?: SortOrder
    kurir?: SortOrderInput | SortOrder
    plant?: SortOrder
    isAccepted?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Surat_MasukCountOrderByAggregateInput
    _max?: Surat_MasukMaxOrderByAggregateInput
    _min?: Surat_MasukMinOrderByAggregateInput
  }

  export type Surat_MasukScalarWhereWithAggregatesInput = {
    AND?: Surat_MasukScalarWhereWithAggregatesInput | Surat_MasukScalarWhereWithAggregatesInput[]
    OR?: Surat_MasukScalarWhereWithAggregatesInput[]
    NOT?: Surat_MasukScalarWhereWithAggregatesInput | Surat_MasukScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Surat_Masuk"> | string
    perusahaanPengirim?: StringWithAggregatesFilter<"Surat_Masuk"> | string
    namaPengirimInternalId?: StringNullableWithAggregatesFilter<"Surat_Masuk"> | string | null
    namaPengirimEksternal?: StringNullableWithAggregatesFilter<"Surat_Masuk"> | string | null
    tujuanId?: StringNullableWithAggregatesFilter<"Surat_Masuk"> | string | null
    satpam?: StringWithAggregatesFilter<"Surat_Masuk"> | string
    kurir?: StringNullableWithAggregatesFilter<"Surat_Masuk"> | string | null
    plant?: EnumPlantWithAggregatesFilter<"Surat_Masuk"> | $Enums.Plant
    isAccepted?: BoolWithAggregatesFilter<"Surat_Masuk"> | boolean
    keterangan?: StringNullableWithAggregatesFilter<"Surat_Masuk"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Surat_Masuk"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Surat_Masuk"> | Date | string
  }

  export type Surat_KeluarWhereInput = {
    AND?: Surat_KeluarWhereInput | Surat_KeluarWhereInput[]
    OR?: Surat_KeluarWhereInput[]
    NOT?: Surat_KeluarWhereInput | Surat_KeluarWhereInput[]
    id?: StringFilter<"Surat_Keluar"> | string
    namaPengirimId?: StringNullableFilter<"Surat_Keluar"> | string | null
    tujuanInternalId?: StringNullableFilter<"Surat_Keluar"> | string | null
    tujuanEksternal?: StringNullableFilter<"Surat_Keluar"> | string | null
    perusahaanEksternal?: StringNullableFilter<"Surat_Keluar"> | string | null
    satpam?: StringFilter<"Surat_Keluar"> | string
    kurir?: StringNullableFilter<"Surat_Keluar"> | string | null
    plant?: EnumPlantFilter<"Surat_Keluar"> | $Enums.Plant
    isDelivered?: BoolFilter<"Surat_Keluar"> | boolean
    keterangan?: StringNullableFilter<"Surat_Keluar"> | string | null
    createdAt?: DateTimeFilter<"Surat_Keluar"> | Date | string
    updatedAt?: DateTimeFilter<"Surat_Keluar"> | Date | string
    namaPengirim?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tujuanInternal?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type Surat_KeluarOrderByWithRelationInput = {
    id?: SortOrder
    namaPengirimId?: SortOrderInput | SortOrder
    tujuanInternalId?: SortOrderInput | SortOrder
    tujuanEksternal?: SortOrderInput | SortOrder
    perusahaanEksternal?: SortOrderInput | SortOrder
    satpam?: SortOrder
    kurir?: SortOrderInput | SortOrder
    plant?: SortOrder
    isDelivered?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    namaPengirim?: UserOrderByWithRelationInput
    tujuanInternal?: UserOrderByWithRelationInput
  }

  export type Surat_KeluarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Surat_KeluarWhereInput | Surat_KeluarWhereInput[]
    OR?: Surat_KeluarWhereInput[]
    NOT?: Surat_KeluarWhereInput | Surat_KeluarWhereInput[]
    namaPengirimId?: StringNullableFilter<"Surat_Keluar"> | string | null
    tujuanInternalId?: StringNullableFilter<"Surat_Keluar"> | string | null
    tujuanEksternal?: StringNullableFilter<"Surat_Keluar"> | string | null
    perusahaanEksternal?: StringNullableFilter<"Surat_Keluar"> | string | null
    satpam?: StringFilter<"Surat_Keluar"> | string
    kurir?: StringNullableFilter<"Surat_Keluar"> | string | null
    plant?: EnumPlantFilter<"Surat_Keluar"> | $Enums.Plant
    isDelivered?: BoolFilter<"Surat_Keluar"> | boolean
    keterangan?: StringNullableFilter<"Surat_Keluar"> | string | null
    createdAt?: DateTimeFilter<"Surat_Keluar"> | Date | string
    updatedAt?: DateTimeFilter<"Surat_Keluar"> | Date | string
    namaPengirim?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    tujuanInternal?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type Surat_KeluarOrderByWithAggregationInput = {
    id?: SortOrder
    namaPengirimId?: SortOrderInput | SortOrder
    tujuanInternalId?: SortOrderInput | SortOrder
    tujuanEksternal?: SortOrderInput | SortOrder
    perusahaanEksternal?: SortOrderInput | SortOrder
    satpam?: SortOrder
    kurir?: SortOrderInput | SortOrder
    plant?: SortOrder
    isDelivered?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Surat_KeluarCountOrderByAggregateInput
    _max?: Surat_KeluarMaxOrderByAggregateInput
    _min?: Surat_KeluarMinOrderByAggregateInput
  }

  export type Surat_KeluarScalarWhereWithAggregatesInput = {
    AND?: Surat_KeluarScalarWhereWithAggregatesInput | Surat_KeluarScalarWhereWithAggregatesInput[]
    OR?: Surat_KeluarScalarWhereWithAggregatesInput[]
    NOT?: Surat_KeluarScalarWhereWithAggregatesInput | Surat_KeluarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Surat_Keluar"> | string
    namaPengirimId?: StringNullableWithAggregatesFilter<"Surat_Keluar"> | string | null
    tujuanInternalId?: StringNullableWithAggregatesFilter<"Surat_Keluar"> | string | null
    tujuanEksternal?: StringNullableWithAggregatesFilter<"Surat_Keluar"> | string | null
    perusahaanEksternal?: StringNullableWithAggregatesFilter<"Surat_Keluar"> | string | null
    satpam?: StringWithAggregatesFilter<"Surat_Keluar"> | string
    kurir?: StringNullableWithAggregatesFilter<"Surat_Keluar"> | string | null
    plant?: EnumPlantWithAggregatesFilter<"Surat_Keluar"> | $Enums.Plant
    isDelivered?: BoolWithAggregatesFilter<"Surat_Keluar"> | boolean
    keterangan?: StringNullableWithAggregatesFilter<"Surat_Keluar"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Surat_Keluar"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Surat_Keluar"> | Date | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: StringFilter<"Employee"> | string
    nama?: StringFilter<"Employee"> | string
    motor1?: StringNullableFilter<"Employee"> | string | null
    motor2?: StringNullableFilter<"Employee"> | string | null
    mobil1?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    absensi?: AbsensiListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    motor1?: SortOrderInput | SortOrder
    motor2?: SortOrderInput | SortOrder
    mobil1?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    absensi?: AbsensiOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    nama?: StringFilter<"Employee"> | string
    motor1?: StringNullableFilter<"Employee"> | string | null
    motor2?: StringNullableFilter<"Employee"> | string | null
    mobil1?: StringNullableFilter<"Employee"> | string | null
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    absensi?: AbsensiListRelationFilter
  }, "id">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    motor1?: SortOrderInput | SortOrder
    motor2?: SortOrderInput | SortOrder
    mobil1?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employee"> | string
    nama?: StringWithAggregatesFilter<"Employee"> | string
    motor1?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    motor2?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    mobil1?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type AbsensiWhereInput = {
    AND?: AbsensiWhereInput | AbsensiWhereInput[]
    OR?: AbsensiWhereInput[]
    NOT?: AbsensiWhereInput | AbsensiWhereInput[]
    id?: StringFilter<"Absensi"> | string
    nopol?: StringNullableFilter<"Absensi"> | string | null
    plant?: EnumPlantFilter<"Absensi"> | $Enums.Plant
    employeeId?: StringFilter<"Absensi"> | string
    kendaraan?: EnumKendaraanFilter<"Absensi"> | $Enums.Kendaraan
    keterangan?: StringNullableFilter<"Absensi"> | string | null
    isActive?: BoolFilter<"Absensi"> | boolean
    createdAt?: DateTimeFilter<"Absensi"> | Date | string
    updatedAt?: DateTimeFilter<"Absensi"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type AbsensiOrderByWithRelationInput = {
    id?: SortOrder
    nopol?: SortOrderInput | SortOrder
    plant?: SortOrder
    employeeId?: SortOrder
    kendaraan?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type AbsensiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AbsensiWhereInput | AbsensiWhereInput[]
    OR?: AbsensiWhereInput[]
    NOT?: AbsensiWhereInput | AbsensiWhereInput[]
    nopol?: StringNullableFilter<"Absensi"> | string | null
    plant?: EnumPlantFilter<"Absensi"> | $Enums.Plant
    employeeId?: StringFilter<"Absensi"> | string
    kendaraan?: EnumKendaraanFilter<"Absensi"> | $Enums.Kendaraan
    keterangan?: StringNullableFilter<"Absensi"> | string | null
    isActive?: BoolFilter<"Absensi"> | boolean
    createdAt?: DateTimeFilter<"Absensi"> | Date | string
    updatedAt?: DateTimeFilter<"Absensi"> | Date | string
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type AbsensiOrderByWithAggregationInput = {
    id?: SortOrder
    nopol?: SortOrderInput | SortOrder
    plant?: SortOrder
    employeeId?: SortOrder
    kendaraan?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AbsensiCountOrderByAggregateInput
    _max?: AbsensiMaxOrderByAggregateInput
    _min?: AbsensiMinOrderByAggregateInput
  }

  export type AbsensiScalarWhereWithAggregatesInput = {
    AND?: AbsensiScalarWhereWithAggregatesInput | AbsensiScalarWhereWithAggregatesInput[]
    OR?: AbsensiScalarWhereWithAggregatesInput[]
    NOT?: AbsensiScalarWhereWithAggregatesInput | AbsensiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Absensi"> | string
    nopol?: StringNullableWithAggregatesFilter<"Absensi"> | string | null
    plant?: EnumPlantWithAggregatesFilter<"Absensi"> | $Enums.Plant
    employeeId?: StringWithAggregatesFilter<"Absensi"> | string
    kendaraan?: EnumKendaraanWithAggregatesFilter<"Absensi"> | $Enums.Kendaraan
    keterangan?: StringNullableWithAggregatesFilter<"Absensi"> | string | null
    isActive?: BoolWithAggregatesFilter<"Absensi"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Absensi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Absensi"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    departement: string
    name: string
    plant: $Enums.Plant
    username: string
    password: string
    role: $Enums.Role
    refresh_token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: GuestCreateNestedManyWithoutPicInput
    surat_keluar_pengirim?: Surat_KeluarCreateNestedManyWithoutNamaPengirimInput
    surat_keluar_tujuan?: Surat_KeluarCreateNestedManyWithoutTujuanInternalInput
    surat_masuk?: Surat_MasukCreateNestedManyWithoutNamaPengirimInternalInput
    tujuan_masuk?: Surat_MasukCreateNestedManyWithoutTujuanInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    departement: string
    name: string
    plant: $Enums.Plant
    username: string
    password: string
    role: $Enums.Role
    refresh_token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: GuestUncheckedCreateNestedManyWithoutPicInput
    surat_keluar_pengirim?: Surat_KeluarUncheckedCreateNestedManyWithoutNamaPengirimInput
    surat_keluar_tujuan?: Surat_KeluarUncheckedCreateNestedManyWithoutTujuanInternalInput
    surat_masuk?: Surat_MasukUncheckedCreateNestedManyWithoutNamaPengirimInternalInput
    tujuan_masuk?: Surat_MasukUncheckedCreateNestedManyWithoutTujuanInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: GuestUpdateManyWithoutPicNestedInput
    surat_keluar_pengirim?: Surat_KeluarUpdateManyWithoutNamaPengirimNestedInput
    surat_keluar_tujuan?: Surat_KeluarUpdateManyWithoutTujuanInternalNestedInput
    surat_masuk?: Surat_MasukUpdateManyWithoutNamaPengirimInternalNestedInput
    tujuan_masuk?: Surat_MasukUpdateManyWithoutTujuanNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: GuestUncheckedUpdateManyWithoutPicNestedInput
    surat_keluar_pengirim?: Surat_KeluarUncheckedUpdateManyWithoutNamaPengirimNestedInput
    surat_keluar_tujuan?: Surat_KeluarUncheckedUpdateManyWithoutTujuanInternalNestedInput
    surat_masuk?: Surat_MasukUncheckedUpdateManyWithoutNamaPengirimInternalNestedInput
    tujuan_masuk?: Surat_MasukUncheckedUpdateManyWithoutTujuanNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    departement: string
    name: string
    plant: $Enums.Plant
    username: string
    password: string
    role: $Enums.Role
    refresh_token: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestCreateInput = {
    id?: string
    name: string
    company: string
    phone: string
    plateNumber: string
    purpose: string
    identity: string
    plant: $Enums.Plant
    itemName?: string | null
    quantity?: string | null
    description?: string | null
    isActive?: boolean
    isAprove?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pic?: UserCreateNestedOneWithoutGuestsInput
  }

  export type GuestUncheckedCreateInput = {
    id?: string
    name: string
    company: string
    phone: string
    plateNumber: string
    purpose: string
    identity: string
    plant: $Enums.Plant
    itemName?: string | null
    quantity?: string | null
    description?: string | null
    isActive?: boolean
    isAprove?: boolean
    picId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    identity?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    itemName?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAprove?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pic?: UserUpdateOneWithoutGuestsNestedInput
  }

  export type GuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    identity?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    itemName?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAprove?: BoolFieldUpdateOperationsInput | boolean
    picId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestCreateManyInput = {
    id?: string
    name: string
    company: string
    phone: string
    plateNumber: string
    purpose: string
    identity: string
    plant: $Enums.Plant
    itemName?: string | null
    quantity?: string | null
    description?: string | null
    isActive?: boolean
    isAprove?: boolean
    picId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    identity?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    itemName?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAprove?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    identity?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    itemName?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAprove?: BoolFieldUpdateOperationsInput | boolean
    picId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Surat_MasukCreateInput = {
    id?: string
    perusahaanPengirim: string
    namaPengirimEksternal?: string | null
    satpam: string
    kurir?: string | null
    plant: $Enums.Plant
    isAccepted?: boolean
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    namaPengirimInternal?: UserCreateNestedOneWithoutSurat_masukInput
    tujuan?: UserCreateNestedOneWithoutTujuan_masukInput
  }

  export type Surat_MasukUncheckedCreateInput = {
    id?: string
    perusahaanPengirim: string
    namaPengirimInternalId?: string | null
    namaPengirimEksternal?: string | null
    tujuanId?: string | null
    satpam: string
    kurir?: string | null
    plant: $Enums.Plant
    isAccepted?: boolean
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Surat_MasukUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    perusahaanPengirim?: StringFieldUpdateOperationsInput | string
    namaPengirimEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaPengirimInternal?: UserUpdateOneWithoutSurat_masukNestedInput
    tujuan?: UserUpdateOneWithoutTujuan_masukNestedInput
  }

  export type Surat_MasukUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    perusahaanPengirim?: StringFieldUpdateOperationsInput | string
    namaPengirimInternalId?: NullableStringFieldUpdateOperationsInput | string | null
    namaPengirimEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    tujuanId?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Surat_MasukCreateManyInput = {
    id?: string
    perusahaanPengirim: string
    namaPengirimInternalId?: string | null
    namaPengirimEksternal?: string | null
    tujuanId?: string | null
    satpam: string
    kurir?: string | null
    plant: $Enums.Plant
    isAccepted?: boolean
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Surat_MasukUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    perusahaanPengirim?: StringFieldUpdateOperationsInput | string
    namaPengirimEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Surat_MasukUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    perusahaanPengirim?: StringFieldUpdateOperationsInput | string
    namaPengirimInternalId?: NullableStringFieldUpdateOperationsInput | string | null
    namaPengirimEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    tujuanId?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Surat_KeluarCreateInput = {
    id?: string
    tujuanEksternal?: string | null
    perusahaanEksternal?: string | null
    satpam: string
    kurir?: string | null
    plant: $Enums.Plant
    isDelivered?: boolean
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    namaPengirim?: UserCreateNestedOneWithoutSurat_keluar_pengirimInput
    tujuanInternal?: UserCreateNestedOneWithoutSurat_keluar_tujuanInput
  }

  export type Surat_KeluarUncheckedCreateInput = {
    id?: string
    namaPengirimId?: string | null
    tujuanInternalId?: string | null
    tujuanEksternal?: string | null
    perusahaanEksternal?: string | null
    satpam: string
    kurir?: string | null
    plant: $Enums.Plant
    isDelivered?: boolean
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Surat_KeluarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tujuanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    perusahaanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaPengirim?: UserUpdateOneWithoutSurat_keluar_pengirimNestedInput
    tujuanInternal?: UserUpdateOneWithoutSurat_keluar_tujuanNestedInput
  }

  export type Surat_KeluarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaPengirimId?: NullableStringFieldUpdateOperationsInput | string | null
    tujuanInternalId?: NullableStringFieldUpdateOperationsInput | string | null
    tujuanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    perusahaanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Surat_KeluarCreateManyInput = {
    id?: string
    namaPengirimId?: string | null
    tujuanInternalId?: string | null
    tujuanEksternal?: string | null
    perusahaanEksternal?: string | null
    satpam: string
    kurir?: string | null
    plant: $Enums.Plant
    isDelivered?: boolean
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Surat_KeluarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tujuanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    perusahaanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Surat_KeluarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaPengirimId?: NullableStringFieldUpdateOperationsInput | string | null
    tujuanInternalId?: NullableStringFieldUpdateOperationsInput | string | null
    tujuanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    perusahaanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateInput = {
    id?: string
    nama: string
    motor1?: string | null
    motor2?: string | null
    mobil1?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    absensi?: AbsensiCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: string
    nama: string
    motor1?: string | null
    motor2?: string | null
    mobil1?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    absensi?: AbsensiUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    motor1?: NullableStringFieldUpdateOperationsInput | string | null
    motor2?: NullableStringFieldUpdateOperationsInput | string | null
    mobil1?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    absensi?: AbsensiUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    motor1?: NullableStringFieldUpdateOperationsInput | string | null
    motor2?: NullableStringFieldUpdateOperationsInput | string | null
    mobil1?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    absensi?: AbsensiUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: string
    nama: string
    motor1?: string | null
    motor2?: string | null
    mobil1?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    motor1?: NullableStringFieldUpdateOperationsInput | string | null
    motor2?: NullableStringFieldUpdateOperationsInput | string | null
    mobil1?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    motor1?: NullableStringFieldUpdateOperationsInput | string | null
    motor2?: NullableStringFieldUpdateOperationsInput | string | null
    mobil1?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiCreateInput = {
    id?: string
    nopol?: string | null
    plant: $Enums.Plant
    kendaraan?: $Enums.Kendaraan
    keterangan?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutAbsensiInput
  }

  export type AbsensiUncheckedCreateInput = {
    id?: string
    nopol?: string | null
    plant: $Enums.Plant
    employeeId: string
    kendaraan?: $Enums.Kendaraan
    keterangan?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbsensiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nopol?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    kendaraan?: EnumKendaraanFieldUpdateOperationsInput | $Enums.Kendaraan
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutAbsensiNestedInput
  }

  export type AbsensiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nopol?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    employeeId?: StringFieldUpdateOperationsInput | string
    kendaraan?: EnumKendaraanFieldUpdateOperationsInput | $Enums.Kendaraan
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiCreateManyInput = {
    id?: string
    nopol?: string | null
    plant: $Enums.Plant
    employeeId: string
    kendaraan?: $Enums.Kendaraan
    keterangan?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbsensiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nopol?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    kendaraan?: EnumKendaraanFieldUpdateOperationsInput | $Enums.Kendaraan
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nopol?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    employeeId?: StringFieldUpdateOperationsInput | string
    kendaraan?: EnumKendaraanFieldUpdateOperationsInput | $Enums.Kendaraan
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumPlantFilter<$PrismaModel = never> = {
    equals?: $Enums.Plant | EnumPlantFieldRefInput<$PrismaModel>
    in?: $Enums.Plant[] | ListEnumPlantFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plant[] | ListEnumPlantFieldRefInput<$PrismaModel>
    not?: NestedEnumPlantFilter<$PrismaModel> | $Enums.Plant
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GuestListRelationFilter = {
    every?: GuestWhereInput
    some?: GuestWhereInput
    none?: GuestWhereInput
  }

  export type Surat_KeluarListRelationFilter = {
    every?: Surat_KeluarWhereInput
    some?: Surat_KeluarWhereInput
    none?: Surat_KeluarWhereInput
  }

  export type Surat_MasukListRelationFilter = {
    every?: Surat_MasukWhereInput
    some?: Surat_MasukWhereInput
    none?: Surat_MasukWhereInput
  }

  export type GuestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Surat_KeluarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Surat_MasukOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    departement?: SortOrder
    name?: SortOrder
    plant?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    refresh_token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    departement?: SortOrder
    name?: SortOrder
    plant?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    refresh_token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    departement?: SortOrder
    name?: SortOrder
    plant?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    refresh_token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumPlantWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plant | EnumPlantFieldRefInput<$PrismaModel>
    in?: $Enums.Plant[] | ListEnumPlantFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plant[] | ListEnumPlantFieldRefInput<$PrismaModel>
    not?: NestedEnumPlantWithAggregatesFilter<$PrismaModel> | $Enums.Plant
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlantFilter<$PrismaModel>
    _max?: NestedEnumPlantFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GuestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    plateNumber?: SortOrder
    purpose?: SortOrder
    identity?: SortOrder
    plant?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    isAprove?: SortOrder
    picId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    plateNumber?: SortOrder
    purpose?: SortOrder
    identity?: SortOrder
    plant?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    isAprove?: SortOrder
    picId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    company?: SortOrder
    phone?: SortOrder
    plateNumber?: SortOrder
    purpose?: SortOrder
    identity?: SortOrder
    plant?: SortOrder
    itemName?: SortOrder
    quantity?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    isAprove?: SortOrder
    picId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Surat_MasukCountOrderByAggregateInput = {
    id?: SortOrder
    perusahaanPengirim?: SortOrder
    namaPengirimInternalId?: SortOrder
    namaPengirimEksternal?: SortOrder
    tujuanId?: SortOrder
    satpam?: SortOrder
    kurir?: SortOrder
    plant?: SortOrder
    isAccepted?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Surat_MasukMaxOrderByAggregateInput = {
    id?: SortOrder
    perusahaanPengirim?: SortOrder
    namaPengirimInternalId?: SortOrder
    namaPengirimEksternal?: SortOrder
    tujuanId?: SortOrder
    satpam?: SortOrder
    kurir?: SortOrder
    plant?: SortOrder
    isAccepted?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Surat_MasukMinOrderByAggregateInput = {
    id?: SortOrder
    perusahaanPengirim?: SortOrder
    namaPengirimInternalId?: SortOrder
    namaPengirimEksternal?: SortOrder
    tujuanId?: SortOrder
    satpam?: SortOrder
    kurir?: SortOrder
    plant?: SortOrder
    isAccepted?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Surat_KeluarCountOrderByAggregateInput = {
    id?: SortOrder
    namaPengirimId?: SortOrder
    tujuanInternalId?: SortOrder
    tujuanEksternal?: SortOrder
    perusahaanEksternal?: SortOrder
    satpam?: SortOrder
    kurir?: SortOrder
    plant?: SortOrder
    isDelivered?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Surat_KeluarMaxOrderByAggregateInput = {
    id?: SortOrder
    namaPengirimId?: SortOrder
    tujuanInternalId?: SortOrder
    tujuanEksternal?: SortOrder
    perusahaanEksternal?: SortOrder
    satpam?: SortOrder
    kurir?: SortOrder
    plant?: SortOrder
    isDelivered?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Surat_KeluarMinOrderByAggregateInput = {
    id?: SortOrder
    namaPengirimId?: SortOrder
    tujuanInternalId?: SortOrder
    tujuanEksternal?: SortOrder
    perusahaanEksternal?: SortOrder
    satpam?: SortOrder
    kurir?: SortOrder
    plant?: SortOrder
    isDelivered?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AbsensiListRelationFilter = {
    every?: AbsensiWhereInput
    some?: AbsensiWhereInput
    none?: AbsensiWhereInput
  }

  export type AbsensiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    motor1?: SortOrder
    motor2?: SortOrder
    mobil1?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    motor1?: SortOrder
    motor2?: SortOrder
    mobil1?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    motor1?: SortOrder
    motor2?: SortOrder
    mobil1?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumKendaraanFilter<$PrismaModel = never> = {
    equals?: $Enums.Kendaraan | EnumKendaraanFieldRefInput<$PrismaModel>
    in?: $Enums.Kendaraan[] | ListEnumKendaraanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kendaraan[] | ListEnumKendaraanFieldRefInput<$PrismaModel>
    not?: NestedEnumKendaraanFilter<$PrismaModel> | $Enums.Kendaraan
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type AbsensiCountOrderByAggregateInput = {
    id?: SortOrder
    nopol?: SortOrder
    plant?: SortOrder
    employeeId?: SortOrder
    kendaraan?: SortOrder
    keterangan?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AbsensiMaxOrderByAggregateInput = {
    id?: SortOrder
    nopol?: SortOrder
    plant?: SortOrder
    employeeId?: SortOrder
    kendaraan?: SortOrder
    keterangan?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AbsensiMinOrderByAggregateInput = {
    id?: SortOrder
    nopol?: SortOrder
    plant?: SortOrder
    employeeId?: SortOrder
    kendaraan?: SortOrder
    keterangan?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumKendaraanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Kendaraan | EnumKendaraanFieldRefInput<$PrismaModel>
    in?: $Enums.Kendaraan[] | ListEnumKendaraanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kendaraan[] | ListEnumKendaraanFieldRefInput<$PrismaModel>
    not?: NestedEnumKendaraanWithAggregatesFilter<$PrismaModel> | $Enums.Kendaraan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKendaraanFilter<$PrismaModel>
    _max?: NestedEnumKendaraanFilter<$PrismaModel>
  }

  export type GuestCreateNestedManyWithoutPicInput = {
    create?: XOR<GuestCreateWithoutPicInput, GuestUncheckedCreateWithoutPicInput> | GuestCreateWithoutPicInput[] | GuestUncheckedCreateWithoutPicInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutPicInput | GuestCreateOrConnectWithoutPicInput[]
    createMany?: GuestCreateManyPicInputEnvelope
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
  }

  export type Surat_KeluarCreateNestedManyWithoutNamaPengirimInput = {
    create?: XOR<Surat_KeluarCreateWithoutNamaPengirimInput, Surat_KeluarUncheckedCreateWithoutNamaPengirimInput> | Surat_KeluarCreateWithoutNamaPengirimInput[] | Surat_KeluarUncheckedCreateWithoutNamaPengirimInput[]
    connectOrCreate?: Surat_KeluarCreateOrConnectWithoutNamaPengirimInput | Surat_KeluarCreateOrConnectWithoutNamaPengirimInput[]
    createMany?: Surat_KeluarCreateManyNamaPengirimInputEnvelope
    connect?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
  }

  export type Surat_KeluarCreateNestedManyWithoutTujuanInternalInput = {
    create?: XOR<Surat_KeluarCreateWithoutTujuanInternalInput, Surat_KeluarUncheckedCreateWithoutTujuanInternalInput> | Surat_KeluarCreateWithoutTujuanInternalInput[] | Surat_KeluarUncheckedCreateWithoutTujuanInternalInput[]
    connectOrCreate?: Surat_KeluarCreateOrConnectWithoutTujuanInternalInput | Surat_KeluarCreateOrConnectWithoutTujuanInternalInput[]
    createMany?: Surat_KeluarCreateManyTujuanInternalInputEnvelope
    connect?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
  }

  export type Surat_MasukCreateNestedManyWithoutNamaPengirimInternalInput = {
    create?: XOR<Surat_MasukCreateWithoutNamaPengirimInternalInput, Surat_MasukUncheckedCreateWithoutNamaPengirimInternalInput> | Surat_MasukCreateWithoutNamaPengirimInternalInput[] | Surat_MasukUncheckedCreateWithoutNamaPengirimInternalInput[]
    connectOrCreate?: Surat_MasukCreateOrConnectWithoutNamaPengirimInternalInput | Surat_MasukCreateOrConnectWithoutNamaPengirimInternalInput[]
    createMany?: Surat_MasukCreateManyNamaPengirimInternalInputEnvelope
    connect?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
  }

  export type Surat_MasukCreateNestedManyWithoutTujuanInput = {
    create?: XOR<Surat_MasukCreateWithoutTujuanInput, Surat_MasukUncheckedCreateWithoutTujuanInput> | Surat_MasukCreateWithoutTujuanInput[] | Surat_MasukUncheckedCreateWithoutTujuanInput[]
    connectOrCreate?: Surat_MasukCreateOrConnectWithoutTujuanInput | Surat_MasukCreateOrConnectWithoutTujuanInput[]
    createMany?: Surat_MasukCreateManyTujuanInputEnvelope
    connect?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
  }

  export type GuestUncheckedCreateNestedManyWithoutPicInput = {
    create?: XOR<GuestCreateWithoutPicInput, GuestUncheckedCreateWithoutPicInput> | GuestCreateWithoutPicInput[] | GuestUncheckedCreateWithoutPicInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutPicInput | GuestCreateOrConnectWithoutPicInput[]
    createMany?: GuestCreateManyPicInputEnvelope
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
  }

  export type Surat_KeluarUncheckedCreateNestedManyWithoutNamaPengirimInput = {
    create?: XOR<Surat_KeluarCreateWithoutNamaPengirimInput, Surat_KeluarUncheckedCreateWithoutNamaPengirimInput> | Surat_KeluarCreateWithoutNamaPengirimInput[] | Surat_KeluarUncheckedCreateWithoutNamaPengirimInput[]
    connectOrCreate?: Surat_KeluarCreateOrConnectWithoutNamaPengirimInput | Surat_KeluarCreateOrConnectWithoutNamaPengirimInput[]
    createMany?: Surat_KeluarCreateManyNamaPengirimInputEnvelope
    connect?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
  }

  export type Surat_KeluarUncheckedCreateNestedManyWithoutTujuanInternalInput = {
    create?: XOR<Surat_KeluarCreateWithoutTujuanInternalInput, Surat_KeluarUncheckedCreateWithoutTujuanInternalInput> | Surat_KeluarCreateWithoutTujuanInternalInput[] | Surat_KeluarUncheckedCreateWithoutTujuanInternalInput[]
    connectOrCreate?: Surat_KeluarCreateOrConnectWithoutTujuanInternalInput | Surat_KeluarCreateOrConnectWithoutTujuanInternalInput[]
    createMany?: Surat_KeluarCreateManyTujuanInternalInputEnvelope
    connect?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
  }

  export type Surat_MasukUncheckedCreateNestedManyWithoutNamaPengirimInternalInput = {
    create?: XOR<Surat_MasukCreateWithoutNamaPengirimInternalInput, Surat_MasukUncheckedCreateWithoutNamaPengirimInternalInput> | Surat_MasukCreateWithoutNamaPengirimInternalInput[] | Surat_MasukUncheckedCreateWithoutNamaPengirimInternalInput[]
    connectOrCreate?: Surat_MasukCreateOrConnectWithoutNamaPengirimInternalInput | Surat_MasukCreateOrConnectWithoutNamaPengirimInternalInput[]
    createMany?: Surat_MasukCreateManyNamaPengirimInternalInputEnvelope
    connect?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
  }

  export type Surat_MasukUncheckedCreateNestedManyWithoutTujuanInput = {
    create?: XOR<Surat_MasukCreateWithoutTujuanInput, Surat_MasukUncheckedCreateWithoutTujuanInput> | Surat_MasukCreateWithoutTujuanInput[] | Surat_MasukUncheckedCreateWithoutTujuanInput[]
    connectOrCreate?: Surat_MasukCreateOrConnectWithoutTujuanInput | Surat_MasukCreateOrConnectWithoutTujuanInput[]
    createMany?: Surat_MasukCreateManyTujuanInputEnvelope
    connect?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPlantFieldUpdateOperationsInput = {
    set?: $Enums.Plant
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GuestUpdateManyWithoutPicNestedInput = {
    create?: XOR<GuestCreateWithoutPicInput, GuestUncheckedCreateWithoutPicInput> | GuestCreateWithoutPicInput[] | GuestUncheckedCreateWithoutPicInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutPicInput | GuestCreateOrConnectWithoutPicInput[]
    upsert?: GuestUpsertWithWhereUniqueWithoutPicInput | GuestUpsertWithWhereUniqueWithoutPicInput[]
    createMany?: GuestCreateManyPicInputEnvelope
    set?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    disconnect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    delete?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    update?: GuestUpdateWithWhereUniqueWithoutPicInput | GuestUpdateWithWhereUniqueWithoutPicInput[]
    updateMany?: GuestUpdateManyWithWhereWithoutPicInput | GuestUpdateManyWithWhereWithoutPicInput[]
    deleteMany?: GuestScalarWhereInput | GuestScalarWhereInput[]
  }

  export type Surat_KeluarUpdateManyWithoutNamaPengirimNestedInput = {
    create?: XOR<Surat_KeluarCreateWithoutNamaPengirimInput, Surat_KeluarUncheckedCreateWithoutNamaPengirimInput> | Surat_KeluarCreateWithoutNamaPengirimInput[] | Surat_KeluarUncheckedCreateWithoutNamaPengirimInput[]
    connectOrCreate?: Surat_KeluarCreateOrConnectWithoutNamaPengirimInput | Surat_KeluarCreateOrConnectWithoutNamaPengirimInput[]
    upsert?: Surat_KeluarUpsertWithWhereUniqueWithoutNamaPengirimInput | Surat_KeluarUpsertWithWhereUniqueWithoutNamaPengirimInput[]
    createMany?: Surat_KeluarCreateManyNamaPengirimInputEnvelope
    set?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
    disconnect?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
    delete?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
    connect?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
    update?: Surat_KeluarUpdateWithWhereUniqueWithoutNamaPengirimInput | Surat_KeluarUpdateWithWhereUniqueWithoutNamaPengirimInput[]
    updateMany?: Surat_KeluarUpdateManyWithWhereWithoutNamaPengirimInput | Surat_KeluarUpdateManyWithWhereWithoutNamaPengirimInput[]
    deleteMany?: Surat_KeluarScalarWhereInput | Surat_KeluarScalarWhereInput[]
  }

  export type Surat_KeluarUpdateManyWithoutTujuanInternalNestedInput = {
    create?: XOR<Surat_KeluarCreateWithoutTujuanInternalInput, Surat_KeluarUncheckedCreateWithoutTujuanInternalInput> | Surat_KeluarCreateWithoutTujuanInternalInput[] | Surat_KeluarUncheckedCreateWithoutTujuanInternalInput[]
    connectOrCreate?: Surat_KeluarCreateOrConnectWithoutTujuanInternalInput | Surat_KeluarCreateOrConnectWithoutTujuanInternalInput[]
    upsert?: Surat_KeluarUpsertWithWhereUniqueWithoutTujuanInternalInput | Surat_KeluarUpsertWithWhereUniqueWithoutTujuanInternalInput[]
    createMany?: Surat_KeluarCreateManyTujuanInternalInputEnvelope
    set?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
    disconnect?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
    delete?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
    connect?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
    update?: Surat_KeluarUpdateWithWhereUniqueWithoutTujuanInternalInput | Surat_KeluarUpdateWithWhereUniqueWithoutTujuanInternalInput[]
    updateMany?: Surat_KeluarUpdateManyWithWhereWithoutTujuanInternalInput | Surat_KeluarUpdateManyWithWhereWithoutTujuanInternalInput[]
    deleteMany?: Surat_KeluarScalarWhereInput | Surat_KeluarScalarWhereInput[]
  }

  export type Surat_MasukUpdateManyWithoutNamaPengirimInternalNestedInput = {
    create?: XOR<Surat_MasukCreateWithoutNamaPengirimInternalInput, Surat_MasukUncheckedCreateWithoutNamaPengirimInternalInput> | Surat_MasukCreateWithoutNamaPengirimInternalInput[] | Surat_MasukUncheckedCreateWithoutNamaPengirimInternalInput[]
    connectOrCreate?: Surat_MasukCreateOrConnectWithoutNamaPengirimInternalInput | Surat_MasukCreateOrConnectWithoutNamaPengirimInternalInput[]
    upsert?: Surat_MasukUpsertWithWhereUniqueWithoutNamaPengirimInternalInput | Surat_MasukUpsertWithWhereUniqueWithoutNamaPengirimInternalInput[]
    createMany?: Surat_MasukCreateManyNamaPengirimInternalInputEnvelope
    set?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
    disconnect?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
    delete?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
    connect?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
    update?: Surat_MasukUpdateWithWhereUniqueWithoutNamaPengirimInternalInput | Surat_MasukUpdateWithWhereUniqueWithoutNamaPengirimInternalInput[]
    updateMany?: Surat_MasukUpdateManyWithWhereWithoutNamaPengirimInternalInput | Surat_MasukUpdateManyWithWhereWithoutNamaPengirimInternalInput[]
    deleteMany?: Surat_MasukScalarWhereInput | Surat_MasukScalarWhereInput[]
  }

  export type Surat_MasukUpdateManyWithoutTujuanNestedInput = {
    create?: XOR<Surat_MasukCreateWithoutTujuanInput, Surat_MasukUncheckedCreateWithoutTujuanInput> | Surat_MasukCreateWithoutTujuanInput[] | Surat_MasukUncheckedCreateWithoutTujuanInput[]
    connectOrCreate?: Surat_MasukCreateOrConnectWithoutTujuanInput | Surat_MasukCreateOrConnectWithoutTujuanInput[]
    upsert?: Surat_MasukUpsertWithWhereUniqueWithoutTujuanInput | Surat_MasukUpsertWithWhereUniqueWithoutTujuanInput[]
    createMany?: Surat_MasukCreateManyTujuanInputEnvelope
    set?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
    disconnect?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
    delete?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
    connect?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
    update?: Surat_MasukUpdateWithWhereUniqueWithoutTujuanInput | Surat_MasukUpdateWithWhereUniqueWithoutTujuanInput[]
    updateMany?: Surat_MasukUpdateManyWithWhereWithoutTujuanInput | Surat_MasukUpdateManyWithWhereWithoutTujuanInput[]
    deleteMany?: Surat_MasukScalarWhereInput | Surat_MasukScalarWhereInput[]
  }

  export type GuestUncheckedUpdateManyWithoutPicNestedInput = {
    create?: XOR<GuestCreateWithoutPicInput, GuestUncheckedCreateWithoutPicInput> | GuestCreateWithoutPicInput[] | GuestUncheckedCreateWithoutPicInput[]
    connectOrCreate?: GuestCreateOrConnectWithoutPicInput | GuestCreateOrConnectWithoutPicInput[]
    upsert?: GuestUpsertWithWhereUniqueWithoutPicInput | GuestUpsertWithWhereUniqueWithoutPicInput[]
    createMany?: GuestCreateManyPicInputEnvelope
    set?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    disconnect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    delete?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    connect?: GuestWhereUniqueInput | GuestWhereUniqueInput[]
    update?: GuestUpdateWithWhereUniqueWithoutPicInput | GuestUpdateWithWhereUniqueWithoutPicInput[]
    updateMany?: GuestUpdateManyWithWhereWithoutPicInput | GuestUpdateManyWithWhereWithoutPicInput[]
    deleteMany?: GuestScalarWhereInput | GuestScalarWhereInput[]
  }

  export type Surat_KeluarUncheckedUpdateManyWithoutNamaPengirimNestedInput = {
    create?: XOR<Surat_KeluarCreateWithoutNamaPengirimInput, Surat_KeluarUncheckedCreateWithoutNamaPengirimInput> | Surat_KeluarCreateWithoutNamaPengirimInput[] | Surat_KeluarUncheckedCreateWithoutNamaPengirimInput[]
    connectOrCreate?: Surat_KeluarCreateOrConnectWithoutNamaPengirimInput | Surat_KeluarCreateOrConnectWithoutNamaPengirimInput[]
    upsert?: Surat_KeluarUpsertWithWhereUniqueWithoutNamaPengirimInput | Surat_KeluarUpsertWithWhereUniqueWithoutNamaPengirimInput[]
    createMany?: Surat_KeluarCreateManyNamaPengirimInputEnvelope
    set?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
    disconnect?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
    delete?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
    connect?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
    update?: Surat_KeluarUpdateWithWhereUniqueWithoutNamaPengirimInput | Surat_KeluarUpdateWithWhereUniqueWithoutNamaPengirimInput[]
    updateMany?: Surat_KeluarUpdateManyWithWhereWithoutNamaPengirimInput | Surat_KeluarUpdateManyWithWhereWithoutNamaPengirimInput[]
    deleteMany?: Surat_KeluarScalarWhereInput | Surat_KeluarScalarWhereInput[]
  }

  export type Surat_KeluarUncheckedUpdateManyWithoutTujuanInternalNestedInput = {
    create?: XOR<Surat_KeluarCreateWithoutTujuanInternalInput, Surat_KeluarUncheckedCreateWithoutTujuanInternalInput> | Surat_KeluarCreateWithoutTujuanInternalInput[] | Surat_KeluarUncheckedCreateWithoutTujuanInternalInput[]
    connectOrCreate?: Surat_KeluarCreateOrConnectWithoutTujuanInternalInput | Surat_KeluarCreateOrConnectWithoutTujuanInternalInput[]
    upsert?: Surat_KeluarUpsertWithWhereUniqueWithoutTujuanInternalInput | Surat_KeluarUpsertWithWhereUniqueWithoutTujuanInternalInput[]
    createMany?: Surat_KeluarCreateManyTujuanInternalInputEnvelope
    set?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
    disconnect?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
    delete?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
    connect?: Surat_KeluarWhereUniqueInput | Surat_KeluarWhereUniqueInput[]
    update?: Surat_KeluarUpdateWithWhereUniqueWithoutTujuanInternalInput | Surat_KeluarUpdateWithWhereUniqueWithoutTujuanInternalInput[]
    updateMany?: Surat_KeluarUpdateManyWithWhereWithoutTujuanInternalInput | Surat_KeluarUpdateManyWithWhereWithoutTujuanInternalInput[]
    deleteMany?: Surat_KeluarScalarWhereInput | Surat_KeluarScalarWhereInput[]
  }

  export type Surat_MasukUncheckedUpdateManyWithoutNamaPengirimInternalNestedInput = {
    create?: XOR<Surat_MasukCreateWithoutNamaPengirimInternalInput, Surat_MasukUncheckedCreateWithoutNamaPengirimInternalInput> | Surat_MasukCreateWithoutNamaPengirimInternalInput[] | Surat_MasukUncheckedCreateWithoutNamaPengirimInternalInput[]
    connectOrCreate?: Surat_MasukCreateOrConnectWithoutNamaPengirimInternalInput | Surat_MasukCreateOrConnectWithoutNamaPengirimInternalInput[]
    upsert?: Surat_MasukUpsertWithWhereUniqueWithoutNamaPengirimInternalInput | Surat_MasukUpsertWithWhereUniqueWithoutNamaPengirimInternalInput[]
    createMany?: Surat_MasukCreateManyNamaPengirimInternalInputEnvelope
    set?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
    disconnect?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
    delete?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
    connect?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
    update?: Surat_MasukUpdateWithWhereUniqueWithoutNamaPengirimInternalInput | Surat_MasukUpdateWithWhereUniqueWithoutNamaPengirimInternalInput[]
    updateMany?: Surat_MasukUpdateManyWithWhereWithoutNamaPengirimInternalInput | Surat_MasukUpdateManyWithWhereWithoutNamaPengirimInternalInput[]
    deleteMany?: Surat_MasukScalarWhereInput | Surat_MasukScalarWhereInput[]
  }

  export type Surat_MasukUncheckedUpdateManyWithoutTujuanNestedInput = {
    create?: XOR<Surat_MasukCreateWithoutTujuanInput, Surat_MasukUncheckedCreateWithoutTujuanInput> | Surat_MasukCreateWithoutTujuanInput[] | Surat_MasukUncheckedCreateWithoutTujuanInput[]
    connectOrCreate?: Surat_MasukCreateOrConnectWithoutTujuanInput | Surat_MasukCreateOrConnectWithoutTujuanInput[]
    upsert?: Surat_MasukUpsertWithWhereUniqueWithoutTujuanInput | Surat_MasukUpsertWithWhereUniqueWithoutTujuanInput[]
    createMany?: Surat_MasukCreateManyTujuanInputEnvelope
    set?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
    disconnect?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
    delete?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
    connect?: Surat_MasukWhereUniqueInput | Surat_MasukWhereUniqueInput[]
    update?: Surat_MasukUpdateWithWhereUniqueWithoutTujuanInput | Surat_MasukUpdateWithWhereUniqueWithoutTujuanInput[]
    updateMany?: Surat_MasukUpdateManyWithWhereWithoutTujuanInput | Surat_MasukUpdateManyWithWhereWithoutTujuanInput[]
    deleteMany?: Surat_MasukScalarWhereInput | Surat_MasukScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGuestsInput = {
    create?: XOR<UserCreateWithoutGuestsInput, UserUncheckedCreateWithoutGuestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuestsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutGuestsNestedInput = {
    create?: XOR<UserCreateWithoutGuestsInput, UserUncheckedCreateWithoutGuestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuestsInput
    upsert?: UserUpsertWithoutGuestsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGuestsInput, UserUpdateWithoutGuestsInput>, UserUncheckedUpdateWithoutGuestsInput>
  }

  export type UserCreateNestedOneWithoutSurat_masukInput = {
    create?: XOR<UserCreateWithoutSurat_masukInput, UserUncheckedCreateWithoutSurat_masukInput>
    connectOrCreate?: UserCreateOrConnectWithoutSurat_masukInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTujuan_masukInput = {
    create?: XOR<UserCreateWithoutTujuan_masukInput, UserUncheckedCreateWithoutTujuan_masukInput>
    connectOrCreate?: UserCreateOrConnectWithoutTujuan_masukInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutSurat_masukNestedInput = {
    create?: XOR<UserCreateWithoutSurat_masukInput, UserUncheckedCreateWithoutSurat_masukInput>
    connectOrCreate?: UserCreateOrConnectWithoutSurat_masukInput
    upsert?: UserUpsertWithoutSurat_masukInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSurat_masukInput, UserUpdateWithoutSurat_masukInput>, UserUncheckedUpdateWithoutSurat_masukInput>
  }

  export type UserUpdateOneWithoutTujuan_masukNestedInput = {
    create?: XOR<UserCreateWithoutTujuan_masukInput, UserUncheckedCreateWithoutTujuan_masukInput>
    connectOrCreate?: UserCreateOrConnectWithoutTujuan_masukInput
    upsert?: UserUpsertWithoutTujuan_masukInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTujuan_masukInput, UserUpdateWithoutTujuan_masukInput>, UserUncheckedUpdateWithoutTujuan_masukInput>
  }

  export type UserCreateNestedOneWithoutSurat_keluar_pengirimInput = {
    create?: XOR<UserCreateWithoutSurat_keluar_pengirimInput, UserUncheckedCreateWithoutSurat_keluar_pengirimInput>
    connectOrCreate?: UserCreateOrConnectWithoutSurat_keluar_pengirimInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSurat_keluar_tujuanInput = {
    create?: XOR<UserCreateWithoutSurat_keluar_tujuanInput, UserUncheckedCreateWithoutSurat_keluar_tujuanInput>
    connectOrCreate?: UserCreateOrConnectWithoutSurat_keluar_tujuanInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutSurat_keluar_pengirimNestedInput = {
    create?: XOR<UserCreateWithoutSurat_keluar_pengirimInput, UserUncheckedCreateWithoutSurat_keluar_pengirimInput>
    connectOrCreate?: UserCreateOrConnectWithoutSurat_keluar_pengirimInput
    upsert?: UserUpsertWithoutSurat_keluar_pengirimInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSurat_keluar_pengirimInput, UserUpdateWithoutSurat_keluar_pengirimInput>, UserUncheckedUpdateWithoutSurat_keluar_pengirimInput>
  }

  export type UserUpdateOneWithoutSurat_keluar_tujuanNestedInput = {
    create?: XOR<UserCreateWithoutSurat_keluar_tujuanInput, UserUncheckedCreateWithoutSurat_keluar_tujuanInput>
    connectOrCreate?: UserCreateOrConnectWithoutSurat_keluar_tujuanInput
    upsert?: UserUpsertWithoutSurat_keluar_tujuanInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSurat_keluar_tujuanInput, UserUpdateWithoutSurat_keluar_tujuanInput>, UserUncheckedUpdateWithoutSurat_keluar_tujuanInput>
  }

  export type AbsensiCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<AbsensiCreateWithoutEmployeeInput, AbsensiUncheckedCreateWithoutEmployeeInput> | AbsensiCreateWithoutEmployeeInput[] | AbsensiUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutEmployeeInput | AbsensiCreateOrConnectWithoutEmployeeInput[]
    createMany?: AbsensiCreateManyEmployeeInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type AbsensiUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<AbsensiCreateWithoutEmployeeInput, AbsensiUncheckedCreateWithoutEmployeeInput> | AbsensiCreateWithoutEmployeeInput[] | AbsensiUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutEmployeeInput | AbsensiCreateOrConnectWithoutEmployeeInput[]
    createMany?: AbsensiCreateManyEmployeeInputEnvelope
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
  }

  export type AbsensiUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<AbsensiCreateWithoutEmployeeInput, AbsensiUncheckedCreateWithoutEmployeeInput> | AbsensiCreateWithoutEmployeeInput[] | AbsensiUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutEmployeeInput | AbsensiCreateOrConnectWithoutEmployeeInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutEmployeeInput | AbsensiUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: AbsensiCreateManyEmployeeInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutEmployeeInput | AbsensiUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutEmployeeInput | AbsensiUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type AbsensiUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<AbsensiCreateWithoutEmployeeInput, AbsensiUncheckedCreateWithoutEmployeeInput> | AbsensiCreateWithoutEmployeeInput[] | AbsensiUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: AbsensiCreateOrConnectWithoutEmployeeInput | AbsensiCreateOrConnectWithoutEmployeeInput[]
    upsert?: AbsensiUpsertWithWhereUniqueWithoutEmployeeInput | AbsensiUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: AbsensiCreateManyEmployeeInputEnvelope
    set?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    disconnect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    delete?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    connect?: AbsensiWhereUniqueInput | AbsensiWhereUniqueInput[]
    update?: AbsensiUpdateWithWhereUniqueWithoutEmployeeInput | AbsensiUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: AbsensiUpdateManyWithWhereWithoutEmployeeInput | AbsensiUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutAbsensiInput = {
    create?: XOR<EmployeeCreateWithoutAbsensiInput, EmployeeUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAbsensiInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EnumKendaraanFieldUpdateOperationsInput = {
    set?: $Enums.Kendaraan
  }

  export type EmployeeUpdateOneRequiredWithoutAbsensiNestedInput = {
    create?: XOR<EmployeeCreateWithoutAbsensiInput, EmployeeUncheckedCreateWithoutAbsensiInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAbsensiInput
    upsert?: EmployeeUpsertWithoutAbsensiInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAbsensiInput, EmployeeUpdateWithoutAbsensiInput>, EmployeeUncheckedUpdateWithoutAbsensiInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumPlantFilter<$PrismaModel = never> = {
    equals?: $Enums.Plant | EnumPlantFieldRefInput<$PrismaModel>
    in?: $Enums.Plant[] | ListEnumPlantFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plant[] | ListEnumPlantFieldRefInput<$PrismaModel>
    not?: NestedEnumPlantFilter<$PrismaModel> | $Enums.Plant
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumPlantWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plant | EnumPlantFieldRefInput<$PrismaModel>
    in?: $Enums.Plant[] | ListEnumPlantFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plant[] | ListEnumPlantFieldRefInput<$PrismaModel>
    not?: NestedEnumPlantWithAggregatesFilter<$PrismaModel> | $Enums.Plant
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlantFilter<$PrismaModel>
    _max?: NestedEnumPlantFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumKendaraanFilter<$PrismaModel = never> = {
    equals?: $Enums.Kendaraan | EnumKendaraanFieldRefInput<$PrismaModel>
    in?: $Enums.Kendaraan[] | ListEnumKendaraanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kendaraan[] | ListEnumKendaraanFieldRefInput<$PrismaModel>
    not?: NestedEnumKendaraanFilter<$PrismaModel> | $Enums.Kendaraan
  }

  export type NestedEnumKendaraanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Kendaraan | EnumKendaraanFieldRefInput<$PrismaModel>
    in?: $Enums.Kendaraan[] | ListEnumKendaraanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Kendaraan[] | ListEnumKendaraanFieldRefInput<$PrismaModel>
    not?: NestedEnumKendaraanWithAggregatesFilter<$PrismaModel> | $Enums.Kendaraan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKendaraanFilter<$PrismaModel>
    _max?: NestedEnumKendaraanFilter<$PrismaModel>
  }

  export type GuestCreateWithoutPicInput = {
    id?: string
    name: string
    company: string
    phone: string
    plateNumber: string
    purpose: string
    identity: string
    plant: $Enums.Plant
    itemName?: string | null
    quantity?: string | null
    description?: string | null
    isActive?: boolean
    isAprove?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestUncheckedCreateWithoutPicInput = {
    id?: string
    name: string
    company: string
    phone: string
    plateNumber: string
    purpose: string
    identity: string
    plant: $Enums.Plant
    itemName?: string | null
    quantity?: string | null
    description?: string | null
    isActive?: boolean
    isAprove?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestCreateOrConnectWithoutPicInput = {
    where: GuestWhereUniqueInput
    create: XOR<GuestCreateWithoutPicInput, GuestUncheckedCreateWithoutPicInput>
  }

  export type GuestCreateManyPicInputEnvelope = {
    data: GuestCreateManyPicInput | GuestCreateManyPicInput[]
    skipDuplicates?: boolean
  }

  export type Surat_KeluarCreateWithoutNamaPengirimInput = {
    id?: string
    tujuanEksternal?: string | null
    perusahaanEksternal?: string | null
    satpam: string
    kurir?: string | null
    plant: $Enums.Plant
    isDelivered?: boolean
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tujuanInternal?: UserCreateNestedOneWithoutSurat_keluar_tujuanInput
  }

  export type Surat_KeluarUncheckedCreateWithoutNamaPengirimInput = {
    id?: string
    tujuanInternalId?: string | null
    tujuanEksternal?: string | null
    perusahaanEksternal?: string | null
    satpam: string
    kurir?: string | null
    plant: $Enums.Plant
    isDelivered?: boolean
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Surat_KeluarCreateOrConnectWithoutNamaPengirimInput = {
    where: Surat_KeluarWhereUniqueInput
    create: XOR<Surat_KeluarCreateWithoutNamaPengirimInput, Surat_KeluarUncheckedCreateWithoutNamaPengirimInput>
  }

  export type Surat_KeluarCreateManyNamaPengirimInputEnvelope = {
    data: Surat_KeluarCreateManyNamaPengirimInput | Surat_KeluarCreateManyNamaPengirimInput[]
    skipDuplicates?: boolean
  }

  export type Surat_KeluarCreateWithoutTujuanInternalInput = {
    id?: string
    tujuanEksternal?: string | null
    perusahaanEksternal?: string | null
    satpam: string
    kurir?: string | null
    plant: $Enums.Plant
    isDelivered?: boolean
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    namaPengirim?: UserCreateNestedOneWithoutSurat_keluar_pengirimInput
  }

  export type Surat_KeluarUncheckedCreateWithoutTujuanInternalInput = {
    id?: string
    namaPengirimId?: string | null
    tujuanEksternal?: string | null
    perusahaanEksternal?: string | null
    satpam: string
    kurir?: string | null
    plant: $Enums.Plant
    isDelivered?: boolean
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Surat_KeluarCreateOrConnectWithoutTujuanInternalInput = {
    where: Surat_KeluarWhereUniqueInput
    create: XOR<Surat_KeluarCreateWithoutTujuanInternalInput, Surat_KeluarUncheckedCreateWithoutTujuanInternalInput>
  }

  export type Surat_KeluarCreateManyTujuanInternalInputEnvelope = {
    data: Surat_KeluarCreateManyTujuanInternalInput | Surat_KeluarCreateManyTujuanInternalInput[]
    skipDuplicates?: boolean
  }

  export type Surat_MasukCreateWithoutNamaPengirimInternalInput = {
    id?: string
    perusahaanPengirim: string
    namaPengirimEksternal?: string | null
    satpam: string
    kurir?: string | null
    plant: $Enums.Plant
    isAccepted?: boolean
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tujuan?: UserCreateNestedOneWithoutTujuan_masukInput
  }

  export type Surat_MasukUncheckedCreateWithoutNamaPengirimInternalInput = {
    id?: string
    perusahaanPengirim: string
    namaPengirimEksternal?: string | null
    tujuanId?: string | null
    satpam: string
    kurir?: string | null
    plant: $Enums.Plant
    isAccepted?: boolean
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Surat_MasukCreateOrConnectWithoutNamaPengirimInternalInput = {
    where: Surat_MasukWhereUniqueInput
    create: XOR<Surat_MasukCreateWithoutNamaPengirimInternalInput, Surat_MasukUncheckedCreateWithoutNamaPengirimInternalInput>
  }

  export type Surat_MasukCreateManyNamaPengirimInternalInputEnvelope = {
    data: Surat_MasukCreateManyNamaPengirimInternalInput | Surat_MasukCreateManyNamaPengirimInternalInput[]
    skipDuplicates?: boolean
  }

  export type Surat_MasukCreateWithoutTujuanInput = {
    id?: string
    perusahaanPengirim: string
    namaPengirimEksternal?: string | null
    satpam: string
    kurir?: string | null
    plant: $Enums.Plant
    isAccepted?: boolean
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    namaPengirimInternal?: UserCreateNestedOneWithoutSurat_masukInput
  }

  export type Surat_MasukUncheckedCreateWithoutTujuanInput = {
    id?: string
    perusahaanPengirim: string
    namaPengirimInternalId?: string | null
    namaPengirimEksternal?: string | null
    satpam: string
    kurir?: string | null
    plant: $Enums.Plant
    isAccepted?: boolean
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Surat_MasukCreateOrConnectWithoutTujuanInput = {
    where: Surat_MasukWhereUniqueInput
    create: XOR<Surat_MasukCreateWithoutTujuanInput, Surat_MasukUncheckedCreateWithoutTujuanInput>
  }

  export type Surat_MasukCreateManyTujuanInputEnvelope = {
    data: Surat_MasukCreateManyTujuanInput | Surat_MasukCreateManyTujuanInput[]
    skipDuplicates?: boolean
  }

  export type GuestUpsertWithWhereUniqueWithoutPicInput = {
    where: GuestWhereUniqueInput
    update: XOR<GuestUpdateWithoutPicInput, GuestUncheckedUpdateWithoutPicInput>
    create: XOR<GuestCreateWithoutPicInput, GuestUncheckedCreateWithoutPicInput>
  }

  export type GuestUpdateWithWhereUniqueWithoutPicInput = {
    where: GuestWhereUniqueInput
    data: XOR<GuestUpdateWithoutPicInput, GuestUncheckedUpdateWithoutPicInput>
  }

  export type GuestUpdateManyWithWhereWithoutPicInput = {
    where: GuestScalarWhereInput
    data: XOR<GuestUpdateManyMutationInput, GuestUncheckedUpdateManyWithoutPicInput>
  }

  export type GuestScalarWhereInput = {
    AND?: GuestScalarWhereInput | GuestScalarWhereInput[]
    OR?: GuestScalarWhereInput[]
    NOT?: GuestScalarWhereInput | GuestScalarWhereInput[]
    id?: StringFilter<"Guest"> | string
    name?: StringFilter<"Guest"> | string
    company?: StringFilter<"Guest"> | string
    phone?: StringFilter<"Guest"> | string
    plateNumber?: StringFilter<"Guest"> | string
    purpose?: StringFilter<"Guest"> | string
    identity?: StringFilter<"Guest"> | string
    plant?: EnumPlantFilter<"Guest"> | $Enums.Plant
    itemName?: StringNullableFilter<"Guest"> | string | null
    quantity?: StringNullableFilter<"Guest"> | string | null
    description?: StringNullableFilter<"Guest"> | string | null
    isActive?: BoolFilter<"Guest"> | boolean
    isAprove?: BoolFilter<"Guest"> | boolean
    picId?: StringNullableFilter<"Guest"> | string | null
    createdAt?: DateTimeFilter<"Guest"> | Date | string
    updatedAt?: DateTimeFilter<"Guest"> | Date | string
  }

  export type Surat_KeluarUpsertWithWhereUniqueWithoutNamaPengirimInput = {
    where: Surat_KeluarWhereUniqueInput
    update: XOR<Surat_KeluarUpdateWithoutNamaPengirimInput, Surat_KeluarUncheckedUpdateWithoutNamaPengirimInput>
    create: XOR<Surat_KeluarCreateWithoutNamaPengirimInput, Surat_KeluarUncheckedCreateWithoutNamaPengirimInput>
  }

  export type Surat_KeluarUpdateWithWhereUniqueWithoutNamaPengirimInput = {
    where: Surat_KeluarWhereUniqueInput
    data: XOR<Surat_KeluarUpdateWithoutNamaPengirimInput, Surat_KeluarUncheckedUpdateWithoutNamaPengirimInput>
  }

  export type Surat_KeluarUpdateManyWithWhereWithoutNamaPengirimInput = {
    where: Surat_KeluarScalarWhereInput
    data: XOR<Surat_KeluarUpdateManyMutationInput, Surat_KeluarUncheckedUpdateManyWithoutNamaPengirimInput>
  }

  export type Surat_KeluarScalarWhereInput = {
    AND?: Surat_KeluarScalarWhereInput | Surat_KeluarScalarWhereInput[]
    OR?: Surat_KeluarScalarWhereInput[]
    NOT?: Surat_KeluarScalarWhereInput | Surat_KeluarScalarWhereInput[]
    id?: StringFilter<"Surat_Keluar"> | string
    namaPengirimId?: StringNullableFilter<"Surat_Keluar"> | string | null
    tujuanInternalId?: StringNullableFilter<"Surat_Keluar"> | string | null
    tujuanEksternal?: StringNullableFilter<"Surat_Keluar"> | string | null
    perusahaanEksternal?: StringNullableFilter<"Surat_Keluar"> | string | null
    satpam?: StringFilter<"Surat_Keluar"> | string
    kurir?: StringNullableFilter<"Surat_Keluar"> | string | null
    plant?: EnumPlantFilter<"Surat_Keluar"> | $Enums.Plant
    isDelivered?: BoolFilter<"Surat_Keluar"> | boolean
    keterangan?: StringNullableFilter<"Surat_Keluar"> | string | null
    createdAt?: DateTimeFilter<"Surat_Keluar"> | Date | string
    updatedAt?: DateTimeFilter<"Surat_Keluar"> | Date | string
  }

  export type Surat_KeluarUpsertWithWhereUniqueWithoutTujuanInternalInput = {
    where: Surat_KeluarWhereUniqueInput
    update: XOR<Surat_KeluarUpdateWithoutTujuanInternalInput, Surat_KeluarUncheckedUpdateWithoutTujuanInternalInput>
    create: XOR<Surat_KeluarCreateWithoutTujuanInternalInput, Surat_KeluarUncheckedCreateWithoutTujuanInternalInput>
  }

  export type Surat_KeluarUpdateWithWhereUniqueWithoutTujuanInternalInput = {
    where: Surat_KeluarWhereUniqueInput
    data: XOR<Surat_KeluarUpdateWithoutTujuanInternalInput, Surat_KeluarUncheckedUpdateWithoutTujuanInternalInput>
  }

  export type Surat_KeluarUpdateManyWithWhereWithoutTujuanInternalInput = {
    where: Surat_KeluarScalarWhereInput
    data: XOR<Surat_KeluarUpdateManyMutationInput, Surat_KeluarUncheckedUpdateManyWithoutTujuanInternalInput>
  }

  export type Surat_MasukUpsertWithWhereUniqueWithoutNamaPengirimInternalInput = {
    where: Surat_MasukWhereUniqueInput
    update: XOR<Surat_MasukUpdateWithoutNamaPengirimInternalInput, Surat_MasukUncheckedUpdateWithoutNamaPengirimInternalInput>
    create: XOR<Surat_MasukCreateWithoutNamaPengirimInternalInput, Surat_MasukUncheckedCreateWithoutNamaPengirimInternalInput>
  }

  export type Surat_MasukUpdateWithWhereUniqueWithoutNamaPengirimInternalInput = {
    where: Surat_MasukWhereUniqueInput
    data: XOR<Surat_MasukUpdateWithoutNamaPengirimInternalInput, Surat_MasukUncheckedUpdateWithoutNamaPengirimInternalInput>
  }

  export type Surat_MasukUpdateManyWithWhereWithoutNamaPengirimInternalInput = {
    where: Surat_MasukScalarWhereInput
    data: XOR<Surat_MasukUpdateManyMutationInput, Surat_MasukUncheckedUpdateManyWithoutNamaPengirimInternalInput>
  }

  export type Surat_MasukScalarWhereInput = {
    AND?: Surat_MasukScalarWhereInput | Surat_MasukScalarWhereInput[]
    OR?: Surat_MasukScalarWhereInput[]
    NOT?: Surat_MasukScalarWhereInput | Surat_MasukScalarWhereInput[]
    id?: StringFilter<"Surat_Masuk"> | string
    perusahaanPengirim?: StringFilter<"Surat_Masuk"> | string
    namaPengirimInternalId?: StringNullableFilter<"Surat_Masuk"> | string | null
    namaPengirimEksternal?: StringNullableFilter<"Surat_Masuk"> | string | null
    tujuanId?: StringNullableFilter<"Surat_Masuk"> | string | null
    satpam?: StringFilter<"Surat_Masuk"> | string
    kurir?: StringNullableFilter<"Surat_Masuk"> | string | null
    plant?: EnumPlantFilter<"Surat_Masuk"> | $Enums.Plant
    isAccepted?: BoolFilter<"Surat_Masuk"> | boolean
    keterangan?: StringNullableFilter<"Surat_Masuk"> | string | null
    createdAt?: DateTimeFilter<"Surat_Masuk"> | Date | string
    updatedAt?: DateTimeFilter<"Surat_Masuk"> | Date | string
  }

  export type Surat_MasukUpsertWithWhereUniqueWithoutTujuanInput = {
    where: Surat_MasukWhereUniqueInput
    update: XOR<Surat_MasukUpdateWithoutTujuanInput, Surat_MasukUncheckedUpdateWithoutTujuanInput>
    create: XOR<Surat_MasukCreateWithoutTujuanInput, Surat_MasukUncheckedCreateWithoutTujuanInput>
  }

  export type Surat_MasukUpdateWithWhereUniqueWithoutTujuanInput = {
    where: Surat_MasukWhereUniqueInput
    data: XOR<Surat_MasukUpdateWithoutTujuanInput, Surat_MasukUncheckedUpdateWithoutTujuanInput>
  }

  export type Surat_MasukUpdateManyWithWhereWithoutTujuanInput = {
    where: Surat_MasukScalarWhereInput
    data: XOR<Surat_MasukUpdateManyMutationInput, Surat_MasukUncheckedUpdateManyWithoutTujuanInput>
  }

  export type UserCreateWithoutGuestsInput = {
    id?: string
    departement: string
    name: string
    plant: $Enums.Plant
    username: string
    password: string
    role: $Enums.Role
    refresh_token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    surat_keluar_pengirim?: Surat_KeluarCreateNestedManyWithoutNamaPengirimInput
    surat_keluar_tujuan?: Surat_KeluarCreateNestedManyWithoutTujuanInternalInput
    surat_masuk?: Surat_MasukCreateNestedManyWithoutNamaPengirimInternalInput
    tujuan_masuk?: Surat_MasukCreateNestedManyWithoutTujuanInput
  }

  export type UserUncheckedCreateWithoutGuestsInput = {
    id?: string
    departement: string
    name: string
    plant: $Enums.Plant
    username: string
    password: string
    role: $Enums.Role
    refresh_token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    surat_keluar_pengirim?: Surat_KeluarUncheckedCreateNestedManyWithoutNamaPengirimInput
    surat_keluar_tujuan?: Surat_KeluarUncheckedCreateNestedManyWithoutTujuanInternalInput
    surat_masuk?: Surat_MasukUncheckedCreateNestedManyWithoutNamaPengirimInternalInput
    tujuan_masuk?: Surat_MasukUncheckedCreateNestedManyWithoutTujuanInput
  }

  export type UserCreateOrConnectWithoutGuestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGuestsInput, UserUncheckedCreateWithoutGuestsInput>
  }

  export type UserUpsertWithoutGuestsInput = {
    update: XOR<UserUpdateWithoutGuestsInput, UserUncheckedUpdateWithoutGuestsInput>
    create: XOR<UserCreateWithoutGuestsInput, UserUncheckedCreateWithoutGuestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGuestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGuestsInput, UserUncheckedUpdateWithoutGuestsInput>
  }

  export type UserUpdateWithoutGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    surat_keluar_pengirim?: Surat_KeluarUpdateManyWithoutNamaPengirimNestedInput
    surat_keluar_tujuan?: Surat_KeluarUpdateManyWithoutTujuanInternalNestedInput
    surat_masuk?: Surat_MasukUpdateManyWithoutNamaPengirimInternalNestedInput
    tujuan_masuk?: Surat_MasukUpdateManyWithoutTujuanNestedInput
  }

  export type UserUncheckedUpdateWithoutGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    surat_keluar_pengirim?: Surat_KeluarUncheckedUpdateManyWithoutNamaPengirimNestedInput
    surat_keluar_tujuan?: Surat_KeluarUncheckedUpdateManyWithoutTujuanInternalNestedInput
    surat_masuk?: Surat_MasukUncheckedUpdateManyWithoutNamaPengirimInternalNestedInput
    tujuan_masuk?: Surat_MasukUncheckedUpdateManyWithoutTujuanNestedInput
  }

  export type UserCreateWithoutSurat_masukInput = {
    id?: string
    departement: string
    name: string
    plant: $Enums.Plant
    username: string
    password: string
    role: $Enums.Role
    refresh_token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: GuestCreateNestedManyWithoutPicInput
    surat_keluar_pengirim?: Surat_KeluarCreateNestedManyWithoutNamaPengirimInput
    surat_keluar_tujuan?: Surat_KeluarCreateNestedManyWithoutTujuanInternalInput
    tujuan_masuk?: Surat_MasukCreateNestedManyWithoutTujuanInput
  }

  export type UserUncheckedCreateWithoutSurat_masukInput = {
    id?: string
    departement: string
    name: string
    plant: $Enums.Plant
    username: string
    password: string
    role: $Enums.Role
    refresh_token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: GuestUncheckedCreateNestedManyWithoutPicInput
    surat_keluar_pengirim?: Surat_KeluarUncheckedCreateNestedManyWithoutNamaPengirimInput
    surat_keluar_tujuan?: Surat_KeluarUncheckedCreateNestedManyWithoutTujuanInternalInput
    tujuan_masuk?: Surat_MasukUncheckedCreateNestedManyWithoutTujuanInput
  }

  export type UserCreateOrConnectWithoutSurat_masukInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSurat_masukInput, UserUncheckedCreateWithoutSurat_masukInput>
  }

  export type UserCreateWithoutTujuan_masukInput = {
    id?: string
    departement: string
    name: string
    plant: $Enums.Plant
    username: string
    password: string
    role: $Enums.Role
    refresh_token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: GuestCreateNestedManyWithoutPicInput
    surat_keluar_pengirim?: Surat_KeluarCreateNestedManyWithoutNamaPengirimInput
    surat_keluar_tujuan?: Surat_KeluarCreateNestedManyWithoutTujuanInternalInput
    surat_masuk?: Surat_MasukCreateNestedManyWithoutNamaPengirimInternalInput
  }

  export type UserUncheckedCreateWithoutTujuan_masukInput = {
    id?: string
    departement: string
    name: string
    plant: $Enums.Plant
    username: string
    password: string
    role: $Enums.Role
    refresh_token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: GuestUncheckedCreateNestedManyWithoutPicInput
    surat_keluar_pengirim?: Surat_KeluarUncheckedCreateNestedManyWithoutNamaPengirimInput
    surat_keluar_tujuan?: Surat_KeluarUncheckedCreateNestedManyWithoutTujuanInternalInput
    surat_masuk?: Surat_MasukUncheckedCreateNestedManyWithoutNamaPengirimInternalInput
  }

  export type UserCreateOrConnectWithoutTujuan_masukInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTujuan_masukInput, UserUncheckedCreateWithoutTujuan_masukInput>
  }

  export type UserUpsertWithoutSurat_masukInput = {
    update: XOR<UserUpdateWithoutSurat_masukInput, UserUncheckedUpdateWithoutSurat_masukInput>
    create: XOR<UserCreateWithoutSurat_masukInput, UserUncheckedCreateWithoutSurat_masukInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSurat_masukInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSurat_masukInput, UserUncheckedUpdateWithoutSurat_masukInput>
  }

  export type UserUpdateWithoutSurat_masukInput = {
    id?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: GuestUpdateManyWithoutPicNestedInput
    surat_keluar_pengirim?: Surat_KeluarUpdateManyWithoutNamaPengirimNestedInput
    surat_keluar_tujuan?: Surat_KeluarUpdateManyWithoutTujuanInternalNestedInput
    tujuan_masuk?: Surat_MasukUpdateManyWithoutTujuanNestedInput
  }

  export type UserUncheckedUpdateWithoutSurat_masukInput = {
    id?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: GuestUncheckedUpdateManyWithoutPicNestedInput
    surat_keluar_pengirim?: Surat_KeluarUncheckedUpdateManyWithoutNamaPengirimNestedInput
    surat_keluar_tujuan?: Surat_KeluarUncheckedUpdateManyWithoutTujuanInternalNestedInput
    tujuan_masuk?: Surat_MasukUncheckedUpdateManyWithoutTujuanNestedInput
  }

  export type UserUpsertWithoutTujuan_masukInput = {
    update: XOR<UserUpdateWithoutTujuan_masukInput, UserUncheckedUpdateWithoutTujuan_masukInput>
    create: XOR<UserCreateWithoutTujuan_masukInput, UserUncheckedCreateWithoutTujuan_masukInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTujuan_masukInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTujuan_masukInput, UserUncheckedUpdateWithoutTujuan_masukInput>
  }

  export type UserUpdateWithoutTujuan_masukInput = {
    id?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: GuestUpdateManyWithoutPicNestedInput
    surat_keluar_pengirim?: Surat_KeluarUpdateManyWithoutNamaPengirimNestedInput
    surat_keluar_tujuan?: Surat_KeluarUpdateManyWithoutTujuanInternalNestedInput
    surat_masuk?: Surat_MasukUpdateManyWithoutNamaPengirimInternalNestedInput
  }

  export type UserUncheckedUpdateWithoutTujuan_masukInput = {
    id?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: GuestUncheckedUpdateManyWithoutPicNestedInput
    surat_keluar_pengirim?: Surat_KeluarUncheckedUpdateManyWithoutNamaPengirimNestedInput
    surat_keluar_tujuan?: Surat_KeluarUncheckedUpdateManyWithoutTujuanInternalNestedInput
    surat_masuk?: Surat_MasukUncheckedUpdateManyWithoutNamaPengirimInternalNestedInput
  }

  export type UserCreateWithoutSurat_keluar_pengirimInput = {
    id?: string
    departement: string
    name: string
    plant: $Enums.Plant
    username: string
    password: string
    role: $Enums.Role
    refresh_token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: GuestCreateNestedManyWithoutPicInput
    surat_keluar_tujuan?: Surat_KeluarCreateNestedManyWithoutTujuanInternalInput
    surat_masuk?: Surat_MasukCreateNestedManyWithoutNamaPengirimInternalInput
    tujuan_masuk?: Surat_MasukCreateNestedManyWithoutTujuanInput
  }

  export type UserUncheckedCreateWithoutSurat_keluar_pengirimInput = {
    id?: string
    departement: string
    name: string
    plant: $Enums.Plant
    username: string
    password: string
    role: $Enums.Role
    refresh_token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: GuestUncheckedCreateNestedManyWithoutPicInput
    surat_keluar_tujuan?: Surat_KeluarUncheckedCreateNestedManyWithoutTujuanInternalInput
    surat_masuk?: Surat_MasukUncheckedCreateNestedManyWithoutNamaPengirimInternalInput
    tujuan_masuk?: Surat_MasukUncheckedCreateNestedManyWithoutTujuanInput
  }

  export type UserCreateOrConnectWithoutSurat_keluar_pengirimInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSurat_keluar_pengirimInput, UserUncheckedCreateWithoutSurat_keluar_pengirimInput>
  }

  export type UserCreateWithoutSurat_keluar_tujuanInput = {
    id?: string
    departement: string
    name: string
    plant: $Enums.Plant
    username: string
    password: string
    role: $Enums.Role
    refresh_token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: GuestCreateNestedManyWithoutPicInput
    surat_keluar_pengirim?: Surat_KeluarCreateNestedManyWithoutNamaPengirimInput
    surat_masuk?: Surat_MasukCreateNestedManyWithoutNamaPengirimInternalInput
    tujuan_masuk?: Surat_MasukCreateNestedManyWithoutTujuanInput
  }

  export type UserUncheckedCreateWithoutSurat_keluar_tujuanInput = {
    id?: string
    departement: string
    name: string
    plant: $Enums.Plant
    username: string
    password: string
    role: $Enums.Role
    refresh_token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: GuestUncheckedCreateNestedManyWithoutPicInput
    surat_keluar_pengirim?: Surat_KeluarUncheckedCreateNestedManyWithoutNamaPengirimInput
    surat_masuk?: Surat_MasukUncheckedCreateNestedManyWithoutNamaPengirimInternalInput
    tujuan_masuk?: Surat_MasukUncheckedCreateNestedManyWithoutTujuanInput
  }

  export type UserCreateOrConnectWithoutSurat_keluar_tujuanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSurat_keluar_tujuanInput, UserUncheckedCreateWithoutSurat_keluar_tujuanInput>
  }

  export type UserUpsertWithoutSurat_keluar_pengirimInput = {
    update: XOR<UserUpdateWithoutSurat_keluar_pengirimInput, UserUncheckedUpdateWithoutSurat_keluar_pengirimInput>
    create: XOR<UserCreateWithoutSurat_keluar_pengirimInput, UserUncheckedCreateWithoutSurat_keluar_pengirimInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSurat_keluar_pengirimInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSurat_keluar_pengirimInput, UserUncheckedUpdateWithoutSurat_keluar_pengirimInput>
  }

  export type UserUpdateWithoutSurat_keluar_pengirimInput = {
    id?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: GuestUpdateManyWithoutPicNestedInput
    surat_keluar_tujuan?: Surat_KeluarUpdateManyWithoutTujuanInternalNestedInput
    surat_masuk?: Surat_MasukUpdateManyWithoutNamaPengirimInternalNestedInput
    tujuan_masuk?: Surat_MasukUpdateManyWithoutTujuanNestedInput
  }

  export type UserUncheckedUpdateWithoutSurat_keluar_pengirimInput = {
    id?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: GuestUncheckedUpdateManyWithoutPicNestedInput
    surat_keluar_tujuan?: Surat_KeluarUncheckedUpdateManyWithoutTujuanInternalNestedInput
    surat_masuk?: Surat_MasukUncheckedUpdateManyWithoutNamaPengirimInternalNestedInput
    tujuan_masuk?: Surat_MasukUncheckedUpdateManyWithoutTujuanNestedInput
  }

  export type UserUpsertWithoutSurat_keluar_tujuanInput = {
    update: XOR<UserUpdateWithoutSurat_keluar_tujuanInput, UserUncheckedUpdateWithoutSurat_keluar_tujuanInput>
    create: XOR<UserCreateWithoutSurat_keluar_tujuanInput, UserUncheckedCreateWithoutSurat_keluar_tujuanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSurat_keluar_tujuanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSurat_keluar_tujuanInput, UserUncheckedUpdateWithoutSurat_keluar_tujuanInput>
  }

  export type UserUpdateWithoutSurat_keluar_tujuanInput = {
    id?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: GuestUpdateManyWithoutPicNestedInput
    surat_keluar_pengirim?: Surat_KeluarUpdateManyWithoutNamaPengirimNestedInput
    surat_masuk?: Surat_MasukUpdateManyWithoutNamaPengirimInternalNestedInput
    tujuan_masuk?: Surat_MasukUpdateManyWithoutTujuanNestedInput
  }

  export type UserUncheckedUpdateWithoutSurat_keluar_tujuanInput = {
    id?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    refresh_token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: GuestUncheckedUpdateManyWithoutPicNestedInput
    surat_keluar_pengirim?: Surat_KeluarUncheckedUpdateManyWithoutNamaPengirimNestedInput
    surat_masuk?: Surat_MasukUncheckedUpdateManyWithoutNamaPengirimInternalNestedInput
    tujuan_masuk?: Surat_MasukUncheckedUpdateManyWithoutTujuanNestedInput
  }

  export type AbsensiCreateWithoutEmployeeInput = {
    id?: string
    nopol?: string | null
    plant: $Enums.Plant
    kendaraan?: $Enums.Kendaraan
    keterangan?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbsensiUncheckedCreateWithoutEmployeeInput = {
    id?: string
    nopol?: string | null
    plant: $Enums.Plant
    kendaraan?: $Enums.Kendaraan
    keterangan?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbsensiCreateOrConnectWithoutEmployeeInput = {
    where: AbsensiWhereUniqueInput
    create: XOR<AbsensiCreateWithoutEmployeeInput, AbsensiUncheckedCreateWithoutEmployeeInput>
  }

  export type AbsensiCreateManyEmployeeInputEnvelope = {
    data: AbsensiCreateManyEmployeeInput | AbsensiCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type AbsensiUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: AbsensiWhereUniqueInput
    update: XOR<AbsensiUpdateWithoutEmployeeInput, AbsensiUncheckedUpdateWithoutEmployeeInput>
    create: XOR<AbsensiCreateWithoutEmployeeInput, AbsensiUncheckedCreateWithoutEmployeeInput>
  }

  export type AbsensiUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: AbsensiWhereUniqueInput
    data: XOR<AbsensiUpdateWithoutEmployeeInput, AbsensiUncheckedUpdateWithoutEmployeeInput>
  }

  export type AbsensiUpdateManyWithWhereWithoutEmployeeInput = {
    where: AbsensiScalarWhereInput
    data: XOR<AbsensiUpdateManyMutationInput, AbsensiUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type AbsensiScalarWhereInput = {
    AND?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
    OR?: AbsensiScalarWhereInput[]
    NOT?: AbsensiScalarWhereInput | AbsensiScalarWhereInput[]
    id?: StringFilter<"Absensi"> | string
    nopol?: StringNullableFilter<"Absensi"> | string | null
    plant?: EnumPlantFilter<"Absensi"> | $Enums.Plant
    employeeId?: StringFilter<"Absensi"> | string
    kendaraan?: EnumKendaraanFilter<"Absensi"> | $Enums.Kendaraan
    keterangan?: StringNullableFilter<"Absensi"> | string | null
    isActive?: BoolFilter<"Absensi"> | boolean
    createdAt?: DateTimeFilter<"Absensi"> | Date | string
    updatedAt?: DateTimeFilter<"Absensi"> | Date | string
  }

  export type EmployeeCreateWithoutAbsensiInput = {
    id?: string
    nama: string
    motor1?: string | null
    motor2?: string | null
    mobil1?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUncheckedCreateWithoutAbsensiInput = {
    id?: string
    nama: string
    motor1?: string | null
    motor2?: string | null
    mobil1?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCreateOrConnectWithoutAbsensiInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAbsensiInput, EmployeeUncheckedCreateWithoutAbsensiInput>
  }

  export type EmployeeUpsertWithoutAbsensiInput = {
    update: XOR<EmployeeUpdateWithoutAbsensiInput, EmployeeUncheckedUpdateWithoutAbsensiInput>
    create: XOR<EmployeeCreateWithoutAbsensiInput, EmployeeUncheckedCreateWithoutAbsensiInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAbsensiInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAbsensiInput, EmployeeUncheckedUpdateWithoutAbsensiInput>
  }

  export type EmployeeUpdateWithoutAbsensiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    motor1?: NullableStringFieldUpdateOperationsInput | string | null
    motor2?: NullableStringFieldUpdateOperationsInput | string | null
    mobil1?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateWithoutAbsensiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    motor1?: NullableStringFieldUpdateOperationsInput | string | null
    motor2?: NullableStringFieldUpdateOperationsInput | string | null
    mobil1?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestCreateManyPicInput = {
    id?: string
    name: string
    company: string
    phone: string
    plateNumber: string
    purpose: string
    identity: string
    plant: $Enums.Plant
    itemName?: string | null
    quantity?: string | null
    description?: string | null
    isActive?: boolean
    isAprove?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Surat_KeluarCreateManyNamaPengirimInput = {
    id?: string
    tujuanInternalId?: string | null
    tujuanEksternal?: string | null
    perusahaanEksternal?: string | null
    satpam: string
    kurir?: string | null
    plant: $Enums.Plant
    isDelivered?: boolean
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Surat_KeluarCreateManyTujuanInternalInput = {
    id?: string
    namaPengirimId?: string | null
    tujuanEksternal?: string | null
    perusahaanEksternal?: string | null
    satpam: string
    kurir?: string | null
    plant: $Enums.Plant
    isDelivered?: boolean
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Surat_MasukCreateManyNamaPengirimInternalInput = {
    id?: string
    perusahaanPengirim: string
    namaPengirimEksternal?: string | null
    tujuanId?: string | null
    satpam: string
    kurir?: string | null
    plant: $Enums.Plant
    isAccepted?: boolean
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Surat_MasukCreateManyTujuanInput = {
    id?: string
    perusahaanPengirim: string
    namaPengirimInternalId?: string | null
    namaPengirimEksternal?: string | null
    satpam: string
    kurir?: string | null
    plant: $Enums.Plant
    isAccepted?: boolean
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuestUpdateWithoutPicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    identity?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    itemName?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAprove?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestUncheckedUpdateWithoutPicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    identity?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    itemName?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAprove?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuestUncheckedUpdateManyWithoutPicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    plateNumber?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    identity?: StringFieldUpdateOperationsInput | string
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    itemName?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAprove?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Surat_KeluarUpdateWithoutNamaPengirimInput = {
    id?: StringFieldUpdateOperationsInput | string
    tujuanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    perusahaanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tujuanInternal?: UserUpdateOneWithoutSurat_keluar_tujuanNestedInput
  }

  export type Surat_KeluarUncheckedUpdateWithoutNamaPengirimInput = {
    id?: StringFieldUpdateOperationsInput | string
    tujuanInternalId?: NullableStringFieldUpdateOperationsInput | string | null
    tujuanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    perusahaanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Surat_KeluarUncheckedUpdateManyWithoutNamaPengirimInput = {
    id?: StringFieldUpdateOperationsInput | string
    tujuanInternalId?: NullableStringFieldUpdateOperationsInput | string | null
    tujuanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    perusahaanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Surat_KeluarUpdateWithoutTujuanInternalInput = {
    id?: StringFieldUpdateOperationsInput | string
    tujuanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    perusahaanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaPengirim?: UserUpdateOneWithoutSurat_keluar_pengirimNestedInput
  }

  export type Surat_KeluarUncheckedUpdateWithoutTujuanInternalInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaPengirimId?: NullableStringFieldUpdateOperationsInput | string | null
    tujuanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    perusahaanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Surat_KeluarUncheckedUpdateManyWithoutTujuanInternalInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaPengirimId?: NullableStringFieldUpdateOperationsInput | string | null
    tujuanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    perusahaanEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isDelivered?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Surat_MasukUpdateWithoutNamaPengirimInternalInput = {
    id?: StringFieldUpdateOperationsInput | string
    perusahaanPengirim?: StringFieldUpdateOperationsInput | string
    namaPengirimEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tujuan?: UserUpdateOneWithoutTujuan_masukNestedInput
  }

  export type Surat_MasukUncheckedUpdateWithoutNamaPengirimInternalInput = {
    id?: StringFieldUpdateOperationsInput | string
    perusahaanPengirim?: StringFieldUpdateOperationsInput | string
    namaPengirimEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    tujuanId?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Surat_MasukUncheckedUpdateManyWithoutNamaPengirimInternalInput = {
    id?: StringFieldUpdateOperationsInput | string
    perusahaanPengirim?: StringFieldUpdateOperationsInput | string
    namaPengirimEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    tujuanId?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Surat_MasukUpdateWithoutTujuanInput = {
    id?: StringFieldUpdateOperationsInput | string
    perusahaanPengirim?: StringFieldUpdateOperationsInput | string
    namaPengirimEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    namaPengirimInternal?: UserUpdateOneWithoutSurat_masukNestedInput
  }

  export type Surat_MasukUncheckedUpdateWithoutTujuanInput = {
    id?: StringFieldUpdateOperationsInput | string
    perusahaanPengirim?: StringFieldUpdateOperationsInput | string
    namaPengirimInternalId?: NullableStringFieldUpdateOperationsInput | string | null
    namaPengirimEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Surat_MasukUncheckedUpdateManyWithoutTujuanInput = {
    id?: StringFieldUpdateOperationsInput | string
    perusahaanPengirim?: StringFieldUpdateOperationsInput | string
    namaPengirimInternalId?: NullableStringFieldUpdateOperationsInput | string | null
    namaPengirimEksternal?: NullableStringFieldUpdateOperationsInput | string | null
    satpam?: StringFieldUpdateOperationsInput | string
    kurir?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    isAccepted?: BoolFieldUpdateOperationsInput | boolean
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiCreateManyEmployeeInput = {
    id?: string
    nopol?: string | null
    plant: $Enums.Plant
    kendaraan?: $Enums.Kendaraan
    keterangan?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AbsensiUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nopol?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    kendaraan?: EnumKendaraanFieldUpdateOperationsInput | $Enums.Kendaraan
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nopol?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    kendaraan?: EnumKendaraanFieldUpdateOperationsInput | $Enums.Kendaraan
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AbsensiUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nopol?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: EnumPlantFieldUpdateOperationsInput | $Enums.Plant
    kendaraan?: EnumKendaraanFieldUpdateOperationsInput | $Enums.Kendaraan
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}