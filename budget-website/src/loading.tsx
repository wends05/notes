import { useActionData, useNavigate } from "react-router-dom";
import { useEffect } from "react";

type startData = {
  username: string
}

const Loading = () => {

  const getFormData = useActionData() as startData;

  const nav = useNavigate()
  
  useEffect(() => {
    const loadingTime = setTimeout(() => {
      
      nav("../capycopy/home");
    }, 2000);
    return () => clearTimeout(loadingTime);
  }, [nav]);
  
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
