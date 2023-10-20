import "./App.css";
import Router from "./Router";
import { fetchPosts } from "./redux/slice/about";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
