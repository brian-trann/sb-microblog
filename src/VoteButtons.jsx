import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import './VoteButtons.css';
const VoteButtons = ({ postId, vote }) => {
	return (
		<React.Fragment>
			<span className='mr-3 VoteButtons-down float-right'>
				<FontAwesomeIcon icon={faThumbsDown} onClick={() => vote(postId, 'down')} />
			</span>
			<span className='mr-3 VoteButtons-up float-right'>
				<FontAwesomeIcon icon={faThumbsUp} onClick={() => vote(postId, 'up')} />
			</span>
		</React.Fragment>
	);
};
export default VoteButtons;
