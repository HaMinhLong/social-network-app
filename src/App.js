import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";
import AddNewPost from "./components/Posts/Post/AddNewPost";
import Posts from "./components/Posts/Posts";

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Posts} />
      <Route path="/add-post" component={AddNewPost} />
      <Footer />
    </Router>
  );
};

export default App;
