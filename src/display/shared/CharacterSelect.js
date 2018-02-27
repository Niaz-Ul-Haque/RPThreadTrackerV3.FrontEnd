import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
	characters: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
	selectedCharacterId: PropTypes.shape({}),
	onSelectCharacter: PropTypes.func.isRequired,
	defaultText: PropTypes.string
};
const defaultProps = {
	selectedCharacterId: null,
	defaultText: 'Select Character'
};

const CharacterSelect = (props) => {
	const {
		characters, selectedCharacterId, onSelectCharacter, defaultText
	} = props;
	const options = [];
	if (characters) {
		for (let i = 0; i < characters.length; i++) {
			const element = (
				<option
					value={characters[i].characterId}
					key={characters[i].characterId}
				>
					{characters[i].characterName ? characters[i].characterName : characters[i].urlIdentifier}
				</option>
			);
			options.push(element);
		}
	}
	return (
		<FormGroup>
			<Label htmlFor="characterId">Character</Label>
			<Input
				type="select"
				name="characterId"
				id="character-id"
				value={selectedCharacterId}
				onChange={e => onSelectCharacter(parseInt(e.target.value, 10))}
			>
				<option value={null}>{defaultText}</option>
				{options}
			</Input>
		</FormGroup>
	);
};

CharacterSelect.propTypes = propTypes;
CharacterSelect.defaultProps = defaultProps;
export default CharacterSelect;
