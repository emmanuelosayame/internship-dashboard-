import { doc, getDoc } from "firebase/firestore";
import { StateCreator } from "zustand";
import { db } from "../firebase";
import { ApprSlice, ApprType } from "../Types";

const initialState = {
  teamRoles: [],
  adminRoles: [],
  teamTypes: [],
  videos: [],
  apprenticeshipDescription: "",
  apprenticeshipTitle: "",
  logo: null,
  companyDescription: "",
  timeline: { startDate: null, estEndDate: null },
  teamAdmins: [],
};

export const apprenticeshipSlice: StateCreator<ApprSlice> = (set, get) => ({
  apprenticeship: initialState,
  setCompanyLogo: (logo) =>
    set((state) => ({ apprenticeship: { ...state.apprenticeship, logo } })),

  setApprTitle: (title) =>
    set((state) => ({
      apprenticeship: { ...state.apprenticeship, apprenticeshipTitle: title },
    })),
  setCompanyDescr: (companyDescription) =>
    set((state) => ({
      apprenticeship: { ...state.apprenticeship, companyDescription },
    })),
  setApprDescr: (apprenticeshipDescription) =>
    set((state) => ({
      apprenticeship: { ...state.apprenticeship, apprenticeshipDescription },
    })),
  setApprVideos: (videos) =>
    set((state) => ({
      apprenticeship: { ...state.apprenticeship, videos },
    })),
  setTeamTypes: (teamTypes) =>
    set((state) => ({
      apprenticeship: { ...state.apprenticeship, teamTypes },
    })),
  addTeamRole: (role) => {
    // const datte = new Date();
    if (
      role.requiredSkills.length > 0 &&
      role.description.length > 0 &&
      role.description.length > 0
    )
      if (role.id === "new") {
        set((state) => ({
          apprenticeship: {
            ...state.apprenticeship,
            teamRoles: [
              ...state.apprenticeship.teamRoles,
              {
                ...role,
                id: Date.now().toString(),
              },
            ],
          },
        }));
      } else
        set((state) => {
          const prevTeamRoles = state.apprenticeship.teamRoles.filter(
            (teamRole) => role.id !== teamRole.id
          );
          return {
            apprenticeship: {
              ...state.apprenticeship,
              teamRoles: [...prevTeamRoles, role],
            },
          };
        });
  },
  setTeamRoles: (teamRoles) =>
    set((state) => ({
      apprenticeship: { ...state.apprenticeship, teamRoles },
    })),
  setAdminRoles: (adminRoles) =>
    set((state) => ({
      apprenticeship: { ...state.apprenticeship, adminRoles },
    })),
  setTimelineSD: (startDate) =>
    set((state) => ({
      apprenticeship: {
        ...state.apprenticeship,
        timeline: {
          startDate,
          estEndDate: state.apprenticeship.timeline.estEndDate,
        },
      },
    })),
  setTimelineEED: (estEndDate) =>
    set((state) => ({
      apprenticeship: {
        ...state.apprenticeship,
        timeline: {
          estEndDate,
          startDate: state.apprenticeship.timeline.startDate,
        },
      },
    })),
  removeOneApprVideo: (videoName) => {
    const videos = get().apprenticeship.videos.filter(
      (video) => videoName !== video.name
    );
    set((state) => ({
      apprenticeship: { ...state.apprenticeship, videos },
    }));
  },
  removeOneTeamRole: (id) =>
    set((state) => ({
      apprenticeship: {
        ...state.apprenticeship,
        teamRoles: state.apprenticeship.teamRoles.filter(
          (teamRole) => teamRole.id !== id
        ),
      },
    })),
  addTeamAdmin: (admin) => {
    const alreadyAdded = get().apprenticeship.teamAdmins.find(
      (teamAdmin) => teamAdmin.email === admin.email
    );
    if (!alreadyAdded) {
      set((state) => ({
        apprenticeship: {
          ...state.apprenticeship,
          teamAdmins: [...state.apprenticeship.teamAdmins, admin],
        },
      }));
    }
  },
  removeTeamAdmin: (email) =>
    set((state) => ({
      apprenticeship: {
        ...state.apprenticeship,
        teamAdmins: state.apprenticeship.teamAdmins.filter(
          (admin) => email !== admin.email
        ),
      },
    })),
  loadingAppr: false,
  resetAppr: () => set({ apprenticeship: initialState }),
  editAppr: async (id: string) => {
    set({ loadingAppr: true });
    await getDoc<any>(doc(db, "apprenticeships", id))
      .then((data) => {
        set({ loadingAppr: false });
        set({
          apprenticeship: {
            ...data.data(),
            timeline: { startDate: null, estEndDate: null },
          },
        });
      })
      .catch(() => set({ loadingAppr: false }));
  },
});
