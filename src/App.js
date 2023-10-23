import React, { useEffect } from "react";
import "./App.css";
import Router from "./Router";
import { fetchPosts } from "./redux/slice/about";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state.about);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log(state);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
