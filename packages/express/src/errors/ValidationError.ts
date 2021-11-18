import Joi from 'types-joi';
import { BaseError, Exception, makePredicate } from '@narsiljs/core';

namespace ValidationError {
  const type = Symbol();
  const code = 'ValidationError';

  type Props = {
    readonly target: string;
    readonly error: Joi.ValidationError;
  };

  export const create = ({ error, target }: Props): Exception<Props> =>
    new BaseError<Props>({ type, code, message: error.message, meta: { target, error } });

  export const is = makePredicate<Exception<Props>>(type);
}

export { ValidationError };
