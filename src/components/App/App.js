import React, { useState, useEffect, useLayoutEffect } from "react";
import Preloader from '../Preloader/Preloader';
import SignupSignin from "../Signup-signin/Signup-signin";

function App() {
  const [isLoading, setIsLoaded] = useState(false);

  useLayoutEffect( () => {
    setIsLoaded(true);
  }, [])

  setInterval(() => setIsLoaded(false), 5000);

  return (
    <div className="App">
      <div className="page">
        {isLoading ? <Preloader /> : <SignupSignin/>}
      </div>
    </div>
  );
}

export default App;
