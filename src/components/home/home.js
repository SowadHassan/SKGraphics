import React from "react";
import TopTitle from "../../layout/top_tilte/top_title";
import back from '../../back.jpg'

function Home() {
  return (
    <>
      <TopTitle />
      <img
        src={back}
        alt="Girl in a jacket"
        width="100%"
        height="auto"
      />
    </>
  );
}

export default Home;
