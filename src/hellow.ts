import * as Sleep from "sleep";

export class Hello {
  public sayHelloTo(name: string): string {
    console.log(`test DateTime1: ${new Date()}`);
    Sleep.sleep(100);
    console.log(`test DateTime2: ${new Date()}`);
    return `🦄 Hello ${name} !`;
  }
}
