import formatCount from './formatCount';

describe('formatCount', () => {
  describe('numbers below 1000', () => {
    it('should return numbers below 1000 as-is', () => {
      expect(formatCount(0)).toBe(0);
      expect(formatCount(1)).toBe(1);
      expect(formatCount(100)).toBe(100);
      expect(formatCount(500)).toBe(500);
      expect(formatCount(999)).toBe(999);
    });
  });

  describe('numbers in thousands', () => {
    it('should format 1000 as 1.0K', () => {
      expect(formatCount(1000)).toBe('1.0K');
    });

    it('should format 1234 as 1.2K', () => {
      expect(formatCount(1234)).toBe('1.2K');
    });

    it('should format 5500 as 5.5K', () => {
      expect(formatCount(5500)).toBe('5.5K');
    });

    it('should format 999999 as 1000.0K', () => {
      expect(formatCount(999999)).toBe('1000.0K');
    });
  });

  describe('numbers in millions', () => {
    it('should format 1000000 as 1.0M', () => {
      expect(formatCount(1000000)).toBe('1.0M');
    });

    it('should format 1500000 as 1.5M', () => {
      expect(formatCount(1500000)).toBe('1.5M');
    });

    it('should format 2750000 as 2.8M', () => {
      expect(formatCount(2750000)).toBe('2.8M');
    });

    it('should format 999999999 as 1000.0M', () => {
      expect(formatCount(999999999)).toBe('1000.0M');
    });
  });

  describe('edge cases', () => {
    it('should handle negative numbers', () => {
      expect(formatCount(-500)).toBe(-500);
      expect(formatCount(-1234)).toBe('-1.2K');
      expect(formatCount(-1500000)).toBe('-1.5M');
    });
  });
});
