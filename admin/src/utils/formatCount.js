/**
 * Formats a number into a human-readable string.
 * Numbers below 1000 stay as they are.
 * Numbers 1000 and above are formatted with K (thousands) or M (millions).
 * 
 * @param {number} n - The number to format
 * @returns {string|number} The formatted number
 * 
 * @example
 * formatCount(500) // 500
 * formatCount(1234) // "1.2K"
 * formatCount(1500000) // "1.5M"
 */
export const formatCount = (n) => {
  const absN = Math.abs(n);
  const isNegative = n < 0;

  if (absN < 1000) {
    return n;
  }

  if (absN < 1000000) {
    // Format as thousands (K)
    const thousands = absN / 1000;
    const formatted = `${(thousands).toFixed(1)}K`;
    return isNegative ? `-${formatted}` : formatted;
  }

  // Format as millions (M)
  const millions = absN / 1000000;
  const formatted = `${(millions).toFixed(1)}M`;
  return isNegative ? `-${formatted}` : formatted;
};

export default formatCount;
