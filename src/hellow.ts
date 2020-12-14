import * as Sleep from "sleep";

export class Hello {
  public sayHelloTo(name: string): string {
    console.log(`test DateTime1: ${new Date()}`);
    Sleep.msleep(10);
    console.log(`test DateTime2: ${new Date()}`);
    return `🦄 Hello ${name} !`;
  }
}
