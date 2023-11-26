import React from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

const storeUserInfo = async (user) => {
  try {
    if (user && user.given_name) {
      const response = await axios.post(
        "http://localhost:5999/api/storeUser",{
            name: user.name,
            email: user.email,
            picture: user.picture,
            sub: user.sub,
        },{ headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status < 200 || response.status >= 300) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

        const data = response.data;
        console.log(data);
        
    } else {
      console.log("user need to login");
    }
  } catch (error) {
    console.error("Error storing user:", error);
  }
};

storeUserInfo();

    return (
        <div className="App">
            <h3>user is {isAuthenticated ? "Logged in" : "Not logged in"}</h3>
            {isAuthenticated && (
                <pre style={{ textAlign: "start" }}>
                {JSON.stringify(user, null, 2)}
                </pre>
            )}
        </div>
    );
};

export default Profile;
