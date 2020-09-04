import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function TopTitle() {
  return (
    <div class="navbar navbar-dark bg-dark box-shadow">
      <div class="container d-flex justify-content-between">
        <a href="/" class="navbar-brand d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mr-2"
          >
            {/* <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle> */}
          </svg>
          <strong>Home</strong>
        </a>
        <ButtonGroup aria-label="Basic example">
          <Button variant="light">
            <Link to="/aboutus">About US</Link>
          </Button>
          <Button variant="light">
            <Link to="/contact">Contact</Link>
          </Button>
          <Button variant="light">
            <Link to="/demos">Demos</Link>
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default TopTitle;
