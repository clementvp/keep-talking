import { Ref, ref } from "vue";

class Game{
    public id:NodeJS.Timeout| string = ""
    public count:Ref<number> = ref(200)
    public isLost:Ref<boolean> = ref(false)
    public isWon:Ref<boolean> = ref(false)
    private _modules: string[] = ['Wires']
    private _resolvedModules = 0 
    public penaltyCount = ref(0)
    private _penaltyThreeshold = 3

    constructor(){
        this.start()
    }
    
    private start(){
        this.id = setInterval(() => {
        this.count.value--;
        if (this.count.value <= 0) {
            this.isLost.value = true;
            clearInterval(this.id);
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

    public validateModule(){
        this._resolvedModules++
        if (this._resolvedModules === this._modules.length) {
            clearInterval(this.id)
            this.isWon.value = true
        }
    }

}
export default Game;