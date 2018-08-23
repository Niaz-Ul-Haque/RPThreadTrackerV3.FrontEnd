import React from 'react';
import PropTypes from 'prop-types';
import {
	TabPane, Col, Row, Button, Card, CardHeader, CardBlock
} from 'reactstrap';
import { AvForm } from 'availity-reactstrap-validation';
import ChangePasswordForm from '../../../forms/change-password/ChangePasswordForm';

const propTypes = {
	submitChangePasswordForm: PropTypes.func.isRequired
};
class ChangePasswordPane extends React.Component {
	constructor() {
		super();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			formData: {}
		};
	}

	handleInputChange(event) {
		const { target } = event;
		const { name, value } = target;
		this.setState(prevState => ({
			formData: Object.assign({}, prevState.formData, {
				[name]: value
			})
		}));
	}

	render() {
		const { submitChangePasswordForm } = this.props;
		const { formData } = this.state;
		return (
			<TabPane tabId="change-password">
				<Card>
					<CardHeader>
						<i
							className="fas fa-key"
						/> Change Password
					</CardHeader>
					<CardBlock className="card-body">
						<AvForm
							data-spec="change-password-form-container"
							onValidSubmit={() => submitChangePasswordForm(formData)}
						>
							<ChangePasswordForm handleInputChange={this.handleInputChange} />
							<Row>
								<Col className="text-right">
									<Button type="submit" color="primary">
										Submit
									</Button>
								</Col>
							</Row>
						</AvForm>
					</CardBlock>
				</Card>
			</TabPane>
		);
	}
}
ChangePasswordPane.propTypes = propTypes;
export default ChangePasswordPane;
