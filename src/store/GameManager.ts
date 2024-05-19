import { Ref, ref } from "vue";

class Game{
    public count:Ref<number> = ref(200)
    public isLost:Ref<boolean> = ref(false)
    private _penaltyCount = 0
    private _penaltyThreeshold = 3


    constructor(){
        this.start()
    }
    
    private start(){
        const id = setInterval(() => {
        this.count.value--;
        if (this.count.value <= 0) {
            this.isLost.value = true;
            clearInterval(id);
            }
        }, 1000);
    }

    public addPenalty(){
        this._penaltyCount++
        if (this._penaltyCount >= this._penaltyThreeshold) {
           this.isLost.value = true
        }
    }
}
export default Game;