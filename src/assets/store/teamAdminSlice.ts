import { StateCreator } from "zustand";
import { TeamAdminSlice, TeamRoleSlice } from "../Types";

const initialState = {
  name: "",
  email: "",
  photo: null,
};

export const teamAdminSlice: StateCreator<TeamAdminSlice> = (set, get) => ({
  teamAdmin: initialState,
  setAdminName: (name) =>
    set((state) => ({ teamAdmin: { ...state.teamAdmin, name } })),
  setAdminEmail: (email) =>
    set((state) => ({ teamAdmin: { ...state.teamAdmin, email } })),
  setAdminLinkedInUrl: (linkedInUrl) =>
    set((state) => ({ teamAdmin: { ...state.teamAdmin, linkedInUrl } })),
  setAdminPhoto: (file) =>
    set((state) => ({ teamAdmin: { ...state.teamAdmin, photo: file } })),
  populateTeamAdmin: (teamAdmin) => set(() => ({ teamAdmin })),
  resetTeamAdmin: () => set((state) => ({ teamAdmin: initialState })),
});
