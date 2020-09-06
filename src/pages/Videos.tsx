import React from "react";
import Header from "../components/Header";
import Video from "../components/Video";
import { RouteComponentProps } from "@reach/router";

const Videos = (props: RouteComponentProps) => (
  <>
    <Header>Video Messages From Your Family</Header>
    <Video
      embedLink="https://www.youtube.com/embed/MYp3LS4hL_M"
      title="A message from Asher and Norah"
    />
    <Video
      embedLink="https://www.youtube.com/embed/0SfPHPhmLTU"
      title="Birthday cake with the Arrayan's"
    />
  </>
);

export default Videos;
