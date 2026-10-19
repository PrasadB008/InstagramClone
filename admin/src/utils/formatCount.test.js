import { formatCount } from './formatCount';

describe('formatCount', () => {
  describe('numbers below 1000', () => {
    it('should return 0 as-is', () => {
      expect(formatCount(0)).toBe(0);
    });

    it('should return 1 as-is', () => {
      expect(formatCount(1)).toBe(1);
    });

    it('should return 999 as-is', () => {
      expect(formatCount(999)).toBe(999);
    });

    it('should return 500 as-is', () => {
      expect(formatCount(500)).toBe(500);
    });
  });

  describe('numbers in thousands', () => {
    it('should format 1000 as "1.0K"', () => {
      expect(formatCount(1000)).toBe('1.0K');
    });

    it('should format 1234 as "1.2K"', () => {
      expect(formatCount(1234)).toBe('1.2K');
    });

    it('should format 5500 as "5.5K"', () => {
      expect(formatCount(5500)).toBe('5.5K');
    });

    it('should format 999999 as "1000.0K"', () => {
      expect(formatCount(999999)).toBe('1000.0K');
    });
  });

  describe('numbers in millions', () => {
    it('should format 1000000 as "1.0M"', () => {
      expect(formatCount(1000000)).toBe('1.0M');
    });

    it('should format 1500000 as "1.5M"', () => {
      expect(formatCount(1500000)).toBe('1.5M');
    });

    it('should format 2300000 as "2.3M"', () => {
      expect(formatCount(2300000)).toBe('2.3M');
    });

    it('should format 999999999 as "1000.0M"', () => {
      expect(formatCount(999999999)).toBe('1000.0M');
    });
  });

  describe('edge cases', () => {
    it('should handle negative numbers', () => {
      expect(formatCount(-100)).toBe(-100);
    });

    it('should handle negative thousands', () => {
      expect(formatCount(-1234)).toBe('-1.2K');
    });

    it('should handle negative millions', () => {
      expect(formatCount(-1500000)).toBe('-1.5M');
    });
  });
});
