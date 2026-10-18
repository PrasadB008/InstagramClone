/**
 * Formats a number into a human-readable string.
 * Numbers below 1000 stay as they are.
 * Numbers 1000 and above are formatted with K (thousands) or M (millions).
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
    // Format as K (thousands)
    const thousands = n / 1000;
    return (Math.round(thousands * 10) / 10).toFixed(1) + 'K';
  }

  // Format as M (millions)
  const millions = n / 1000000;
  return (Math.round(millions * 10) / 10).toFixed(1) + 'M';
}

export default formatCount;
