import { Event, EventAddress } from './Event';

type SubscriberOptions = {
  single: boolean;
  nackOn: (error?: Error) => boolean;
};

type Subscriber<OPTS = SubscriberOptions> = {
  add: <E extends Event<any>>(
    address: EventAddress<E['eventType'], E['topic']>,
    handler: (event: E) => Promise<void>,
    opts?: Partial<OPTS>
  ) => Promise<void>;

  start: () => Promise<void>;

  dispose: () => Promise<void>;
};

export type { Subscriber, SubscriberOptions };
