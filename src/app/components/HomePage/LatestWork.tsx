import { Flex } from '@mantine/core';
import { HomePageWorkProps, WorkProps } from '../../utils/typings';
import WorkTile from './WorkTile';

interface LatestWorkProps {
	active: number;
	setActive: (value: number) => void;
	latestWork: WorkProps[];
	hoverRef: any;
}

function LatestWork({ active, setActive, latestWork, hoverRef }: LatestWorkProps) {
	return (
		<Flex ref={hoverRef} gap='md' w='fit-content' pos='absolute' bottom={30} right={40} style={{ zIndex: 8 }}>
			{latestWork.map((work, index) => {
				return <WorkTile key={index} index={index} active={active} setActive={setActive} image={work.tileImage} description={work.description} />;
			})}
		</Flex>
	);
}

export default LatestWork;
