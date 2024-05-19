import { onMounted, ref, Ref, } from 'vue';
import {generateWires, cutWire, determineCorrectWire} from './utils'

export const useWires = () => {
    const wires:Ref<string[]> = ref([]);
    const penalty:Ref<boolean> = ref(false);
    const correctWireIndex: Ref<null | number> = ref(null);
    const moduleIsComplete = ref(false)
       
    const cut = (index: number) => {
      if (correctWireIndex.value !== null && !moduleIsComplete.value) {
        if(cutWire(index, correctWireIndex.value)){
          moduleIsComplete.value = true;
        } else {
          penalty.value = true;
          setTimeout(() => {
            penalty.value = false;
          }, 50);
        }
        
      }
    };
    
      onMounted(() => {
        wires.value = generateWires();
        correctWireIndex.value = determineCorrectWire(wires.value);
      });
    
      return { wires, penalty, cut, moduleIsComplete };
}

