'use client';

import Image from 'next/image';
import styles from './Hero.module.css';
import heroAdd from '/public/doItBetter.png';
import mobileHero from '/public/heroMobile2.jpg';
import heroImage from '/public/heroImg.jpg';

export default function Hero() {
	return (
		<section className={styles.heroSection}>
			<div>
				<Image className={styles.heroImg} src={heroImage} alt='heroImage' />
				<div className={styles.mobileContainer}>
					<div className={styles.messageContainer}>
						<Image
							className={styles.heroAdd}
							src={heroAdd}
							alt='Country_girls_do_it_better'
						/>
						<button className={styles.outNow}>NEW SINGLE | OUT NOW</button>
					</div>
					<Image
						className={styles.mobileHeroImg}
						src={mobileHero}
						alt='mobileHero'
					/>
				</div>
			</div>
		</section>
	);
}
