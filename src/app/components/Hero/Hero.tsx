'use client';

import heroLineOne from '/public/countryGirls_countryGirls.png';
import heroLineTwo from '/public/doItBetter_countryGirls.png';
import heroLineThree from '/public/available_countryGirls.png';
import heroAdd from '/public/doItBetter.png';
import heroImage from '/public/heroImg.jpg';
import mobileHero from '/public/heroMobile2.jpg';
import mobileHeroXS from '/public/mobileHero.jpg';
import Image from 'next/image';

import styles from './Hero.module.css';

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

					<div className={styles.fullHeroAdd}>
						<Image
							alt='country_girls'
							className={styles.heroLineOne}
							src={heroLineOne}
						/>
						<Image
							className={styles.heroLineTwo}
							src={heroLineTwo}
							alt='Country_girls_do_it_better'
						/>
						<Image
							className={styles.heroLineThree}
							src={heroLineThree}
							alt='Country_girls_do_it_better'
						/>
					</div>
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

					<div className={styles.inBetweenHeroAdd}>
						<Image
							className={styles.heroLineOne}
							src={heroLineOne}
							alt='Country_girls_do_it_better'
						/>
						<Image
							className={styles.heroLineTwo}
							src={heroLineTwo}
							alt='Country_girls_do_it_better'
						/>
						<Image
							className={styles.heroLineThree}
							src={heroLineThree}
							alt='Country_girls_do_it_better'
						/>
					</div>
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
					<div className={styles.mobileHeroAdd}>
						<Image
							alt='country_girls'
							className={styles.heroLineOne}
							src={heroLineOne}
						/>
						<Image
							alt='do_it_better'
							className={styles.heroLineTwo}
							src={heroLineTwo}
						/>
						<Image
							alt='country_girls'
							className={styles.heroLineThree}
							src={heroLineThree}
						/>
					</div>
					{/* TODO: FIX OR DELETE */}
					{/* <div className={styles.gradientContainer}>
						this is the gradient container
					</div> */}
				</div>
			</div>
		</section>
	);
}
