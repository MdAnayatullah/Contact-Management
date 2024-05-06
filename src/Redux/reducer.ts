import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "./action.type";

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
}
interface ContactsState {
  contacts: Contact[];
}

const defaultContacts: Contact[] = [];
//   {
//     id: 1,
//     firstName: "Anayat",
//     lastName: "Ansari",
//     email: "anayat@gmail.com",
//     status: "active",
//   },
//   {
//     id: 2,
//     firstName: "Sameer ",
//     lastName: "Khan",
//     email: "sameer@gmail.com",
//     status: "inactive",
//   },
// ];

const initialState: ContactsState = {
  contacts: defaultContacts,
};

const contactsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact: Contact) => contact.id !== action.payload
        ),
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact: Contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    default:
      return state;
  }
};

export default contactsReducer;
