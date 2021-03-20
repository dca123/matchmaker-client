export interface User {
  id: string;
  steamID: string;
  imageUrl: string;
}

export interface userRequestPayload {
  user: User;
  mutate: Promise<string | undefined>;
  loading: boolean;
}

export interface SteamJSONResponse {
  steamid: string;
  communityvisibilitystate: number;
  profilestate: number;
  personaname: string;
  profileurl: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  avatarhash: string;
  lastlogoff: number;
  personastate: number;
  realname: string;
  primaryclanid: string;
  timecreated: number;
  personastateflags: number;
  loccountrycode: string;
  locstatecode: string;
  loccityid: number;
}

export interface SteamPhotoResponse {
  value: string;
}

export interface SteamResponse {
  provider: string;
  _json: SteamJSONResponse;
  id: string;
  displayName: string;
  photos: SteamPhotoResponse[];
}
