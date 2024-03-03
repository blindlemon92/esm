import erinVintageFrame from '/public/aboutFrame.png';
import gradientAbout from '/public/gradientAbout.png';

import { Libre_Baskerville } from 'next/font/google';
import Image from 'next/image';

import styles from './AboutElement.module.css';

const libre = Libre_Baskerville({ weight: '400', subsets: ['latin'] });
export default function AboutElement() {
	return (
		<section className={styles.aboutElement}>
			<div className={styles.headerContainer}>
				<Image
					className={styles.aboutHeader}
					src={gradientAbout}
					alt='about_element_header'
				/>
				<h3 className={libre.className}>
					An award-winning country singer from Ohio, Erin seamlessly blends
					modern country with a soulful twist.
				</h3>
				<Image
					className={styles.erinVintageFrameMobile}
					src={erinVintageFrame}
					alt='erin_in_vintage_frame'
				/>
				<p className={styles.bioSpan}>
					Since childhood, shes pursued her dream of Nashville stardom, known
					for her vibrant, crowd-pleasing performances. In 2016, she recorded
					her debut EP Unfinished in Nashville, produced by Randy Barr, which
					includes the Best Country Song of 2016 in Ohio, Unfinished. Currently,
					shes collaborating with renowned producer Kenny Royster for a new EP,
					expected in winter 2024, continuing her journey in the country music
					scene.
				</p>
			</div>
			<div className={styles.erinFullVintageFrame}>
				<Image src={erinVintageFrame} alt='erin_in_vintage_frame' />
			</div>
		</section>
	);
}
