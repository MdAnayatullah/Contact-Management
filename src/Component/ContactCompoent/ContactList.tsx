import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../Redux/action";
import ContactForm from "./ContactForm";
import AddContactbtn from "./AddContactbtn";
import AllContact from "./AllContact";

const ContactList: React.FC = () => {
  const contacts = useSelector((state: any) => state.contacts.contacts);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editContactId, setEditContactId] = useState<number | null>(null);

  const dispatch = useDispatch();

  const handleCreateContact = () => {
    setShowCreateForm(true);
    setEditContactId(null);
  };

  const handleCancelCreate = () => {
    setShowCreateForm(false);
    setEditContactId(null);
  };

  const handleEditContact = (id: number) => {
    setShowCreateForm(true);
    setEditContactId(id);
  };

  const handleDeleteContact = (id: number) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="p-4">
      {showCreateForm ? (
        <ContactForm
          onCancel={handleCancelCreate}
          editContactId={editContactId}
        />
      ) : (
        <div>
          <AddContactbtn handleCreateContact={handleCreateContact} />

          <AllContact
            contacts={contacts}
            handleEditContact={handleEditContact}
            handleDeleteContact={handleDeleteContact}
          />
        </div>
      )}
    </div>
  );
};

export default ContactList;
