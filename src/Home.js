import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";

const Home = () => {
  // const data = useContext(AppContext);
  const { isModalShowed, setIsModalShowed, setIsSideBarShowed } =
    useGlobalContext();
  console.log("home", isModalShowed);
  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => {
          setIsSideBarShowed(true);
        }}
      >
        <FaBars />
      </button>
      <button
        className="btn"
        onClick={() => {
          setIsModalShowed(true);
        }}
      >
        show modal
      </button>
    </main>
  );
};

export default Home;
