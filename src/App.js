import React from "react";
import useFetch from "./useFetch";
import User from "./User";
import useToggle from "./useToggle";

function App() {
  const { data, error, loading } = useFetch(
    "https://randomuser.me/api/?results=10"
  );
  const { toggle, changeToggle } = useToggle();
  return (
    <div>
      <button onClick={changeToggle}>
        {" "}
        {toggle ? "Hide users" : "Show users"}
      </button>
      {toggle ? (
        loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div>
            {data.map((user, index) => (
              <User
                key={index}
                img={user.picture.medium}
                firstName={user.name.first}
                lastName={user.name.last}
                email={user.email}
              />
            ))}
          </div>
        )
      ) : null}
    </div>
  );
}

export default App;
