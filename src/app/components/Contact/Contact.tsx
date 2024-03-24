'use client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
	TextInput,
	Textarea,
	SimpleGrid,
	Group,
	Title,
	Button,
} from '@mantine/core';
import { useState, useRef } from 'react';
import { useForm } from '@mantine/form';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';
export type MessageT = {
	name: string;
	email: string;
	subject: string;
	message: string;
};
export function Contact() {
	const form = useForm({
		initialValues: {
			name: '',
			email: '',
			subject: '',
			message: '',
		},
		validate: {
			name: (value) => value.trim().length < 2,
			email: (value) => !/^\S+@\S+$/.test(value),
			subject: (value) => value.trim().length === 0,
		},
	});

	const formRef = useRef<any>();
	const router = useRouter();

	const showToast = async () => {
		toast.success('Your message sent: thanks for reaching out!');
	};

	const handleSubmit = async (e: MessageT) => {
		try {
			emailjs
				.sendForm('service_nhiegs9', 'template_60mf75o', formRef.current, {
					publicKey: 'FZpEuD7nIWD7RL6ce',
				})
				.then(
					(res) => {
						if (res) {
							showToast();
							router.push('/');
						}
					},
					(error) => {
						console.log('failed');
					}
				);
		} catch {
			console.log('error');
		}
	};

	return (
		<form
			ref={formRef}
			onSubmit={form.onSubmit((e) => {
				handleSubmit(e);
			})}>
			<Title
				order={2}
				size='h1'
				style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
				fw={900}
				ta='center'>
				Get in touch
			</Title>

			<SimpleGrid cols={{ base: 1, sm: 2 }} mt='xl'>
				<TextInput
					label='Name'
					placeholder='Your name'
					name='name'
					variant='filled'
					{...form.getInputProps('name')}
				/>
				<TextInput
					label='Email'
					placeholder='Your email'
					name='email'
					variant='filled'
					{...form.getInputProps('email')}
				/>
			</SimpleGrid>

			<TextInput
				label='Subject'
				placeholder='Subject'
				mt='md'
				name='subject'
				variant='filled'
				{...form.getInputProps('subject')}
			/>
			<Textarea
				mt='md'
				label='Message'
				placeholder='Your message'
				maxRows={10}
				minRows={5}
				autosize
				name='message'
				variant='filled'
				{...form.getInputProps('message')}
			/>

			<Group justify='center' mt='xl'>
				<Button type='submit' size='md'>
					Send message
				</Button>
			</Group>
		</form>
	);
}
