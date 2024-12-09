import { createClient, RedisClientType } from "redis";

export class PubSubManager {
  private static instance: PubSubManager;
  private redisClient: RedisClientType;
  private subscriberList: Map<string, Array<string>>;

  private constructor() {
    this.redisClient = createClient();
    this.redisClient
      .on("error", (err) => console.log("some error", err))
      .connect();
    this.subscriberList = new Map();
  }

  public static getinstance() {
    if (!PubSubManager.instance) {
      PubSubManager.instance = new PubSubManager();
    }
    return PubSubManager.instance;
  }
  public addSubscriber(userId: string, product: string) {
    if (!this.subscriberList.has(product)) {
      this.subscriberList.set(product, []);
    }
    this.subscriberList.get(product)?.push(userId);
    if (this.subscriberList.get(product)?.length === 1) {
      this.redisClient.subscribe(product, (message, channel) => {
        console.log("Subscribing", message, channel);
      });
    }
  }

  removeSubscriber(product: string, userId: string) {
    this.subscriberList.set(
      product,
      this.subscriberList.get(product)?.filter((ids) => ids !== userId) ?? []
    );
    if (this.subscriberList.get(product)?.length === 0) {
      this.redisClient.unsubscribe(product, (message, channel) => {
        console.log("Unsubscribing", message, channel);
      });
    }
  }

  async handleMessage(product: string, message: string) {
    this.subscriberList.get(product)?.forEach((id) => {
      console.log(
        `Message for ${product} = '${message}'  sent for the id ${id}`
      );
    });
  }
  async disconnectToRedis() {}
}

export const pubSubManager = PubSubManager.getinstance();
