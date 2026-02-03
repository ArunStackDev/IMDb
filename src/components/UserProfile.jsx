import React from "react";
import userlogo from "../assets/user-profile.png";

function UserProfile() {
  return (
    <>
   
        <div className="bg-yellow-200 h-10 w-10 flex items-center justify-center rounded-full">
          <img src={userlogo} alt="User-profile-image" className="h-6 w-6 " />
        </div>
   
    </>
  );
}

export default UserProfile;
