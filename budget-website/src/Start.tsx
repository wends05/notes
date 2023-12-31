import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";

const Start = () => {
  
  const [Name, setName] = useState<String>("Name")
  const [submitted, setsubmitted] = useState(false)

  const printSomething : FormEventHandler<HTMLFormElement> = (e: FormEvent) => {
    e.preventDefault()
    console.log(e)
    setsubmitted(true)
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
              className={"h-10 text-lg text-center rounded-md"}
              onChange={(e : ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              id="nameInput"
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
