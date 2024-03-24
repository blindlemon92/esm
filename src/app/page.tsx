'use client';

import AboutElement from './components/AboutElement/AboutElement';
import Hero from './components/Hero/Hero';
import { ImageGrid } from './components/ImgGrid/ImgGrid';
import Media from './components/Media/Media';
import MerchStore from './components/MerchStore/MerchStore';
import OnTour from './components/OnTour/OnTour';
import styles from './Home.module.css';
import Navbar from './components/Navbar/Navbar';
export default function Home() {
	return (
		<>
			<Navbar />
			<section id='homeSection' className={styles.homeSection}>
				<div className={styles.heroContainer}>
					<Hero />
				</div>
				<div className={styles.transitionContainer}></div>
				<div id='aboutSection' className={styles.aboutContainer}>
					<AboutElement />
				</div>
				<div className={styles.transitionContainerTwo}></div>
				<div id='merchStore'>
					<MerchStore />
				</div>

				<div id='tourSection'>
					<OnTour />
				</div>
				<div className={styles.transitionContainerThree}></div>
				<div id='mediaSection'>
					<Media />
				</div>
			</section>
		</>
	);
}
