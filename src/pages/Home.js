import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "../components/Layout";

function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Helmet>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to="/about">About</Link>
        </header>
      </div>
    </Layout>
  );
}

export default Home;
