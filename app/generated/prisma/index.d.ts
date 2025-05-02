
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Court
 * 
 */
export type Court = $Result.DefaultSelection<Prisma.$CourtPayload>
/**
 * Model Scoreboard
 * 
 */
export type Scoreboard = $Result.DefaultSelection<Prisma.$ScoreboardPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Courts
 * const courts = await prisma.court.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Courts
   * const courts = await prisma.court.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.court`: Exposes CRUD operations for the **Court** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courts
    * const courts = await prisma.court.findMany()
    * ```
    */
  get court(): Prisma.CourtDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scoreboard`: Exposes CRUD operations for the **Scoreboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scoreboards
    * const scoreboards = await prisma.scoreboard.findMany()
    * ```
    */
  get scoreboard(): Prisma.ScoreboardDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Court: 'Court',
    Scoreboard: 'Scoreboard'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "court" | "scoreboard"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Court: {
        payload: Prisma.$CourtPayload<ExtArgs>
        fields: Prisma.CourtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>
          }
          findFirst: {
            args: Prisma.CourtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>
          }
          findMany: {
            args: Prisma.CourtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>[]
          }
          create: {
            args: Prisma.CourtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>
          }
          createMany: {
            args: Prisma.CourtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourtCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>[]
          }
          delete: {
            args: Prisma.CourtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>
          }
          update: {
            args: Prisma.CourtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>
          }
          deleteMany: {
            args: Prisma.CourtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourtUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>[]
          }
          upsert: {
            args: Prisma.CourtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourtPayload>
          }
          aggregate: {
            args: Prisma.CourtAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourt>
          }
          groupBy: {
            args: Prisma.CourtGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourtGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourtCountArgs<ExtArgs>
            result: $Utils.Optional<CourtCountAggregateOutputType> | number
          }
        }
      }
      Scoreboard: {
        payload: Prisma.$ScoreboardPayload<ExtArgs>
        fields: Prisma.ScoreboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoreboardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoreboardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload>
          }
          findFirst: {
            args: Prisma.ScoreboardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoreboardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload>
          }
          findMany: {
            args: Prisma.ScoreboardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload>[]
          }
          create: {
            args: Prisma.ScoreboardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload>
          }
          createMany: {
            args: Prisma.ScoreboardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScoreboardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload>[]
          }
          delete: {
            args: Prisma.ScoreboardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload>
          }
          update: {
            args: Prisma.ScoreboardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload>
          }
          deleteMany: {
            args: Prisma.ScoreboardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScoreboardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScoreboardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload>[]
          }
          upsert: {
            args: Prisma.ScoreboardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreboardPayload>
          }
          aggregate: {
            args: Prisma.ScoreboardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScoreboard>
          }
          groupBy: {
            args: Prisma.ScoreboardGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScoreboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScoreboardCountArgs<ExtArgs>
            result: $Utils.Optional<ScoreboardCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    court?: CourtOmit
    scoreboard?: ScoreboardOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CourtCountOutputType
   */

  export type CourtCountOutputType = {
    scoreboard: number
  }

  export type CourtCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scoreboard?: boolean | CourtCountOutputTypeCountScoreboardArgs
  }

  // Custom InputTypes
  /**
   * CourtCountOutputType without action
   */
  export type CourtCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourtCountOutputType
     */
    select?: CourtCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourtCountOutputType without action
   */
  export type CourtCountOutputTypeCountScoreboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreboardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Court
   */

  export type AggregateCourt = {
    _count: CourtCountAggregateOutputType | null
    _avg: CourtAvgAggregateOutputType | null
    _sum: CourtSumAggregateOutputType | null
    _min: CourtMinAggregateOutputType | null
    _max: CourtMaxAggregateOutputType | null
  }

  export type CourtAvgAggregateOutputType = {
    id: number | null
  }

  export type CourtSumAggregateOutputType = {
    id: number | null
  }

  export type CourtMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CourtMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CourtCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CourtAvgAggregateInputType = {
    id?: true
  }

  export type CourtSumAggregateInputType = {
    id?: true
  }

  export type CourtMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CourtMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CourtCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CourtAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Court to aggregate.
     */
    where?: CourtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtOrderByWithRelationInput | CourtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courts
    **/
    _count?: true | CourtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourtAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourtSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourtMaxAggregateInputType
  }

  export type GetCourtAggregateType<T extends CourtAggregateArgs> = {
        [P in keyof T & keyof AggregateCourt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourt[P]>
      : GetScalarType<T[P], AggregateCourt[P]>
  }




  export type CourtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourtWhereInput
    orderBy?: CourtOrderByWithAggregationInput | CourtOrderByWithAggregationInput[]
    by: CourtScalarFieldEnum[] | CourtScalarFieldEnum
    having?: CourtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourtCountAggregateInputType | true
    _avg?: CourtAvgAggregateInputType
    _sum?: CourtSumAggregateInputType
    _min?: CourtMinAggregateInputType
    _max?: CourtMaxAggregateInputType
  }

  export type CourtGroupByOutputType = {
    id: number
    name: string
    _count: CourtCountAggregateOutputType | null
    _avg: CourtAvgAggregateOutputType | null
    _sum: CourtSumAggregateOutputType | null
    _min: CourtMinAggregateOutputType | null
    _max: CourtMaxAggregateOutputType | null
  }

  type GetCourtGroupByPayload<T extends CourtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourtGroupByOutputType[P]>
            : GetScalarType<T[P], CourtGroupByOutputType[P]>
        }
      >
    >


  export type CourtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    scoreboard?: boolean | Court$scoreboardArgs<ExtArgs>
    _count?: boolean | CourtCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["court"]>

  export type CourtSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["court"]>

  export type CourtSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["court"]>

  export type CourtSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CourtOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["court"]>
  export type CourtInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scoreboard?: boolean | Court$scoreboardArgs<ExtArgs>
    _count?: boolean | CourtCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourtIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourtIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CourtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Court"
    objects: {
      scoreboard: Prisma.$ScoreboardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["court"]>
    composites: {}
  }

  type CourtGetPayload<S extends boolean | null | undefined | CourtDefaultArgs> = $Result.GetResult<Prisma.$CourtPayload, S>

  type CourtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourtCountAggregateInputType | true
    }

  export interface CourtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Court'], meta: { name: 'Court' } }
    /**
     * Find zero or one Court that matches the filter.
     * @param {CourtFindUniqueArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourtFindUniqueArgs>(args: SelectSubset<T, CourtFindUniqueArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Court that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourtFindUniqueOrThrowArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourtFindUniqueOrThrowArgs>(args: SelectSubset<T, CourtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Court that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtFindFirstArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourtFindFirstArgs>(args?: SelectSubset<T, CourtFindFirstArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Court that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtFindFirstOrThrowArgs} args - Arguments to find a Court
     * @example
     * // Get one Court
     * const court = await prisma.court.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourtFindFirstOrThrowArgs>(args?: SelectSubset<T, CourtFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courts
     * const courts = await prisma.court.findMany()
     * 
     * // Get first 10 Courts
     * const courts = await prisma.court.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courtWithIdOnly = await prisma.court.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourtFindManyArgs>(args?: SelectSubset<T, CourtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Court.
     * @param {CourtCreateArgs} args - Arguments to create a Court.
     * @example
     * // Create one Court
     * const Court = await prisma.court.create({
     *   data: {
     *     // ... data to create a Court
     *   }
     * })
     * 
     */
    create<T extends CourtCreateArgs>(args: SelectSubset<T, CourtCreateArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courts.
     * @param {CourtCreateManyArgs} args - Arguments to create many Courts.
     * @example
     * // Create many Courts
     * const court = await prisma.court.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourtCreateManyArgs>(args?: SelectSubset<T, CourtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courts and returns the data saved in the database.
     * @param {CourtCreateManyAndReturnArgs} args - Arguments to create many Courts.
     * @example
     * // Create many Courts
     * const court = await prisma.court.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courts and only return the `id`
     * const courtWithIdOnly = await prisma.court.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourtCreateManyAndReturnArgs>(args?: SelectSubset<T, CourtCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Court.
     * @param {CourtDeleteArgs} args - Arguments to delete one Court.
     * @example
     * // Delete one Court
     * const Court = await prisma.court.delete({
     *   where: {
     *     // ... filter to delete one Court
     *   }
     * })
     * 
     */
    delete<T extends CourtDeleteArgs>(args: SelectSubset<T, CourtDeleteArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Court.
     * @param {CourtUpdateArgs} args - Arguments to update one Court.
     * @example
     * // Update one Court
     * const court = await prisma.court.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourtUpdateArgs>(args: SelectSubset<T, CourtUpdateArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courts.
     * @param {CourtDeleteManyArgs} args - Arguments to filter Courts to delete.
     * @example
     * // Delete a few Courts
     * const { count } = await prisma.court.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourtDeleteManyArgs>(args?: SelectSubset<T, CourtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courts
     * const court = await prisma.court.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourtUpdateManyArgs>(args: SelectSubset<T, CourtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courts and returns the data updated in the database.
     * @param {CourtUpdateManyAndReturnArgs} args - Arguments to update many Courts.
     * @example
     * // Update many Courts
     * const court = await prisma.court.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courts and only return the `id`
     * const courtWithIdOnly = await prisma.court.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourtUpdateManyAndReturnArgs>(args: SelectSubset<T, CourtUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Court.
     * @param {CourtUpsertArgs} args - Arguments to update or create a Court.
     * @example
     * // Update or create a Court
     * const court = await prisma.court.upsert({
     *   create: {
     *     // ... data to create a Court
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Court we want to update
     *   }
     * })
     */
    upsert<T extends CourtUpsertArgs>(args: SelectSubset<T, CourtUpsertArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtCountArgs} args - Arguments to filter Courts to count.
     * @example
     * // Count the number of Courts
     * const count = await prisma.court.count({
     *   where: {
     *     // ... the filter for the Courts we want to count
     *   }
     * })
    **/
    count<T extends CourtCountArgs>(
      args?: Subset<T, CourtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Court.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourtAggregateArgs>(args: Subset<T, CourtAggregateArgs>): Prisma.PrismaPromise<GetCourtAggregateType<T>>

    /**
     * Group by Court.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourtGroupByArgs} args - Group by arguments.
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
      T extends CourtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourtGroupByArgs['orderBy'] }
        : { orderBy?: CourtGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Court model
   */
  readonly fields: CourtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Court.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scoreboard<T extends Court$scoreboardArgs<ExtArgs> = {}>(args?: Subset<T, Court$scoreboardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Court model
   */
  interface CourtFieldRefs {
    readonly id: FieldRef<"Court", 'Int'>
    readonly name: FieldRef<"Court", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Court findUnique
   */
  export type CourtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * Filter, which Court to fetch.
     */
    where: CourtWhereUniqueInput
  }

  /**
   * Court findUniqueOrThrow
   */
  export type CourtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * Filter, which Court to fetch.
     */
    where: CourtWhereUniqueInput
  }

  /**
   * Court findFirst
   */
  export type CourtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * Filter, which Court to fetch.
     */
    where?: CourtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtOrderByWithRelationInput | CourtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courts.
     */
    cursor?: CourtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courts.
     */
    distinct?: CourtScalarFieldEnum | CourtScalarFieldEnum[]
  }

  /**
   * Court findFirstOrThrow
   */
  export type CourtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * Filter, which Court to fetch.
     */
    where?: CourtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtOrderByWithRelationInput | CourtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courts.
     */
    cursor?: CourtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courts.
     */
    distinct?: CourtScalarFieldEnum | CourtScalarFieldEnum[]
  }

  /**
   * Court findMany
   */
  export type CourtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * Filter, which Courts to fetch.
     */
    where?: CourtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courts to fetch.
     */
    orderBy?: CourtOrderByWithRelationInput | CourtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courts.
     */
    cursor?: CourtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courts.
     */
    skip?: number
    distinct?: CourtScalarFieldEnum | CourtScalarFieldEnum[]
  }

  /**
   * Court create
   */
  export type CourtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * The data needed to create a Court.
     */
    data: XOR<CourtCreateInput, CourtUncheckedCreateInput>
  }

  /**
   * Court createMany
   */
  export type CourtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courts.
     */
    data: CourtCreateManyInput | CourtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Court createManyAndReturn
   */
  export type CourtCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * The data used to create many Courts.
     */
    data: CourtCreateManyInput | CourtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Court update
   */
  export type CourtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * The data needed to update a Court.
     */
    data: XOR<CourtUpdateInput, CourtUncheckedUpdateInput>
    /**
     * Choose, which Court to update.
     */
    where: CourtWhereUniqueInput
  }

  /**
   * Court updateMany
   */
  export type CourtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courts.
     */
    data: XOR<CourtUpdateManyMutationInput, CourtUncheckedUpdateManyInput>
    /**
     * Filter which Courts to update
     */
    where?: CourtWhereInput
    /**
     * Limit how many Courts to update.
     */
    limit?: number
  }

  /**
   * Court updateManyAndReturn
   */
  export type CourtUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * The data used to update Courts.
     */
    data: XOR<CourtUpdateManyMutationInput, CourtUncheckedUpdateManyInput>
    /**
     * Filter which Courts to update
     */
    where?: CourtWhereInput
    /**
     * Limit how many Courts to update.
     */
    limit?: number
  }

  /**
   * Court upsert
   */
  export type CourtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * The filter to search for the Court to update in case it exists.
     */
    where: CourtWhereUniqueInput
    /**
     * In case the Court found by the `where` argument doesn't exist, create a new Court with this data.
     */
    create: XOR<CourtCreateInput, CourtUncheckedCreateInput>
    /**
     * In case the Court was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourtUpdateInput, CourtUncheckedUpdateInput>
  }

  /**
   * Court delete
   */
  export type CourtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
    /**
     * Filter which Court to delete.
     */
    where: CourtWhereUniqueInput
  }

  /**
   * Court deleteMany
   */
  export type CourtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courts to delete
     */
    where?: CourtWhereInput
    /**
     * Limit how many Courts to delete.
     */
    limit?: number
  }

  /**
   * Court.scoreboard
   */
  export type Court$scoreboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoreboard
     */
    omit?: ScoreboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreboardInclude<ExtArgs> | null
    where?: ScoreboardWhereInput
    orderBy?: ScoreboardOrderByWithRelationInput | ScoreboardOrderByWithRelationInput[]
    cursor?: ScoreboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreboardScalarFieldEnum | ScoreboardScalarFieldEnum[]
  }

  /**
   * Court without action
   */
  export type CourtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Court
     */
    select?: CourtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Court
     */
    omit?: CourtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourtInclude<ExtArgs> | null
  }


  /**
   * Model Scoreboard
   */

  export type AggregateScoreboard = {
    _count: ScoreboardCountAggregateOutputType | null
    _avg: ScoreboardAvgAggregateOutputType | null
    _sum: ScoreboardSumAggregateOutputType | null
    _min: ScoreboardMinAggregateOutputType | null
    _max: ScoreboardMaxAggregateOutputType | null
  }

  export type ScoreboardAvgAggregateOutputType = {
    id: number | null
    courtId: number | null
    scoreA: number | null
    scoreB: number | null
  }

  export type ScoreboardSumAggregateOutputType = {
    id: number | null
    courtId: number | null
    scoreA: number | null
    scoreB: number | null
  }

  export type ScoreboardMinAggregateOutputType = {
    id: number | null
    courtId: number | null
    teamA: string | null
    teamB: string | null
    scoreA: number | null
    scoreB: number | null
    updatedAt: Date | null
  }

  export type ScoreboardMaxAggregateOutputType = {
    id: number | null
    courtId: number | null
    teamA: string | null
    teamB: string | null
    scoreA: number | null
    scoreB: number | null
    updatedAt: Date | null
  }

  export type ScoreboardCountAggregateOutputType = {
    id: number
    courtId: number
    teamA: number
    teamB: number
    scoreA: number
    scoreB: number
    updatedAt: number
    _all: number
  }


  export type ScoreboardAvgAggregateInputType = {
    id?: true
    courtId?: true
    scoreA?: true
    scoreB?: true
  }

  export type ScoreboardSumAggregateInputType = {
    id?: true
    courtId?: true
    scoreA?: true
    scoreB?: true
  }

  export type ScoreboardMinAggregateInputType = {
    id?: true
    courtId?: true
    teamA?: true
    teamB?: true
    scoreA?: true
    scoreB?: true
    updatedAt?: true
  }

  export type ScoreboardMaxAggregateInputType = {
    id?: true
    courtId?: true
    teamA?: true
    teamB?: true
    scoreA?: true
    scoreB?: true
    updatedAt?: true
  }

  export type ScoreboardCountAggregateInputType = {
    id?: true
    courtId?: true
    teamA?: true
    teamB?: true
    scoreA?: true
    scoreB?: true
    updatedAt?: true
    _all?: true
  }

  export type ScoreboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scoreboard to aggregate.
     */
    where?: ScoreboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scoreboards to fetch.
     */
    orderBy?: ScoreboardOrderByWithRelationInput | ScoreboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoreboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scoreboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scoreboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scoreboards
    **/
    _count?: true | ScoreboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoreboardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoreboardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoreboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoreboardMaxAggregateInputType
  }

  export type GetScoreboardAggregateType<T extends ScoreboardAggregateArgs> = {
        [P in keyof T & keyof AggregateScoreboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScoreboard[P]>
      : GetScalarType<T[P], AggregateScoreboard[P]>
  }




  export type ScoreboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreboardWhereInput
    orderBy?: ScoreboardOrderByWithAggregationInput | ScoreboardOrderByWithAggregationInput[]
    by: ScoreboardScalarFieldEnum[] | ScoreboardScalarFieldEnum
    having?: ScoreboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoreboardCountAggregateInputType | true
    _avg?: ScoreboardAvgAggregateInputType
    _sum?: ScoreboardSumAggregateInputType
    _min?: ScoreboardMinAggregateInputType
    _max?: ScoreboardMaxAggregateInputType
  }

  export type ScoreboardGroupByOutputType = {
    id: number
    courtId: number
    teamA: string
    teamB: string
    scoreA: number
    scoreB: number
    updatedAt: Date
    _count: ScoreboardCountAggregateOutputType | null
    _avg: ScoreboardAvgAggregateOutputType | null
    _sum: ScoreboardSumAggregateOutputType | null
    _min: ScoreboardMinAggregateOutputType | null
    _max: ScoreboardMaxAggregateOutputType | null
  }

  type GetScoreboardGroupByPayload<T extends ScoreboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoreboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoreboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoreboardGroupByOutputType[P]>
            : GetScalarType<T[P], ScoreboardGroupByOutputType[P]>
        }
      >
    >


  export type ScoreboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courtId?: boolean
    teamA?: boolean
    teamB?: boolean
    scoreA?: boolean
    scoreB?: boolean
    updatedAt?: boolean
    court?: boolean | CourtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scoreboard"]>

  export type ScoreboardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courtId?: boolean
    teamA?: boolean
    teamB?: boolean
    scoreA?: boolean
    scoreB?: boolean
    updatedAt?: boolean
    court?: boolean | CourtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scoreboard"]>

  export type ScoreboardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courtId?: boolean
    teamA?: boolean
    teamB?: boolean
    scoreA?: boolean
    scoreB?: boolean
    updatedAt?: boolean
    court?: boolean | CourtDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scoreboard"]>

  export type ScoreboardSelectScalar = {
    id?: boolean
    courtId?: boolean
    teamA?: boolean
    teamB?: boolean
    scoreA?: boolean
    scoreB?: boolean
    updatedAt?: boolean
  }

  export type ScoreboardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courtId" | "teamA" | "teamB" | "scoreA" | "scoreB" | "updatedAt", ExtArgs["result"]["scoreboard"]>
  export type ScoreboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    court?: boolean | CourtDefaultArgs<ExtArgs>
  }
  export type ScoreboardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    court?: boolean | CourtDefaultArgs<ExtArgs>
  }
  export type ScoreboardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    court?: boolean | CourtDefaultArgs<ExtArgs>
  }

  export type $ScoreboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scoreboard"
    objects: {
      court: Prisma.$CourtPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courtId: number
      teamA: string
      teamB: string
      scoreA: number
      scoreB: number
      updatedAt: Date
    }, ExtArgs["result"]["scoreboard"]>
    composites: {}
  }

  type ScoreboardGetPayload<S extends boolean | null | undefined | ScoreboardDefaultArgs> = $Result.GetResult<Prisma.$ScoreboardPayload, S>

  type ScoreboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScoreboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScoreboardCountAggregateInputType | true
    }

  export interface ScoreboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scoreboard'], meta: { name: 'Scoreboard' } }
    /**
     * Find zero or one Scoreboard that matches the filter.
     * @param {ScoreboardFindUniqueArgs} args - Arguments to find a Scoreboard
     * @example
     * // Get one Scoreboard
     * const scoreboard = await prisma.scoreboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScoreboardFindUniqueArgs>(args: SelectSubset<T, ScoreboardFindUniqueArgs<ExtArgs>>): Prisma__ScoreboardClient<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scoreboard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScoreboardFindUniqueOrThrowArgs} args - Arguments to find a Scoreboard
     * @example
     * // Get one Scoreboard
     * const scoreboard = await prisma.scoreboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScoreboardFindUniqueOrThrowArgs>(args: SelectSubset<T, ScoreboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScoreboardClient<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scoreboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreboardFindFirstArgs} args - Arguments to find a Scoreboard
     * @example
     * // Get one Scoreboard
     * const scoreboard = await prisma.scoreboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScoreboardFindFirstArgs>(args?: SelectSubset<T, ScoreboardFindFirstArgs<ExtArgs>>): Prisma__ScoreboardClient<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scoreboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreboardFindFirstOrThrowArgs} args - Arguments to find a Scoreboard
     * @example
     * // Get one Scoreboard
     * const scoreboard = await prisma.scoreboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScoreboardFindFirstOrThrowArgs>(args?: SelectSubset<T, ScoreboardFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScoreboardClient<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scoreboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreboardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scoreboards
     * const scoreboards = await prisma.scoreboard.findMany()
     * 
     * // Get first 10 Scoreboards
     * const scoreboards = await prisma.scoreboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoreboardWithIdOnly = await prisma.scoreboard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScoreboardFindManyArgs>(args?: SelectSubset<T, ScoreboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scoreboard.
     * @param {ScoreboardCreateArgs} args - Arguments to create a Scoreboard.
     * @example
     * // Create one Scoreboard
     * const Scoreboard = await prisma.scoreboard.create({
     *   data: {
     *     // ... data to create a Scoreboard
     *   }
     * })
     * 
     */
    create<T extends ScoreboardCreateArgs>(args: SelectSubset<T, ScoreboardCreateArgs<ExtArgs>>): Prisma__ScoreboardClient<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scoreboards.
     * @param {ScoreboardCreateManyArgs} args - Arguments to create many Scoreboards.
     * @example
     * // Create many Scoreboards
     * const scoreboard = await prisma.scoreboard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScoreboardCreateManyArgs>(args?: SelectSubset<T, ScoreboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scoreboards and returns the data saved in the database.
     * @param {ScoreboardCreateManyAndReturnArgs} args - Arguments to create many Scoreboards.
     * @example
     * // Create many Scoreboards
     * const scoreboard = await prisma.scoreboard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scoreboards and only return the `id`
     * const scoreboardWithIdOnly = await prisma.scoreboard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScoreboardCreateManyAndReturnArgs>(args?: SelectSubset<T, ScoreboardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scoreboard.
     * @param {ScoreboardDeleteArgs} args - Arguments to delete one Scoreboard.
     * @example
     * // Delete one Scoreboard
     * const Scoreboard = await prisma.scoreboard.delete({
     *   where: {
     *     // ... filter to delete one Scoreboard
     *   }
     * })
     * 
     */
    delete<T extends ScoreboardDeleteArgs>(args: SelectSubset<T, ScoreboardDeleteArgs<ExtArgs>>): Prisma__ScoreboardClient<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scoreboard.
     * @param {ScoreboardUpdateArgs} args - Arguments to update one Scoreboard.
     * @example
     * // Update one Scoreboard
     * const scoreboard = await prisma.scoreboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScoreboardUpdateArgs>(args: SelectSubset<T, ScoreboardUpdateArgs<ExtArgs>>): Prisma__ScoreboardClient<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scoreboards.
     * @param {ScoreboardDeleteManyArgs} args - Arguments to filter Scoreboards to delete.
     * @example
     * // Delete a few Scoreboards
     * const { count } = await prisma.scoreboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScoreboardDeleteManyArgs>(args?: SelectSubset<T, ScoreboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scoreboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scoreboards
     * const scoreboard = await prisma.scoreboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScoreboardUpdateManyArgs>(args: SelectSubset<T, ScoreboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scoreboards and returns the data updated in the database.
     * @param {ScoreboardUpdateManyAndReturnArgs} args - Arguments to update many Scoreboards.
     * @example
     * // Update many Scoreboards
     * const scoreboard = await prisma.scoreboard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scoreboards and only return the `id`
     * const scoreboardWithIdOnly = await prisma.scoreboard.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScoreboardUpdateManyAndReturnArgs>(args: SelectSubset<T, ScoreboardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scoreboard.
     * @param {ScoreboardUpsertArgs} args - Arguments to update or create a Scoreboard.
     * @example
     * // Update or create a Scoreboard
     * const scoreboard = await prisma.scoreboard.upsert({
     *   create: {
     *     // ... data to create a Scoreboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scoreboard we want to update
     *   }
     * })
     */
    upsert<T extends ScoreboardUpsertArgs>(args: SelectSubset<T, ScoreboardUpsertArgs<ExtArgs>>): Prisma__ScoreboardClient<$Result.GetResult<Prisma.$ScoreboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scoreboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreboardCountArgs} args - Arguments to filter Scoreboards to count.
     * @example
     * // Count the number of Scoreboards
     * const count = await prisma.scoreboard.count({
     *   where: {
     *     // ... the filter for the Scoreboards we want to count
     *   }
     * })
    **/
    count<T extends ScoreboardCountArgs>(
      args?: Subset<T, ScoreboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoreboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scoreboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScoreboardAggregateArgs>(args: Subset<T, ScoreboardAggregateArgs>): Prisma.PrismaPromise<GetScoreboardAggregateType<T>>

    /**
     * Group by Scoreboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreboardGroupByArgs} args - Group by arguments.
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
      T extends ScoreboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoreboardGroupByArgs['orderBy'] }
        : { orderBy?: ScoreboardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScoreboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scoreboard model
   */
  readonly fields: ScoreboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scoreboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoreboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    court<T extends CourtDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourtDefaultArgs<ExtArgs>>): Prisma__CourtClient<$Result.GetResult<Prisma.$CourtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Scoreboard model
   */
  interface ScoreboardFieldRefs {
    readonly id: FieldRef<"Scoreboard", 'Int'>
    readonly courtId: FieldRef<"Scoreboard", 'Int'>
    readonly teamA: FieldRef<"Scoreboard", 'String'>
    readonly teamB: FieldRef<"Scoreboard", 'String'>
    readonly scoreA: FieldRef<"Scoreboard", 'Int'>
    readonly scoreB: FieldRef<"Scoreboard", 'Int'>
    readonly updatedAt: FieldRef<"Scoreboard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Scoreboard findUnique
   */
  export type ScoreboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoreboard
     */
    omit?: ScoreboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreboardInclude<ExtArgs> | null
    /**
     * Filter, which Scoreboard to fetch.
     */
    where: ScoreboardWhereUniqueInput
  }

  /**
   * Scoreboard findUniqueOrThrow
   */
  export type ScoreboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoreboard
     */
    omit?: ScoreboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreboardInclude<ExtArgs> | null
    /**
     * Filter, which Scoreboard to fetch.
     */
    where: ScoreboardWhereUniqueInput
  }

  /**
   * Scoreboard findFirst
   */
  export type ScoreboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoreboard
     */
    omit?: ScoreboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreboardInclude<ExtArgs> | null
    /**
     * Filter, which Scoreboard to fetch.
     */
    where?: ScoreboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scoreboards to fetch.
     */
    orderBy?: ScoreboardOrderByWithRelationInput | ScoreboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scoreboards.
     */
    cursor?: ScoreboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scoreboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scoreboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scoreboards.
     */
    distinct?: ScoreboardScalarFieldEnum | ScoreboardScalarFieldEnum[]
  }

  /**
   * Scoreboard findFirstOrThrow
   */
  export type ScoreboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoreboard
     */
    omit?: ScoreboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreboardInclude<ExtArgs> | null
    /**
     * Filter, which Scoreboard to fetch.
     */
    where?: ScoreboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scoreboards to fetch.
     */
    orderBy?: ScoreboardOrderByWithRelationInput | ScoreboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scoreboards.
     */
    cursor?: ScoreboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scoreboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scoreboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scoreboards.
     */
    distinct?: ScoreboardScalarFieldEnum | ScoreboardScalarFieldEnum[]
  }

  /**
   * Scoreboard findMany
   */
  export type ScoreboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoreboard
     */
    omit?: ScoreboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreboardInclude<ExtArgs> | null
    /**
     * Filter, which Scoreboards to fetch.
     */
    where?: ScoreboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scoreboards to fetch.
     */
    orderBy?: ScoreboardOrderByWithRelationInput | ScoreboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scoreboards.
     */
    cursor?: ScoreboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scoreboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scoreboards.
     */
    skip?: number
    distinct?: ScoreboardScalarFieldEnum | ScoreboardScalarFieldEnum[]
  }

  /**
   * Scoreboard create
   */
  export type ScoreboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoreboard
     */
    omit?: ScoreboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreboardInclude<ExtArgs> | null
    /**
     * The data needed to create a Scoreboard.
     */
    data: XOR<ScoreboardCreateInput, ScoreboardUncheckedCreateInput>
  }

  /**
   * Scoreboard createMany
   */
  export type ScoreboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scoreboards.
     */
    data: ScoreboardCreateManyInput | ScoreboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scoreboard createManyAndReturn
   */
  export type ScoreboardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scoreboard
     */
    omit?: ScoreboardOmit<ExtArgs> | null
    /**
     * The data used to create many Scoreboards.
     */
    data: ScoreboardCreateManyInput | ScoreboardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreboardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scoreboard update
   */
  export type ScoreboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoreboard
     */
    omit?: ScoreboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreboardInclude<ExtArgs> | null
    /**
     * The data needed to update a Scoreboard.
     */
    data: XOR<ScoreboardUpdateInput, ScoreboardUncheckedUpdateInput>
    /**
     * Choose, which Scoreboard to update.
     */
    where: ScoreboardWhereUniqueInput
  }

  /**
   * Scoreboard updateMany
   */
  export type ScoreboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scoreboards.
     */
    data: XOR<ScoreboardUpdateManyMutationInput, ScoreboardUncheckedUpdateManyInput>
    /**
     * Filter which Scoreboards to update
     */
    where?: ScoreboardWhereInput
    /**
     * Limit how many Scoreboards to update.
     */
    limit?: number
  }

  /**
   * Scoreboard updateManyAndReturn
   */
  export type ScoreboardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scoreboard
     */
    omit?: ScoreboardOmit<ExtArgs> | null
    /**
     * The data used to update Scoreboards.
     */
    data: XOR<ScoreboardUpdateManyMutationInput, ScoreboardUncheckedUpdateManyInput>
    /**
     * Filter which Scoreboards to update
     */
    where?: ScoreboardWhereInput
    /**
     * Limit how many Scoreboards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreboardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scoreboard upsert
   */
  export type ScoreboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoreboard
     */
    omit?: ScoreboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreboardInclude<ExtArgs> | null
    /**
     * The filter to search for the Scoreboard to update in case it exists.
     */
    where: ScoreboardWhereUniqueInput
    /**
     * In case the Scoreboard found by the `where` argument doesn't exist, create a new Scoreboard with this data.
     */
    create: XOR<ScoreboardCreateInput, ScoreboardUncheckedCreateInput>
    /**
     * In case the Scoreboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoreboardUpdateInput, ScoreboardUncheckedUpdateInput>
  }

  /**
   * Scoreboard delete
   */
  export type ScoreboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoreboard
     */
    omit?: ScoreboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreboardInclude<ExtArgs> | null
    /**
     * Filter which Scoreboard to delete.
     */
    where: ScoreboardWhereUniqueInput
  }

  /**
   * Scoreboard deleteMany
   */
  export type ScoreboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scoreboards to delete
     */
    where?: ScoreboardWhereInput
    /**
     * Limit how many Scoreboards to delete.
     */
    limit?: number
  }

  /**
   * Scoreboard without action
   */
  export type ScoreboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scoreboard
     */
    select?: ScoreboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scoreboard
     */
    omit?: ScoreboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreboardInclude<ExtArgs> | null
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


  export const CourtScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CourtScalarFieldEnum = (typeof CourtScalarFieldEnum)[keyof typeof CourtScalarFieldEnum]


  export const ScoreboardScalarFieldEnum: {
    id: 'id',
    courtId: 'courtId',
    teamA: 'teamA',
    teamB: 'teamB',
    scoreA: 'scoreA',
    scoreB: 'scoreB',
    updatedAt: 'updatedAt'
  };

  export type ScoreboardScalarFieldEnum = (typeof ScoreboardScalarFieldEnum)[keyof typeof ScoreboardScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CourtWhereInput = {
    AND?: CourtWhereInput | CourtWhereInput[]
    OR?: CourtWhereInput[]
    NOT?: CourtWhereInput | CourtWhereInput[]
    id?: IntFilter<"Court"> | number
    name?: StringFilter<"Court"> | string
    scoreboard?: ScoreboardListRelationFilter
  }

  export type CourtOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    scoreboard?: ScoreboardOrderByRelationAggregateInput
  }

  export type CourtWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourtWhereInput | CourtWhereInput[]
    OR?: CourtWhereInput[]
    NOT?: CourtWhereInput | CourtWhereInput[]
    name?: StringFilter<"Court"> | string
    scoreboard?: ScoreboardListRelationFilter
  }, "id">

  export type CourtOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CourtCountOrderByAggregateInput
    _avg?: CourtAvgOrderByAggregateInput
    _max?: CourtMaxOrderByAggregateInput
    _min?: CourtMinOrderByAggregateInput
    _sum?: CourtSumOrderByAggregateInput
  }

  export type CourtScalarWhereWithAggregatesInput = {
    AND?: CourtScalarWhereWithAggregatesInput | CourtScalarWhereWithAggregatesInput[]
    OR?: CourtScalarWhereWithAggregatesInput[]
    NOT?: CourtScalarWhereWithAggregatesInput | CourtScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Court"> | number
    name?: StringWithAggregatesFilter<"Court"> | string
  }

  export type ScoreboardWhereInput = {
    AND?: ScoreboardWhereInput | ScoreboardWhereInput[]
    OR?: ScoreboardWhereInput[]
    NOT?: ScoreboardWhereInput | ScoreboardWhereInput[]
    id?: IntFilter<"Scoreboard"> | number
    courtId?: IntFilter<"Scoreboard"> | number
    teamA?: StringFilter<"Scoreboard"> | string
    teamB?: StringFilter<"Scoreboard"> | string
    scoreA?: IntFilter<"Scoreboard"> | number
    scoreB?: IntFilter<"Scoreboard"> | number
    updatedAt?: DateTimeFilter<"Scoreboard"> | Date | string
    court?: XOR<CourtScalarRelationFilter, CourtWhereInput>
  }

  export type ScoreboardOrderByWithRelationInput = {
    id?: SortOrder
    courtId?: SortOrder
    teamA?: SortOrder
    teamB?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    updatedAt?: SortOrder
    court?: CourtOrderByWithRelationInput
  }

  export type ScoreboardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScoreboardWhereInput | ScoreboardWhereInput[]
    OR?: ScoreboardWhereInput[]
    NOT?: ScoreboardWhereInput | ScoreboardWhereInput[]
    courtId?: IntFilter<"Scoreboard"> | number
    teamA?: StringFilter<"Scoreboard"> | string
    teamB?: StringFilter<"Scoreboard"> | string
    scoreA?: IntFilter<"Scoreboard"> | number
    scoreB?: IntFilter<"Scoreboard"> | number
    updatedAt?: DateTimeFilter<"Scoreboard"> | Date | string
    court?: XOR<CourtScalarRelationFilter, CourtWhereInput>
  }, "id">

  export type ScoreboardOrderByWithAggregationInput = {
    id?: SortOrder
    courtId?: SortOrder
    teamA?: SortOrder
    teamB?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    updatedAt?: SortOrder
    _count?: ScoreboardCountOrderByAggregateInput
    _avg?: ScoreboardAvgOrderByAggregateInput
    _max?: ScoreboardMaxOrderByAggregateInput
    _min?: ScoreboardMinOrderByAggregateInput
    _sum?: ScoreboardSumOrderByAggregateInput
  }

  export type ScoreboardScalarWhereWithAggregatesInput = {
    AND?: ScoreboardScalarWhereWithAggregatesInput | ScoreboardScalarWhereWithAggregatesInput[]
    OR?: ScoreboardScalarWhereWithAggregatesInput[]
    NOT?: ScoreboardScalarWhereWithAggregatesInput | ScoreboardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Scoreboard"> | number
    courtId?: IntWithAggregatesFilter<"Scoreboard"> | number
    teamA?: StringWithAggregatesFilter<"Scoreboard"> | string
    teamB?: StringWithAggregatesFilter<"Scoreboard"> | string
    scoreA?: IntWithAggregatesFilter<"Scoreboard"> | number
    scoreB?: IntWithAggregatesFilter<"Scoreboard"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Scoreboard"> | Date | string
  }

  export type CourtCreateInput = {
    name: string
    scoreboard?: ScoreboardCreateNestedManyWithoutCourtInput
  }

  export type CourtUncheckedCreateInput = {
    id?: number
    name: string
    scoreboard?: ScoreboardUncheckedCreateNestedManyWithoutCourtInput
  }

  export type CourtUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    scoreboard?: ScoreboardUpdateManyWithoutCourtNestedInput
  }

  export type CourtUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    scoreboard?: ScoreboardUncheckedUpdateManyWithoutCourtNestedInput
  }

  export type CourtCreateManyInput = {
    id?: number
    name: string
  }

  export type CourtUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourtUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreboardCreateInput = {
    teamA: string
    teamB: string
    scoreA: number
    scoreB: number
    updatedAt?: Date | string
    court: CourtCreateNestedOneWithoutScoreboardInput
  }

  export type ScoreboardUncheckedCreateInput = {
    id?: number
    courtId: number
    teamA: string
    teamB: string
    scoreA: number
    scoreB: number
    updatedAt?: Date | string
  }

  export type ScoreboardUpdateInput = {
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    court?: CourtUpdateOneRequiredWithoutScoreboardNestedInput
  }

  export type ScoreboardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courtId?: IntFieldUpdateOperationsInput | number
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreboardCreateManyInput = {
    id?: number
    courtId: number
    teamA: string
    teamB: string
    scoreA: number
    scoreB: number
    updatedAt?: Date | string
  }

  export type ScoreboardUpdateManyMutationInput = {
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreboardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courtId?: IntFieldUpdateOperationsInput | number
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type ScoreboardListRelationFilter = {
    every?: ScoreboardWhereInput
    some?: ScoreboardWhereInput
    none?: ScoreboardWhereInput
  }

  export type ScoreboardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourtCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CourtAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourtMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CourtMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CourtSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type CourtScalarRelationFilter = {
    is?: CourtWhereInput
    isNot?: CourtWhereInput
  }

  export type ScoreboardCountOrderByAggregateInput = {
    id?: SortOrder
    courtId?: SortOrder
    teamA?: SortOrder
    teamB?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoreboardAvgOrderByAggregateInput = {
    id?: SortOrder
    courtId?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
  }

  export type ScoreboardMaxOrderByAggregateInput = {
    id?: SortOrder
    courtId?: SortOrder
    teamA?: SortOrder
    teamB?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoreboardMinOrderByAggregateInput = {
    id?: SortOrder
    courtId?: SortOrder
    teamA?: SortOrder
    teamB?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScoreboardSumOrderByAggregateInput = {
    id?: SortOrder
    courtId?: SortOrder
    scoreA?: SortOrder
    scoreB?: SortOrder
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

  export type ScoreboardCreateNestedManyWithoutCourtInput = {
    create?: XOR<ScoreboardCreateWithoutCourtInput, ScoreboardUncheckedCreateWithoutCourtInput> | ScoreboardCreateWithoutCourtInput[] | ScoreboardUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: ScoreboardCreateOrConnectWithoutCourtInput | ScoreboardCreateOrConnectWithoutCourtInput[]
    createMany?: ScoreboardCreateManyCourtInputEnvelope
    connect?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
  }

  export type ScoreboardUncheckedCreateNestedManyWithoutCourtInput = {
    create?: XOR<ScoreboardCreateWithoutCourtInput, ScoreboardUncheckedCreateWithoutCourtInput> | ScoreboardCreateWithoutCourtInput[] | ScoreboardUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: ScoreboardCreateOrConnectWithoutCourtInput | ScoreboardCreateOrConnectWithoutCourtInput[]
    createMany?: ScoreboardCreateManyCourtInputEnvelope
    connect?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ScoreboardUpdateManyWithoutCourtNestedInput = {
    create?: XOR<ScoreboardCreateWithoutCourtInput, ScoreboardUncheckedCreateWithoutCourtInput> | ScoreboardCreateWithoutCourtInput[] | ScoreboardUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: ScoreboardCreateOrConnectWithoutCourtInput | ScoreboardCreateOrConnectWithoutCourtInput[]
    upsert?: ScoreboardUpsertWithWhereUniqueWithoutCourtInput | ScoreboardUpsertWithWhereUniqueWithoutCourtInput[]
    createMany?: ScoreboardCreateManyCourtInputEnvelope
    set?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    disconnect?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    delete?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    connect?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    update?: ScoreboardUpdateWithWhereUniqueWithoutCourtInput | ScoreboardUpdateWithWhereUniqueWithoutCourtInput[]
    updateMany?: ScoreboardUpdateManyWithWhereWithoutCourtInput | ScoreboardUpdateManyWithWhereWithoutCourtInput[]
    deleteMany?: ScoreboardScalarWhereInput | ScoreboardScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ScoreboardUncheckedUpdateManyWithoutCourtNestedInput = {
    create?: XOR<ScoreboardCreateWithoutCourtInput, ScoreboardUncheckedCreateWithoutCourtInput> | ScoreboardCreateWithoutCourtInput[] | ScoreboardUncheckedCreateWithoutCourtInput[]
    connectOrCreate?: ScoreboardCreateOrConnectWithoutCourtInput | ScoreboardCreateOrConnectWithoutCourtInput[]
    upsert?: ScoreboardUpsertWithWhereUniqueWithoutCourtInput | ScoreboardUpsertWithWhereUniqueWithoutCourtInput[]
    createMany?: ScoreboardCreateManyCourtInputEnvelope
    set?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    disconnect?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    delete?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    connect?: ScoreboardWhereUniqueInput | ScoreboardWhereUniqueInput[]
    update?: ScoreboardUpdateWithWhereUniqueWithoutCourtInput | ScoreboardUpdateWithWhereUniqueWithoutCourtInput[]
    updateMany?: ScoreboardUpdateManyWithWhereWithoutCourtInput | ScoreboardUpdateManyWithWhereWithoutCourtInput[]
    deleteMany?: ScoreboardScalarWhereInput | ScoreboardScalarWhereInput[]
  }

  export type CourtCreateNestedOneWithoutScoreboardInput = {
    create?: XOR<CourtCreateWithoutScoreboardInput, CourtUncheckedCreateWithoutScoreboardInput>
    connectOrCreate?: CourtCreateOrConnectWithoutScoreboardInput
    connect?: CourtWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CourtUpdateOneRequiredWithoutScoreboardNestedInput = {
    create?: XOR<CourtCreateWithoutScoreboardInput, CourtUncheckedCreateWithoutScoreboardInput>
    connectOrCreate?: CourtCreateOrConnectWithoutScoreboardInput
    upsert?: CourtUpsertWithoutScoreboardInput
    connect?: CourtWhereUniqueInput
    update?: XOR<XOR<CourtUpdateToOneWithWhereWithoutScoreboardInput, CourtUpdateWithoutScoreboardInput>, CourtUncheckedUpdateWithoutScoreboardInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type ScoreboardCreateWithoutCourtInput = {
    teamA: string
    teamB: string
    scoreA: number
    scoreB: number
    updatedAt?: Date | string
  }

  export type ScoreboardUncheckedCreateWithoutCourtInput = {
    id?: number
    teamA: string
    teamB: string
    scoreA: number
    scoreB: number
    updatedAt?: Date | string
  }

  export type ScoreboardCreateOrConnectWithoutCourtInput = {
    where: ScoreboardWhereUniqueInput
    create: XOR<ScoreboardCreateWithoutCourtInput, ScoreboardUncheckedCreateWithoutCourtInput>
  }

  export type ScoreboardCreateManyCourtInputEnvelope = {
    data: ScoreboardCreateManyCourtInput | ScoreboardCreateManyCourtInput[]
    skipDuplicates?: boolean
  }

  export type ScoreboardUpsertWithWhereUniqueWithoutCourtInput = {
    where: ScoreboardWhereUniqueInput
    update: XOR<ScoreboardUpdateWithoutCourtInput, ScoreboardUncheckedUpdateWithoutCourtInput>
    create: XOR<ScoreboardCreateWithoutCourtInput, ScoreboardUncheckedCreateWithoutCourtInput>
  }

  export type ScoreboardUpdateWithWhereUniqueWithoutCourtInput = {
    where: ScoreboardWhereUniqueInput
    data: XOR<ScoreboardUpdateWithoutCourtInput, ScoreboardUncheckedUpdateWithoutCourtInput>
  }

  export type ScoreboardUpdateManyWithWhereWithoutCourtInput = {
    where: ScoreboardScalarWhereInput
    data: XOR<ScoreboardUpdateManyMutationInput, ScoreboardUncheckedUpdateManyWithoutCourtInput>
  }

  export type ScoreboardScalarWhereInput = {
    AND?: ScoreboardScalarWhereInput | ScoreboardScalarWhereInput[]
    OR?: ScoreboardScalarWhereInput[]
    NOT?: ScoreboardScalarWhereInput | ScoreboardScalarWhereInput[]
    id?: IntFilter<"Scoreboard"> | number
    courtId?: IntFilter<"Scoreboard"> | number
    teamA?: StringFilter<"Scoreboard"> | string
    teamB?: StringFilter<"Scoreboard"> | string
    scoreA?: IntFilter<"Scoreboard"> | number
    scoreB?: IntFilter<"Scoreboard"> | number
    updatedAt?: DateTimeFilter<"Scoreboard"> | Date | string
  }

  export type CourtCreateWithoutScoreboardInput = {
    name: string
  }

  export type CourtUncheckedCreateWithoutScoreboardInput = {
    id?: number
    name: string
  }

  export type CourtCreateOrConnectWithoutScoreboardInput = {
    where: CourtWhereUniqueInput
    create: XOR<CourtCreateWithoutScoreboardInput, CourtUncheckedCreateWithoutScoreboardInput>
  }

  export type CourtUpsertWithoutScoreboardInput = {
    update: XOR<CourtUpdateWithoutScoreboardInput, CourtUncheckedUpdateWithoutScoreboardInput>
    create: XOR<CourtCreateWithoutScoreboardInput, CourtUncheckedCreateWithoutScoreboardInput>
    where?: CourtWhereInput
  }

  export type CourtUpdateToOneWithWhereWithoutScoreboardInput = {
    where?: CourtWhereInput
    data: XOR<CourtUpdateWithoutScoreboardInput, CourtUncheckedUpdateWithoutScoreboardInput>
  }

  export type CourtUpdateWithoutScoreboardInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourtUncheckedUpdateWithoutScoreboardInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ScoreboardCreateManyCourtInput = {
    id?: number
    teamA: string
    teamB: string
    scoreA: number
    scoreB: number
    updatedAt?: Date | string
  }

  export type ScoreboardUpdateWithoutCourtInput = {
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreboardUncheckedUpdateWithoutCourtInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreboardUncheckedUpdateManyWithoutCourtInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamA?: StringFieldUpdateOperationsInput | string
    teamB?: StringFieldUpdateOperationsInput | string
    scoreA?: IntFieldUpdateOperationsInput | number
    scoreB?: IntFieldUpdateOperationsInput | number
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