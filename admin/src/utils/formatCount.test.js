import formatCount from './formatCount';

describe('formatCount', () => {
  describe('numbers below 1000', () => {
    it('should return 0 as is', () => {
      expect(formatCount(0)).toBe(0);
    });

    it('should return 1 as is', () => {
      expect(formatCount(1)).toBe(1);
    });

    it('should return 500 as is', () => {
      expect(formatCount(500)).toBe(500);
    });

    it('should return 999 as is', () => {
      expect(formatCount(999)).toBe(999);
    });
  });

  describe('numbers in thousands (1K - 999K)', () => {
    it('should format 1000 as "1.0K"', () => {
      expect(formatCount(1000)).toBe('1.0K');
    });

    it('should format 1234 as "1.2K"', () => {
      expect(formatCount(1234)).toBe('1.2K');
    });

    it('should format 1500 as "1.5K"', () => {
      expect(formatCount(1500)).toBe('1.5K');
    });

    it('should format 5678 as "5.7K"', () => {
      expect(formatCount(5678)).toBe('5.7K');
    });

    it('should format 10000 as "10.0K"', () => {
      expect(formatCount(10000)).toBe('10.0K');
    });

    it('should format 99999 as "100.0K"', () => {
      expect(formatCount(99999)).toBe('100.0K');
    });

    it('should format 999999 as "1000.0K"', () => {
      expect(formatCount(999999)).toBe('1000.0K');
    });
  });

  describe('numbers in millions (1M+)', () => {
    it('should format 1000000 as "1.0M"', () => {
      expect(formatCount(1000000)).toBe('1.0M');
    });

    it('should format 1500000 as "1.5M"', () => {
      expect(formatCount(1500000)).toBe('1.5M');
    });

    it('should format 2345678 as "2.3M"', () => {
      expect(formatCount(2345678)).toBe('2.3M');
    });

    it('should format 10000000 as "10.0M"', () => {
      expect(formatCount(10000000)).toBe('10.0M');
    });

    it('should format 999999999 as "1000.0M"', () => {
      expect(formatCount(999999999)).toBe('1000.0M');
    });

    it('should format 1234567890 as "1234.6M"', () => {
      expect(formatCount(1234567890)).toBe('1234.6M');
    });
  });

  describe('edge cases', () => {
    it('should handle negative numbers below 1000', () => {
      expect(formatCount(-500)).toBe(-500);
    });

    it('should handle negative numbers in thousands', () => {
      expect(formatCount(-1234)).toBe('-1.2K');
    });

    it('should handle negative numbers in millions', () => {
      expect(formatCount(-1500000)).toBe('-1.5M');
    });
  });
});
