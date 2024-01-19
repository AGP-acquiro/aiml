import "./App.css";

function App() {
  return (
    <>
      <div className="center">
        <p>Username</p>
        <input type="email" />
        <p>Password</p>
        <input type="password" />
        <button>Log In</button>
        <div className="d-flex">
          <p className="sign-up">Sign Up</p>
        </div>
      </div>
    </>
  );
}

export default App;
