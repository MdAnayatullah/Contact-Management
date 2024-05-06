import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "./action.type";

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
}

export const addContact = (contact: Omit<Contact, "id">) => ({
  type: ADD_CONTACT,
  payload: { ...contact, id: Date.now() },
});

export const deleteContact = (id: number) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const updateContact = (contact: Contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});
