declare const __brand: unique symbol;

export type Brand<T, V> = T & { [__brand]: V };