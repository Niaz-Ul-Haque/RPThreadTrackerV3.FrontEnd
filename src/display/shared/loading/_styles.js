import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

export default styled.div`
	@keyframes lds-spinner {
		0% {
		opacity: 1;
		}
		100% {
		opacity: 0;
		}
	}
	@-webkit-keyframes lds-spinner {
		0% {
		opacity: 1;
		}
		100% {
		opacity: 0;
		}
	}
	position: relative;
	& div {
		left: 94px;
		top: 48px;
		position: absolute;
		-webkit-animation: lds-spinner linear 1s infinite;
		animation: lds-spinner linear 1s infinite;
		background: ${colors.BASE_BLUE};
		width: 12px;
		height: 24px;
		border-radius: 40%;
		-webkit-transform-origin: 6px 52px;
		transform-origin: 6px 52px;
	}
	& div:nth-child(1) {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
		-webkit-animation-delay: -0.916666666666667s;
		animation-delay: -0.916666666666667s;
	}
	& div:nth-child(2) {
		-webkit-transform: rotate(30deg);
		transform: rotate(30deg);
		-webkit-animation-delay: -0.833333333333333s;
		animation-delay: -0.833333333333333s;
	}
	& div:nth-child(3) {
		-webkit-transform: rotate(60deg);
		transform: rotate(60deg);
		-webkit-animation-delay: -0.75s;
		animation-delay: -0.75s;
	}
	& div:nth-child(4) {
		-webkit-transform: rotate(90deg);
		transform: rotate(90deg);
		-webkit-animation-delay: -0.666666666666667s;
		animation-delay: -0.666666666666667s;
	}
	& div:nth-child(5) {
		-webkit-transform: rotate(120deg);
		transform: rotate(120deg);
		-webkit-animation-delay: -0.583333333333333s;
		animation-delay: -0.583333333333333s;
	}
	& div:nth-child(6) {
		-webkit-transform: rotate(150deg);
		transform: rotate(150deg);
		-webkit-animation-delay: -0.5s;
		animation-delay: -0.5s;
	}
	& div:nth-child(7) {
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg);
		-webkit-animation-delay: -0.416666666666667s;
		animation-delay: -0.416666666666667s;
	}
	& div:nth-child(8) {
		-webkit-transform: rotate(210deg);
		transform: rotate(210deg);
		-webkit-animation-delay: -0.333333333333333s;
		animation-delay: -0.333333333333333s;
	}
	& div:nth-child(9) {
		-webkit-transform: rotate(240deg);
		transform: rotate(240deg);
		-webkit-animation-delay: -0.25s;
		animation-delay: -0.25s;
	}
	& div:nth-child(10) {
		-webkit-transform: rotate(270deg);
		transform: rotate(270deg);
		-webkit-animation-delay: -0.166666666666667s;
		animation-delay: -0.166666666666667s;
	}
	& div:nth-child(11) {
		-webkit-transform: rotate(300deg);
		transform: rotate(300deg);
		-webkit-animation-delay: -0.083333333333333s;
		animation-delay: -0.083333333333333s;
	}
	& div:nth-child(12) {
		-webkit-transform: rotate(330deg);
		transform: rotate(330deg);
		-webkit-animation-delay: 0s;
		animation-delay: 0s;
	}
	& {
		width: 50px !important;
		height: 50px !important;
		-webkit-transform: translate(-25px, -25px) scale(0.25) translate(25px, 25px);
		transform: translate(-25px, -25px) scale(0.25) translate(25px, 25px);
	}
	&.invert div {
		background: ${colors.WHITE};
	}

	.light-theme &.invert div {
		background: ${colors.DARK_BLUE}
	}
`;