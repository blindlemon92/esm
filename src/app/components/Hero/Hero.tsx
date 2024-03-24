'use client';

import heroLineOne from '/public/countryGirls_countryGirls.png';

import heroMobileCountryGirls from '/public/countryGirlsMobile.png';
import heroMobileDoItBetter from '/public/mobileDoItBetter.png';
import newDoItBetter from '/public/newDoItBetter.png';

import heroImage from '/public/heroImg.jpg';
import mobileHero from '/public/heroMobile2.jpg';
import mobileHeroXS from '/public/mobileHero.jpg';
import Link from 'next/link';
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
							src={newDoItBetter}
							alt='Country_girls_do_it_better'
						/>
						<div className={styles.heroLineThreeFull}>
							<span className='animate-pulse'>
								<Link
									className={styles.heroAvailableNowFull}
									target='_blank'
									href='https://music.apple.com/us/artist/erin-stoll/1131483440'>
									AVAILABLE NOW
								</Link>
							</span>
						</div>
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
							src={newDoItBetter}
							alt='Country_girls_do_it_better'
						/>
						<div className={styles.heroLineThreeFull}>
							<span className='animate-pulse'>
								<Link
									className={styles.heroAvailableNowFull}
									target='_blank'
									href='https://music.apple.com/us/artist/erin-stoll/1131483440'>
									AVAILABLE NOW
								</Link>
							</span>
						</div>
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
							src={heroMobileCountryGirls}
						/>
						<Image
							alt='do_it_better'
							className={styles.heroLineTwo}
							src={heroMobileDoItBetter}
						/>
						<div className={styles.heroLineThree}>
							<span className='animate-pulse'>
								<Link
									className={styles.heroAvailableNow}
									target='_blank'
									href='https://music.apple.com/us/artist/erin-stoll/1131483440'>
									AVAILABLE NOW
								</Link>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
