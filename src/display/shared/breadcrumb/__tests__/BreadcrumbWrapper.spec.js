// #region imports
import React from 'react';
import { shallow } from 'enzyme';
import { getSpecWrapper } from '~/testhelpers/helpers.unit';
import BreadcrumbWrapper from '../BreadcrumbWrapper';
// #endregion imports

jest.mock('../Breadcrumbs', () => () => 'Breadcrumbs');
jest.mock('../../loading/LoadingIndicator', () => () => 'LoadingIndicator');

const createTestProps = (propOverrides) => ({
	isLoadingIconVisible: false,
	...propOverrides
});
describe('rendering', () => {
	describe('snapshots', () => {
		it('should render valid snapshot', () => {
			const props = createTestProps();
			const jsx = <BreadcrumbWrapper {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
		it('should render valid snapshot when loading icon visible', () => {
			const props = createTestProps({
				isLoadingIconVisible: true
			});
			const jsx = <BreadcrumbWrapper {...props} />;
			const element = shallow(jsx);
			expect(element).toMatchSnapshot();
		});
	});
	describe('content', () => {
		it('should pass props to child', () => {
			const props = createTestProps({
				'data-random': 'random'
			});
			const jsx = <BreadcrumbWrapper {...props} />;
			const element = shallow(jsx);
			const route = element.find('Route');
			expect(route).toHaveProp('data-random', 'random');
		});
		it('should display loading icon when isLoadingIconVisible is true', () => {
			const props = createTestProps({
				isLoadingIconVisible: true
			});
			const jsx = <BreadcrumbWrapper {...props} />;
			const element = shallow(jsx);
			const loadingIndicator = getSpecWrapper(element, 'header-loading-indicator');
			expect(loadingIndicator).toExist();
		});
		it('should hide loading icon when isLoadingIconVisible is false', () => {
			const props = createTestProps();
			const jsx = <BreadcrumbWrapper {...props} />;
			const element = shallow(jsx);
			const loadingIndicator = getSpecWrapper(element, 'header-loading-indicator');
			expect(loadingIndicator).not.toExist();
		});
	});
});
