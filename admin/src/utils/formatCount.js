/**
 * Formats a number with abbreviations for thousands and millions.
 * Numbers below 1000 are returned as-is.
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
  if (n < 1000) {
    return n;
  }

  if (n < 1000000) {
    // Format as thousands (K)
    const thousands = n / 1000;
    return `${(thousands).toFixed(1)}K`;
  }

  // Format as millions (M)
  const millions = n / 1000000;
  return `${(millions).toFixed(1)}M`;
};

export default formatCount;
