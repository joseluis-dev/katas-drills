import { it, describe, expect } from 'bun:test';
import { convert, convertOptimized } from '../index.ts';

describe('Rome Numerals', () => {
  it('should convert 1,2,3,4,5,6,7,8,9 to I,II,III,IV,V,VI,VII,VIII,IX', () => {
    expect(convert(1)).toBe('I');
    expect(convert(2)).toBe('II');
    expect(convert(3)).toBe('III');
    expect(convert(4)).toBe('IV');
    expect(convert(5)).toBe('V');
    expect(convert(6)).toBe('VI');
    expect(convert(7)).toBe('VII');
    expect(convert(8)).toBe('VIII');
    expect(convert(9)).toBe('IX');
  });

  it('should convert 10,20,30,40,50,60,70,80,90 to X,XX,XXX,XL,L,LX,LXX,LXXX,XC', () => {
    expect(convert(10)).toBe('X');
    expect(convert(20)).toBe('XX');
    expect(convert(30)).toBe('XXX');
    expect(convert(40)).toBe('XL');
    expect(convert(50)).toBe('L');
    expect(convert(60)).toBe('LX');
    expect(convert(70)).toBe('LXX');
    expect(convert(80)).toBe('LXXX');
    expect(convert(90)).toBe('XC');
  });

  it('should convert 100,200,300,400,500,600,700,800,900 to C,CC,CCC,CD,D,DC,DCC,DCCC,CM', () => {
    expect(convert(100)).toBe('C');
    expect(convert(200)).toBe('CC');
    expect(convert(300)).toBe('CCC');
    expect(convert(400)).toBe('CD');
    expect(convert(500)).toBe('D');
    expect(convert(600)).toBe('DC');
    expect(convert(700)).toBe('DCC');
    expect(convert(800)).toBe('DCCC');
    expect(convert(900)).toBe('CM');
  });

  it('should convert 1000,2000,3000 to M,MM,MMM', () => {
    expect(convert(1000)).toBe('M');
    expect(convert(2000)).toBe('MM');
    expect(convert(3000)).toBe('MMM');
  });

  it('should convert complex numbers correctly', () => {
    expect(convert(1987)).toBe('MCMLXXXVII');
    expect(convert(3999)).toBe('MMMCMXCIX');
    expect(convert(2421)).toBe('MMCDXXI');
    expect(convert(1666)).toBe('MDCLXVI');
    expect(convert(444)).toBe('CDXLIV');
  });
});

describe('Rome Numerals Optimized', () => {
  it('should convert 1,2,3,4,5,6,7,8,9 to I,II,III,IV,V,VI,VII,VIII,IX', () => {
    expect(convertOptimized(1)).toBe('I');
    expect(convertOptimized(2)).toBe('II');
    expect(convertOptimized(3)).toBe('III');
    expect(convertOptimized(4)).toBe('IV');
    expect(convertOptimized(5)).toBe('V');
    expect(convertOptimized(6)).toBe('VI');
    expect(convertOptimized(7)).toBe('VII');
    expect(convertOptimized(8)).toBe('VIII');
    expect(convertOptimized(9)).toBe('IX');
  });

  it('should convert 10,20,30,40,50,60,70,80,90 to X,XX,XXX,XL,L,LX,LXX,LXXX,XC', () => {
    expect(convertOptimized(10)).toBe('X');
    expect(convertOptimized(20)).toBe('XX');
    expect(convertOptimized(30)).toBe('XXX');
    expect(convertOptimized(40)).toBe('XL');
    expect(convertOptimized(50)).toBe('L');
    expect(convertOptimized(60)).toBe('LX');
    expect(convertOptimized(70)).toBe('LXX');
    expect(convertOptimized(80)).toBe('LXXX');
    expect(convertOptimized(90)).toBe('XC');
  });

  it('should convert 100,200,300,400,500,600,700,800,900 to C,CC,CCC,CD,D,DC,DCC,DCCC,CM', () => {
    expect(convertOptimized(100)).toBe('C');
    expect(convertOptimized(200)).toBe('CC');
    expect(convertOptimized(300)).toBe('CCC');
    expect(convertOptimized(400)).toBe('CD');
    expect(convertOptimized(500)).toBe('D');
    expect(convertOptimized(600)).toBe('DC');
    expect(convertOptimized(700)).toBe('DCC');
    expect(convertOptimized(800)).toBe('DCCC');
    expect(convertOptimized(900)).toBe('CM');
  });

  it('should convert 1000,2000,3000 to M,MM,MMM', () => {
    expect(convertOptimized(1000)).toBe('M');
    expect(convertOptimized(2000)).toBe('MM');
    expect(convertOptimized(3000)).toBe('MMM');
  });

  it('should convert complex numbers correctly', () => {
    expect(convertOptimized(1987)).toBe('MCMLXXXVII');
    expect(convertOptimized(3999)).toBe('MMMCMXCIX');
    expect(convertOptimized(2421)).toBe('MMCDXXI');
    expect(convertOptimized(1666)).toBe('MDCLXVI');
    expect(convertOptimized(444)).toBe('CDXLIV');
  });
});

