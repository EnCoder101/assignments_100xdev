"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pubSubManager = exports.PubSubManager = void 0;
const redis_1 = require("redis");
class PubSubManager {
    constructor() {
        this.redisClient = (0, redis_1.createClient)();
        this.redisClient
            .on("error", (err) => console.log("some error", err))
            .connect();
        // console.log(this.redisClient)
        this.subscriberList = new Map();
    }
    static getinstance() {
        if (!PubSubManager.instance) {
            PubSubManager.instance = new PubSubManager();
        }
        return PubSubManager.instance;
    }
    addSubscriber(userId, product) {
        var _a, _b;
        console.log("here 0");
        if (!this.subscriberList.has(product)) {
            this.subscriberList.set(product, []);
        }
        (_a = this.subscriberList.get(product)) === null || _a === void 0 ? void 0 : _a.push(userId);
        console.log("here 1");
        if (((_b = this.subscriberList.get(product)) === null || _b === void 0 ? void 0 : _b.length) === 1) {
            console.log("here 2");
            this.redisClient.subscribe(product, (message, channel) => {
                console.log("Subscribing", message, channel);
            });
        }
    }
    removeSubscriber(product, userId) {
        var _a, _b, _c;
        this.subscriberList.set(product, (_b = (_a = this.subscriberList.get(product)) === null || _a === void 0 ? void 0 : _a.filter((ids) => ids !== userId)) !== null && _b !== void 0 ? _b : []);
        if (((_c = this.subscriberList.get(product)) === null || _c === void 0 ? void 0 : _c.length) === 0) {
            this.redisClient.unsubscribe(product, (message, channel) => {
                console.log("Unsubscribing", message, channel);
            });
        }
    }
    handleMessage(product, message) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            (_a = this.subscriberList.get(product)) === null || _a === void 0 ? void 0 : _a.forEach((id) => {
                console.log(`Message for ${product} = '${message}'  sent for the id ${id}`);
            });
        });
    }
    disconnectToRedis() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.PubSubManager = PubSubManager;
exports.pubSubManager = PubSubManager.getinstance();
