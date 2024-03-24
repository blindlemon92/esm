'use client';

import BackButton from '../../components/svgs/BackButton/BackButton';
import { Contact } from '../../components/Contact/Contact';
import { useRouter } from 'next/navigation';
import styles from './ContactMe.module.css';

export default function ContactMe() {
	const router = useRouter();

	return (
		<section className={styles.contactMeContainer}>
			<button onClick={() => router.push('/')}>
				<BackButton />
			</button>
			<Contact />
		</section>
	);
}
