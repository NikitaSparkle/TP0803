import Atack from "./IntefraceAttack";
import Defender from "./IntefraceProtection";
import Move from "./IntefraceMove";
import retreats from "./IntefraceRetreat";

export default interface Solders {
    Attack(action:Atack): void;
    protection(action:Defender): void;
    Retreat(action:Move): void;
    MoveOn(action:retreats): void;
}