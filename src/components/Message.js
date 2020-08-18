import React from "react";
import { Heading, Link, Text } from "@chakra-ui/core";

const Message = props => (
  <>
    <Heading
      as="h2"
      size="lg"
      fontWeight={500}
      textAlign="center"
      mt={2}
      mb={6}
    >
      {props.message}
    </Heading>
    <Heading as="h3" size="md" fontWeight={500} textAlign="center" mb={12}>
      - {props.name}
    </Heading>
    <Text textAlign="center" mb={18}>
      💌 Email {props.name}:{" "}
      <Link
        href={`mailto:${props.email}?subject=Thanks for the birthday wishes!`}
      >
        {props.email}
      </Link>
    </Text>
  </>
);

export default Message;
