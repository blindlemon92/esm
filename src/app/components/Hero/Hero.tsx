'use client';

import Image from 'next/image';
import styles from './Hero.module.css';
import heroAdd from '/public/doItBetter.png';
import mobileHeroXS from '/public/mobileHero.jpg';
import mobileHero from '/public/heroMobile2.jpg';
import heroImage from '/public/heroImg.jpg';

export default function Hero() {
	return (
		<section className={styles.heroSection}>
			<div className={styles.heroContainer}>
				<div className={styles.fullSizeContainer}>
					<Image
						className={styles.heroImg}
						src={heroImage}
						alt='heroImage'
						placeholder='blur'
						quality={100}
						fill
						sizes='90vw'
					/>

					<Image
						className={styles.heroAdd}
						src={heroAdd}
						alt='Country_girls_do_it_better'
					/>
				</div>
				<div className={styles.inBetweenContainer}>
					<Image
						className={styles.inBetweenMobileHero}
						src={mobileHero}
						alt='mobileHero'
						placeholder='blur'
						quality={100}
						fill
						sizes='100vw'
					/>

					<Image
						className={styles.inBetweenHeroAdd}
						src={heroAdd}
						alt='Country_girls_do_it_better'
					/>
				</div>
				<div className={styles.mobileContainer}>
					<Image
						className={styles.mobileHeroImg}
						src={mobileHeroXS}
						alt='mobileHero'
						placeholder='blur'
						quality={100}
						fill
						sizes='100vw'
					/>
					<Image
						className={styles.mobileHeroAdd}
						src={heroAdd}
						alt='Country_girls_do_it_better'
					/>
				</div>
			</div>
		</section>
	);
}
