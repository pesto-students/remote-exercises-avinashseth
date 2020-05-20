import { flipArgs } from './flipArgs';

describe('FlipArgs', () => {
  it('should return true given args are flipped', () => {
    expect(flipArgs(3, 4, 5)).toBe(5, 4, 3);
  });

//   it('should return false if args are not fltriangle can not be formed given three lines', () => {
//     expect(isTriangle(1, 4, 2)).toBe(false);
//   });
});
