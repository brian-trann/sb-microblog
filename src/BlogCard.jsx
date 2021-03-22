import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardSubtitle, CardTitle } from 'reactstrap';
const BlogCard = ({ post: { title, description, id } }) => {
	return (
		<div className='BlogCard-container container my-3' key={id}>
			<Card>
				<CardTitle className='my-3'>
					<NavLink className='h5 m-3' to={`/${id}`}>
						{title}
					</NavLink>
				</CardTitle>
				<CardSubtitle className='mx-3 mb-3'>
					<i>{description}</i>
				</CardSubtitle>
			</Card>
		</div>
	);
};
export default BlogCard;
