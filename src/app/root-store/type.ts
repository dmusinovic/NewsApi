const typeCache: { [label: string]: boolean } = {};

// Ensures actions have unique names
// tslint:disable-next-line:only-arrow-functions
export function type<T>(label: T | ''): T {
  if (typeCache[label as string]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }

  typeCache[label as string] = true;

  return label as T;
}
