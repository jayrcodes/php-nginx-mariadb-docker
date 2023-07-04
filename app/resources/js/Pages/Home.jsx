import { Button, Container, Flex, Modal, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { NavbarSimple } from '../Components/Navbar';

export default function Home() {
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
          <Modal opened={opened} onClose={close} title="Mismo brad" centered>
            Pika boo
          </Modal>

          <h1>Home</h1>
          {new Array(100).fill(1).map((item) => (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              quasi, corrupti incidunt natus enim nisi explicabo. Optio ullam
              sint eius? Aut aspernatur ad odit blanditiis, quas libero facilis
              omnis quaerat.
            </p>
          ))}
        </Container>
      </ScrollArea>
    </Flex>
  );
}
