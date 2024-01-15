import { AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ConfirmReset = () => {

  const nav = useNavigate()
  const [reset, setReset] = useState<boolean>(false);
  

  useEffect(() => {
    const backToHome = setInterval(() =>{

      reset && nav('../capycopy/home')
      localStorage.setItem("Items", "{}");
    }, 1000)

    return () => clearInterval(backToHome)
  }, [reset, nav])

  return (
    <main className="flex flex-col items-center justify-center align-middle min-h-screen px-10 gap-1 ">
      <h1 className="flex gap-2 items-center bg-red-600 rounded-md p-3 text-white">
        <AlertTriangle size={50} color="black" />
        Warning!
      </h1>
      <p>You will reset all of your data when you hit this button.</p>
      <div className="gap-2 flex">
        <button
        className="bg-red-700 py-1 px-2 rounded-md text-white disabled:bg-red-900"
        onClick={() => setReset(true)}
        disabled={reset}
      >
        Reset
      </button>
      <button
        className="py-1 px-2 rounded-md text-white bg-slate-500 disabled:bg-slate-600" disabled={reset}
        onClick={() => nav('../settings')}>
        Cancel
      </button>
      </div>
    </main>
  );
};

export default ConfirmReset;
