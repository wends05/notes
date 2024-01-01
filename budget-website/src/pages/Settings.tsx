import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";

const Settings = () => {
  const [Name, setName] = useState<string>(
    localStorage.getItem("Name") &&
      JSON.parse(localStorage.getItem("Name") || "")
  );

  const changeName: FormEventHandler<HTMLFormElement> = (e: FormEvent) => {
    e.preventDefault();

    localStorage.setItem("Name", JSON.stringify(Name));
  };

  console.log(Name);

  return (
    <main className={"main gap-2"}>
      <h1>Settings</h1>
      <p>Reenter your name here</p>

      <form
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
      </form>
    </main>
  );
};

export default Settings;
