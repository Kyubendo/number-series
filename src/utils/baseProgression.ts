import { Redis } from '../redis/RedisInsatnce';

export abstract class BaseProgression {
    constructor(
        private ticket: string,
        private index: number,
        private start?: number,
        private common?: number
    ) {

    }

    abstract calculationFunction(index: number, start?: number, common?: number): number

    private async calculate(): Promise<number> {
        return this.calculationFunction(this.index, this.start, this.common)
    }

    public async calculateAndSave() {
        const redisClient = await Redis.getClient()
        this.calculate()
            .then(async calculatedNumber => {
                const seriesRaw = await redisClient.get(this.ticket)
                if (seriesRaw) {
                    const series = Object.keys(JSON.parse(seriesRaw))[0]
                    await redisClient.set(this.ticket, JSON.stringify({ [series]: calculatedNumber }))
                }
            })
            

    }

}