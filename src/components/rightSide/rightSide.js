import React from "react";
import "../../styles/rightSide.css";
import AddFriend from "./AddFriend/addFriend";
import Contact from "./Contact/contact";
function RightSide() {
  return (
    <div className="rideSide">
      <AddFriend />
      <hr />
      <Contact />
    </div>
  );
}

export default RightSide;
