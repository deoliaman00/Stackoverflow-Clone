import { useEffect } from "react";
import axios from "axios";
const Logout = () => {
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:8000/logout/",
          {
            refresh_token: localStorage.getItem("refresh_token"),
          },
          { headers: { "Content-Type": "application/json" } },
          { withCredentials: true }
        );
        console.log(data);
        localStorage.clear();
        axios.defaults.headers.common["Authorization"] = null;
        window.location.href = "/";
      } catch (e) {
        console.log("logout not working", e);
      }
    })();
  }, []);
  return <div></div>;
};

export default Logout;
