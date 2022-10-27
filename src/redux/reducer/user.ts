import md5 from "js-md5";
import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
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
  debugger;
  const res = await userService.fetchCurrentUser();
  return res;
});

export const setToken = createAsyncThunk(
  setTokenType,
  (payload: string, action) => {
    action.dispatch(user.actions.addToken(payload));
    localSet(tokenKey, payload);
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
      console.log(`------ add Token by addToken function ------`);
      console.log(state.token);
      console.log(state.user);
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state: userState, action) => {
        if (action.payload.code === 200 && !!action.payload.data?.token) {
          state.token = action.payload.data.token;
          localSet(tokenKey, state.token);
        }
      })
      .addCase(fetchCurrentUser.fulfilled, (state: userState, action) => {
        if (action.payload.code === 200 && !!action.payload.data?.user) {
          state.user = action.payload.data.user;
        }
      });
  },
});

export const { addUser, addToken } = user.actions;

export const selectorUserToken = (state: userState) => {
  if (!!state.token) return state.token;

  console.log(`获取token`);
  console.log(state);
  console.log(`获取本地存储`);
  console.log(`key`, tokenKey);
  let token = localGet(tokenKey);
  console.log(`实际token`, token);
  if (!token) return "";

  state.token = token;
  return state.token;
};

export const selectorUser = (state: userState) => {
  return state.user;
};

export default user.reducer;
