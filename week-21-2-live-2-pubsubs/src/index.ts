import { pubSubManager } from "./pubsubManager";

function main() {
  setInterval(() => {
    console.log("UP")
    pubSubManager?.addSubscriber(Math.random().toString(), "Apple");
  }, 3000);
}

main();
