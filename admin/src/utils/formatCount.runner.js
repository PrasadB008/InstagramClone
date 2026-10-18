const { formatCount } = require('./formatCount.js');
const assert = require('assert');

const tests = [
  // Numbers below 1000
  { input: 0, expected: 0, name: 'returns 0 as is' },
  { input: 1, expected: 1, name: 'returns 1 as is' },
  { input: 999, expected: 999, name: 'returns 999 as is' },
  { input: 500, expected: 500, name: 'returns 500 as is' },
  
  // Numbers in thousands
  { input: 1000, expected: '1.0K', name: 'formats 1000 as "1.0K"' },
  { input: 1234, expected: '1.2K', name: 'formats 1234 as "1.2K"' },
  { input: 5500, expected: '5.5K', name: 'formats 5500 as "5.5K"' },
  { input: 999999, expected: '1000.0K', name: 'formats 999999 as "1000.0K"' },
  
  // Numbers in millions
  { input: 1000000, expected: '1.0M', name: 'formats 1000000 as "1.0M"' },
  { input: 1500000, expected: '1.5M', name: 'formats 1500000 as "1.5M"' },
  { input: 2750000, expected: '2.8M', name: 'formats 2750000 as "2.8M"' },
  { input: 999999999, expected: '1000.0M', name: 'formats 999999999 as "1000.0M"' },
  
  // Edge cases
  { input: -100, expected: -100, name: 'handles negative numbers' },
  { input: 'abc', expected: 'abc', name: 'handles non-number inputs' },
  { input: null, expected: null, name: 'handles null' },
  { input: undefined, expected: undefined, name: 'handles undefined' },
];

let passed = 0;
let failed = 0;

console.log('Running formatCount tests...\n');

tests.forEach((test) => {
  try {
    const result = formatCount(test.input);
    assert.strictEqual(result, test.expected, `Expected ${test.expected}, got ${result}`);
    console.log(`✓ ${test.name}`);
    passed++;
  } catch (error) {
    console.log(`✗ ${test.name}`);
    console.log(`  ${error.message}`);
    failed++;
  }
});

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
