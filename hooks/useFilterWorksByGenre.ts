import { useEffect, useMemo, useState } from 'react';
import { projects } from '@/app/dataSets/dataSets';

export const useFilterWorksByGenre = (activeGenreName: string) => {
	const [works, setWorks] = useState([]);

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
