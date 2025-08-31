import { useEffect, useMemo, useState } from 'react';
import { projects } from '@/app/dataSets/dataSets';

export const useFilterWorksByGenre = (activeGenreName: string) => {
	// Define the type for a project (you may want to move this to a types file)
	type Project = (typeof projects)[number];

	const [works, setWorks] = useState<Project[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			let worksData = [];
			worksData =
				activeGenreName === 'Awards'
					? projects.filter(project => project.award)
					: projects.filter(project => project.projectGenre.name === activeGenreName);
			setWorks(worksData);
		};

		fetchData();
	}, [activeGenreName]);

	const memoizedWorks = useMemo(() => works, [works]);

	return memoizedWorks;
};
