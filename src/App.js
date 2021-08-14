import React from 'react';
import Home from './pages/Home'



function App() {
  return (
    <div className="h-screen max-w-screen-2xl flex flex-col justify-center items-center">
      <div className="m-auto w-max">
        <h1 className="text-3xl text-center mb-4">
          Welcome to Akshay's World
        </h1>
        <Home/>
      </div>
    </div>
  );
}

export default App;
