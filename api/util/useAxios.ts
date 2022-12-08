import axios, {AxiosInstance} from 'axios';
import {
  ensureUserTokenResponse,
  removeUserTokenResponse,
  setUserTokenResponse,
} from "@util/tokens/userTokenResponse";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { RefreshTokenParams, UserOAuth } from '@api/types/auth';


export type DefaultRequestProps = {
  url: string;
  params?: object;
  axiosIns?: AxiosInstance;
};

export type QueryRequestProps = DefaultRequestProps;

export type MutationRequestProps<T, S> = DefaultRequestProps & {
  data?: any;
  updater?: (oldData: T, newData: S) => any;
};



//Auth axios instance
export const authAxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URI,
});

//Proxy axios instance
export const proxyAxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

//Data query axios instance
const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URI}`,
});


//Access token interceptor
axiosInstance.interceptors.request.use(async (request) => {
  const oAuth = ensureUserTokenResponse();

  if (oAuth) {
    request.headers = {
      Authorization: `Bearer ${oAuth.access_token}`,
    };
  }
  return request;
});

// Axios refresh token interceptor
createAuthRefreshInterceptor(axiosInstance, async (failedRequest) => {
  const oAuth = ensureUserTokenResponse();
  if (oAuth) {
    const refreshParams: RefreshTokenParams = {
      grant_type: "refresh_token",
      refresh_token: oAuth.refresh_token,
    };

    return proxyAxiosInstance
      .post<UserOAuth>("/api/auth/login", refreshParams)
      .then((resp) => {
        const { access_token } = resp.data;
        const bearer = `Bearer ${access_token}`;
        axiosInstance.defaults.headers.common = {
          Authorization: bearer,
        };
        failedRequest.response.config.headers.Authorization = bearer;
        setUserTokenResponse(resp.data);
        return Promise.resolve();
      })
      .catch(() => removeUserTokenResponse());
  }
  return Promise.resolve();
});

export const api = {
  get: <T>({url, params, axiosIns = axiosInstance}: QueryRequestProps) =>
    axiosIns.get<T>(url, {params}),
  post: <T, S>({url, data, axiosIns = axiosInstance}: MutationRequestProps<T, S>) =>
    axiosIns.post<S>(url, data),

  patch: <T,S>({url, data, axiosIns = axiosInstance}: MutationRequestProps<T, S>) =>
    axiosIns.patch<S>(url, data),

  delete: <T, S>({url, data, axiosIns = axiosInstance}: MutationRequestProps<T, S>) =>
    axiosIns.delete(url, data),
};