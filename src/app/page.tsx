import AboutElement from './components/AboutElement/AboutElement';
import Hero from './components/Hero/Hero';
import OnTour from './components/OnTour/OnTour';
import styles from './Home.module.css';

export default function Home() {
	return (
		<section id='homeSection' className={styles.homeSection}>
			<div className={styles.heroContainer}>
				<Hero />
			</div>
			<div>
				<AboutElement />
			</div>
			<div>
				<OnTour />
			</div>
		</section>
	);
}
