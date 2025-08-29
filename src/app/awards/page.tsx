'use client';

import { Space, Stack } from '@mantine/core';
import NavigationBar from '../components/Common/NavigationBar';
import { FooterSocial } from '../components/Common/Footer';
import Award from '../components/AwardsPage/Award';
import { projects } from '../dataSets/dataSets';

function page() {
	const awards = projects.filter(project => project.award);

	return (
		<>
			<NavigationBar />
			<Space h={100} />

			<Stack gap={0}>
				{awards?.map((award, index) => {
					const isOdd = index % 2 === 0;

					return <Award award={award} isOdd={isOdd} />;
				})}
			</Stack>

			<FooterSocial />
		</>
	);
}

export default page;
