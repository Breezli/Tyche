import type { Plugin } from "vue";
import { describe, it, expect } from "vitest";
import {
  ErAlert,
  ErButton,
  ErButtonGroup,
  ErCollapse,
  ErCollapseItem,
  ErDropdown,
  ErDropdownItem,
  ErTooltip,
} from "./index";
import { map, get } from "lodash-es";

const components = [
  ErAlert,
  ErButton,
  ErButtonGroup,
  ErCollapse,
  ErCollapseItem,
  ErDropdown,
  ErDropdownItem,
  ErTooltip,
] as Plugin[];

describe("components/index.ts", () => {
  it.each(map(components, (c) => [get(c, "name") ?? "", c]))("%s should be exported", (_, component) => {
    expect(component).toBeDefined();
    expect(component.install).toBeDefined()
  });
});
