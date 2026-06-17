// LeetCode 2795: Parallel execution of promises
// https://leetcode.com/problems/parallel-execution-of-promises-for-individual-results-retrieval/?q=retool

type FulfilledObj = {
  status: 'fulfilled';
  value: string;
}
type RejectedObj = {
  status: 'rejected';
  reason: string;
}
type Obj = FulfilledObj | RejectedObj;

export function promiseAllSettled(functions: Function[]): Promise<Obj[]> {
  return new Promise(resolve => {
    if (functions.length === 0) {
      resolve([]);
      return;
    }

    const results: Obj[] = new Array(functions.length);
    let settled = 0;

    functions.forEach((fn, i) => {
      fn()
          .then((value: string) => {
            results[i] = { status: 'fulfilled', value };
          })
          .catch((reason: string) => {
            results[i] = { status: 'rejected', reason };
          })
          .finally(() => {
            if (++settled === functions.length) resolve(results);
          });
    });
  });
};

export function promiseAllSettledSimple(functions: Function[]): Promise<Obj[]> {
  return Promise.all(
      functions.map(fn =>
          fn()
              .then((value: string): Obj => ({ status: 'fulfilled', value } as FulfilledObj))
              .catch((reason: string): Obj => ({ status: 'rejected', reason } as RejectedObj))
      )
  );
};


/**
 * const functions = [
 *    () => new Promise(resolve => setTimeout(() => resolve(15), 100))
 * ]
 * const time = performance.now()
 *
 * const promise = promiseAllSettled(functions);
 *
 * promise.then(res => {
 *     const out = {t: Math.floor(performance.now() - time), values: res}
 *     console.log(out) // {"t":100,"values":[{"status":"fulfilled","value":15}]}
 * })
 */

