import { redirect, useActionData, useNavigate } from "react-router-dom";
import { startPageFormProps } from "./utils/localStorageHandler";
import { useEffect } from "react";

const Loading = () => {
  let getFormData = useActionData() as startPageFormProps;

  const nav = useNavigate()
  useEffect(() => {
    const loadingTime = setTimeout(() => {
      
      nav("/home");
    }, 2000);
    return () => clearTimeout(loadingTime);
  }, []);
  
  return (
    <main className="main">
      <h1>Welcome!</h1>
      {getFormData ? (
        <p>{getFormData.username}</p>
      ) : (
        <p>{localStorage.getItem("Name")}</p>
      )}
    </main>
  );
};

export default Loading;
