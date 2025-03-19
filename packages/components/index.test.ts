import type { Plugin } from "vue";
import { describe, it, expect } from "vitest";
import {
  ErButton,
  ErButtonGroup
} from "./index";
import { map, get } from "lodash-es";

const components = [
  ErButton,
  ErButtonGroup
] as Plugin[];

describe("components/index.ts", () => {
  it.each(map(components, (c) => [get(c, "name") ?? "", c]))("%s should be exported", (_, component) => {
    expect(component).toBeDefined();
    expect(component.install).toBeDefined()
  });
});
