import { asValue, AwilixContainer } from 'awilix';
import { RequestHandler } from 'express';

const requestContainer =
  (container: AwilixContainer): RequestHandler =>
  (req, res, next) => {
    const scopedContainer = container.createScope();

    scopedContainer.register({
      requestId: asValue(req.id),
    });

    req.container = scopedContainer;
    next();
  };

export { requestContainer };
