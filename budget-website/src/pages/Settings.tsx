import { useState } from "react";
import Page from "../components/Page";

const Settings = () => {

  const [Name, setName] = useState(
    localStorage.getItem("Name") && JSON.parse(localStorage.getItem("Name") || "")
  )
  
  return (
    <Page>
      <main className={"main gap-2"}>
        <p>Reenter your name here.</p>
        <form className="card">
          <input className="textinput" type="text" />
          <input className="btn" type="button" value="Set" />
        </form>
      </main>
    </Page>
  );
};

export default Settings;
