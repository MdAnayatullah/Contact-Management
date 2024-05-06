import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, updateContact } from "../../Redux/action";

interface ContactFormProps {
  onCancel: () => void;
  editContactId: number | null;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onCancel,
  editContactId,
}) => {
  const contacts = useSelector((state: any) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    status: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.value;
    setFormData((prevFormData) => ({ ...prevFormData, status }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editContactId !== null) {
      dispatch(updateContact({ ...formData, id: editContactId }));
    } else {
      dispatch(addContact(formData));
    }
    setFormData({ firstName: "", lastName: "", email: "", status: "" });
    onCancel();
  };

  useEffect(() => {
    if (editContactId !== null) {
      const contactToEdit = contacts.find(
        (contact: any) => contact.id === editContactId
      );
      if (contactToEdit) {
        setFormData(contactToEdit);
      } else {
        onCancel();
      }
    } else {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        status: "",
      });
    }
  }, [editContactId, contacts, onCancel]);

  return (
    <div className="p-5 text-left md:w-[70%] mx-auto shadow-lg">
      <div className="my-4 flex justify-between">
        <h2 className="text-2xl font-bold mb-2 text-purple-500">
          {editContactId !== null ? "Edit Contact" : "Add New Contact"}
        </h2>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-600 text-white h-[1.5rem] w-[1.5rem] rounded-[5px] text-[10px] grid place-items-center"
          onClick={onCancel}
        >
          <svg
            className="w-2 h-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
            required
          />
        </div>
        <div className="mb-4">
          <span className="block text-gray-700 font-bold mb-2">Status</span>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="status"
              value="active"
              checked={formData.status === "active"}
              onChange={handleStatusChange}
              className="form-radio h-5 w-5 text-blue-600 cursor-pointer"
            />
            <span className="ml-2">Active</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              name="status"
              value="inactive"
              checked={formData.status === "inactive"}
              onChange={handleStatusChange}
              className="form-radio h-5 w-5 text-red-600 cursor-pointer"
            />
            <span className="ml-2">Inactive</span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold"
        >
          {editContactId !== null ? "Save Edited Contact" : "Save Contact"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
