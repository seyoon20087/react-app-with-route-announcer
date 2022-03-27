import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>About</title>
        <meta name="description" content="About" />
      </Helmet>
      <h1>About</h1>
      <Link to="/">Home</Link>
    </Layout>
  );
}
