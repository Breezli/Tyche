import Collapse from "./Collapse.vue";
import CollapseItem from "./CollapseItem.vue";
import { withInstall } from "@tyche/utils";

export const ErCollapse = withInstall(Collapse);
export const ErCollapseItem = withInstall(CollapseItem);

export * from "./types";
