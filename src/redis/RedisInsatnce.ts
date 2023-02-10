import * as redis from 'redis';
export class Redis {
    private static client: redis.RedisClientType;
    private constructor() { }

    public static async getClient(): Promise<redis.RedisClientType> {
        if (!Redis.client) {
            Redis.client = redis.createClient({url:
            `redis://redis:6379/0`
            });
            await this.client. connect()
        }
        return Redis.client;
    }
}