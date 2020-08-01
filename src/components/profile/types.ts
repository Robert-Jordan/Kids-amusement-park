export interface ProfileState {
    isUpdating: boolean,
    updated: boolean,
    firstName: string,
    lastName: string,
    email: string,
    errorMessage: string,
}

export interface UserProfileModel {
    email: string;
    password: string;
    newPassword: string;
  }

  
export interface UpdateProfileResultModel {
    profileDataUpdated: boolean;
    errorMessage: string;
  }