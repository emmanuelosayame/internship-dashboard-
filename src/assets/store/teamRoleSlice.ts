import { StateCreator } from "zustand";
import { TeamRoleSlice } from "../Types";

const initialState = {
  id: "new",
  title: "",
  requiredSkills: [],
  complementarySkills: [],
  locationPref: "",
  description: "",
  minimumHoursPW: null,
};

export const teamRoleSlice: StateCreator<TeamRoleSlice> = (set, get) => ({
  teamRole: initialState,
  setRoleTitle: (title) =>
    set((state) => ({ teamRole: { ...state.teamRole, title } })),
  setRoleDescr: (description) =>
    set((state) => ({ teamRole: { ...state.teamRole, description } })),
  setRoleReqSkills: (requiredSkills) =>
    set((state) => ({
      teamRole: {
        ...state.teamRole,
        requiredSkills,
      },
    })),
  removeOneReqSkill: (skillTobeRemoved) =>
    set((state) => ({
      teamRole: {
        ...state.teamRole,
        requiredSkills: state.teamRole.requiredSkills.filter(
          (skill) => skillTobeRemoved !== skill
        ),
      },
    })),
  setRoleCompSkills: (complementarySkills) =>
    set((state) => ({
      teamRole: {
        ...state.teamRole,
        complementarySkills,
      },
    })),
  removeOneCompSkill: (skillTobeRemoved) =>
    set((state) => ({
      teamRole: {
        ...state.teamRole,
        complementarySkills: state.teamRole.complementarySkills.filter(
          (skill) => skillTobeRemoved !== skill
        ),
      },
    })),
  setMinHoursPW: (minimumHoursPW) =>
    set((state) => ({ teamRole: { ...state.teamRole, minimumHoursPW } })),
  setLocationPref: (locationPref) =>
    set((state) => ({ teamRole: { ...state.teamRole, locationPref } })),
  setInitialData: (teamRole) => set((state) => ({ teamRole })),
  resetTeamRole: () => set({ teamRole: initialState }),
});
