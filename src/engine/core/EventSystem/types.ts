import '../../index.d';

export type CallFunc = (args: any) => void;

export type ListenersList = Utils.SomeObject<CallFunc[]>;
