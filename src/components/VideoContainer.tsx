import React from "react";
import { Flex } from "@chakra-ui/core";
import Header from "./Header";
import { RouteComponentProps } from "@reach/router";

const VideoContainer = (props: RouteComponentProps) => (
  <>
    <Header>Video Recording From The "Party"</Header>
    <Flex justifyContent="center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/IefHJq9NpzM"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Recording from the family Zoom chat"
      />
    </Flex>
  </>
);

export default VideoContainer;
