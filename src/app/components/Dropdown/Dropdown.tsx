'use client';
import { MouseEvent, useEffect } from 'react';
import { useRef } from 'react';
import aboutIcon from '/public/About.png';
import closeDropdown from '/public/closePopUp.png';
import contactIcon from '/public/Contact.png';
import mediaIcon from '/public/mediaMobileNav.png';
import newsIcon from '/public/News.png';
import tourIcon from '/public/Tour.png';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';
import AmazonLogo from '../svgs/AmazonLogo/AmazonLogo';
import AppleMusic from '../svgs/AppleMusic/AppleMusic';
import FacebookLogo from '../svgs/FacebookLogo/FacebookLogo';
import InstagramLogo from '../svgs/InstagramLogo/InstagramLogo';
import SpotifyLogo from '../svgs/SpotifyLogo/SpotifyLogo';
import TikTokLogo from '../svgs/TikTokLogo/TikTokLogo';
import YouTubeLogo from '../svgs/YouTubeLogo/YouTubeLogo';
import styles from './Dropdown.module.css';
type DropdownProps = {
	dropdownOpen: boolean;
	setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Dropdown: React.FC<DropdownProps> = ({
	dropdownOpen,
	setDropdownOpen,
}) => {
	const pathname = usePathname();
	const nodeRef = useRef(null);
	const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		setDropdownOpen((prevState) => !prevState);
	};

	const router = useRouter();
	const handleNavigate = async (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const { id } = e.currentTarget;
		console.log(pathname);
		console.log(id);
		if (id == 'aboutLinkContainer' && pathname == '/aboutSection') {
			router.push('/#aboutSection');
		}
	};

	return (
		<>
			<CSSTransition
				in={dropdownOpen}
				nodeRef={nodeRef}
				timeout={385}
				classNames='dropDown'
				unmountOnExit>
				<section ref={nodeRef} className={styles.dropdownSection}>
					<div>
						<button
							id='close'
							onClick={(e) => handleClose(e)}
							className={styles.closeIconButton}>
							<Image
								className={styles.closeIcon}
								src={closeDropdown}
								alt='close_dropdown'
							/>
						</button>
					</div>
					<div id='aboutLinkContainer' className={styles.navigationLinks}>
						<button onClick={(e) => handleClose(e)}>
							<Link href='#aboutSection'>
								<Image
									className={styles.aboutLink}
									src={aboutIcon}
									alt='link_to_about'
								/>
							</Link>
						</button>
						<button onClick={(e) => handleClose(e)}>
							<Link href='#newsSection' className={styles.newsLink}>
								<Image src={newsIcon} alt='link_to_news' />
							</Link>
						</button>
						<button onClick={(e) => handleClose(e)}>
							<Link href='#tourSection'>
								<Image
									className={styles.tourLink}
									src={tourIcon}
									alt='link_to_tour'
								/>
							</Link>
						</button>
						<button onClick={(e) => handleClose(e)}>
							<Link href='#mediaSection'>
								<Image
									className={styles.mediaLink}
									src={mediaIcon}
									alt='link_to_media'
								/>
							</Link>
						</button>
						{/* <button onClick={(e) => handleClose(e)}>
							<Link href='#contactSection'>
								<Image
									className={styles.contactLink}
									src={contactIcon}
									alt='link_to_contact'
								/>
							</Link>
						</button> */}
					</div>
					<div className={styles.socialsContainer}>
						<Link
							target='_blank'
							href='https://www.facebook.com/erinstollmusicohio'>
							<FacebookLogo />
						</Link>
						<Link target='_blank' href='https://www.tiktok.com/@erinstollmusic'>
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
				</section>
			</CSSTransition>
		</>
	);
};
