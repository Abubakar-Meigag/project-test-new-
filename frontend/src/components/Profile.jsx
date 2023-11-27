import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  const storeUserInfo = async () => {
    try {
        if (user) {
            const userData = {
                name: user.given_name || user.name || "DefaultName",
                email: user.email || "DefaultEmail@example.com",
                picture: user.picture || "default-profile-picture-url",
                sub: user.sub,
            };

            const response = await axios.post(
                "http://localhost:5999/api/storeUser",
                userData, {
                    headers: {
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
        console.log("Error storing user: 'user' is undefined");
      }
    } catch (error) {
      console.log("Error storing user:", error);
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
