import { Request } from "express";
import { ProgressionKey } from "../progression/key"

interface ProgressionInput {
    number: number,
    type: ProgressionKey,
    data: {
        start?: number,
        common?: number,
    }
}

export interface ProgressionInputRequest extends Request {
    body: ProgressionInput
}