import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";

const Home = () => {
  // const data = useContext(AppContext);
  const { isModalShowed, setIsModalShowed } = useGlobalContext();
  console.log("home", isModalShowed);
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button
        className="btn"
        onClick={() => {
          setIsModalShowed(false);
        }}
      >
        show modal
      </button>
    </main>
  );
};

export default Home;
