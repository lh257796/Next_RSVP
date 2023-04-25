import React, { useState, useEffect } from "react";

const InputComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(
      `Form submitted. Thank you ${firstName} ${lastName}, a receipt has been sent to ${email}`,
    );
  };
  return (
    <div className="flex -mb-20 pt-1 max-h-screen items-center justify-center bg-black text-white">
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <div className="w-full ">
            <label className="mb-1 block" htmlFor="first-name">
              First Name
            </label>
            <input
              className="mb-3 w-full rounded-md border bg-white px-3 py-2 text-black focus:border-blue-500 focus:outline-none"
              id="first-name"
              type="text"
              placeholder="Jane"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="w-full">
            <label className="mb-1 block" htmlFor="last-name">
              Last Name
            </label>
            <input
              className="mb-3 w-full rounded-md border bg-white px-3 py-2 text-black focus:border-blue-500 focus:outline-none"
              id="last-name"
              type="text"
              placeholder="Doe"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="w-full">
            <label className="mb-1 block" htmlFor="email">
              Email
            </label>
            <input
              className="mb-3 w-full rounded-md border bg-white px-3 py-2 text-black focus:border-blue-500 focus:outline-none"
              id="email"
              type="email"
              placeholder="janedoe25@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex w-full justify-center">
            {!!firstName && !!lastName && email.split('').includes('@') ? (
              <button
                type="submit"
                className="mt-10 rounded-md bg-orange-400 py-2 px-4 font-bold text-white hover:bg-orange-300 focus:outline-none"
              >
                Register
              </button>
            ) : (
              <button
                disabled
                className="mt-10 rounded-md bg-gray-500 py-2 px-4 font-bold text-white focus:outline-none"
              >
                Register
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputComponent;
