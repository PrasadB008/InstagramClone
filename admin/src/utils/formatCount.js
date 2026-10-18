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
function formatCount(n) {
  if (n < 1000) {
    return n;
  }

  if (n < 1000000) {
    return (n / 1000).toFixed(1) + 'K';
  }

  if (n < 1000000000) {
    return (n / 1000000).toFixed(1) + 'M';
  }

  return (n / 1000000000).toFixed(1) + 'B';
}

export default formatCount;
