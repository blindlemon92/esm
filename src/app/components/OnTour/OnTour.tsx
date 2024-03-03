import Image from 'next/image';
import styles from './OnTour.module.css';
import headerImg from '/public/tourHeader.png';
import fullSizeBg from '/public/tourBG.jpg';
import { Prata } from 'next/font/google';

const prata = Prata({ weight: '400', subsets: ['latin'] });
export default function OnTour() {
	return (
		<section className={styles.tourContainer}>
			<Image
				className={styles.fullSizeBg}
				src={fullSizeBg}
				alt='on_tour_bgImg'
			/>
			<div className={styles.headerContainer}>
				<div className={prata.className}>
					<h4 className={styles.live}>LIVE | 2024</h4>
				</div>
				<div className={styles.headerImgContainer}>
					<Image
						className={styles.headerImg}
						src={headerImg}
						alt='on_tour_header'
					/>
				</div>
				<div className={styles.dateContainer}>
					<div className={styles.leftDivContainer}>
						<div className={styles.leftDiv}>
							<h5>March 2, 2024</h5>
							<h3>Sunny Slope Winery</h3>
						</div>
					</div>
					<div className={styles.centerDiv}>Big Prarie, OH</div>
					<div className={styles.rightDiv}>
						<button className={styles.notifyButton}>notify me</button>
					</div>
				</div>
				<div className={styles.dateContainer}>
					<div className={styles.leftDivContainer}>
						<div className={styles.leftDiv}>
							<h5>March. 8, 2024</h5>
							<h3>Fox News in the Morning</h3>
						</div>
					</div>
					<div className={styles.centerDiv}>Live Stream @ 7:30AM </div>
					<div className={styles.rightDiv}>
						<button className={styles.notifyButton}>notify me</button>
					</div>
				</div>
				<div className={styles.dateContainer}>
					<div className={styles.leftDivContainer}>
						<div className={styles.leftDiv}>
							<h5>March. 15, 2024</h5>
							<h3>Erins Music Release Party</h3>
						</div>
					</div>
					<div className={styles.centerDiv}>Wadsworth, OH</div>
					<div className={styles.rightDiv}>
						<button className={styles.notifyButton}>notify me</button>
					</div>
				</div>
				<div className={styles.dateContainer}>
					<div className={styles.leftDivContainer}>
						<div className={styles.leftDiv}>
							<h5>March. 23, 2024</h5>
							<h3>Welcome to the Farm</h3>
						</div>
					</div>
					<div className={styles.centerDiv}>Cleveland, OH</div>
					<div className={styles.rightDiv}>
						<button className={styles.notifyButton}>notify me</button>
					</div>
				</div>
				<div className={styles.dateContainer}>
					<div className={styles.leftDivContainer}>
						<div className={styles.leftDiv}>
							<h5>March. 29, 2024</h5>
							<h3>Lobys Grille</h3>
						</div>
					</div>
					<div className={styles.centerDiv}>Canton, OH</div>
					<div className={styles.rightDiv}>
						<button className={styles.notifyButton}>notify me</button>
					</div>
				</div>
				<div className={styles.seeAllContainer}>
					<button className={styles.seeAllButton}>
						Full Schedule Coming Soon
					</button>
				</div>
			</div>
		</section>
	);
}
