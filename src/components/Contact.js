const ContactComponent = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold m-2 p-2">Contact Me ✉️</h1>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Name"
          className="border border-black p-2 m-2"
        />
        <input
          type="text-box"
          placeholder="Message"
          className="border border-black p-2 m-2"
        />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg hover:bg-gray-600 hover:text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactComponent;
