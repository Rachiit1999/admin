import { Route, Routes } from "react-router-dom";
import { ApplicantList } from "./components/applicantList";
import { Header } from "./components/header";
import { LoginForm } from "./components/loginForm";
import { useState } from "react";
import { services } from "./services";
import { Home } from "./components/home";
import "./main.css";
import { RegisteredList } from "./components/registeredList";
import { Navigation } from "./components/navigation";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(
    services.storage.get("LOGGED_IN_USER")
  );

  return (
    <div>
      {loggedInUser ? (
        <>
          <Header
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
          <Navigation />
        </>
      ) : (
        <LoginForm setLoggedInUser={setLoggedInUser} />
      )}

      <Routes>
        <Route path="/" element={loggedInUser ? <ApplicantList /> : null} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/registered" element={<RegisteredList />} />
      </Routes>

      {/* <Header /> */}
      {/* <ApplicantList /> */}
    </div>
  );
}

export default App;
