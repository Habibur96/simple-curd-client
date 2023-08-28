import React from "react";
import { useLoaderData } from "react-router-dom";

const update = () => {
  const loadedUser = useLoaderData();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.valie;
    console.log(name, email);
  };
  return (
    <div>
      <h2>Update information of {loadedUser.name}</h2>
      <form>
        <input type="text" name="name" id="" defaultValue={loadedUser?.name} />{" "}
        <br />
        <input
          type="email"
          name="email"
          id=""
          defaultValue={loadedUser?.email}
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default update;
