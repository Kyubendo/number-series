import { BaseProgression } from "./baseProgression";

export class GeometricProgression extends BaseProgression {
    calculationFunction(index: number, start: number, common: number): number {
        index++;
        return start * Math.pow(common, index - 1);
    }
}