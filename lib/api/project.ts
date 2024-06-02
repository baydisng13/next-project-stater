import Router from "next/router";
import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import queryClient from "../queryClient";

interface ProjectType extends ProjectFormType {
  id: string;
  createdAt: string;
}

interface ProjectFormType {
  title: string;
}
interface ErrorType {
  status: string;
  message: string;
}
interface SuccessType {
  status: string;
  message: string;
}

export async function createProjectFn(data: ProjectFormType) {
  return (await axios.post("/api/project/create", data)).data;
}

export async function deleteProjectFn(id: string) {
  return (await axios.delete(`/api/project/delete/` + id)).data;
}

export async function updateProjectFn(data: ProjectFormType, id: string) {
  return (await axios.put(`/api/project/update/` + id, data)).data;
}

export async function getProjectFn() {
  return (await axios.get("/api/project/get")).data;
}

export async function getProjectByIdFn(id: string) {
  return (await axios.get(`/api/project/get/` + id)).data;
}

const Project = {
  Create: {
    useMutation: (
      options?: UseMutationOptions<
        SuccessType,
        AxiosError<ErrorType>,
        ProjectFormType
      >
    ) =>
      useMutation({
        ...options,
        mutationFn: (data) => createProjectFn(data),
        onSuccess: () => {
          Router.push("/dashboard/projects");
          queryClient.invalidateQueries({ queryKey: ["project"] });
          // Custom success handling
        },
        onError: (error) => {
          console.log("error: ", error);
        },
      }),
  },
  Delete: {
    useMutation: (
      options?: UseMutationOptions<SuccessType, AxiosError<ErrorType>, string>
    ) =>
      useMutation({
        ...options,
        mutationFn: (id) => deleteProjectFn(id),
        onSuccess: (data) => {
          queryClient.invalidateQueries({ queryKey: ["project"] });
          // Custom success handling
        },
        onError: (error) => {
          console.log("error: ", error);
        },
      }),
  },
  Update: {
    useMutation: (
      id: string,
      options?: UseMutationOptions<
        SuccessType,
        AxiosError<ErrorType>,
        ProjectFormType
      >
    ) =>
      useMutation({
        ...options,
        mutationFn: (data) => updateProjectFn(data, id),
        onSuccess: (data) => {
          Router.push("/dashboard/projects");
          queryClient.invalidateQueries({ queryKey: ["project"] });
          // Custom success handling
        },
        onError: (error) => {
          console.log("error: ", error);
        },
      }),
  },
  Get: {
    useQuery: (options?: UseQueryOptions<ProjectType, AxiosError<ErrorType>>) =>
      useQuery({
        queryKey: ["project"],
        queryFn: () => getProjectFn(),
        ...options,
      }),
  },
  GetById: {
    useQuery: (
      id: string,
      options?: UseQueryOptions<ProjectType, AxiosError<ErrorType>>
    ) =>
      useQuery({
        queryKey: ["project", id],
        queryFn: () => getProjectByIdFn(id),
        ...options,
      }),
  },
};

export default Project;
