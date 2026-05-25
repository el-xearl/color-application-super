import axios from "axios";

const API_URL = "http://localhost:5000/api/palettes";

export type SavedPalette = {
  _id: string;
  name: string;
  category: string;
  mood: string;
  temperature: string;
  intensity: string;
  colors: string[];
  gradients: string[];
};

export type CreatePaletteData = {
  name: string;
  style: string;
  category: string;
  mood: string;
  temperature: string;
  intensity: string;
  colors: string[];
  gradients: string[];
  isPublic: boolean;
};

export const getPalettes = async () => {
  const response = await axios.get<SavedPalette[]>(API_URL);
  return response.data;
};

export const createPalette = async (data: CreatePaletteData) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

export const removePalette = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};