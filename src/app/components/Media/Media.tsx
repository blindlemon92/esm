import Image from 'next/image';
import countryScene from '@/public/ben-collins-CGdKv4BA6GQ-unsplash.jpg';
import heading from '@/public/mediaHeading.png';

import styles from './Media.module.css';
export default function Media() {
	return (
		<section className={styles.mediaSection}>
			<div>
				<Image
					className={styles.headerContainers}
					src={heading}
					alt='media_heading'
				/>
			</div>
			<Image
				src='https://hosting.photobucket.com/images/i/v0QbbrdyqpfMzb9Fx2hAIyaTpw22/coutnryFest_wPCigDN51zkAkcW5Vtoyfv.jpg'
				alt=''
				height={150}
				width={150}
			/>
			<Image
				src='https://hosting.photobucket.com/images/i/v0QbbrdyqpfMzb9Fx2hAIyaTpw22/fullBand.jpg'
				alt=''
				height={150}
				width={150}
			/>
			<Image
				src='https://hosting.photobucket.com/images/i/v0QbbrdyqpfMzb9Fx2hAIyaTpw22/emGuitarGuy.jpg'
				alt=''
				height={150}
				width={150}
			/>

			<Image
				src='https://hosting.photobucket.com/images/i/v0QbbrdyqpfMzb9Fx2hAIyaTpw22/singing1920_.jpg'
				alt=''
				height={150}
				width={150}
			/>
			<Image
				src='https://hosting.photobucket.com/images/i/v0QbbrdyqpfMzb9Fx2hAIyaTpw22/unfinished.jpg'
				alt=''
				height={150}
				width={150}
			/>
			<Image
				src='https://hosting.photobucket.com/images/i/v0QbbrdyqpfMzb9Fx2hAIyaTpw22/excited.jpg'
				alt=''
				height={150}
				width={150}
			/>
			<Image
				src='https://hosting.photobucket.com/images/i/v0QbbrdyqpfMzb9Fx2hAIyaTpw22/thirstyImg.jpg'
				alt=''
				height={150}
				width={150}
			/>
			<Image
				src='https://hosting.photobucket.com/images/i/v0QbbrdyqpfMzb9Fx2hAIyaTpw22/smile1920.jpg'
				alt=''
				height={150}
				width={150}
			/>
		</section>
	);
}
