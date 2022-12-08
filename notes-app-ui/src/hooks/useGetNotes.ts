import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetNotes() {
  return useQuery(["products"], () => {
    return axios.get("http://localhost:8080/api/notes").then((res) => res.data);
  });
}
