/* tslint:disable */
/* eslint-disable */
export interface HttpValidationProblemDetails {
  detail?: string | null;
  errors?: ({
[key: string]: Array<string>;
}) | null;
  instance?: string | null;
  status?: number | null;
  title?: string | null;
  type?: string | null;

  [key: string]: ({
[key: string]: Array<string>;
}) | null | any | number | null | string | null | undefined;
}
