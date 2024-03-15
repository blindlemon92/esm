'use client';

import Link from 'next/link';
import firstImage from '@/public/shadowRecord.png';
import blackHat from '@/public/blackHat.png';
import Image from 'next/image';
import flannelLogoShirt from '@/public/flannelShirt.png';
import fauxAlbum from '@/public/fauxAlbum.jpg';

import plainWhiteT from '@/public/shirtCountryGirls.png';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import styles from './MerchStore.module.css';

// TODO: style the hover state of the buttons
export default function MerchStore() {
	return (
		<section className={styles.merchStore}>
			<Carousel
				withIndicators
				align='start'
				slideSize='33.33%'
				slideGap='lg'
				loop
				slidesToScroll={1}
				className={styles.carousel}>
				<Carousel.Slide className={styles.slides}>
					<Link
						href='https://account.venmo.com/u/erinstollmusic'
						target='_blank'>
						<div className={styles.itemContainer}>
							<div className={styles.shirtsContainer}>
								<Image
									className={styles.plainWhite}
									src={plainWhiteT}
									alt='plain_t_shirt'
								/>
							</div>
							<div className={styles.tShirtDesc}>
								<button className={styles.preOrder}>PRE-ORDER NOW</button>
							</div>
						</div>
					</Link>
				</Carousel.Slide>
				<Carousel.Slide className={styles.slides}>
					<Link
						href='https://account.venmo.com/u/erinstollmusic'
						target='_blank'>
						<div className={styles.itemContainer}>
							<div className={styles.recordContainer}>
								<Image
									className={styles.firstImage}
									src={firstImage}
									alt='black_vinyl'
								/>
								<Image
									className={styles.fauxAlbum}
									src={fauxAlbum}
									alt='example_album_cover'
								/>
							</div>
							<div className={styles.recordDesc}>
								<button className={styles.preOrder}>PRE-ORDER NOW</button>
							</div>
						</div>
					</Link>
				</Carousel.Slide>
				<Carousel.Slide className={styles.slides}>
					<Link
						href='https://account.venmo.com/u/erinstollmusic'
						target='_blank'>
						<div className={styles.itemContainer}>
							<Image
								className={styles.flannelLogoShirt}
								src={flannelLogoShirt}
								alt='flannel_shirt_wLogo'
							/>

							<div className={styles.flannelDesc}>
								<button className={styles.preOrder}>PRE-ORDER NOW</button>
							</div>
						</div>
					</Link>
				</Carousel.Slide>
				<Carousel.Slide className={styles.slides}>
					<Link
						target='_blank'
						href='https://account.venmo.com/u/erinstollmusic'>
						<div className={styles.itemContainer}>
							<Image
								className={styles.blackHat}
								src={blackHat}
								alt='blank_vinyl'
							/>
							<div className={styles.hatDesc}>
								<button className={styles.preOrder}>PRE-ORDER NOW</button>
							</div>
						</div>
					</Link>
				</Carousel.Slide>
				,
				<Carousel.Slide className={styles.slides}>
					<Link
						target='_blank'
						href='https://account.venmo.com/u/erinstollmusic'>
						<div className={styles.itemContainer}>
							<Image
								className={styles.blackHat}
								src={blackHat}
								alt='blank_vinyl'
							/>
							<div className={styles.hatDesc}>
								<button className={styles.preOrder}>PRE-ORDER NOW</button>
							</div>
						</div>
					</Link>
				</Carousel.Slide>
			</Carousel>
		</section>
	);
}
