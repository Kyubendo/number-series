import { Request } from "express";

export interface ResultRequest extends Request {
    query: { ticket: string }
}