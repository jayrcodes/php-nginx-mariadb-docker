import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';

export default function Home() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <Modal opened={opened} onClose={close} title="Mismo brad" centered>
        Pika boo
      </Modal>

      <h1>Home</h1>

      <Button onClick={open}>Chal Legs</Button>
      <a href="/login">Login</a>
    </div>
  );
}
