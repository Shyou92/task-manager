import React, { useState, useEffect, useLayoutEffect } from "react";
import Preloader from '../Preloader/Preloader';
import SignupSignin from "../Signup-signin/Signup-signin";
import Board from '../Board/Board';

function App() {
  const [isLoading, setIsLoaded] = useState(false);

  useLayoutEffect( () => {
    setIsLoaded(true);
  }, [])

  setInterval(() => setIsLoaded(false), 3500);

  return (
    <div className="App">
      <div className="page">
        {/* {isLoading ? <Preloader /> : <SignupSignin/>} */}
        
        <Board />
      </div>
    </div>
  );
}

export default App;
