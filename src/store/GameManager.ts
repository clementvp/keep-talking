import { Ref, ref } from "vue";

class Game{
    public count:Ref<number> = ref(200)
    public isLost:Ref<boolean> = ref(false)
    private penaltyCount = ref(0)
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

    get penaltyThreeshold(){
        return this._penaltyThreeshold
    }

    public addPenalty(){
        this.penaltyCount.value++
        if (this.penaltyCount.value >= this._penaltyThreeshold) {
           this.isLost.value = true
        }
    }
}
export default Game;