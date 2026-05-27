# One-time scaffold script for the 75 problem folders.
# Safe to re-run: skips any solution.ts / solution.test.ts that already exists.

$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot

# Schema per problem:
#   cat        category folder         e.g. '01-array-string'
#   idx        per-category number     e.g. '01'
#   slug       kebab-case problem slug e.g. 'merge-strings-alternately'
#   id         leetcode problem id
#   fn         function name           e.g. 'mergeAlternately'
#   sig        signature              e.g. '(word1: string, word2: string): string'
#   zero       zero return body        e.g. 'return "";'  (or '' for void)
#   node       'none' | 'list' | 'tree'   pre-prepend node class
#   tests      array of @{ args = '...'; want = '...' }  rendered with toEqual
#   asserter   'eq' | 'mutates'        eq is default; mutates means call fn then assert on first arg
$problems = @(
    @{ cat='01-array-string'; idx='01'; slug='merge-strings-alternately'; id=1768
       fn='mergeAlternately'; sig='(word1: string, word2: string): string'
       node='none'
       implemented=$true
       body=@'
  let i = 0, j = 0;
  const parts: string[] = [];
  while (i < word1.length && j < word2.length) {
    parts.push(word1[i++]);
    parts.push(word2[j++]);
  }
  parts.push(word1.slice(i));
  parts.push(word2.slice(j));
  return parts.join("");
'@
       tests=@(
         @{ args='"abc", "pqr"';  want='"apbqcr"' }
         @{ args='"ab", "pqrs"';  want='"apbqrs"' }
         @{ args='"abcd", "pq"';  want='"apbqcd"' }
         @{ args='"", "xyz"';     want='"xyz"' }
         @{ args='"xyz", ""';     want='"xyz"' }
       )
    }
    @{ cat='01-array-string'; idx='02'; slug='greatest-common-divisor-of-strings'; id=1071
       fn='gcdOfStrings'; sig='(str1: string, str2: string): string'
       node='none'; zero='return "";'
       tests=@(
         @{ args='"ABCABC", "ABC"';   want='"ABC"' }
         @{ args='"ABABAB", "ABAB"';  want='"AB"' }
         @{ args='"LEET", "CODE"';    want='""' }
       )
    }
    @{ cat='01-array-string'; idx='03'; slug='kids-with-the-greatest-number-of-candies'; id=1431
       fn='kidsWithCandies'; sig='(candies: number[], extraCandies: number): boolean[]'
       node='none'; zero='return [];'
       tests=@(
         @{ args='[2, 3, 5, 1, 3], 3';  want='[true, true, true, false, true]' }
         @{ args='[4, 2, 1, 1, 2], 1';  want='[true, false, false, false, false]' }
       )
    }
    @{ cat='01-array-string'; idx='04'; slug='can-place-flowers'; id=605
       fn='canPlaceFlowers'; sig='(flowerbed: number[], n: number): boolean'
       node='none'; zero='return false;'
       tests=@(
         @{ args='[1, 0, 0, 0, 1], 1';  want='true' }
         @{ args='[1, 0, 0, 0, 1], 2';  want='false' }
       )
    }
    @{ cat='01-array-string'; idx='05'; slug='reverse-vowels-of-a-string'; id=345
       fn='reverseVowels'; sig='(s: string): string'
       node='none'; zero='return "";'
       tests=@(
         @{ args='"IceCreAm"'; want='"AceCreIm"' }
         @{ args='"leetcode"'; want='"leotcede"' }
       )
    }
    @{ cat='01-array-string'; idx='06'; slug='reverse-words-in-a-string'; id=151
       fn='reverseWords'; sig='(s: string): string'
       node='none'; zero='return "";'
       tests=@(
         @{ args='"the sky is blue"';        want='"blue is sky the"' }
         @{ args='"  hello world  "';        want='"world hello"' }
         @{ args='"a good   example"';       want='"example good a"' }
       )
    }
    @{ cat='01-array-string'; idx='07'; slug='product-of-array-except-self'; id=238
       fn='productExceptSelf'; sig='(nums: number[]): number[]'
       node='none'; zero='return [];'
       tests=@(
         @{ args='[1, 2, 3, 4]';     want='[24, 12, 8, 6]' }
         @{ args='[-1, 1, 0, -3, 3]'; want='[0, 0, 9, 0, 0]' }
       )
    }
    @{ cat='01-array-string'; idx='08'; slug='increasing-triplet-subsequence'; id=334
       fn='increasingTriplet'; sig='(nums: number[]): boolean'
       node='none'; zero='return false;'
       tests=@(
         @{ args='[1, 2, 3, 4, 5]';       want='true' }
         @{ args='[5, 4, 3, 2, 1]';       want='false' }
         @{ args='[2, 1, 5, 0, 4, 6]';    want='true' }
       )
    }
    @{ cat='01-array-string'; idx='09'; slug='string-compression'; id=443
       fn='compress'; sig='(chars: string[]): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='["a","a","b","b","c","c","c"]'; want='6' }
         @{ args='["a"]';                          want='1' }
       )
    }

    @{ cat='02-two-pointers'; idx='01'; slug='move-zeroes'; id=283
       fn='moveZeroes'; sig='(nums: number[]): void'
       node='none'; zero=''
       asserter='mutates'
       tests=@(
         @{ args='[0, 1, 0, 3, 12]';  want='[1, 3, 12, 0, 0]' }
         @{ args='[0]';                want='[0]' }
       )
    }
    @{ cat='02-two-pointers'; idx='02'; slug='is-subsequence'; id=392
       fn='isSubsequence'; sig='(s: string, t: string): boolean'
       node='none'; zero='return false;'
       tests=@(
         @{ args='"abc", "ahbgdc"';  want='true' }
         @{ args='"axc", "ahbgdc"';  want='false' }
       )
    }
    @{ cat='02-two-pointers'; idx='03'; slug='container-with-most-water'; id=11
       fn='maxArea'; sig='(height: number[]): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[1, 8, 6, 2, 5, 4, 8, 3, 7]'; want='49' }
         @{ args='[1, 1]';                       want='1' }
       )
    }
    @{ cat='02-two-pointers'; idx='04'; slug='max-number-of-k-sum-pairs'; id=1679
       fn='maxOperations'; sig='(nums: number[], k: number): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[1, 2, 3, 4], 5';        want='2' }
         @{ args='[3, 1, 3, 4, 3], 6';     want='1' }
       )
    }

    @{ cat='03-sliding-window'; idx='01'; slug='maximum-average-subarray-i'; id=643
       fn='findMaxAverage'; sig='(nums: number[], k: number): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[1, 12, -5, -6, 50, 3], 4'; want='12.75' }
         @{ args='[5], 1';                     want='5' }
       )
    }
    @{ cat='03-sliding-window'; idx='02'; slug='maximum-number-of-vowels-in-a-substring-of-given-length'; id=1456
       fn='maxVowels'; sig='(s: string, k: number): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='"abciiidef", 3';  want='3' }
         @{ args='"aeiou", 2';      want='2' }
       )
    }
    @{ cat='03-sliding-window'; idx='03'; slug='max-consecutive-ones-iii'; id=1004
       fn='longestOnes'; sig='(nums: number[], k: number): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2';                                       want='6' }
         @{ args='[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3';               want='10' }
       )
    }
    @{ cat='03-sliding-window'; idx='04'; slug='longest-subarray-of-1s-after-deleting-one-element'; id=1493
       fn='longestSubarray'; sig='(nums: number[]): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[1, 1, 0, 1]';                        want='3' }
         @{ args='[0, 1, 1, 1, 0, 1, 1, 0, 1]';         want='5' }
         @{ args='[1, 1, 1]';                            want='2' }
       )
    }

    @{ cat='04-prefix-sum'; idx='01'; slug='find-the-highest-altitude'; id=1732
       fn='largestAltitude'; sig='(gain: number[]): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[-5, 1, 5, 0, -7]';      want='1' }
         @{ args='[-4, -3, -2, -1, 4, 3, 2]'; want='0' }
       )
    }
    @{ cat='04-prefix-sum'; idx='02'; slug='find-pivot-index'; id=724
       fn='pivotIndex'; sig='(nums: number[]): number'
       node='none'; zero='return -1;'
       tests=@(
         @{ args='[1, 7, 3, 6, 5, 6]';   want='3' }
         @{ args='[1, 2, 3]';             want='-1' }
       )
    }

    @{ cat='05-hash-map-set'; idx='01'; slug='find-the-difference-of-two-arrays'; id=2215
       fn='findDifference'; sig='(nums1: number[], nums2: number[]): number[][]'
       node='none'; zero='return [[], []];'
       tests=@(
         @{ args='[1, 2, 3], [2, 4, 6]';       want='[[1, 3], [4, 6]]' }
         @{ args='[1, 2, 3, 3], [1, 1, 2, 2]'; want='[[3], []]' }
       )
    }
    @{ cat='05-hash-map-set'; idx='02'; slug='unique-number-of-occurrences'; id=1207
       fn='uniqueOccurrences'; sig='(arr: number[]): boolean'
       node='none'; zero='return false;'
       tests=@(
         @{ args='[1, 2, 2, 1, 1, 3]'; want='true' }
         @{ args='[1, 2]';              want='false' }
       )
    }
    @{ cat='05-hash-map-set'; idx='03'; slug='determine-if-two-strings-are-close'; id=1657
       fn='closeStrings'; sig='(word1: string, word2: string): boolean'
       node='none'; zero='return false;'
       tests=@(
         @{ args='"abc", "bca"';        want='true' }
         @{ args='"a", "aa"';            want='false' }
         @{ args='"cabbba", "abbccc"';  want='true' }
       )
    }
    @{ cat='05-hash-map-set'; idx='04'; slug='equal-row-and-column-pairs'; id=2352
       fn='equalPairs'; sig='(grid: number[][]): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[[3, 2, 1], [1, 7, 6], [2, 7, 7]]';                              want='1' }
         @{ args='[[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]';        want='3' }
       )
    }

    @{ cat='06-stack'; idx='01'; slug='removing-stars-from-a-string'; id=2390
       fn='removeStars'; sig='(s: string): string'
       node='none'; zero='return "";'
       tests=@(
         @{ args='"leet**cod*e"'; want='"lecoe"' }
         @{ args='"erase*****"';  want='""' }
       )
    }
    @{ cat='06-stack'; idx='02'; slug='asteroid-collision'; id=735
       fn='asteroidCollision'; sig='(asteroids: number[]): number[]'
       node='none'; zero='return [];'
       tests=@(
         @{ args='[5, 10, -5]';   want='[5, 10]' }
         @{ args='[8, -8]';        want='[]' }
         @{ args='[10, 2, -5]';    want='[10]' }
       )
    }
    @{ cat='06-stack'; idx='03'; slug='decode-string'; id=394
       fn='decodeString'; sig='(s: string): string'
       node='none'; zero='return "";'
       tests=@(
         @{ args='"3[a]2[bc]"';       want='"aaabcbc"' }
         @{ args='"3[a2[c]]"';        want='"accaccacc"' }
         @{ args='"2[abc]3[cd]ef"';   want='"abcabccdcdcdef"' }
       )
    }
)

# ---- second batch: queue, linked list, trees, graphs, heap, search, dp, bit, trie, intervals, monotonic ----
$problems += @(
    @{ cat='07-queue'; idx='01'; slug='number-of-recent-calls'; id=933
       fn='RecentCounter'; sig='(): RecentCounter'
       node='none'; classBased=$true
       tests=@()  # class-based: skipped scaffold only
    }
    @{ cat='07-queue'; idx='02'; slug='dota2-senate'; id=649
       fn='predictPartyVictory'; sig='(senate: string): string'
       node='none'; zero='return "";'
       tests=@(
         @{ args='"RD"';    want='"Radiant"' }
         @{ args='"RDD"';   want='"Dire"' }
       )
    }

    @{ cat='08-linked-list'; idx='01'; slug='delete-the-middle-node-of-a-linked-list'; id=2095
       fn='deleteMiddle'; sig='(head: ListNode | null): ListNode | null'
       node='list'; zero='return null;'
       listTests=@(
         @{ args='[1, 3, 4, 7, 1, 2, 6]'; want='[1, 3, 4, 1, 2, 6]' }
         @{ args='[1, 2, 3, 4]';           want='[1, 2, 4]' }
         @{ args='[2, 1]';                 want='[2]' }
       )
    }
    @{ cat='08-linked-list'; idx='02'; slug='odd-even-linked-list'; id=328
       fn='oddEvenList'; sig='(head: ListNode | null): ListNode | null'
       node='list'; zero='return null;'
       listTests=@(
         @{ args='[1, 2, 3, 4, 5]';          want='[1, 3, 5, 2, 4]' }
         @{ args='[2, 1, 3, 5, 6, 4, 7]';    want='[2, 3, 6, 7, 1, 5, 4]' }
       )
    }
    @{ cat='08-linked-list'; idx='03'; slug='reverse-linked-list'; id=206
       fn='reverseList'; sig='(head: ListNode | null): ListNode | null'
       node='list'; zero='return null;'
       listTests=@(
         @{ args='[1, 2, 3, 4, 5]';  want='[5, 4, 3, 2, 1]' }
         @{ args='[1, 2]';            want='[2, 1]' }
         @{ args='[]';                want='[]' }
       )
    }
    @{ cat='08-linked-list'; idx='04'; slug='maximum-twin-sum-of-a-linked-list'; id=2130
       fn='pairSum'; sig='(head: ListNode | null): number'
       node='list'; zero='return 0;'
       listTests=@(
         @{ args='[5, 4, 2, 1]';         want='6' }
         @{ args='[4, 2, 2, 3]';         want='7' }
         @{ args='[1, 100000]';          want='100001' }
       ); listReturnsNumber=$true
    }

    @{ cat='09-binary-tree-dfs'; idx='01'; slug='maximum-depth-of-binary-tree'; id=104
       fn='maxDepth'; sig='(root: TreeNode | null): number'
       node='tree'; zero='return 0;'
       treeTests=@(
         @{ args='[3, 9, 20, null, null, 15, 7]'; want='3' }
         @{ args='[1, null, 2]';                   want='2' }
         @{ args='[]';                              want='0' }
       )
    }
    @{ cat='09-binary-tree-dfs'; idx='02'; slug='leaf-similar-trees'; id=872
       fn='leafSimilar'; sig='(root1: TreeNode | null, root2: TreeNode | null): boolean'
       node='tree'; zero='return false;'
       treeTests=@()  # two trees — skipped scaffold only
    }
    @{ cat='09-binary-tree-dfs'; idx='03'; slug='count-good-nodes-in-binary-tree'; id=1448
       fn='goodNodes'; sig='(root: TreeNode | null): number'
       node='tree'; zero='return 0;'
       treeTests=@(
         @{ args='[3, 1, 4, 3, null, 1, 5]'; want='4' }
         @{ args='[3, 3, null, 4, 2]';        want='3' }
         @{ args='[1]';                        want='1' }
       )
    }
    @{ cat='09-binary-tree-dfs'; idx='04'; slug='path-sum-iii'; id=437
       fn='pathSum'; sig='(root: TreeNode | null, targetSum: number): number'
       node='tree'; zero='return 0;'
       treeTests=@()  # parameterized — skipped scaffold only
    }
    @{ cat='09-binary-tree-dfs'; idx='05'; slug='longest-zigzag-path-in-a-binary-tree'; id=1372
       fn='longestZigZag'; sig='(root: TreeNode | null): number'
       node='tree'; zero='return 0;'
       treeTests=@(
         @{ args='[1, null, 1, 1, 1, null, null, 1, 1, null, 1, null, null, null, 1]'; want='3' }
         @{ args='[1, 1, 1, null, 1, null, null, 1, 1, null, 1]';                       want='4' }
         @{ args='[1]';                                                                  want='0' }
       )
    }
    @{ cat='09-binary-tree-dfs'; idx='06'; slug='lowest-common-ancestor-of-a-binary-tree'; id=236
       fn='lowestCommonAncestor'; sig='(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null'
       node='tree'; zero='return null;'
       treeTests=@()  # node references — skipped scaffold only
    }

    @{ cat='10-binary-tree-bfs'; idx='01'; slug='binary-tree-right-side-view'; id=199
       fn='rightSideView'; sig='(root: TreeNode | null): number[]'
       node='tree'; zero='return [];'
       treeTests=@(
         @{ args='[1, 2, 3, null, 5, null, 4]';  want='[1, 3, 4]' }
         @{ args='[1, null, 3]';                  want='[1, 3]' }
         @{ args='[]';                             want='[]' }
       )
    }
    @{ cat='10-binary-tree-bfs'; idx='02'; slug='maximum-level-sum-of-a-binary-tree'; id=1161
       fn='maxLevelSum'; sig='(root: TreeNode | null): number'
       node='tree'; zero='return 0;'
       treeTests=@(
         @{ args='[1, 7, 0, 7, -8, null, null]';   want='2' }
         @{ args='[989, null, 10250, 98693, -89388, null, null, null, -32127]'; want='2' }
       )
    }

    @{ cat='11-binary-search-tree'; idx='01'; slug='search-in-a-binary-search-tree'; id=700
       fn='searchBST'; sig='(root: TreeNode | null, val: number): TreeNode | null'
       node='tree'; zero='return null;'
       treeTests=@()  # returns subtree — skipped scaffold only
    }
    @{ cat='11-binary-search-tree'; idx='02'; slug='delete-node-in-a-bst'; id=450
       fn='deleteNode'; sig='(root: TreeNode | null, key: number): TreeNode | null'
       node='tree'; zero='return null;'
       treeTests=@()  # returns modified tree — skipped scaffold only
    }

    @{ cat='12-graphs-dfs'; idx='01'; slug='keys-and-rooms'; id=841
       fn='canVisitAllRooms'; sig='(rooms: number[][]): boolean'
       node='none'; zero='return false;'
       tests=@(
         @{ args='[[1], [2], [3], []]';                 want='true' }
         @{ args='[[1, 3], [3, 0, 1], [2], [0]]';        want='false' }
       )
    }
    @{ cat='12-graphs-dfs'; idx='02'; slug='number-of-provinces'; id=547
       fn='findCircleNum'; sig='(isConnected: number[][]): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[[1, 1, 0], [1, 1, 0], [0, 0, 1]]';  want='2' }
         @{ args='[[1, 0, 0], [0, 1, 0], [0, 0, 1]]';  want='3' }
       )
    }
    @{ cat='12-graphs-dfs'; idx='03'; slug='reorder-routes-to-make-all-paths-lead-to-the-city-zero'; id=1466
       fn='minReorder'; sig='(n: number, connections: number[][]): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='6, [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]';  want='3' }
         @{ args='5, [[1, 0], [1, 2], [3, 2], [3, 4]]';            want='2' }
       )
    }
    @{ cat='12-graphs-dfs'; idx='04'; slug='evaluate-division'; id=399
       fn='calcEquation'; sig='(equations: string[][], values: number[], queries: string[][]): number[]'
       node='none'; zero='return [];'
       tests=@()  # multi-param with floats — skipped scaffold only
    }

    @{ cat='13-graphs-bfs'; idx='01'; slug='nearest-exit-from-entrance-in-maze'; id=1926
       fn='nearestExit'; sig='(maze: string[][], entrance: number[]): number'
       node='none'; zero='return -1;'
       tests=@()  # nested matrix — skipped scaffold only
    }
    @{ cat='13-graphs-bfs'; idx='02'; slug='rotting-oranges'; id=994
       fn='orangesRotting'; sig='(grid: number[][]): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[[2, 1, 1], [1, 1, 0], [0, 1, 1]]';  want='4' }
         @{ args='[[2, 1, 1], [0, 1, 1], [1, 0, 1]]';  want='-1' }
         @{ args='[[0, 2]]';                            want='0' }
       )
    }

    @{ cat='14-heap-priority-queue'; idx='01'; slug='kth-largest-element-in-an-array'; id=215
       fn='findKthLargest'; sig='(nums: number[], k: number): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[3, 2, 1, 5, 6, 4], 2';                      want='5' }
         @{ args='[3, 2, 3, 1, 2, 4, 5, 5, 6], 4';             want='4' }
       )
    }
    @{ cat='14-heap-priority-queue'; idx='02'; slug='smallest-number-in-infinite-set'; id=2336
       fn='SmallestInfiniteSet'; sig='(): SmallestInfiniteSet'
       node='none'; classBased=$true
       tests=@()
    }
    @{ cat='14-heap-priority-queue'; idx='03'; slug='maximum-subsequence-score'; id=2542
       fn='maxScore'; sig='(nums1: number[], nums2: number[], k: number): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[1, 3, 3, 2], [2, 1, 3, 4], 3';  want='12' }
         @{ args='[4, 2, 3, 1, 1], [7, 5, 10, 9, 6], 1'; want='30' }
       )
    }
    @{ cat='14-heap-priority-queue'; idx='04'; slug='total-cost-to-hire-k-workers'; id=2462
       fn='totalCost'; sig='(costs: number[], k: number, candidates: number[]): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[17, 12, 10, 2, 7, 2, 11, 20, 8], 3, 4';                                       want='11' }
         @{ args='[1, 2, 4, 1], 3, 3';                                                            want='4' }
       )
    }

    @{ cat='15-binary-search'; idx='01'; slug='guess-number-higher-or-lower'; id=374
       fn='guessNumber'; sig='(n: number): number'
       node='none'; zero='return 0;'
       tests=@()  # needs an external `guess` hook — skipped scaffold only
    }
    @{ cat='15-binary-search'; idx='02'; slug='successful-pairs-of-spells-and-potions'; id=2300
       fn='successfulPairs'; sig='(spells: number[], potions: number[], success: number): number[]'
       node='none'; zero='return [];'
       tests=@(
         @{ args='[5, 1, 3], [1, 2, 3, 4, 5], 7';         want='[4, 0, 3]' }
         @{ args='[3, 1, 2], [8, 5, 8], 16';               want='[2, 0, 2]' }
       )
    }
    @{ cat='15-binary-search'; idx='03'; slug='find-peak-element'; id=162
       fn='findPeakElement'; sig='(nums: number[]): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[1, 2, 3, 1]';            want='2' }
         @{ args='[1, 2, 1, 3, 5, 6, 4]';   want='5' }
       )
    }
    @{ cat='15-binary-search'; idx='04'; slug='koko-eating-bananas'; id=875
       fn='minEatingSpeed'; sig='(piles: number[], h: number): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[3, 6, 7, 11], 8';            want='4' }
         @{ args='[30, 11, 23, 4, 20], 5';      want='30' }
         @{ args='[30, 11, 23, 4, 20], 6';      want='23' }
       )
    }

    @{ cat='16-backtracking'; idx='01'; slug='letter-combinations-of-a-phone-number'; id=17
       fn='letterCombinations'; sig='(digits: string): string[]'
       node='none'; zero='return [];'
       tests=@(
         @{ args='"23"'; want='["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]' }
         @{ args='""';   want='[]' }
         @{ args='"2"';  want='["a", "b", "c"]' }
       ); orderInsensitive=$true
    }
    @{ cat='16-backtracking'; idx='02'; slug='combination-sum-iii'; id=216
       fn='combinationSum3'; sig='(k: number, n: number): number[][]'
       node='none'; zero='return [];'
       tests=@(
         @{ args='3, 7';   want='[[1, 2, 4]]' }
         @{ args='3, 9';   want='[[1, 2, 6], [1, 3, 5], [2, 3, 4]]' }
         @{ args='4, 1';   want='[]' }
       )
    }

    @{ cat='17-dp-1d'; idx='01'; slug='n-th-tribonacci-number'; id=1137
       fn='tribonacci'; sig='(n: number): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='4';  want='4' }
         @{ args='25'; want='1389537' }
       )
    }
    @{ cat='17-dp-1d'; idx='02'; slug='min-cost-climbing-stairs'; id=746
       fn='minCostClimbingStairs'; sig='(cost: number[]): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[10, 15, 20]';                       want='15' }
         @{ args='[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]'; want='6' }
       )
    }
    @{ cat='17-dp-1d'; idx='03'; slug='house-robber'; id=198
       fn='rob'; sig='(nums: number[]): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[1, 2, 3, 1]';      want='4' }
         @{ args='[2, 7, 9, 3, 1]';   want='12' }
       )
    }
    @{ cat='17-dp-1d'; idx='04'; slug='domino-and-tromino-tiling'; id=790
       fn='numTilings'; sig='(n: number): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='3';  want='5' }
         @{ args='1';  want='1' }
       )
    }

    @{ cat='18-dp-multi'; idx='01'; slug='unique-paths'; id=62
       fn='uniquePaths'; sig='(m: number, n: number): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='3, 7';  want='28' }
         @{ args='3, 2';  want='3' }
       )
    }
    @{ cat='18-dp-multi'; idx='02'; slug='longest-common-subsequence'; id=1143
       fn='longestCommonSubsequence'; sig='(text1: string, text2: string): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='"abcde", "ace"';   want='3' }
         @{ args='"abc", "abc"';     want='3' }
         @{ args='"abc", "def"';     want='0' }
       )
    }
    @{ cat='18-dp-multi'; idx='03'; slug='best-time-to-buy-and-sell-stock-with-transaction-fee'; id=714
       fn='maxProfit'; sig='(prices: number[], fee: number): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[1, 3, 2, 8, 4, 9], 2';   want='8' }
         @{ args='[1, 3, 7, 5, 10, 3], 3';  want='6' }
       )
    }
    @{ cat='18-dp-multi'; idx='04'; slug='edit-distance'; id=72
       fn='minDistance'; sig='(word1: string, word2: string): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='"horse", "ros"';            want='3' }
         @{ args='"intention", "execution"';  want='5' }
       )
    }

    @{ cat='19-bit-manipulation'; idx='01'; slug='counting-bits'; id=338
       fn='countBits'; sig='(n: number): number[]'
       node='none'; zero='return [];'
       tests=@(
         @{ args='2';  want='[0, 1, 1]' }
         @{ args='5';  want='[0, 1, 1, 2, 1, 2]' }
       )
    }
    @{ cat='19-bit-manipulation'; idx='02'; slug='single-number'; id=136
       fn='singleNumber'; sig='(nums: number[]): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[2, 2, 1]';            want='1' }
         @{ args='[4, 1, 2, 1, 2]';      want='4' }
       )
    }
    @{ cat='19-bit-manipulation'; idx='03'; slug='minimum-flips-to-make-a-or-b-equal-to-c'; id=1318
       fn='minFlips'; sig='(a: number, b: number, c: number): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='2, 6, 5';   want='3' }
         @{ args='4, 2, 7';   want='1' }
         @{ args='1, 2, 3';   want='0' }
       )
    }

    @{ cat='20-trie'; idx='01'; slug='implement-trie-prefix-tree'; id=208
       fn='Trie'; sig='(): Trie'
       node='none'; classBased=$true
       tests=@()
    }
    @{ cat='20-trie'; idx='02'; slug='search-suggestions-system'; id=1268
       fn='suggestedProducts'; sig='(products: string[], searchWord: string): string[][]'
       node='none'; zero='return [];'
       tests=@()  # large nested output — skipped scaffold only
    }

    @{ cat='21-intervals'; idx='01'; slug='non-overlapping-intervals'; id=435
       fn='eraseOverlapIntervals'; sig='(intervals: number[][]): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[[1, 2], [2, 3], [3, 4], [1, 3]]';  want='1' }
         @{ args='[[1, 2], [1, 2], [1, 2]]';           want='2' }
         @{ args='[[1, 2], [2, 3]]';                    want='0' }
       )
    }
    @{ cat='21-intervals'; idx='02'; slug='minimum-number-of-arrows-to-burst-balloons'; id=452
       fn='findMinArrowShots'; sig='(points: number[][]): number'
       node='none'; zero='return 0;'
       tests=@(
         @{ args='[[10, 16], [2, 8], [1, 6], [7, 12]]';   want='2' }
         @{ args='[[1, 2], [3, 4], [5, 6], [7, 8]]';       want='4' }
       )
    }

    @{ cat='22-monotonic-stack'; idx='01'; slug='daily-temperatures'; id=739
       fn='dailyTemperatures'; sig='(temperatures: number[]): number[]'
       node='none'; zero='return [];'
       tests=@(
         @{ args='[73, 74, 75, 71, 69, 72, 76, 73]';   want='[1, 1, 4, 2, 1, 1, 0, 0]' }
         @{ args='[30, 40, 50, 60]';                     want='[1, 1, 1, 0]' }
       )
    }
    @{ cat='22-monotonic-stack'; idx='02'; slug='online-stock-span'; id=901
       fn='StockSpanner'; sig='(): StockSpanner'
       node='none'; classBased=$true
       tests=@()
    }
)

function To-PascalCase {
    param([string]$name)
    return ($name -split '-' | ForEach-Object { if ($_.Length -gt 0) { $_.Substring(0,1).ToUpper() + $_.Substring(1) } }) -join ''
}

$treeHeader = @'
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

'@

$listHeader = @'
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

'@

$treeHelpers = @'
function buildTree(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0 || arr[0] === null) return null;
  const root = new TreeNode(arr[0]!);
  const queue: TreeNode[] = [root];
  let i = 1;
  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift()!;
    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]!);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]!);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

'@

$listHelpers = @'
function buildList(arr: number[]): ListNode | null {
  const dummy = new ListNode();
  let cur = dummy;
  for (const v of arr) {
    cur.next = new ListNode(v);
    cur = cur.next;
  }
  return dummy.next;
}

function listToArr(head: ListNode | null): number[] {
  const out: number[] = [];
  for (let n = head; n !== null; n = n.next) out.push(n.val);
  return out;
}

'@

function Render-Solution {
    param($p)

    $header = "// LeetCode $($p.id): " + ((($p.slug -split '-') | ForEach-Object { $_.Substring(0,1).ToUpper() + $_.Substring(1) }) -join ' ') + "`n"
    $header += "// https://leetcode.com/problems/$($p.slug)/`n`n"

    $prefix = ''
    if ($p.node -eq 'tree') { $prefix = $treeHeader }
    elseif ($p.node -eq 'list') { $prefix = $listHeader }

    if ($p.classBased) {
        # generic stub: class shell with TODO methods
        $cls = $p.fn
        return $header + $prefix + @"
export class $cls {
  constructor() {
    // TODO
  }
  // TODO: add methods per LeetCode spec
}
"@
    }

    if ($p.implemented) {
        return $header + $prefix + "export function $($p.fn)$($p.sig) {`n$($p.body)`n}`n"
    }

    $body = if ($p.zero -eq '') { "  // TODO`n" } else { "  // TODO`n  $($p.zero)`n" }
    return $header + $prefix + "export function $($p.fn)$($p.sig) {`n$body}`n"
}

function Render-Test {
    param($p)

    $importName = if ($p.classBased) { $p.fn } else { $p.fn }
    $describe = "describe(`"$($p.slug)`", () => {"

    if ($p.classBased) {
        $body = @"
import { describe, it, expect } from "vitest";
import { $importName } from "./solution";

$describe
  it.skip("TODO: implement $importName", () => {
    const instance = new $importName();
    expect(instance).toBeDefined();
  });
});
"@
        return $body
    }

    if ($p.node -eq 'tree') {
        $imports = "import { describe, it, expect } from `"vitest`";`nimport { $importName, TreeNode } from `"./solution`";`n`n"
        if ($p.treeTests -and $p.treeTests.Count -gt 0) {
            $cases = ($p.treeTests | ForEach-Object {
                "    { tree: $($_.args), want: $($_.want) },"
            }) -join "`n"
            $skip = if ($p.implemented) { '' } else { '.skip' }
            return $imports + $treeHelpers + @"
$describe
  const cases: { tree: (number | null)[]; want: any }[] = [
$cases
  ];
  it$skip.each(cases)("$importName(%j)", ({ tree, want }) => {
    expect($importName(buildTree(tree))).toEqual(want);
  });
});
"@
        } else {
            return $imports + @"
$describe
  it.skip("TODO: implement $importName", () => {
    expect(true).toBe(true);
  });
});
"@
        }
    }

    if ($p.node -eq 'list') {
        $imports = "import { describe, it, expect } from `"vitest`";`nimport { $importName, ListNode } from `"./solution`";`n`n"
        if ($p.listTests -and $p.listTests.Count -gt 0) {
            $cases = ($p.listTests | ForEach-Object {
                "    { input: $($_.args), want: $($_.want) },"
            }) -join "`n"
            $skip = if ($p.implemented) { '' } else { '.skip' }
            $assert = if ($p.listReturnsNumber) {
                "    expect($importName(buildList(input))).toEqual(want);"
            } else {
                "    expect(listToArr($importName(buildList(input)))).toEqual(want);"
            }
            $caseType = if ($p.listReturnsNumber) { 'number' } else { 'number[]' }
            return $imports + $listHelpers + @"
$describe
  const cases: { input: number[]; want: $caseType }[] = [
$cases
  ];
  it$skip.each(cases)("$importName(%j)", ({ input, want }) => {
$assert
  });
});
"@
        } else {
            return $imports + @"
$describe
  it.skip("TODO: implement $importName", () => {
    expect(true).toBe(true);
  });
});
"@
        }
    }

    # plain function (no tree/list)
    $imports = "import { describe, it, expect } from `"vitest`";`nimport { $importName } from `"./solution`";`n`n"

    if ($p.tests -and $p.tests.Count -gt 0) {
        $skip = if ($p.implemented) { '' } else { '.skip' }

        if ($p.asserter -eq 'mutates') {
            $cases = ($p.tests | ForEach-Object {
                "    { nums: $($_.args), want: $($_.want) },"
            }) -join "`n"
            return $imports + @"
$describe
  const cases: { nums: number[]; want: number[] }[] = [
$cases
  ];
  it$skip.each(cases)("$importName(%j)", ({ nums, want }) => {
    $importName(nums);
    expect(nums).toEqual(want);
  });
});
"@
        }

        $orderHelper = ''
        $assertExpr = "expect($importName(...args)).toEqual(want);"
        if ($p.orderInsensitive) {
            $assertExpr = "expect([...$importName(...args)].sort()).toEqual([...want].sort());"
        }

        $cases = ($p.tests | ForEach-Object {
            "    { args: [$($_.args)] as const, want: $($_.want) },"
        }) -join "`n"

        return $imports + @"
$describe
  const cases = [
$cases
  ];
  it$skip.each(cases)("$importName(%j)", ({ args, want }) => {
    $assertExpr
  });
});
"@
    } else {
        return $imports + @"
$describe
  it.skip("TODO: implement $importName", () => {
    expect(true).toBe(true);
  });
});
"@
    }
}

$created = 0
$skipped = 0

foreach ($p in $problems) {
    $dir = Join-Path $root "$($p.cat)\$($p.idx)-$($p.slug)"
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
    $solPath = Join-Path $dir 'solution.ts'
    $testPath = Join-Path $dir 'solution.test.ts'

    if (-not (Test-Path $solPath)) {
        $solContent = Render-Solution -p $p
        Set-Content -Path $solPath -Value $solContent -Encoding UTF8
        $created++
    } else { $skipped++ }

    if (-not (Test-Path $testPath)) {
        $testContent = Render-Test -p $p
        Set-Content -Path $testPath -Value $testContent -Encoding UTF8
        $created++
    } else { $skipped++ }
}

Write-Host "Done. Wrote $created file(s); skipped $skipped existing file(s)."
Write-Host "Total problems: $($problems.Count)"
