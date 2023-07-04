import { Box, Button, Checkbox, Group, Modal, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { router, usePage } from '@inertiajs/react';

export default function Login(props) {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = ({ email, password }) => {
    router.post(
      '/login',
      {
        email,
        password,
        _token: props.csrf_token,
      },
      {
        onStart: () => {
          setMessage('');
          setLoading(true);
        },
        onError: ({ message }) => {
          if (message) {
            setMessage(message);
          }
        },
        onFinish: () => {
          setLoading(false);
        },
      }
    );
  };

  return (
    <div>
      <Box maw={300} mx="auto">
        <h1>Sign in</h1>
        <form onSubmit={form.onSubmit((values) => handleLogin(values))}>
          <input type="hidden" name="_token" value={props.csrfToken} />
          <TextInput
            name="email"
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')}
          />
          <TextInput
            type="password"
            name="password"
            label="Password"
            placeholder="Your password"
            {...form.getInputProps('password')}
          />
          <Checkbox
            mt="md"
            label="I agree to terms and conditions"
            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
          />
          <p>{message}</p>
          <Group position="right" mt="md">
            <Button type="submit" loading={loading}>
              Submit
            </Button>
          </Group>
        </form>
      </Box>
    </div>
  );
}
