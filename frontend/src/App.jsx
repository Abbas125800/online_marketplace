import { useEffect } from "react";
import api from "./services/api";

function App() {
  useEffect(() => {
    api.get("/test")
      .then(res => console.log(res.data))   // باید { message: "API is working" } را نشان دهد
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
    </div>
  );
}

export default App;