import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import ButtonComponent from "./button";

function App() {
  let btnText = `start`;
  const [count, setCount] = useState(0);
  const [string, setString] = useState(`سُـبْحانَ الله`);

  useEffect(() => {
    if (count > 33 && string === `سُـبْحانَ الله`) {
      setCount(0);
      setString(`ٱلْحَمْدُ لِلَّٰ`);
    } else if (count > 33 && string === `ٱلْحَمْدُ لِلَّٰ`) {
      setCount(0);
      setString(`الله أكبر`);
    } else if (count > 33 && string === `الله أكبر`) {
      setCount(0);
      setString(`سُـبْحانَ الله`);
    }

    // Side effect code goes here
  }, [count]);
  // useEffect(()=> {
  if (count > 0) {
    btnText = `keep praying`;
  }
  // }, [count])

  return (
    <div className="bg-[#282C34] font-mono text-center justify-center flex flex-col gap-10 min-h-screen">
      {/* header */}
      <div className="px-6">
        <h1 className="text-white">Welcome to Zikir App!</h1>
        <h1 className="text-blue-300">Pray, Pray, Pray!</h1>
      </div>

      {/* pray */}
      <div className="text-white">
        <p>{count}</p>
        <p className="text-5xl">{string}</p>
      </div>
      {/* <button onClick={() => setCount(count + 1)}>{btnText}</button> */}
      {/* buttons */}
      <div className="text-white flex flex-col md:flex-row justify-center items-center gap-4">
        <ButtonComponent
          className="bg-[#4F45E4]"
          functionClick={() => setCount(count + 1)}
          text={btnText}
        />
        <ButtonComponent
          className="bg-[#8B5CF6]"
          functionClick={() => {
            setCount(0);
            setString(`سُـبْحانَ الله`);
          }}
          text={"reset"}
        />
      </div>

      {/* <button
          onClick={() => {
            setCount(0);
            setString(`سُـبْحانَ الله`);
          }}
        >
          Reset
        </button> */}

      {/* <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <ButtonComponent
          functionClick={(e) => {
            console.log(e, "<<<<<< INSIDE");
          }}
          funcString={(t) => console.log(t)}
          text={`SmallButton`}
        /> */}
      {/* <p> {string}</p> */}
    </div>
  );
}

export default App;
