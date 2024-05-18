import { describe, expect, it } from 'vitest'
import { cutWire, determineCorrectWire, generateWires } from './utils';


describe('generateWires', () => {
  it('should return an array of strings', () => {
    const result = generateWires();
    expect(result).toBeInstanceOf(Array);
    result.forEach(wire => expect(typeof wire).toBe('string'));
  });

  it('should return an array of length between 3 and 6', () => {
    const result = generateWires();
    expect(result.length).toBeGreaterThanOrEqual(3);
    expect(result.length).toBeLessThanOrEqual(6);
  });
});

describe('determineCorrectWire', () => {
  it('should return the correct wire index for a given array of wires', () => {
    const wires = ['red', 'blue', 'white'];
    const result = determineCorrectWire(wires);
    expect(result).toBe(2);
  });

  it('should return the correct wire index for a given array of wires', () => {
    const wires = ['blue', 'white', 'red'];
    const result = determineCorrectWire(wires);
    expect(result).toBe(2);
});

it('should return the correct wire index for a given array of wires', () => {
    const wires = ['red', 'blue', 'blue'];
    const result = determineCorrectWire(wires);
    expect(result).toBe(2);
});

it('should return the correct wire index for a given array of wires', () => {
    const wires = ['white', 'white', 'blue'];
    const result = determineCorrectWire(wires);
    expect(result).toBe(1);
});


  it('should return null if the array of wires is empty', () => {
    const wires: string[] = [];
    const result = determineCorrectWire(wires);
    expect(result).toBeNull();
  });
});

describe('cutWire', () => {
  it('should return true if the index of the cut wire is the same as the correct wire index', () => {
    const index = 1;
    const correctWireIndex = 1;
    const result = cutWire(index, correctWireIndex);
    expect(result).toBe(true);
  });

  it('should return false if the index of the cut wire is not the same as the correct wire index', () => {
    const index = 0;
    const correctWireIndex = 1;
    const result = cutWire(index, correctWireIndex);
    expect(result).toBe(false);
  });
});
