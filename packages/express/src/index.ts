export * from './errors';
export * from './middlewares';
export * from './validation';
export * from './handler';
export * from './HttpStatus';

declare namespace NarsilExpress {
  export type RequestContainer = import('awilix').AwilixContainer;
}

declare module 'http' {
  export interface IncomingMessage {
    // eslint-disable-next-line @typescript-eslint/ban-types
    id: string | number | object;
    container: NarsilExpress.RequestContainer;
  }
}
