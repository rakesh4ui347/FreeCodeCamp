/*********
an array can very quickly become very complex data structure, known as a multi-dimensional, or nested array. Consider the following example:
 */
let nestedArray = [ // top, or first level - the outer most array
  ['deep'], // an array within an array, 2 levels of depth
  [
    ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
  ],
  [
    [
      ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
    ],
    [
      [
        ['deepest-est?'] // an array nested 5 levels deep
      ]
    ]
  ]
];
console.log(nestedArray[2][1][0][0][0]);
// logs: deepest-est?
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
// now logs: deeper still

/************************* */
let myNestedArray = [
    // change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    [['loop'],['deep'], ['shift', 6, 7, 1000, 'method']],
    [[['concat'],['deeper'], [false, true, 'spread', 'array']],
    [[['mutate', 1327.98],['deepest', 'splice', 'slice', 'push']]
    ]]
    // change code above this line
  ];
