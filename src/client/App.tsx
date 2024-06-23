import React, { useState } from "react";

interface AppProps {}

const App = (props: AppProps) => {
  const [data, setData] = useState("data");
  return (
    <div className="mt-5">
      <h1 className="text-center text-secondary">Hello {data}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        eligendi modi minima tempora commodi, sit sapiente fugiat tenetur nemo
        necessitatibus!
      </p>
    </div>
  );
};

export default App;
