import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

const GET_DATA = gql`
 query getAll{
  getAllBlogs {
    id,
    title,
    body,
    author,
    date
  }
} 
`;

const MyComponent = () => {
  const [getData, { loading, data, error }] = useLazyQuery(GET_DATA);
  const [queryAborted, setQueryAborted] = useState(false);

  const handleClick = () => {
    // Call the lazy query when the button is clicked
    getData();

    // Do other logic if needed
  };

  const handleAbort = () => {
    // Abort the query if it's still loading
    if (loading) {
      getData.client.abort();
      setQueryAborted(true);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <button onClick={handleClick}>Fetch Data</button>
      {queryAborted && <p>Query Aborted</p>}
      {data && (
        <ul>
          {data.getAllBlogs.map((blog) => (
            <li key={blog.id}>{blog.title}</li>
          ))}
        </ul>
      )}
      <button onClick={handleAbort} disabled={!loading}>
        Abort Query
      </button>
    </div>
  );
};

export default MyComponent;
