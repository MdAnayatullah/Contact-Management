const AddContactbtn = ({ handleCreateContact }: { handleCreateContact: () => void }) => {
  return (
    <div className="my-4 text-center">
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-md px-5 py-2 mr-2 mb-2"
        onClick={handleCreateContact}
      >
        Create Contact
      </button>
    </div>
  );
};

export default AddContactbtn;
