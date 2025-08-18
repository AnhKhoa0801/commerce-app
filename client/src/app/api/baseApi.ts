import {
  BaseQueryApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "../layout/uiSlice";
import { toast } from "react-toastify";

const customQuery = fetchBaseQuery({
  baseUrl: "https://localhost:5000/api",
});

const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));

export const baseQueryWithErrorHandling = async (
  args: FetchArgs | string,
  api: BaseQueryApi,
  extraOptions: object,
) => {
  api.dispatch(startLoading());

  await sleep();
  const result = await customQuery(args, api, extraOptions);

  api.dispatch(stopLoading());
  if (result.error) {
    const { status, data } = result.error;
    console.error("API Error:", data);
    switch (status) {
      case 400:
      case 401:
      case 404:
      case 500:
        if (typeof data === "object" && data !== null && "title" in data) {
          toast.error((data as { title: string }).title);
        } else {
          toast.error("An error occurred.");
        }
        break;
      default:
        break;
    }
  }
  return result;
};
