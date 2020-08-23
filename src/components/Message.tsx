import React, { useContext } from "react";
import { Heading, Link, Text } from "@chakra-ui/core";
import { WishesContext } from "../context/WishesContext";

const Message = () => {
  const {
    birthdayWish: { message, name, email }
  }: any = useContext(WishesContext); // TODO
  const splitName = name.split(" ");

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
        {message}
      </Heading>
      <Heading as="h3" size="md" fontWeight={700} textAlign="center" mb={12}>
        - {name}
      </Heading>
      <Text textAlign="center" mb={18}>
        <span role="img" aria-label="">
          💌
        </span>{" "}
        Email {splitName[0]}:{" "}
        <Link href={`mailto:${email}?subject=Thanks for the birthday wishes!`}>
          {email}
        </Link>
      </Text>
    </>
  );
};

export default Message;