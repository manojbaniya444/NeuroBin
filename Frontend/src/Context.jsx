import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // state for opening the bin sidebar
  const [openBin, setOpenBin] = useState(false);
  const [base64, setBase64] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [error, setError] = useState(null);
  const [streak, setStreak] = useState(0);
  const [form, setForm] = useState(null);
  const [visible, setVisible] = useState(true);

  const predictImage = async (data) => {
    setIsDetecting(true);
    setBase64(null);
    const formData = new FormData();
    formData.append("photo", data);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload_photo",
        formData
      );
      setIsDetecting(false);
      setBase64(response.data.result);
      setError(null);
      setForm(null);
    } catch (error) {
      setError(error.message);
      setIsDetecting(false);
    }
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
        error,
        setStreak,
        streak,
        form,
        setForm,
        visible,
        setVisible,
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
