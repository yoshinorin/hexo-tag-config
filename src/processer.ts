// @ts-ignore
export function getObject(obj: object, currentDepth: number, maxDepth: number, keys: Array<string>): string | undefined {
  if (obj[keys[currentDepth]] === undefined) {
    return undefined;
  }
  if (currentDepth === maxDepth) {
    return obj[keys[currentDepth]];
  } else {
    return getObject(obj[keys[currentDepth]], currentDepth + 1, maxDepth, keys);
  }
}
