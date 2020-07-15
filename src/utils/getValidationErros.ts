import { ValidationError } from 'yup';

interface IErrors {
  [key: string]: string;
}

export default function getValidationError(err: ValidationError): IErrors {
  const validationErros: IErrors = {};

  err.inner.forEach((error) => {
    validationErros[error.path] = error.message;
  });

  return validationErros;
}
