import { onMounted, ref, Ref, } from 'vue';
import {generateWires, cutWire, determineCorrectWire} from './utils'

export const useWires = () => {
    const wires:Ref<string[]> = ref([]);
    const result:Ref<null | boolean> = ref(null);
    const correctWireIndex: Ref<null | number> = ref(null);
       
    const cut = (index: number) => {
      if (correctWireIndex.value !== null) {
        result.value = cutWire(index, correctWireIndex.value);
      }
    };
    
      onMounted(() => {
        wires.value = generateWires();
        correctWireIndex.value = determineCorrectWire(wires.value);
      });
    
      return { wires, result, cut };
}

