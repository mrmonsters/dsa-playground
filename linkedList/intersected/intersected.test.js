import { test, expect } from '@jest/globals';
import solve from './intersected';

const fixtures = [
  {
    input: `A->B
        B->C
        R->S
        X->C
        Q->R
        Y->X
        W->Z
        A,Q,W
        A,C,R
        Y,Z,A,R
        A,W`,
    assert: (func) => {
      expect(func()).toEqual([false, true, true, false]);
    },
  },
  {
    input: `A->B
        B->C
        G->B
        D->E
        C->D
        J->F
        H->J
        A,G,E
        H,A`,
    assert: (func) => {
      expect(func()).toEqual([true, false]);
    },
  },
  {
    input: `X->Y
        B->C
        Y->X
        A->B
        X,A`,
    assert: (func) => {
      expect(() => func()).toThrowError('Circular list detected!');
    },
  },
  {
    input: `ABC->BCD
        EFG->BCD
        DEF->EFG
        BCD->CDE
        123->456
        ABC,CDE
        123,DEF
        ABC,DEF`,
    assert: (func) => {
      expect(func()).toEqual([true, false, true]);
    },
  },
];

test.each(fixtures)('solve', ({ input, assert }) => {
  assert(() => solve(input));
});
