import { useEffect } from "react";
import { getAuth, signOut } from "../firebase/auth";
import React from "react";
import { useState } from "react";

export default function Navbar() {
  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = () => {
    const auth = getAuth();
    if (auth == null) {
      setSignedIn(false);
      setUser(null);
    } else {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setSignedIn(true);
          setUser(user);
        } else {
          setSignedIn(false);
          setUser(null);
        }
      });
    }
  };

  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState(null);
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Satellix
        </a>
      </div>
      {signedIn === true && (
        <span className="d-flex justify-content-center align-items-center w-50">
          <button type="button" class="btn btn-primary" onClick={signOut}>
            <span className="px-2">Sign Out</span>
          </button>
        </span>
      )}
    </nav>
  );
}
