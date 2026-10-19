/**
 * Formats a number into a human-readable string with K (thousands) and M (millions) suffixes.
 * Numbers below 1000 are returned as-is.
 * @param {number} n - The number to format
 * @returns {string|number} The formatted number (e.g., "1.2K", "1.5M") or the original number if < 1000
 */
export const formatCount = (n) => {
  const absN = Math.abs(n);
  const isNegative = n < 0;

  if (absN < 1000) {
    return n;
  }

  let formatted;
  if (absN < 1000000) {
    // Format as K (thousands)
    formatted = (absN / 1000).toFixed(1) + 'K';
  } else {
    // Format as M (millions)
    formatted = (absN / 1000000).toFixed(1) + 'M';
  }

  return isNegative ? '-' + formatted : formatted;
};

export default formatCount;
