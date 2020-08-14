import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.tsx";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import ApolloProvider from './utility/ApolloProvider'

// 1
// import { ApolloProvider } from "react-apollo";
// import { ApolloClient } from "apollo-client";
// import { createHttpLink } from "apollo-link-http";
// import { InMemoryCache } from "apollo-cache-inmemory";

// // 2
// const httpLink = createHttpLink({
//   uri: "http://localhost:4000",
// });

// // 3
// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache(),
// });

ReactDOM.render(
  ApolloProvider, document.getElementById("root")
);
serviceWorker.unregister();
