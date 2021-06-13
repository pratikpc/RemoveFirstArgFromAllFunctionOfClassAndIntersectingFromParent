type ReplaceInstanceType<T, TNewInstance> = T extends new (
  ...args: any[]
) => // eslint-disable-next-line @typescript-eslint/no-unused-vars
infer _R
  ? TNewInstance
  : never;

type ArgumentTypesSkipOne<T> = T extends (a: any, ...args: infer U) => any
  ? U
  : never;
type RemoveArg<T> = T extends (a: any, ...args: any[]) => infer R
  ? (...a: ArgumentTypesSkipOne<T>) => R
  : T;

export type RemoveFirstArg<TCtor extends new (...args: any[]) => any> =
  ReplaceInstanceType<
    TCtor,
    {
      [P in keyof InstanceType<TCtor>]: RemoveArg<InstanceType<TCtor>[P]>;
    }
  >;

export type removefirstargfromallfunctionofclassandintersectingfromparent<
  Parent,
  Child extends Parent
> = Omit<RemoveFirstArg<new (...args: any[]) => Child>, keyof Parent>;

export default removefirstargfromallfunctionofclassandintersectingfromparent;
