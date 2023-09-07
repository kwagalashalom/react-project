import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [nin, setNin] = useState("");
  const [cardNo, setCardNo] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("ok");
  };
  return (
    // form section
    <div>
      <h1 className="font-bold text-xl">Preview Info:</h1>
      {/* NIN section */}
      <label htmlFor="">NIN</label>
      <input
        className="bg-green-100 mb-5 rounded-md h-10 shadow-md w-96"
        type="text"
        onChange={(e) => {
          setNin(e.target.value);
        }}
      />
      <br />
      {/* Card Number section */}
      <label htmlFor="">Card Number</label>
      <input
        className="bg-green-100 mb-5 rounded-md h-10 shadow-md w-96"
        type="text"
        onChange={(e) => {
          setNin(e.target.value);
        }}
      />

      {/* Surname section */}
      <label htmlFor="">Surname:</label>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="bg-green-100 rounded-md h-10 shadow-md w-96"
        type="text"
      />
      <button type="button" className="bg-green-500 mt-5 p-4 rounded-md">
        Save
      </button>

      <br />

      <div>
        <span className="font-bold text-xl">NIN:</span>
        <span>{nin}</span> <br />
        <span className="font-bold text-xl">Card Number:</span>
        <span>{cardNo}</span>
        <span className="font-bold text-xl">Surame:</span>
        <span>{name}</span>
      </div>
    </div>
  );
}
export default Form;
