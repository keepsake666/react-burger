import {
  GET_REGISTRATION_FAILED,
  GET_REGISTRATION_REQUEST,
  GET_REGISTRATION_SUCCESS,
} from "../action/authorization";

const initialState = {
  dataProfile: {},
  authorizationFailed: false,
  authorizationRequest: false,
  token: ''
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
        dataProfile: action.payload,
      };
    }
    case GET_REGISTRATION_FAILED: {
      return {
        ...state,
        authorizationRequest: false,
        authorizationFailed: true,
      };
    }
    default: {
      return state;
    }
  }
};
