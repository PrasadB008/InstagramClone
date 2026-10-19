/**
 * Formats a number into a human-readable string with K (thousands) and M (millions) suffixes.
 * Numbers below 1000 are returned as-is.
 * Examples:
 *   999 -> "999"
 *   1234 -> "1.2K"
 *   1500000 -> "1.5M"
 *
 * @param {number} n - The number to format
 * @returns {string|number} The formatted number or original number if below 1000
 */
export const formatCount = (n) => {
  if (n < 1000) {
    return n;
  }

  if (n < 1000000) {
    // Format as thousands (K)
    const thousands = n / 1000;
    return `${thousands.toFixed(1)}K`;
  }

  // Format as millions (M)
  const millions = n / 1000000;
  return `${millions.toFixed(1)}M`;
};

export default formatCount;
