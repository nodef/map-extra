import type {testFn, Entries} from "./_types";

/**
 * Discards entries which pass a test.
 * @param x a map
 * @param ft test function (v, k, x)
 */
function reject<T, U>(x: Entries<T, U>, ft: testFn<T, U>): Map<T, U> {
  var a = new Map();
  for(var [k, v] of x)
    if(!ft(v, k, x)) a.set(k, v);
  return a;
}
export default reject;
