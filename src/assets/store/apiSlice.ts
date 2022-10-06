import { doc, DocumentReference, getDoc } from "firebase/firestore";
import { StateCreator } from "zustand";
import { auth, db } from "../firebase";
import { ApiSlice, UserData } from "../Types";

const user = auth.currentUser;

export const apiSlice: StateCreator<ApiSlice> = (set, get) => ({
  searchData: { roleSkills: [], roleTitles: [], locations: [] },
  setSearchData: (data) =>
    set({
      searchData: {
        roleTitles: data.filter((arg) => arg.search === "roleTitle"),
        roleSkills: data.filter((arg) => arg.search === "roleSkill"),
        locations: data.filter((arg) => arg.search === "location"),
      },
    }),
});
