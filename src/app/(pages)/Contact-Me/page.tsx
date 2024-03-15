'use client';

import { Contact } from '../../components/Contact/Contact';
import styles from './ContactMe.module.css';
export default function ContactMe() {
	return (
		<section className={styles.contactMeContainer}>
			<Contact />
		</section>
	);
}
