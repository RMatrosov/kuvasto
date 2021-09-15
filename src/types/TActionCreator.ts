export type TActionCreator<ActionType, TPayload = undefined> = [
    TPayload,
] extends [undefined]
    ? () => { type: ActionType }
    : (payload: TPayload) => { type: ActionType; payload: TPayload };