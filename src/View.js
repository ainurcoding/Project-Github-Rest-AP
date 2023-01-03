import "./App.css";
import {} from "./features/users/usersSlice"

function App() {
  return (
    <>
      <div className="container-app">
        <div className="title">
          <p className="h1">Search and Get your list repositories</p>
        </div>
        <div className="search-container w-50">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Github username"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
