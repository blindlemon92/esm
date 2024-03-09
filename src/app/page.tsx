import AboutElement from './components/AboutElement/AboutElement';
import Hero from './components/Hero/Hero';
import Media from './components/Media/Media';
import OnTour from './components/OnTour/OnTour';
import styles from './Home.module.css';

export default function Home() {
	return (
		<section id='homeSection' className={styles.homeSection}>
			<div className={styles.heroContainer}>
				<Hero />
			</div>
			<div className={styles.transitionContainer}></div>
			<div>
				<OnTour />
			</div>
			<div>
				<AboutElement />
			</div>
			<div>
				<Media />
			</div>
		</section>
	);
}
