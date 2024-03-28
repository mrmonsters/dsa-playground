import { test } from '@jest/globals';
import solve from './smallestExistingInt';

const fixtures = [
  {
    input: [-1, 1, -2, 2],
    assert: (func) => {
      expect(func()).toEqual(-2);
    },
  },
  {
    input: [4, 10, 8, -1, 0, -3],
    assert: (func) => {
      expect(func()).toEqual(-3);
    },
  },
  {
    input: [1, -2, 3, -4, 5],
    assert: (func) => {
      expect(func()).toEqual(-4);
    },
  },
  {
    input: [-6, 7, -8, 9, -10],
    assert: (func) => {
      expect(func()).toEqual(-10);
    },
  },
  {
    input: [11, -12, 13, -14, 15],
    assert: (func) => {
      expect(func()).toEqual(-14);
    },
  },
  {
    input: [-16, 17, -18, 19, -20],
    assert: (func) => {
      expect(func()).toEqual(-20);
    },
  },
  {
    input: [21, -22, 23, -24, 25],
    assert: (func) => {
      expect(func()).toEqual(-24);
    },
  },
  {
    input: [-26, 27, -28, 29, -30],
    assert: (func) => {
      expect(func()).toEqual(-30);
    },
  },
  {
    input: [31, -32, 33, -34, 35],
    assert: (func) => {
      expect(func()).toEqual(-34);
    },
  },
  {
    input: [-36, 37, -38, 39, -40],
    assert: (func) => {
      expect(func()).toEqual(-40);
    },
  },
  {
    input: [-6, -3, -4, -5, -1],
    assert: (func) => {
      expect(func()).toEqual(-6);
    },
  },
  {
    input: [1, 10, 7, 8, 3],
    assert: (func) => {
      expect(func()).toEqual(1);
    },
  },
];

test.each(fixtures)('test', ({ input, assert }) => {
  assert(() => solve(input));
});
