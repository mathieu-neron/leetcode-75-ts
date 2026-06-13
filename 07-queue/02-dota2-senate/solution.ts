// LeetCode 649: Dota2 Senate
// https://leetcode.com/problems/dota2-senate/

export function predictPartyVictory(senate: string): string {
  const r: number[] = [];
  const d: number[] = [];
  const n = senate.length;

  for (let i=0; i<n; i++) {
    if (senate[i] === 'R') r.push(i);
    else d.push(i);
  }

  let rh = 0, dh = 0;

  while (rh < r.length && dh < d.length) {
    const r_idx = r[rh++];
    const d_idx = d[dh++];

    if (r_idx < d_idx) r.push(r_idx + n);
    else d.push(d_idx + n);
  }

  return (r.length > d.length)? "Radiant" : "Dire";
}

