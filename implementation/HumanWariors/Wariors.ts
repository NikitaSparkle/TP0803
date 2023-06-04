import Atack from "D:/TypeScript/5Yourk/abstraction/Interface/IntefraceAttack";
import Defender from "D:/TypeScript/5Yourk/abstraction/Interface/IntefraceProtection";
import Move from "D:/TypeScript/5Yourk/abstraction/Interface/IntefraceMove";
import retreats from "D:/TypeScript/5Yourk/abstraction/Interface/IntefraceRetreat";

 class Wariorses {
    private name:string;
    private demeges:number;
    private weights:number;
    private lengths:number;
    private statuss:number;
    private defances: number;
    constructor(name:string,demege:number,weight:number,length:number,status:number,defance:number){
        this.name=name;
        this.demeges=demege;
        this.weights=weight;
        this.lengths=length;
        this.statuss=status;
        this.defances=defance;
    }


    Attack(action:Atack):void {
        console.log(`${this.name} atack`);
    }
    protection(action:Defender):void {
        console.log(`${this.name} atack`);
    }
    Retreat(action:Move):void {
        console.log(`${this.name} atack`);
    }
    MoveOn(action:retreats):void {
        console.log(`${this.name} В бой`);
    }
    MoveOns():void {
        console.log(`${this.name}${this.demeges}${this.weights}${this.lengths}${this.statuss}${this.defances}  В бой`);
    }
}
export default Wariorses;