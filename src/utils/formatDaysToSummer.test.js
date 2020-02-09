import {formatDaysToSummer} from './formatDaysToSummer';

describe('formatDaysToSummer', () => {
  describe('formatDaysToSummer', () => {

    it('should return false if it is summer', () => {
      expect(formatDaysToSummer(new Date(2019,5,21))).toBe(false); // to jest czerwiec
      expect(formatDaysToSummer(new Date(2019,7,21))).toBe(false); // to jest sierpień
      expect(formatDaysToSummer(new Date(2019,8,23))).toBe(false); // to jest wrzesień
    });

    it('should return days to summer', () => {
      expect(formatDaysToSummer(new Date(2019,5,20))).toBe(1); // to jest czerwiec
      expect(formatDaysToSummer(new Date(2019,8,25))).toBe(270); // to jest wrzesień
      expect(formatDaysToSummer(new Date(2019,8,24))).toBe(271); // to jest wrzesień
    });

  });
});
