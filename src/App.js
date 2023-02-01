import React from "react";
import useFetch from "./useFetch";
import User from "./User";

function App() {
  const { data } = useFetch("https://randomuser.me/api/?results=10");
  return (
    <div>
      {data.map((user) => {
        return (
          <User
            img={user.picture.medium}
            firstName={user.name.first}
            lastName={user.name.last}
            email={user.email}
          />
        );
      })}
    </div>
  );
}

export default App;
