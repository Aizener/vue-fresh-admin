type ExpandObject<T> = T extends infer P ? { [K in keyof P]: P[K] } : never;
