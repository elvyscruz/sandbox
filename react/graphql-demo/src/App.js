import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient"; // Adjust the path based on your file structure
import MyComponent from "./MyComponent"; // Adjust the path if needed

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MyComponent />
    </ApolloProvider>
  );
};

export default App;
