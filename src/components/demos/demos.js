import React from "react";
import { Card, Button } from "react-bootstrap";
import TopTitle from "../../layout/top_tilte/top_title";

function Demos() {
  return (
    <>
      <TopTitle />
      <br/>
      <Card style={{ marginLeft: '20px', width: "18rem" }}>
        <Card.Img
          variant="top"
          style={{ width: "300px", height: "300px" }}
          src="https://www.docker.com/sites/default/files/social/docker_facebook_share.png"
        />
        <Card.Body>
          <Card.Title>Docker</Card.Title>
          {/* <Card.Text>Docker Updatge</Card.Text>
          <Button variant="primary">Update</Button> */}
        </Card.Body>
      </Card>
    </>
  );
}

export default Demos;
