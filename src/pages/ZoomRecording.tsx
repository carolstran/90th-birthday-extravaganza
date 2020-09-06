import React from "react";
import Header from "../components/Header";
import Video from "../components/Video";
import { RouteComponentProps } from "@reach/router";

const ZoomRecording = (props: RouteComponentProps) => (
  <>
    <Header>Zoom Recording From The "Party"</Header>
    <Video
      embedLink="https://www.youtube.com/embed/IefHJq9NpzM"
      title="Recording from the family Zoom chat"
    />
  </>
);

export default ZoomRecording;
