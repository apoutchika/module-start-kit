import { Demo } from "./index";

describe("Test demo", () => {
  it("test return true", () => {
    const demo = new Demo();

    expect(demo.test()).toBe(true);
  });
});
