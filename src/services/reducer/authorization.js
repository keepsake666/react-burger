import {
  GET_REGISTRATION_FAILED,
  GET_REGISTRATION_REQUEST,
  GET_REGISTRATION_SUCCESS,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_REQUEST,
  GET_LOGIN_FAILED,
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILED, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILED,
} from "../action/authorization";

const initialState = {
  data: {},
  authorizationFailed: false,
  authorizationRequest: false,
  logInFailed: false,
  logInRequest: false,
  tokenFailed: false,
  tokenRequest: false,
  getUserRequest: false,
  getUserFailed: false,
  isAuthenticated: false,
  user: {},
};

export const authorizationReducer = (state = initialState, action) => {
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
        data: action.payload,
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
      };
    }
    default: {
      return state;
    }
  }
};
