import { ChangeEvent, FormEvent, FormEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const nav = useNavigate()
  
  const [Name, setName] = useState<string>(
    localStorage.getItem("Name") &&
    JSON.parse(localStorage.getItem("Name") || "")
  )
  const [submitted, setsubmitted] = useState<boolean>(false)
  
  useEffect(() => {
    if (submitted) {
      const mainPage = setTimeout(() => {
        nav("/home")
      }, 2000);
      return () => clearTimeout(mainPage)
    }
  }, [submitted])

  const printSomething : FormEventHandler<HTMLFormElement> = (e: FormEvent) => {
    e.preventDefault()
    console.log(e)
    setsubmitted(true)

    localStorage.setItem("Name", JSON.stringify(Name))
    console.log(localStorage["Name"])
  }

  console.log(Name)

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
        <form
          onSubmit={printSomething}
          className={"flex flex-col gap-4 items-center"}
        >
          <div
            className={"bg-slate-500 px-4 py-4 rounded-xl flex items-center gap-4 mx-2"}
          >
            <input
              placeholder="Name"
              type="text"
              className={"textinput"}
              onChange={(e : ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              id="nameInput"
              value={Name}
              disabled={submitted}
            />
            <button
              type="submit"
              className="btn"
              disabled={submitted}
            >
              {submitted ? "Submitted!" : "Enter"}
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Start;
