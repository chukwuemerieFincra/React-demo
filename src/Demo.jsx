import React, { useContext, useState } from "react";
import { UserContext } from "./hooks/context/userContext";

const Demo = () => {
  const { user,  } = useContext(UserContext);



  return (
    <div style={{ backgroundColor: user === "Maria" ? "red" : "yellow" }}>
      The Lady name is {user}
    </div>
  );
};

export default Demo;
