import { Timestamp } from "firebase/firestore";
import * as Yup from "yup";

export interface ApprType {
  id: string;
  apprenticeshipTitle: string;
  companyDescription: string;
  apprenticeshipDescription: string;
  logoUrl?: string;
  teamRoles: TeamRole[];
  videosUrls?: { name: string; url: string }[];
  teamTypes: string[];
  timeline: { startDate: Timestamp | null; estEndDate: Timestamp | null };
  teamAdmins: TeamAdmin[];
}

export interface ApprsData {
  list: ApprType[];
  empty?: boolean;
  size?: number;
}

export interface ApprErrorTypes {
  apprenticeshipTitle: string | null;
  companyDescription: string | null;
  apprenticeshipDescription: string | null;
}

export const validationSchemaA = Yup.object().shape({
  apprenticeshipTitle: Yup.string().max(100, "Thats a little too long"),
  companyDescription: Yup.string().max(500, "limit 500"),
  apprenticeshipDescription: Yup.string().max(500, "limit 500"),
});

export interface TeamRole {
  id: string;
  title: string;
  description: string;
  requiredSkills: string[];
  complementarySkills: string[];
  minimumHoursPW: number | null;
  locationPref: string;
}

interface ApprCreateType {
  logo: File | null;
  logoUrl?: string;
  apprenticeshipTitle: string;
  companyDescription: string;
  apprenticeshipDescription: string;
  teamRoles: TeamRole[];
  videos: File[];
  videosUrls?: { name: string; url: string }[];
  teamTypes: string[];
  timeline: { startDate: Date | null; estEndDate: Date | null };
  teamAdmins: TeamAdminCreate[];
}

interface TeamAdminCreate {
  photo?: File | null;
  name: string;
  email: string;
  linkedInUrl?: string;
}

export interface ApprSlice {
  apprenticeship: ApprCreateType;
  setCompanyLogo: (logo: File) => void;
  setApprTitle: (title: string) => void;
  setCompanyDescr: (descr: string) => void;
  setApprDescr: (descr: string) => void;
  setApprVideos: (videos: File[]) => void;
  setTeamTypes: (teamType: string[]) => void;
  addTeamRole: (role: TeamRole) => void;
  setTeamRoles: (roles: TeamRole[]) => void;
  setAdminRoles: (roles: TeamRole[]) => void;
  setTimelineSD: (startDate: Date) => void;
  setTimelineEED: (estEndDate: Date) => void;
  removeOneApprVideo: (videoName: string) => void;
  removeOneTeamRole: (role: string) => void;
  removeTeamAdmin: (id: string) => void;
  addTeamAdmin: (admin: TeamAdminCreate) => void;
  resetAppr: () => void;
  populateAppr: (id: string) => void;
  loadingAppr: boolean;
}

export interface TeamRoleSlice {
  teamRole: TeamRole;
  setRoleTitle: (title: string) => void;
  setRoleDescr: (descr: string) => void;
  setRoleReqSkills: (skills: string[]) => void;
  removeOneReqSkill: (skill: string) => void;
  setRoleCompSkills: (skills: string[]) => void;
  removeOneCompSkill: (skill: string) => void;
  setMinHoursPW: (hours: number) => void;
  setLocationPref: (locationPref: string) => void;
  setInitialData: (teamRole: TeamRole) => void;
  resetTeamRole: () => void;
}

export interface TeamAdmin {
  photoUrl?: string;
  name: string;
  email: string;
  linkedInUrl?: string;
}

// export interface Indexer {
//   [key: string]: string
// }

export interface TeamAdminSlice {
  teamAdmin: TeamAdminCreate;
  setAdminName: (name: string) => void;
  setAdminEmail: (name: string) => void;
  setAdminLinkedInUrl: (name: string) => void;
  setAdminPhoto: (file: File) => void;
  populateTeamAdmin: (admin: TeamAdmin) => void;
  resetTeamAdmin: () => void;
}

export interface Search {
  type: string;
  value: string;
}

export interface UserData {
  displayName?: string | null;
  photoURL?: string | null;
}

export interface UserSlice {
  userData: UserData;
  updateUserData: ({
    displayName,
    photoURL,
  }: {
    displayName?: string | null;
    photoURL?: string | null;
  }) => void;
}

export interface SearchEntity {
  // id: string;
  [key: string]: string;
  search: string;
  value: string;
}

export interface SearchData {
  roleTitles: SearchEntity[];
  roleSkills: SearchEntity[];
  locations: SearchEntity[];
}

export interface ApiSlice {
  searchData: SearchData;
  setSearchData: (data: SearchEntity[]) => void;
}
