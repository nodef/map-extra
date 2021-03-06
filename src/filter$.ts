import type {testFn} from "./_types";

/**
 * Keeps entries which pass a test.
 * @param x an map (updated)
 * @param ft test function (v, k, x)
 * @returns x
 */
function filter$<T, U>(x: Map<T, U>, ft: testFn<T, U>): Map<T, U> {
  for(var [k, v] of x)
    if(!ft(v, k, x)) x.delete(k);
  return x;
}
export default filter$;
