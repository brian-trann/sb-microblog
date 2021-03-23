import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTitles } from './actions/titles';
import BlogCard from './BlogCard';
import NoBlogPosts from './NoBlogPosts';

const TitleList = () => {
	const [ isLoading, setIsLoading ] = useState(true);
	const titles = useSelector((st) => st.titles);
	const dispatch = useDispatch();
	useEffect(
		() => {
			async function getTitles() {
				dispatch(fetchTitles());
				setIsLoading(false);
			}
			if (isLoading) {
				getTitles();
			}
		},
		[ dispatch, isLoading ]
	);

	const renderBlogPosts = (titles) => {
		if (isLoading) return <div className='h4'>Loading...</div>;

		if (!isLoading && titles.length === 0) return <NoBlogPosts />;

		return titles.map((t) => (
			<div className='col-sm-6' key={t.id}>
				<BlogCard post={t} key={t.id} />
			</div>
		));
	};

	return (
		<React.Fragment>
			<div className='row'>{renderBlogPosts(titles)}</div>
		</React.Fragment>
	);
};
export default TitleList;
