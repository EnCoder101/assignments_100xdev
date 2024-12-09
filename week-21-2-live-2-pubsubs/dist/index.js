"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pubsubManager_1 = require("./pubsubManager");
function main() {
    setInterval(() => {
        console.log("UP");
        pubsubManager_1.pubSubManager === null || pubsubManager_1.pubSubManager === void 0 ? void 0 : pubsubManager_1.pubSubManager.addSubscriber(Math.random().toString(), "Apple");
    }, 3000);
}
main();
