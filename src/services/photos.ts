import axios from "axios";
import type { Photo } from "../types/photo";

axios.defaults.baseURL = "https://api.pexels.com/v1/";
axios.defaults.headers.common["Authorization"] =
  import.meta.env.VITE_PIXELS_API_KEY;
axios.defaults.params = {
  orientation: "landscape",
};

interface PexelsResponse {
  photo: Photo[];
}
export const getPhotos = async (query: string): Promise<Photo[]> => {
  const response = await axios.get<PexelsResponse>(`search?query=${query}`);

  return response.data.photo;
};
