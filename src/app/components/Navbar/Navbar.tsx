'use client';

import siteLogo from '/public/nameLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import AmazonLogo from '../svgs/ AmazonLogo/AmazonLogo';

import TikTokLogo from '../svgs/TikTokLogo/TikTokLogo';
import AppleMusic from '../svgs/AppleMusic/AppleMusic';
import FacebookLogo from '../svgs/FacebookLogo/FacebookLogo';
import InstagramLogo from '../svgs/InstagramLogo/InstagramLogo';
import SpotifyLogo from '../svgs/SpotifyLogo/SpotifyLogo';
import YouTubeLogo from '../svgs/YouTubeLogo/YouTubeLogo';

import styles from './Navbar.module.css';
import BurgerLogo from '../svgs/BurgerLogo/BurgerLogo';
import { Hammersmith_One } from 'next/font/google';
import { Dropdown } from '../Dropdown/Dropdown';

const hammersmith = Hammersmith_One({ weight: '400', subsets: ['latin'] });

export default function Navbar() {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [BurgerOrNothing, setBurgerOrNothing] = useState(<BurgerLogo />);

	const handleDropdown = () => {
		setDropdownOpen((prevState) => !prevState);
	};

	const handleBurgerOrNothing = () => {
		let value = <></>;
		dropdownOpen ? null : (value = <BurgerLogo />);
		setBurgerOrNothing(() => value);
	};

	useEffect(() => {
		handleBurgerOrNothing();
	}, [dropdownOpen]);

	return (
		<>
			<section className={styles.navSection}>
				<div className={styles.contentContainer}>
					<div className={styles.logos}>
						<div className={styles.erinLogoContainer}>
							<Image
								className={styles.erinLogo}
								src={siteLogo}
								alt='Erin_Stoll'
								priority={true}
							/>
						</div>
						<div className={styles.socialLogos}>
							<Link
								target='_blank'
								href='https://www.facebook.com/erinstollmusicohio'>
								<FacebookLogo />
							</Link>

							<Link
								target='_blank'
								href='https://www.tiktok.com/@erinstollmusic'>
								<TikTokLogo />
							</Link>
							<Link
								target='_blank'
								href='https://music.apple.com/us/artist/erin-stoll/1131483440'>
								<AppleMusic />
							</Link>
							<Link
								target='_blank'
								href='https://www.instagram.com/erin_stoll_official/'>
								<InstagramLogo />
							</Link>
							<Link
								target='_blank'
								href='https://www.youtube.com/channel/UCmRb0_8RFZF5caRgkX_dR6g'>
								<YouTubeLogo />
							</Link>
							<Link
								target='_blank'
								href='https://www.amazon.com/Unfinished-Erin-Stoll/dp/B093WCK6HM'>
								<AmazonLogo />
							</Link>
							<Link
								target='_blank'
								href='https://open.spotify.com/artist/6dBtNe79JTPWrP9b7GG8nw'>
								<SpotifyLogo />
							</Link>
						</div>
						<button onClick={() => handleDropdown()} className={styles.burger}>
							{BurgerOrNothing}
						</button>
					</div>
					<div className={styles.linksContainer}>
						<ul className={hammersmith.className}>
							{/* TODO: the href's here for what will be Nextjs Link elements.. they will match a hashtag followed by the id */}
							<li className={styles.localLink}>
								<Link href='#aboutSection'>ABOUT</Link>
							</li>
							<li className={styles.localLink}>NEWS</li>
							<li className={styles.localLink}>TOUR</li>
							<li className={styles.localLink}>MEDIA</li>
							<li className={styles.localLink}>CONTACT</li>
						</ul>
					</div>
					<div className={styles.dropdownContainer}>
						{dropdownOpen ? (
							<>
								<Dropdown setDropdownOpen={setDropdownOpen} />
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</section>
		</>
	);
}
