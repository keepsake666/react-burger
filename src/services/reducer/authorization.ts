import {
  GET_REGISTRATION_FAILED,
  GET_REGISTRATION_REQUEST,
  GET_REGISTRATION_SUCCESS,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_REQUEST,
  GET_LOGIN_FAILED,
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  GET_LOGOUT_REQUEST,
  GET_LOGOUT_SUCCESS,
  GET_LOGOUT_FAILED,
  GET_CHANGEPROFILE_REQUEST,
  GET_CHANGEPROFILE_SUCCESS,
  GET_CHANGEPROFILE_FAILED, TAuthorization,
} from "../action/authorization";
import {IRegistration, IUser} from "../types/types";

type TInitialState = {
  authorizationFailed: boolean;
  authorizationRequest: boolean;
  logInFailed: boolean;
  logInRequest: boolean;
  tokenFailed: boolean;
  tokenRequest: boolean;
  getUserRequest: boolean;
  getUserFailed: boolean;
  logOutRequest: boolean;
  logOutFailed: boolean;
  changeProfileRequest: boolean;
  changeProfileFailed: boolean;
  isAuthenticated: boolean;
  errorNumber: string;
  errorNumberUpdateProfile: string;
  user: IUser,
};

const initialState:TInitialState = {
  authorizationFailed: false,
  authorizationRequest: false,
  logInFailed: false,
  logInRequest: false,
  tokenFailed: false,
  tokenRequest: false,
  getUserRequest: false,
  getUserFailed: false,
  logOutRequest: false,
  logOutFailed: false,
  changeProfileRequest: false,
  changeProfileFailed: false,
  isAuthenticated: false,
  errorNumber: "",
  errorNumberUpdateProfile: "",
  user: {email: '', name: ''},
};

export const authorizationReducer = (state = initialState, action:TAuthorization):TInitialState => {
  switch (action.type) {
    case GET_REGISTRATION_REQUEST: {
      return {
        ...state,
        authorizationFailed: false,
        authorizationRequest: true,
      };
    }
    case GET_REGISTRATION_SUCCESS: {
      return {
        ...state,
        authorizationRequest: false,
        authorizationFailed: false,
        user: action.payload.user,
        isAuthenticated: true,
      };
    }
    case GET_REGISTRATION_FAILED: {
      return {
        ...state,
        authorizationRequest: false,
        authorizationFailed: true,
      };
    }
    case GET_LOGIN_REQUEST: {
      return {
        ...state,
        logInFailed: false,
        logInRequest: true,
      };
    }
    case GET_LOGIN_SUCCESS: {
      return {
        ...state,
        logInRequest: false,
        logInFailed: false,
        user: action.payload.user,
        isAuthenticated: true,
      };
    }
    case GET_LOGIN_FAILED: {
      return {
        ...state,
        logInRequest: false,
        logInFailed: true,
      };
    }
    case GET_TOKEN_REQUEST: {
      return {
        ...state,
        tokenFailed: false,
        tokenRequest: true,
      };
    }
    case GET_TOKEN_SUCCESS: {
      return {
        ...state,
        tokenRequest: false,
        tokenFailed: false,
        isAuthenticated: true,
      };
    }
    case GET_TOKEN_FAILED: {
      return {
        ...state,
        tokenRequest: false,
        tokenFailed: true,
      };
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        getUserFailed: false,
        getUserRequest: true,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        getUserRequest: false,
        getUserFailed: false,
        user: action.payload.user,
        isAuthenticated: true,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getUserRequest: false,
        getUserFailed: true,
        errorNumber: action.failed,
      };
    }
    case GET_LOGOUT_REQUEST: {
      return {
        ...state,
        logOutFailed: false,
        logOutRequest: true,
      };
    }
    case GET_LOGOUT_SUCCESS: {
      return {
        ...state,
        logOutRequest: false,
        logOutFailed: false,
        isAuthenticated: false,
        user: {email:'', name: ''},
      };
    }
    case GET_LOGOUT_FAILED: {
      return {
        ...state,
        logOutRequest: false,
        logOutFailed: true,
      };
    }
    case GET_CHANGEPROFILE_REQUEST: {
      return {
        ...state,
        changeProfileFailed: false,
        changeProfileRequest: true,
      };
    }
    case GET_CHANGEPROFILE_SUCCESS: {
      return {
        ...state,
        changeProfileRequest: false,
        changeProfileFailed: false,
        user: action.payload.user,
      };
    }
    case GET_CHANGEPROFILE_FAILED: {
      return {
        ...state,
        changeProfileRequest: false,
        changeProfileFailed: true,
        errorNumberUpdateProfile: action.failed,
      };
    }
    default: {
      return state;
    }
  }
};
