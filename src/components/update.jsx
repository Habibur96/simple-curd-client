import React from "react";
import { json, useLoaderData } from "react-router-dom";

const update = () => {
  const loadedUser = useLoaderData();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const updateUser = { name, email };

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User update successfully");
        }
      });
  };
  return (
    <div>
      <h2>Update information of {loadedUser.name}</h2>
      <form onSubmit={handleSubmit}>
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
