import { ChangeEvent, FormEvent, useState } from "react";
import { Form, Link } from "react-router-dom";

const Settings = () => {
  const [Name, setName] = useState<string>(
    localStorage.getItem("Name") &&
      JSON.parse(localStorage.getItem("Name") || "")
  );

  const changeName = (e: FormEvent) => {
    e.preventDefault();

    localStorage.setItem("Name", JSON.stringify(Name));
  };


  return (
    <main className={"main gap-2"}>
      <h1>Settings</h1>
      <p>Reenter your name here</p>
      <Form
        className="flex flex-row gap-3 bg-gray-400 rounded-xl p-2"
        onSubmit={changeName}
      >
        <input
          className="textinput"
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          value={Name}
        />
        <input className="btn" type="submit" value="Set" />
      </Form>
      <Link to={'../confirmReset'}
      className="bg-red-600 p-2 text-white rounded-md">
        Reset Data
      </Link>
    </main>
  );
};

export default Settings;
