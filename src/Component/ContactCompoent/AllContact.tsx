import { Link } from "react-router-dom";

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: "active" | "inactive";
}

interface AllContactProps {
  contacts: Contact[];
  handleEditContact: (id: number) => void;
  handleDeleteContact: (id: number) => void;
}

const AllContact: React.FC<AllContactProps> = ({
  contacts,
  handleEditContact,
  handleDeleteContact,
}) => {
  return (
    <>
      {contacts.length === 0 ? (
        <div className="text-center my-5 text-3xl">
          <div
            className="bg-yellow-100 border-l-4 border-yellow-500 text-orange-700 p-4 flex justify-center items-center gap-5"
            role="alert"
          >
            <span className="bg-orange-600 p-3 rounded-full text-white">
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </span>
            <div>
              <p className="font-bold">No contacts found.</p>
              <p>Please add a contact from Create Contact.</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map((contact: Contact) => (
            <div
              key={contact.id}
              className="bg-white rounded-lg shadow-lg drop-shadow-lg p-4"
            >
              <p className="capitalize flex justify-between items-center">
                <span className="text-md font-semibold text-gray-900">Name:</span>
                <span className="text-sm font-medium text-gray-700">
                  {contact.firstName} {contact.lastName}
                </span>
              </p>
              <p className="flex justify-between items-center">
                <span className="text-md font-semibold text-gray-900">Email: </span>
                <span className="text-sm font-medium text-gray-700">{contact.email}</span>
              </p>
              <p className="capitalize flex justify-between items-center">
                <span className="text-md font-semibold text-gray-900">Status:</span>
                <span
                  className={`font-bold  text-sm ${
                    contact.status === "active"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {contact.status}
                </span>
              </p>
              <div className="flex justify-end mt-4 text-[0.8rem] gap-4">
                <Link to={`/contact/${contact.id}`}>
                  {/* <button className="px-3 py-2  text-white bg-purple-600 hover:bg-purple-700 rounded-md font-mono">
                    View
                  </button> */}
                </Link>
                <button
                  className="px-3 py-2  text-white bg-green-600 hover:bg-green-700 rounded-md font-mono"
                  onClick={() => handleEditContact(contact.id)}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-mono"
                  onClick={() => handleDeleteContact(contact.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AllContact;
