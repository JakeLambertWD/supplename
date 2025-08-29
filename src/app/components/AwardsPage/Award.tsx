import { Button, Center, Flex, Grid, Stack, Text } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mantine/hooks';
import { SM } from '../../utils/constants';
import { theme } from '../../utils/theme';
import { useFormattedDescription } from '../../../../hooks/useFormattedDescription';
import { useRecoilState } from 'recoil';
import { activeGenreTabState } from '../../../../atoms/atoms';
import { useEffect, useRef } from 'react';
import { useVideoPlayback } from '../../../../hooks/useVideoPlayback';
import { useIntersectionObserver } from '../../../../hooks/useIntersectionObserver';

function Award({ award, isOdd }: any) {
	const router = useRouter();
	const isSM = useMediaQuery(`(max-width: ${SM})`);

	const formattedDescription = useFormattedDescription(award.description);
	const [activeGenreTab, setActiveGenreTab] = useRecoilState(activeGenreTabState);

	const { videoRef, isVideoReady, handleCanPlayThrough } = useVideoPlayback(award?.videoPreview);

	const containerRef = useRef<HTMLDivElement>(null);
	const isInView = useIntersectionObserver(containerRef);

	useEffect(() => {
		if (videoRef.current) {
			if (isInView) {
				videoRef.current.play();
			} else {
				videoRef.current.pause();
			}
		}
	}, [isInView]);

	return (
		<Grid
			gutter={0}
			style={{ cursor: 'pointer' }}
			onClick={() => {
				router.push(`/works/${formattedDescription}`);
				setActiveGenreTab(5);
			}}
		>
			<Grid.Col span={{ sm: 6 }} order={{ sm: isOdd ? 1 : 2 }}>
				<Flex ref={containerRef} pos='relative' align='center' justify='center'>
					{!isVideoReady && (
						<motion.img
							src={award?.tileImage}
							alt='Placeholder'
							style={{
								width: '100%',
								height: '500px',
								objectFit: 'cover',
								zIndex: -1
							}}
						/>
					)}
					<motion.video
						key={award?.videoPreview}
						ref={videoRef}
						autoPlay
						loop
						muted
						playsInline
						onCanPlayThrough={handleCanPlayThrough}
						style={{
							width: '100%',
							height: '500px',
							objectFit: 'cover',
							zIndex: isVideoReady ? -1 : -2,
							display: isVideoReady ? 'block' : 'none'
						}}
					>
						<source src={award?.videoPreview} type='video/mp4' />
						Your browser does not support the video tag.
					</motion.video>

					<Text c='white' fz='xl' fw={800} ta='center' px='lg' pos='absolute'>
						{award.name}
					</Text>
				</Flex>
			</Grid.Col>

			<Grid.Col span={{ sm: 6 }} order={{ sm: isOdd ? 2 : 1 }}>
				<Center p={{ base: 30, xs: 40, sm: 80, md: 90, lg: 110, xl: 130 }} h='100%' c='white'>
					<Stack w='100%' align={!isSM ? (isOdd ? 'flex-end' : 'flex-start') : 'center'} ta={{ sm: 'right' }}>
						<Text ta={isSM ? 'center' : 'match-parent'}>{award.name}</Text>

						<Button
							color={theme.colors?.primary?.[1]}
							size='md'
							w='fit-content'
							onClick={() => {
								router.push(`/works/${formattedDescription}`);
								setActiveGenreTab(5);
							}}
						>
							Go To Work
						</Button>
						<Text>{award?.client}</Text>
						<Text>{award?.description}</Text>
					</Stack>
				</Center>
			</Grid.Col>
		</Grid>
	);
}

export default Award;
