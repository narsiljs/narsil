declare namespace NarsilExpress {
  export type RequestContainer = import('awilix').AwilixContainer;
}

declare namespace Express {
  export interface Request {
    id: string;
    container: NarsilExpress.RequestContainer;
    accessToken: any;
  }
}
