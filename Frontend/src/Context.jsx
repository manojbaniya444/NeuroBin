import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // state for opening the bin sidebar
  const [openBin, setOpenBin] = useState(false);
  const [base64, setBase64] = useState(null);
  const [isDetecting, setIsDetecting] = useState(false);

  const predictImage = async (form) => {};

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
