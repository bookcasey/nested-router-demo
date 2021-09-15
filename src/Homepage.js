import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="App container mt-3">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to RichMail</h1>
        <p className="lead">Imagine for a moment you were receiving email, but you were actually happy about it. It's not spam. It's not a crappy forwarded meme. It's not an incendiary clickbait headline. Congrats, it doesn't exist. Now just sign up for my email service already.</p>
        <hr className="my-4" />
        <Link className="btn btn-primary btn-lg" to="/folders" role="button">Try for Free</Link>
        <p className="text-muted">(only $49.99/mo after 3-day free trial with a 12mo contract)</p>
        <p className="text-muted" style={{ fontSize: "0.8em" }}>Terms and condition apply.</p>
      </div>
    </div>
  );
}
