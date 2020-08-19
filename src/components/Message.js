import React from "react";
import { Heading, Link, Text } from "@chakra-ui/core";

const Message = props => {
  const splitName = props.name.split(" ");

  return (
    <>
      <Heading
        as="h2"
        size="lg"
        fontWeight={400}
        textAlign="center"
        mt={2}
        mb={6}
        lineHeight={1.5}
      >
        {props.message}
      </Heading>
      <Heading as="h3" size="md" fontWeight={700} textAlign="center" mb={12}>
        - {props.name}
      </Heading>
      <Text textAlign="center" mb={18}>
        <span role="img" aria-label="">
          💌
        </span>{" "}
        Email {splitName[0]}:{" "}
        <Link
          href={`mailto:${props.email}?subject=Thanks for the birthday wishes!`}
        >
          {props.email}
        </Link>
      </Text>
    </>
  );
};

export default Message;
