export class Err extends Object {}

export const invalidParameter = new Err({status: 'invalid query parameter'});
export const exceedParameter = new Err({status: 'maximum number of parameter (1) exceeded'});

export function inParam() {
  return invalidParameter;
}

export function exParam() {
  return exceedParameter;
}
