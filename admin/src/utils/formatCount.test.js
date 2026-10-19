import { formatCount } from './formatCount';

describe('formatCount', () => {
  describe('numbers below 1000', () => {
    it('should return 0 as is', () => {
      expect(formatCount(0)).toBe(0);
    });

    it('should return positive numbers below 1000 as is', () => {
      expect(formatCount(1)).toBe(1);
      expect(formatCount(100)).toBe(100);
      expect(formatCount(500)).toBe(500);
      expect(formatCount(999)).toBe(999);
    });

    it('should return negative numbers below 1000 as is', () => {
      expect(formatCount(-1)).toBe(-1);
      expect(formatCount(-500)).toBe(-500);
      expect(formatCount(-999)).toBe(-999);
    });
  });

  describe('numbers in thousands (K)', () => {
    it('should format 1000 as 1.0K', () => {
      expect(formatCount(1000)).toBe('1.0K');
    });

    it('should format 1234 as 1.2K', () => {
      expect(formatCount(1234)).toBe('1.2K');
    });

    it('should format 5500 as 5.5K', () => {
      expect(formatCount(5500)).toBe('5.5K');
    });

    it('should format 10000 as 10.0K', () => {
      expect(formatCount(10000)).toBe('10.0K');
    });

    it('should format 999999 as 1000.0K', () => {
      expect(formatCount(999999)).toBe('1000.0K');
    });
  });

  describe('numbers in millions (M)', () => {
    it('should format 1000000 as 1.0M', () => {
      expect(formatCount(1000000)).toBe('1.0M');
    });

    it('should format 1500000 as 1.5M', () => {
      expect(formatCount(1500000)).toBe('1.5M');
    });

    it('should format 5000000 as 5.0M', () => {
      expect(formatCount(5000000)).toBe('5.0M');
    });

    it('should format 123456789 as 123.5M', () => {
      expect(formatCount(123456789)).toBe('123.5M');
    });

    it('should format 999999999 as 1000.0M', () => {
      expect(formatCount(999999999)).toBe('1000.0M');
    });
  });

  describe('edge cases', () => {
    it('should handle decimal inputs', () => {
      expect(formatCount(1234.5)).toBe('1.2K');
      expect(formatCount(1500000.7)).toBe('1.5M');
    });

    it('should handle very large numbers', () => {
      expect(formatCount(1000000000)).toBe('1000.0M');
    });
  });
});
