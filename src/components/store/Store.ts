import create from "zustand";
import {
  ApiSlice,
  ApprSlice,
  TeamAdminSlice,
  TeamRoleSlice,
  UserSlice,
} from "../Types";
import { apprenticeshipSlice } from "./apprenticeshipSlice";
// import { teamAdminSlice } from "./teamAdminSlice";
import { teamRoleSlice } from "./teamRoleSlice";
import { devtools, combine } from "zustand/middleware";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { userSlice } from "./userSlice";
import { apiSlice } from "./apiSlice";

export const useStore = create<
  ApprSlice & TeamRoleSlice & UserSlice & ApiSlice
>()((...args) => ({
  ...apprenticeshipSlice(...args),
  ...teamRoleSlice(...args),
  ...userSlice(...args),
  ...apiSlice(...args),
}));

// if (process.env.NODE_ENV === "development") {
//   mountStoreDevtool("Store", useStore);
// }
