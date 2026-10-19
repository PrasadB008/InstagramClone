import { formatCount } from './formatCount.js';
import { test } from 'node:test';
import assert from 'node:assert';

test('formatCount - numbers below 1000', async (t) => {
  await t.test('should return 0 as-is', () => {
    assert.strictEqual(formatCount(0), 0);
  });

  await t.test('should return 1 as-is', () => {
    assert.strictEqual(formatCount(1), 1);
  });

  await t.test('should return 500 as-is', () => {
    assert.strictEqual(formatCount(500), 500);
  });

  await t.test('should return 999 as-is', () => {
    assert.strictEqual(formatCount(999), 999);
  });
});

test('formatCount - numbers in thousands', async (t) => {
  await t.test('should format 1000 as "1.0K"', () => {
    assert.strictEqual(formatCount(1000), '1.0K');
  });

  await t.test('should format 1234 as "1.2K"', () => {
    assert.strictEqual(formatCount(1234), '1.2K');
  });

  await t.test('should format 5500 as "5.5K"', () => {
    assert.strictEqual(formatCount(5500), '5.5K');
  });

  await t.test('should format 999999 as "1000.0K"', () => {
    assert.strictEqual(formatCount(999999), '1000.0K');
  });
});

test('formatCount - numbers in millions', async (t) => {
  await t.test('should format 1000000 as "1.0M"', () => {
    assert.strictEqual(formatCount(1000000), '1.0M');
  });

  await t.test('should format 1500000 as "1.5M"', () => {
    assert.strictEqual(formatCount(1500000), '1.5M');
  });

  await t.test('should format 2750000 as "2.8M"', () => {
    assert.strictEqual(formatCount(2750000), '2.8M');
  });

  await t.test('should format 999999999 as "1000.0M"', () => {
    assert.strictEqual(formatCount(999999999), '1000.0M');
  });
});

test('formatCount - numbers in billions', async (t) => {
  await t.test('should format 1000000000 as "1.0B"', () => {
    assert.strictEqual(formatCount(1000000000), '1.0B');
  });

  await t.test('should format 1500000000 as "1.5B"', () => {
    assert.strictEqual(formatCount(1500000000), '1.5B');
  });

  await t.test('should format 5200000000 as "5.2B"', () => {
    assert.strictEqual(formatCount(5200000000), '5.2B');
  });
});

test('formatCount - edge cases', async (t) => {
  await t.test('should handle negative numbers', () => {
    assert.strictEqual(formatCount(-500), -500);
  });

  await t.test('should handle negative thousands', () => {
    assert.strictEqual(formatCount(-1234), '-1.2K');
  });

  await t.test('should handle decimal inputs', () => {
    assert.strictEqual(formatCount(1234.5), '1.2K');
  });
});
