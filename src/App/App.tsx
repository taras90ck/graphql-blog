import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    users {
      data {
        id
        name
        username
        email
        address {
          city
          zipcode
        }
      }
    }
  }
`;

function App() {
  const { data } = useQuery(GET_USERS);
  return (
    <div>
      <div className="flex flex-row justify-between space-x-4">
        {[1, 2, 3].map((el) => (
          <div
            key={el}
            className="w-full text-center border-2 rounded border-gray-500"
          >
            {el}
          </div>
        ))}
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
