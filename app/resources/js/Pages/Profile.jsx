import { Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';

export default function Profile(props) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <h1>Profile</h1>

      <pre>{JSON.stringify(props.user)}</pre>

      <a href="/logout">Logout</a>
    </div>
  );
}
