import { describe, test, expect } from 'vitest';

import { minCostPath } from './gridPathFinder.helpers';

describe('gridPathFinder', () => {
  describe('minCostPath', () => {
    test('Example 1', () => {
      const grid = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      expect(minCostPath(grid)).toBe(21);
    });

    test('Example 2', () => {
      const grid = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ];
      expect(minCostPath(grid)).toBe(5);
    });

    test('Example 3', () => {
      const grid = [
        [5, 4, 2],
        [1, 9, 3],
        [8, 7, 6]
      ];
      expect(minCostPath(grid)).toBe(20);
    });

    test('Single cell grid', () => {
      const grid = [
        [5]
      ];
      expect(minCostPath(grid)).toBe(5);
    });

    test('Two cell grid', () => {
      const grid = [
        [1, 2],
        [4, 5]
      ];
      expect(minCostPath(grid)).toBe(8);
    });
  });
});
