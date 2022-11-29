import React, { useState, useContext } from "react";

const AppContext = React.createContext();

// const ContextAPI = () => {
//     const [isModalShowed, setIsModalShowed] = useState(false);
//     const [isSideBarShowed, setIsSideBarShowed] = useState(false);

// }
const AppProvider = ({ children }) => {
  return <AppContext.Provider value="Hello"> {children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
