/**
 * Format a number with K (thousands) and M (millions) suffixes
 * Numbers below 1000 stay as they are
 * @param {number} n - The number to format
 * @returns {string|number} - Formatted number (e.g., "1.2K", "1.5M") or original number if < 1000
 */
const formatCount = (n) => {
  if (typeof n !== 'number' || n < 0) {
    return n;
  }

  if (n < 1000) {
    return n;
  }

  if (n < 1000000) {
    // Format as K (thousands)
    const thousands = n / 1000;
    return `${thousands.toFixed(1)}K`;
  }

  // Format as M (millions)
  const millions = n / 1000000;
  return `${millions.toFixed(1)}M`;
};

module.exports = { formatCount };
