import axios from "axios";

// const BASE_URL = "http://localhost:3000/api";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 🔹 Contact APIs
export const getAllContacts = () => axios.get(`${BASE_URL}/contacts`);
export const createContact = (data) => axios.post(`${BASE_URL}/contacts`, data);
export const deleteContact = (id) => axios.delete(`${BASE_URL}/contacts/${id}`);

// 🔹 Projects APIs
// 🔹 Projects APIs
export const getAllProjects = () => axios.get(`${BASE_URL}/projects`);
export const getProjectById = (id) => axios.get(`${BASE_URL}/projects/${id}`);
export const getProjectBySlug = (slug) =>
  axios.get(`${BASE_URL}/projects/slug/${slug}`);
export const createProject = (data) => axios.post(`${BASE_URL}/projects`, data);
export const updateProject = (id, data) =>
  axios.put(`${BASE_URL}/projects/${id}`, data);
export const deleteProject = (id) => axios.delete(`${BASE_URL}/projects/${id}`);

// 🔹 Skills APIs
export const getAllSkills = () => axios.get(`${BASE_URL}/skills`);
export const getSkillById = (id) => axios.get(`${BASE_URL}/skills/${id}`);
export const createSkill = (data) => axios.post(`${BASE_URL}/skills`, data);
export const deleteSkill = (id) => axios.delete(`${BASE_URL}/skills/${id}`);

// 🔹 Tech Library APIs
export const getAllTech = () => axios.get(`${BASE_URL}/techlibrary`);
export const getTechById = (id) => axios.get(`${BASE_URL}/techlibrary/${id}`);
export const createTech = (data) => axios.post(`${BASE_URL}/techlibrary`, data);
export const updateTech = (id, data) =>
  axios.put(`${BASE_URL}/techlibrary/${id}`, data);
export const deleteTech = (id) => axios.delete(`${BASE_URL}/techlibrary/${id}`);
