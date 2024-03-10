'use client';

import { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Image from 'next/image';
import styles from './OnTour.module.css';
import headerImg from '/public/tourHeader.png';
import fullSizeBg from '/public/tourBG.jpg';
import { Prata } from 'next/font/google';
import { formatDates } from '../../../config/helpers';

const prata = Prata({ weight: '400', subsets: ['latin'] });
export default function OnTour() {
	const [dates, setDates] = useState<string[][] | null>(null);
	const [showAllDates, setShowAllDates] = useState(false);
	const nodeRef = useRef(null);
	const fetchTourDates = async () => {
		try {
			const res = await fetch(
				'https://rest.bandsintown.com/artists/Erin%20Stoll/events/?app_id=d867af9b8a7926a4ff4a866182aeb2e9'
			);

			if (res.ok) {
				const resObject = await res.json();
				const formattedDates = formatDates(resObject);
				setDates(() => formattedDates);
			}
		} catch {
			console.log('error fetching data from bands in town');
		}
	};

	const handleTourDates = async () => {
		dates == null ? await fetchTourDates() : null;
	};

	useEffect(() => {
		handleTourDates();
	}, [dates]);

	useEffect(() => console.log(showAllDates), [showAllDates]);

	const handleShowAllDates = async () => {
		setShowAllDates((prevState) => !prevState);
	};

	return (
		<section className={styles.tourContainer}>
			<Image
				className={styles.fullSizeBg}
				src={fullSizeBg}
				alt='country_girl_backgroundImage'
				placeholder='blur'
				quality={100}
				layout='fill'
				objectFit='cover'
			/>
			<div className={styles.headerContainer}>
				<div className={prata.className}>
					<h4 className={styles.live}>LIVE | 2024</h4>,
				</div>
				<div className={styles.headerImgContainer}>
					<Image
						className={styles.headerImg}
						src={headerImg}
						alt='on_tour_header'
					/>
				</div>
				{dates != null
					? dates.slice(0, 6).map((i, index) => (
							<div key={index} className={styles.dateContainer}>
								<div className={styles.leftDivContainer}>
									<div className={styles.leftDiv}>
										<h5>{i[0]}</h5>
										<h3>{i[1]}</h3>
									</div>
								</div>
								<div className={styles.centerDiv}>{i[2]}</div>
								<div className={styles.rightDiv}>
									{/* TODO: this button goes nowhere */}
									<button
										onClick={() => handleTourDates()}
										className={styles.notifyButton}>
										notify me
									</button>
								</div>
							</div>
					  ))
					: null}
				<CSSTransition
					in={showAllDates}
					nodeRef={nodeRef}
					timeout={385}
					classNames='dropDown'
					unmountOnExit>
					<div ref={nodeRef}>
						{dates != null && nodeRef != null
							? dates.slice(6).map((i, index) => (
									<div key={index} className={styles.dateContainer}>
										<div className={styles.leftDivContainer}>
											<div className={styles.leftDiv}>
												<h5>{i[0]}</h5>
												<h3>{i[1]}</h3>
											</div>
										</div>
										<div className={styles.centerDiv}>{i[2]}</div>
										<div className={styles.rightDiv}>
											<button
												onClick={() => handleTourDates()}
												className={styles.notifyButton}>
												notify me
											</button>
										</div>
									</div>
							  ))
							: null}
					</div>
				</CSSTransition>
				<div className={styles.seeAllContainer}>
					<button onClick={handleShowAllDates} className={styles.seeAllButton}>
						{showAllDates ? 'Close' : 'See All'}
					</button>
				</div>
			</div>
		</section>
	);
}
