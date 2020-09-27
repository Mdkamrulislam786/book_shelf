import React, { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("/api/getBooks?id=5f6b9ea8b02ad80ef0cc624f")
      .then((response) => console.log(response.data));
  }, []);
  return (
    <div className="App">
      <h1>Hey Lets build BOOK-SHELF</h1>
    </div>
  );
}

export default App;
