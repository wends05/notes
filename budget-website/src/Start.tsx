import { useState } from "react";
import { Form } from "react-router-dom";

const Start = () => {
  const [Name, setName] = useState<string>(
    localStorage.getItem("Name") &&
      JSON.parse(localStorage.getItem("Name") as string)
  );

  return (
    <>
      <main className={"main gap-8 px-4 text-center"}>
        <h1>Hello!</h1>
        <p>
          Welcome to {"some random website"} ! <br />
          This is an experimental Budget Tracker app <br />
          created with Vite, React Typescript and Tailwindcss.
        </p>
        <p>To get started, please input your name below.</p>
        <Form
          className="flex gap-4 items-center bg-slate-500 p-4 rounded-xl"
          method="post"
          action="loading"
        >
          <input
            className={"textinput"}
            name="username"
            value={Name ? Name : ""}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="btn">
            Enter
          </button>
        </Form>
      </main>
    </>
  );
};

export default Start;
