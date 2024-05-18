import { getRandomInt } from "../../../utils/getRandomInt";


export const generateWires = () => {
    const colors = ['red', 'blue', 'white', 'yellow', 'black'];
    const numWires = getRandomInt(3, 6); // Génère entre 3 et 6 fils
    const wires = [];
    for (let i = 0; i < numWires; i++) {
      const color = colors[getRandomInt(0, colors.length - 1)];
      wires.push(color);
    }
    return wires;
  };



export const determineCorrectWire = (wires: string[])=> {
    const numWires = wires.length;

    switch (numWires) {
        case 3:
            if (!wires.includes('red')) {
                return 1;
            } else if (wires[2] === 'white') {
                return 2;
            } else if (wires.filter(c => c === 'blue').length > 1) {
                return wires.lastIndexOf('blue');
            } else {
                return 2;
            }

        case 4:
            if (wires.filter(c => c === 'red').length > 1 && !wires.includes('blue')) {
                return wires.lastIndexOf('red');
            } else if (wires[3] === 'yellow' && !wires.includes('red')) {
                return 0;
            } else if (wires.filter(c => c === 'blue').length === 1) {
                return 1;
            } else {
                return wires.lastIndexOf('yellow');
            }

        case 5:
            if (wires[4] === 'black' && !wires.includes('white')) {
                return 3;
            } else if (wires.filter(c => c === 'red').length === 1 && wires.filter(c => c === 'yellow').length > 1) {
                return 0;
            } else if (!wires.includes('black')) {
                return 1;
            } else {
                return 0;
            }

        case 6:
            if (!wires.includes('yellow') && wires.includes('red')) {
                return 2;
            } else if (wires.filter(c => c === 'yellow').length === 1 && wires.filter(c => c === 'white').length > 1) {
                return 3;
            } else if (!wires.includes('red')) {
                return 1;
            } else {
                return wires.lastIndexOf('yellow');
            }

        default:
            return null;
    }
}

export const cutWire = (index: number, correctWireIndex:number) => {
      if (index === correctWireIndex) {
        return true
      } else {
        return false
      }
  };