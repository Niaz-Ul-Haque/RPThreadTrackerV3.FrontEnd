import React from 'react';
import PropTypes from 'prop-types';
import { AvField } from 'availity-reactstrap-validation';
import { FormGroup, Col, Label } from 'reactstrap';
import validator from './_validator';

const propTypes = {
	handleInputChange: PropTypes.func.isRequired,
	user: PropTypes.shape({}).isRequired
};

const UpdateAccountInfoForm = (props) => {
	const {
		handleInputChange,
		user
	} = props;
	return (
		<div>
			<FormGroup row>
				<Col xs="12" lg="3">
					<Label htmlFor="username">Username:</Label>
				</Col>
				<Col xs="12" lg="9">
					<AvField
						name="username"
						placeholder="Username"
						type="text"
						value={user.userName}
						onChange={handleInputChange}
						validate={validator.username}
					/>
				</Col>
			</FormGroup>
			<FormGroup row>
				<Col xs="12" lg="3">
					<Label htmlFor="email">Email:</Label>
				</Col>
				<Col xs="12" lg="9">
					<AvField
						name="email"
						placeholder="Email"
						type="email"
						value={user.email}
						onChange={handleInputChange}
						validate={validator.email}
						disabled
					/>
				</Col>
			</FormGroup>
		</div>
	);
};

UpdateAccountInfoForm.propTypes = propTypes;
export default UpdateAccountInfoForm;