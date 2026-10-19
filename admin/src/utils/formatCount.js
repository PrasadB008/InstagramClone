/**
 * Formats a number into a human-readable string with K (thousands) and M (millions) suffixes.
 * Numbers below 1000 are returned as-is.
 * Numbers 1000 and above are formatted with one decimal place and appropriate suffix.
 *
 * @param {number} n - The number to format
 * @returns {string|number} The formatted number or original number if below 1000
 *
 * @example
 * formatCount(500) // 500
 * formatCount(1234) // "1.2K"
 * formatCount(1500000) // "1.5M"
 */
export const formatCount = (n) => {
  const isNegative = n < 0;
  const absN = Math.abs(n);

  if (absN < 1000) {
    return n;
  }

  let formatted;
  if (absN < 1000000) {
    formatted = (absN / 1000).toFixed(1) + 'K';
  } else if (absN < 1000000000) {
    formatted = (absN / 1000000).toFixed(1) + 'M';
  } else {
    formatted = (absN / 1000000000).toFixed(1) + 'B';
  }

  return isNegative ? '-' + formatted : formatted;
};

export default formatCount;
