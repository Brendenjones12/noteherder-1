import React from 'react'

import './SignIn.css'
import quill from './quill.svg'
import googleLogo from './google.svg'
 import { auth, googleProvider, githubProvider, /*AnonProvider*/ } from './Base'

const SignIn = () => {
  const authenticateGoogle = () => {
    auth.signInWithPopup(googleProvider)
  }

  const authenticateGit = () => {
    auth
      .signInWithPopup(githubProvider)
  }



  return (
    <div className="SignIn">
      <header className="Header">
        <img src={quill} alt="" />
        <span className="title">Noteherder</span>
      </header>
      <main>
        <h3>Hey, Nerd! You Like Notes?</h3>
        <p>You never know when you'll need to write crap down. In fact, you should probably be taking notes right now.</p>
        <button
          className="google"
          onClick={authenticateGoogle}
        >
          <img src={googleLogo} alt="" />
          Sign in with Google
        </button>

        <button
          className="github"
          onClick={authenticateGit}>
          <i className="fa fa-github"></i>
            Sign in with GitHub
        </button>
      </main>
    </div>
  )
}
export default SignIn