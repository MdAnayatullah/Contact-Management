import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleContact = () => {
  let { id } = useParams();
  const contacts = useSelector((state: any) => state.contacts.contacts);
  let singlecontactfind = contacts.find(
    (contact: any) => contact.id === Number(id)
  );

  return (
    <>
      {singlecontactfind ? (
        <div className="flex justify-center items-center h-[80vh]">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg drop-shadow-xl shadow-xl p-5">
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="#" //title image
                alt="img"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900">
                {singlecontactfind.firstName} {singlecontactfind.lastName}
              </h5>
              <span className="text-md text-gray-600">
                {singlecontactfind.email}
              </span>

              <span
                className={`font-bold capitalize  text-md ${singlecontactfind.status === "active"
                  ? "text-green-500"
                  : "text-red-500"
                  }`}
              >
                {singlecontactfind.status}
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <Link to={"/"}>
                  <p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
                    Back
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
              <p className="font-bold capitalize">No contact ID found.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleContact;
