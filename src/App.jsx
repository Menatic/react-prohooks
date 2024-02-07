import React, { useEffect, useCallback, useMemo, useState} from "react";
import "./App.css";

const LARGE_NUMBER = 1000000;

function App() {  
  const [value, setValue] = useState(0);
  const [dark, setTheme] = useState(true);
  const [themeName, setThemeName] = useState("dark");
  const [currentList, setList] = useState([]);

  const delayFunction = useMemo(() => {
    console.log("Delay Function Ran");
    for (let index = 0; index < LARGE_NUMBER; index++) {}
    return value + 2;
  }, [value]);

  const testFunction = useCallback(() => {
    return [value * 3, value * 4];
  }, [value]);

  useEffect(() => {
    console.log("Callback Function was called");
  }, [testFunction]);

  useEffect(() => {
    if (dark) {
      setThemeName("Dark");
    } else {
      setThemeName("Light");
    }
  }, [dark]);

  const handleClick = () => {
    setTheme(!dark);
  };

  const handleChangeValue = () => {
    setValue(value + 1);
  };

  const handleList = () => {
    setList(testFunction);
  };

  const styleTheme = useMemo(
    () => ({
      backgroundColor: dark ? "black" : "#ccc7c7",
    }),
    [dark]
  );

  return (
    <div className="page" style={styleTheme}>
      <button id="theme" onClick={handleClick}>{themeName}</button>

      <div id="buttons">
      <button id="value" onClick={handleChangeValue}>Change Value</button>
      <button id="list" onClick={handleList}>Show List</button>
      </div>

      <h1 id="text">{value}</h1>
      <h1 id="text-duo">{delayFunction}</h1>
      <div>
        {currentList.map((item, index) => {
          return <h2 key={index}>{item}</h2>;
        })}
      </div>
    </div>
  );
}

export default App;