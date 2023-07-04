import { Box, Button, Container, Flex, Modal, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { NavbarSimple } from '../Components/Navbar';

export default function Profile(props) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Flex>
      <NavbarSimple />
      <ScrollArea
        style={{
          height: '100vh',
          width: '100%',
        }}
      >
        <Container>
          <h1>Profile</h1>
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
            }}
          >
            {JSON.stringify(props.user)}
            {new Array(100).fill(1).map((item) => (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident quasi, corrupti incidunt natus enim nisi explicabo.
                Optio ullam sint eius? Aut aspernatur ad odit blanditiis, quas
                libero facilis omnis quaerat.
              </p>
            ))}
          </pre>
        </Container>
      </ScrollArea>
    </Flex>
  );
}
