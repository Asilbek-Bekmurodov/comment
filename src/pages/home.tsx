import React from "react";
import { useNavigate } from "react-router-dom";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
      }}>
      <button onClick={() => navigate("/shunchaki")}>Shunchaki</button>
      <button onClick={() => navigate("/ref-state")}>Ref & State</button>
      <button onClick={() => navigate("/memo-callback")}>
        Memo & Callback
      </button>
    </div>
  );
};

export default Home;
