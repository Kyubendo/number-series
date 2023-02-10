import { BaseProgression } from "./baseProgression";

export class HarmonicProgression extends BaseProgression {
    calculationFunction(index: number, start: number, common: number): number {
        index++;
        return (start / (start + (index - 1) * common));
    }
}