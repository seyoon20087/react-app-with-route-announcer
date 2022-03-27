import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="Not found" />
      </Helmet>
      <h1>Not found</h1>
      <Link to="/">Home</Link>
    </Layout>
  );
}
