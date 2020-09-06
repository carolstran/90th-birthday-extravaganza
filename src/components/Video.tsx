import React from "react";
import { Flex } from "@chakra-ui/core";

type VideoProps = {
  embedLink: string;
  title: string;
};

const Video = (props: VideoProps) => {
  const { embedLink, title } = props;

  return (
    <Flex justifyContent="center" mb={8} data-testid="video-container">
      <iframe
        width="560"
        height="315"
        src={embedLink}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
      />
    </Flex>
  );
};

export default Video;
