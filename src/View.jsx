import React, { useEffect, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./features/users/usersSlice";
function App() {
  // initialize first value for users
  const [loading, setLoading] = useState(false);
  // initialize the dispatch
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [form, setForm] = useState({
    username: "",
    page: 2,
    limit: 2,
  });

  const onChangeHandle = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const params = {
      username: form.username,
    };
    dispatch(fetchUsers(params));
  };
  return (
    <>
      <div className="container-app">
        <div className="title">
          <p className="h1">Search and Get your list repositories on Github</p>
        </div>
        <div className="search-container w-50">
          <form onSubmit={(e) => handleSearch(e)}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Github username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                name="username"
                onChange={onChangeHandle}
              />
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
        <p></p>
        {users.length < 1 ? (
          <>
            <div className="card" style={{ width: "18rem" }}>
              <p className="m-5">Let's try to search data</p>
            </div>
          </>
        ) : (
          <>
            <div className="content-cont row">
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div className="card" style={{ width: "18rem" }}>
                  <p className="h1 text-center">card info</p>
                  <img
                    src={users[0].owner.avatar_url}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{users[0].owner.login}</h5>
                    <p><a className="btn btn-info text-decoration-none" href={`${users[0].owner.html_url}`}>See on github</a></p>
                  </div>
                  <div className="card-button">
                    {/* <button onClick={handleRepo(users.login)}>Click to see</button> */}
                  </div>
                </div>
              </div>

              <div
                className="list-repos col-6 bg-success"
                style={{ height: "70vh" }}
              >
                <div className="repos-container">
                  <div className="title">
                    <p className="text-center h1">List Repositories</p>
                  </div>
                  <div className="item-container overflow-auto">
                    <div className="item-content">
                      <p>Repository Name:</p>
                      <p>Total Forks:</p>
                      <p><a className="" href="">Visit repository</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* <p>{JSON.stringify(userRepos)}</p> */}
      </div>
    </>
  );
}

export default App;
