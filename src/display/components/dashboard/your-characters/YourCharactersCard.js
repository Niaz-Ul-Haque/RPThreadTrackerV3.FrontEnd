import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBlock } from 'reactstrap';
import YourCharactersCardRow from './YourCharactersCardRow';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const YourCharactersCard = (props) => {
	const { characters } = props;
	return (
		<Card className="your-characters-card">
			<CardHeader>
				<i className="fa fa-users" /> Your Characters
				<div className="float-right"><a href="/manage-characters">Manage Characters</a></div>
			</CardHeader>
			<CardBlock className="card-body">
				{
					characters.map(character =>
						<YourCharactersCardRow character={character} key={character.id} />)
				}
			</CardBlock>
		</Card>
	);
};

YourCharactersCard.propTypes = propTypes;

export default YourCharactersCard;
