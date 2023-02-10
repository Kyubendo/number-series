import { BaseProgression } from "./baseProgression";

export class FibonacciProgression extends BaseProgression{
  calculationFunction(index: number): number {
    if (index <= 0) {
      return 0;
    } else if (index === 1) {
      return 1;
    } else {
      let previous = 0;
      let current = 1;
      let next;
  
      for (let i = 2; i <= index; i++) {
        next = previous + current;
        previous = current;
        current = next;
      }
  
      return current;
    }
  }

}