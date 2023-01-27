import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import Button from './Button';
import {
  FormBox,
  FormBoxButton,
  FormInput,
  FormLabel,
  FormStyle,
  FormTextarea,
} from './Email.style';

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hsei3xa',
        'template_716n5ng',
        form.current,
        'KHRFcqoUvhV24uSYP'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <FormStyle>
      <form ref={form} onSubmit={sendEmail}>
        <FormBox>
          <FormLabel>Name</FormLabel>
          <FormInput type='text' name='user_name' />
        </FormBox>
        <FormBox>
          <FormLabel>Email</FormLabel>
          <FormInput type='email' name='user_email' />
        </FormBox>
        <FormBox>
          <FormLabel>Message</FormLabel>
          <FormTextarea name='message' />
        </FormBox>
        <FormBoxButton>
          <Button type='submit' text_button='Send' />
        </FormBoxButton>
      </form>
    </FormStyle>
  );
};
