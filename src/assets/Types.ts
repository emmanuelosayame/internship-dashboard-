import * as Yup from "yup";

export interface ApprType {
  apprenticeshipTitle: string;
  companyDescription: string;
  apprenticeshipDescription: string;
  logo: File | null;
  teamRoles: TeamRole[];
  videos: File[];
  teamTypes: string[];
  timeline: { startDate: Date | null; estEndDate: Date | null };
  teamAdmins: TeamAdmin[];
}

export interface ApprErrorTypes {
  apprenticeshipTitle: string | null;
  companyDescription: string | null;
  apprenticeshipDescription: string | null;
}

export const validationSchemaA = Yup.object().shape({
  apprenticeshipTitle: Yup.string().max(40, "Thats a little too long"),
  companyDescription: Yup.string().max(500, "limit 500"),
  apprenticeshipDescription: Yup.string().max(400, "limit 500"),
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

export interface ApprSlice {
  apprenticeship: ApprType;
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
  addTeamAdmin: (admin: TeamAdmin) => void;
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

export interface TeamAdminSlice {
  teamAdmin: TeamAdmin;
  setAdminName: (name: string) => void;
  setAdminEmail: (name: string) => void;
  setAdminLinkedInUrl: (name: string) => void;
  setAdminPhoto: (file: File) => void;
  populateTeamAdmin: (admin: TeamAdmin) => void;
  resetTeamAdmin: () => void;
}
