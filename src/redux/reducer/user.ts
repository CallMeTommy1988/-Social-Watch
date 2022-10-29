import md5 from "js-md5";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as outerService from "../../api/modules/outer";
import * as userService from "../../api/modules/user";
import { ILogin } from "../../api/interface";
import { userState } from "../../api/interface/user";
import { localSet, localGet } from "../../utils/util";

export const name = "outerWorkflow";
export const tokenKey = "wToken";

const loginType = `${name}/login`;
const fetchUserType = `${name}/fetchUser`;
const setTokenType = `${name}/setToken`;

const login = createAsyncThunk(
  loginType,
  async (params: ILogin.ReqLoginForm) => {
    params.passwd = md5(params.passwd);
    const res = await outerService.login(params);
    return res;
  }
);

export const fetchCurrentUser = createAsyncThunk(fetchUserType, async () => {
  const res = await userService.fetchCurrentUser();
  return res;
});

export const setToken = createAsyncThunk(
  setTokenType,
  (payload: string, action) => {
    action.dispatch(user.actions.addToken(payload));
  }
);

const initialState: userState = {
  user: undefined,
  token: "",
};

export const user = createSlice({
  name: name,
  initialState: initialState,
  reducers: {
    addUser: (state: userState, action) => {
      state.user = action.payload;
    },
    addToken: (state: userState, action) => {
      state.token = action.payload;
      localSet(tokenKey, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state: userState, action) => {
        if (action.payload.code === 200 && !!action.payload.data?.token) {
          state.token = action.payload.data.token;
        }
      })
      .addCase(fetchCurrentUser.fulfilled, (state: userState, action) => {
        if (action.payload.code === 200 && !!action.payload.data?.user) {
          state.user = action.payload.data.user;
        }
      })
  },
});

export const { addUser, addToken } = user.actions;

export const selectorUserToken = (state: { user: userState }) => {

  if (!!state.user && !!state.user.token) return state.user.token;

  let token = localGet(tokenKey);
  if (!token) return "";

  user.actions.addToken(token);
  return token;
};

export const selectorUser = (state: { user: userState }) => {
  console.log(`selectorUser state:`, state);
  return state.user.user;
};

export default user.reducer;
