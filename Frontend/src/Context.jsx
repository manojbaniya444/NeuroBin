import { createContext, useContext, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // state for opening the bin sidebar
  const [openBin, setOpenBin] = useState(false);
  const [base64, setBase64] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false);

  const predictImage = async (data) => {
    console.log(data);
    setIsDetecting(true);
    setBase64(null);
    const formData = new FormData();
    formData.append("photo", data);
    const response = await axios.post(
      "http://localhost:5000/upload_photo",
      formData
    );
    setIsDetecting(false);
    setBase64(response.data.result);
  };

  return (
    <AppContext.Provider
      value={{
        openBin,
        setOpenBin,
        predictImage,
        isDetecting,
        setBase64,
        base64,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
