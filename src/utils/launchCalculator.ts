import { ProgressionKey } from "../types/progression/key";
import { ArithmeticProgression } from "./arithmeticProgression";
import { BaseProgression } from "./baseProgression";
import { FibonacciProgression } from "./fibonacciProgression";
import { GeometricProgression } from "./geometricProgression";
import { HarmonicProgression } from "./harmonicProgression";

export const launchCalculator = (ticket: string, progressionKey: ProgressionKey, index: number, start?: number, common?: number) => {
    let calculationClass: BaseProgression
    switch (progressionKey) {
        case ProgressionKey.arithmetic: calculationClass = new ArithmeticProgression(ticket, index, start, common); break;
        case ProgressionKey.geometric: calculationClass = new GeometricProgression(ticket, index, start, common); break;
        case ProgressionKey.harmonic: calculationClass = new HarmonicProgression(ticket, index, start, common); break;
        case ProgressionKey.fibonacci: calculationClass = new FibonacciProgression(ticket, index, start, common); break;
    }
    calculationClass.calculateAndSave()
}
