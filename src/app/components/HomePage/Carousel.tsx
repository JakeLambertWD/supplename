'use client';

import { motion } from 'framer-motion';
import { Flex, Group, Stack } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import { useHover } from '@mantine/hooks';
import LatestWork from './LatestWork';
import CarouselVideoPlayer from './CarouselVideoPlayer';
import { latestWork } from '@/app/dataSets/dataSets';

function FullScreenCarousel() {
	const ref = useRef(null);
	const { ref: hoverRef } = useHover();

	const [active, setActive] = useState(0);
	const [nextVideo, setNextVideo] = useState<string | null>(null);

	const featuredWork = latestWork.filter((_, index) => index === active)[0];

	const latestWorkCount = latestWork.length;

	useEffect(() => {
		// Set an interval to autoplay the videos
		const interval = setInterval(() => {
			setNextVideo(latestWork[(active + 1) % latestWorkCount]?.videoPreview || null);

			setTimeout(() => {
				setActive(prevActive => (prevActive + 1) % latestWorkCount);
				setNextVideo(null);
			}, 700);
		}, 7000);

		return () => clearInterval(interval);
	}, [latestWorkCount, active]);

	return (
		<>
			<Flex ref={ref} h={{ base: '90vh', sm: '100vh' }} align='flex-end' pos='relative'>
				<CarouselVideoPlayer ref={ref} nextVideo={nextVideo} featuredWork={featuredWork} />

				<Stack c='white' gap={0} mb={{ base: 160, xs: 70 }} ml={{ base: 30, xs: 70 }}>
					<Group>
						<motion.p
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							style={{
								fontSize: 35,
								fontWeight: 600,
								margin: 0,
								zIndex: 20
							}}
						>
							{featuredWork?.client}
						</motion.p>
					</Group>

					<motion.p
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						style={{ fontSize: 25, margin: 0, color: 'white', zIndex: 20 }}
					>
						{featuredWork?.description}
					</motion.p>
				</Stack>
			</Flex>

			<LatestWork hoverRef={hoverRef} active={active} setActive={setActive} latestWork={latestWork} />
		</>
	);
}

export default FullScreenCarousel;
