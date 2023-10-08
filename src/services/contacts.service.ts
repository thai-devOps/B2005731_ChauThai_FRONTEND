import http from "./api.service";
import type { Contact } from "@/types/contact.type";

// Các hàm này sẽ được gọi từ các component để gọi API tương ứng từ server

export const getAll =  () =>  http.get("/api/contacts");
export const getById =  (id: string) =>  http.get(`/api/contacts/${id}`);
export const create =  (data: Contact) =>  http.post("/api/contacts", data);
export const update =  (id: string, data: Contact) =>  http.put(`/api/contacts/${id}`, data);
export const deleteAll =  () =>  http.delete("/api/contacts");
export const deleteById =  (id: string) =>  http.delete(`/api/contacts/${id}`);

