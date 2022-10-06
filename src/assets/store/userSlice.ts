import { doc, DocumentReference, getDoc } from "firebase/firestore";
import { StateCreator } from "zustand";
import { auth, db } from "../firebase";
import { UserSlice, UserData } from "../Types";

const user = auth.currentUser;

export const userSlice: StateCreator<UserSlice> = (set, get) => ({
  userData: {
    displayName: user?.displayName,
    photoURL: user?.photoURL,
  },
  updateUserData: ({ displayName, photoURL }) =>
    set((state) => ({
      userData: {
        displayName: displayName || state.userData?.displayName,
        photoURL: photoURL || state.userData?.photoURL,
      },
    })),
});
