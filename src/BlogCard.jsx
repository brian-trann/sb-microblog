import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardSubtitle, CardTitle, CardFooter } from 'reactstrap';
import VoteButtons from './VoteButtons';
const BlogCard = ({ post, vote }) => {
	const { id, title, description, votes } = post;

	return (
		<div className='BlogCard-container container my-3' key={id}>
			<Card>
				<CardTitle className='my-3'>
					<Link className='h5 m-3' to={`/${id}`}>
						{title}
					</Link>
				</CardTitle>
				<CardSubtitle className='mx-3 mb-3'>
					<i>{description}</i>
				</CardSubtitle>
				<CardFooter>
					Votes: {votes} <VoteButtons vote={vote} postId={id} />
				</CardFooter>
			</Card>
		</div>
	);
};
export default BlogCard;
