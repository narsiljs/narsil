import { Event } from './Event';

type Publisher = {
  publish: <T extends Event<any>>(event: T) => Promise<void>;
};

export type { Publisher };
