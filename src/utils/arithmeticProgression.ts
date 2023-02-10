import { BaseProgression } from "./baseProgression";

export class ArithmeticProgression extends BaseProgression {
    calculationFunction(index: number, start: number, common: number): number {
        index++;
        return start + (index - 1) * common;
    }
}