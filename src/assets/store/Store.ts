import create from "zustand";
import { ApprSlice, TeamAdminSlice, TeamRoleSlice } from "../Types";
import { apprenticeshipSlice } from "./apprenticeshipSlice";
// import { teamAdminSlice } from "./teamAdminSlice";
import { teamRoleSlice } from "./teamRoleSlice";
import { devtools, combine } from "zustand/middleware";
import { mountStoreDevtool } from "simple-zustand-devtools";

export const useStore = create<ApprSlice & TeamRoleSlice>()((...args) => ({
  ...apprenticeshipSlice(...args),
  ...teamRoleSlice(...args),
  // ...teamAdminSlice(...args),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useStore);
}
