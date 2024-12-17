export interface Photo {
  title: string;
  url: string;
}

export interface JobTitle {
  title: string;
}

export interface TeamMember {
  name: string;
  role: string;
  profilePhoto: Photo;
  description: string;
  jobTitle: JobTitle;
}

export interface TeamMembersCollection {
  items: TeamMember[];
}

export interface MeetOurTeam {
  heading: string;
  mainPhoto: Photo;
  teamMembersCollection: TeamMembersCollection;
}

export interface MeetOurTeamCollection {
  items: MeetOurTeam[];
}

export interface MeetOurTeamResponse {
  data: {
    meetOurTeamCollection: MeetOurTeamCollection;
  };
}

export interface ClinicPhotosCollection {
  items: Photo[];
}

export interface TakeATour {
  heading: string;
  description: string;
  clinicPhotosCollection: ClinicPhotosCollection;
}

export interface TakeATourCollection {
  items: TakeATour[];
}

export interface TakeATourResponse {
  data: {
    takeATourCollection: TakeATourCollection;
  };
}
