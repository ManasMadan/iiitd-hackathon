import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeFirebase } from "./firebase/index";
import { getAuth, signIn } from "./firebase/auth";

import UploadFiles from "./components/upload-files.component";
import Navbar from "./components/Navbar.js";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  initializeFirebase();
  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = () => {
    const auth = getAuth();
    if (auth == null) {
      setSignedIn(false);
      setName("");
    } else {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setSignedIn(true);
          setName(user.displayName);
        } else {
          setSignedIn(false);
          setName("");
        }
      });
    }
  };

  const [signedIn, setSignedIn] = useState(false);
  const [name, setName] = useState("");

  return (
    <>
      <Navbar />
      {signedIn == true ? (
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ margin: "20px" }}>
            <h3>{name}</h3>
            <h4>React upload Files</h4>
          </div>
          <UploadFiles />
        </div>
      ) : (
        <section>
          <div className="d-flex justify-content-around">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              alt="Sample image"
              className="w-50"
            />
            <span className="d-flex justify-content-center align-items-center w-50">
              <button type="button" class="btn btn-primary" onClick={signIn}>
                <svg viewBox="0 0 488 512" width="1rem">
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
                <span className="px-2">Sign in with Google</span>
              </button>
            </span>
          </div>
          <div className="fixed-bottom  w-100 d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            <div className="text-white mb-3 mb-md-0">
              Copyright Satellix © 2023. All rights reserved.
            </div>
            <div>
              <a href="#!" className="text-white me-4">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#!" className="text-white me-4">
                <i className="fab fa-twitter" />
              </a>
              <a href="#!" className="text-white me-4">
                <i className="fab fa-google" />
              </a>
              <a href="#!" className="text-white">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default App;
