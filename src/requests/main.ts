import { ProgressionInputRequest } from "../types/api/input"
import { Response, Request } from "express";
import { Redis } from "../redis/RedisInsatnce";
import { isKey, keyToWord } from "../types/progression/key";
import { launchCalculator } from "../utils/launchCalculator";
import { ResultRequest } from "../types/api/result";

export const calculationStart = async (req: ProgressionInputRequest, res: Response) => {
    const { number, type, data } = req.body
    const redisClient = await Redis.getClient()

    const ticket = Math.random().toString(36).substring(2);
    await redisClient.set(ticket, JSON.stringify({ [req.body.type]: null }))
    launchCalculator(ticket, type, number, data.start, data.common)
    const response = { ticket }
    res.send(response)
    return;
}

export const getResult = async (req: ResultRequest, res: Response) => {
    const { ticket } = req.query
    const redisClient = await Redis.getClient()
    const dataRaw = await redisClient.get(ticket)
    if (!dataRaw) {
        res.statusCode = 404
        res.send()
        return;
    }
    const data = JSON.parse(dataRaw)
    const series = Number(Object.keys(data)[0])

    if (!isKey(series)) {
        res.statusCode = 500
        res.send()
        return
    }
    const answer = data[series] ?? 'In progress'
    const response = { [keyToWord(series)]: answer }
    res.send(response)
    return
}

export const checkProgress = async (req: Request, res: Response) => {
    const client = await Redis.getClient()
    const list: string[] = []
    client.keys('*')
        .then(async keys => {
            for (const key of keys) {
                const data = await client.get(key)
                if (!data) continue;
                const answer = Object.values(JSON.parse(data))[0]
                if (!answer) list.push(key)
            }
        }).then(() => res.send(list))

}