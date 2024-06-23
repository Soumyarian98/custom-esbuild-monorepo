import React, { useState } from "react";

interface AppProps {}

const App = (props: AppProps) => {
  const [data, setData] = useState("data");
  return (
    <div className="container">
      <h1 className="text-red-500">Hello {data}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        eligendi modi minima tempora commodi, sit sapiente fugiat tenetur nemo
        necessitatibus!
      </p>
    </div>
  );
};

export default App;
