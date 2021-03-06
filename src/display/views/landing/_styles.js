import styled from 'styled-components';
import colors from '../../../infrastructure/constants/colors';

export default styled.div`
	width: 100%;
	height: 100%;
	font-family: 'Nunito Sans', sans-serif;
	overflow-x: hidden !important;
	position: relative;
	color: #eee;
	a,
	a:hover,
	a:focus,
	button {
		text-decoration: none !important;
		outline: none !important;
	}
	p {
		font-size: 15px;
		line-height: 24px;
	}
	.h1,
	h1 {
		font-size: 36px;
	}
	.h2,
	h2 {
		font-size: 30px;
	}
	.h4,
	h4 {
		font-size: 18px;
	}
	.h5,
	h5 {
		font-size: 14px;
	}
	.h6,
	h6 {
		font-size: 12px;
	}
	/*====================
  2.Helper
  ===================*/
	.margin-t-20 {
		margin-top: 20px;
	}
	.margin-t-30 {
		margin-top: 30px;
	}
	.margin-t-50 {
		margin-top: 50px;
	}
	.margin-b-0 {
		margin-bottom: 0px;
	}
	.padding-t-15 {
		padding-top: 15px;
	}
	.padding-t-30 {
		padding-top: 30px;
	}
	.padding-b-10 {
		padding-bottom: 10px;
	}
	.height-100vh {
		height: 100vh;
	}
	.vertical-content {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flexbox;
		display: flex;
		align-items: center;
		-webkit-align-items: center;
		justify-content: center;
		-webkit-justify-content: center;
		flex-direction: row;
		-webkit-flex-direction: row;
	}
	.bg-overlay {
		/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#e4f5fc+0,bfe8f9+50,9fd8ef+51,2ab0ed+100;Blue+Gloss+%235 */
		background: #757586;
		/* Old browsers */
		background: -moz-linear-gradient(45deg, #9696a5 0%, #757584 40%, #595968 51%, #3f3f42 100%);
		/* FF3.6-15 */
		background: -webkit-linear-gradient(
			45deg,
			#9696a5 0%,
			#757584 40%,
			#595968 51%,
			#3f3f42 100%
		);
		/* Chrome10-25,Safari5.1-6 */
		background: linear-gradient(45deg, #9696a5 0%, #757584 40%, #595968 51%, #3f3f42 100%);
		/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e4f5fc', endColorstr='#2ab0ed', GradientType=1);
		/* IE6-9 fallback on horizontal gradient */
		position: absolute;
		height: 100%;
		width: 100%;
		right: 0;
		bottom: 0;
		left: 0;
		top: 0;
	}
	.bg-overlay-light {
		background-color: rgba(0, 0, 0, 0.5);
	}
	.section {
		padding-top: 80px;
		padding-bottom: 80px;
		position: relative;
	}
	.section-lg {
		padding: 100px 0;
	}
	.section-title-border {
		background-color: ${colors.BASE_BLUE};
		width: 50px;
		height: 2px;
		margin-right: auto;
		margin-left: auto;
	}
	.section-subtitle {
		letter-spacing: 0.02em;
	}
	iframe {
		max-width: 100%;
	}
	/*----BACKGROUND COLOR-----*/
	.bg-custom {
		background-color: ${colors.BASE_BLUE};
	}
	.bg-gray {
		background-color: #f7f7f7;
	}
	.bg-white {
		background-color: #fff;
	}
	.bg-dark {
		background-color: #393f4f !important;
	}
	/*=====================
  4. Bootstrap Reset
  ======================*/
	/*--Text color--- */
	.text-muted {
		color: #898989 !important;
	}
	.text-white {
		color: #fff !important;
	}
	.text-custom {
		color: ${colors.BASE_BLUE} !important;
	}
	.text-gray {
		color: #777 !important;
	}
	.text-dark {
		color: #000 !important;
	}
	/*====Buttons=======*/
	.btn {
		padding: 10px 22px;
		box-shadow: none !important;
	}
	.btn-rounded {
		border-radius: 30px;
	}
	.btn-custom {
		background-color: ${colors.BASE_BLUE} !important;
		border: 1px solid ${colors.BASE_BLUE} !important;
		color: #fff;
		transition: all 0.3s;
		font-size: 14px;
	}
	.btn-custom:hover,
	.btn-custom:focus,
	.btn-custom:active,
	.btn-custom.active,
	.btn-custom.focus,
	.btn-custom:active,
	.btn-custom:focus,
	.btn-custom:hover,
	.open > .dropdown-toggle.btn-custom {
		background-color: ${colors.BASE_BLUE} !important;
		border: 1px solid ${colors.BASE_BLUE} !important;
		color: #f3f3f3 !important;
		transition: all 0.5s;
	}
	.btn-bg-white {
		background-color: #fff !important;
		transition: all 0.3s;
		border: 2px solid #fff;
		color: #000 !important;
		font-size: 14px;
	}
	.jumbotron-buttons {
		a {
			margin-right: 10px;
		}
		button svg {
			margin-left: 10px;
		}
	}
	/*======================
  5.Navbar
  ======================*/
	.navbar-custom {
		background: #272728;
		padding: 20px 0px;
		width: 100%;
		height: 90px;
		border-radius: 0px;
		z-index: 999;
		margin-bottom: 0px;
		-webkit-transition: all 0.5s ease-in-out;
		-moz-transition: all 0.5s ease-in-out;
		-o-transition: all 0.5s ease-in-out;
		transition: all 0.5s ease-in-out;
		-moz-box-shadow: 0 10px 33px rgba(0, 0, 0, 0.1);
		-webkit-box-shadow: 0 10px 33px rgba(0, 0, 0, 0.1);
		box-shadow: 0 10px 33px rgba(0, 0, 0, 0.1);
	}
	.sticky-wrapper {
		position: absolute;
		width: 100%;
	}
	.navbar-nav {
		margin-left: 50px;
		border-bottom: none;
	}
	.navbar-custom .navbar-brand {
		text-transform: uppercase;
		color: #fff !important;
		font-weight: 500;
		letter-spacing: 2px;
		height: auto;
	}
	.navbar-custom .navbar-nav li a:not(.btn) {
		color: rgba(255, 255, 255, 0.6);
		font-size: 15px;
		background-color: transparent !important;
		padding: 15px 0;
		margin: 0 10px;
		transition: all 0.4s;
	}
	.navbar-custom .navbar-nav li a:hover,
	.navbar-custom .navbar-nav li a:focus,
	.navbar-custom .navbar-nav li a:active {
		color: #fff;
	}
	.navbar-custom .navbar-nav li.active a {
		color: #fff;
	}
	.is-sticky .navbar-custom {
		margin-top: 0px;
		padding: 10px 0px;
		background-color: #272a33;
		-moz-box-shadow: 0 10px 33px rgba(0, 0, 0, 0.1);
		-webkit-box-shadow: 0 10px 33px rgba(0, 0, 0, 0.1);
		box-shadow: 0 10px 33px rgba(0, 0, 0, 0.1);
	}
	.navbar-toggle {
		font-size: 24px;
		margin-top: 0px;
		margin-bottom: 0px;
		color: #ffffff;
	}
	.navbar-custom .btn-custom {
		margin-top: 4px;
		margin-bottom: 4px;
	}
	.nav .open > a,
	.nav .open > a:focus,
	.nav .open > a:hover {
		background-color: transparent;
		border-color: #337ab7;
	}
	/*---Navbar-White--*/
	.navbar-custom.navbar-white {
		background-color: #fff;
		padding: 10px 0;
		box-shadow: 0 10px 33px rgba(0, 0, 0, 0.1);
	}
	.navbar-custom.navbar-white .navbar-nav li.active a,
	.navbar-custom.navbar-white .navbar-nav li a:hover,
	.navbar-custom.navbar-white .navbar-nav li a:focus,
	.navbar-custom.navbar-white .navbar-nav li a:active {
		color: ${colors.BASE_BLUE} !important;
	}
	.navbar-custom.navbar-white .navbar-nav li a,
	.navbar-custom.navbar-white .navbar-brand,
	.navbar-white .navbar-toggle {
		color: #393f4f !important;
	}
	/*=======================================
          6.HOME 
  =====================================*/
	.bg-home {
		background-color: #393f4f;
	}
	.home-title {
		font-size: 48px;
		line-height: 68px;
	}
	.display-table-cell {
		display: table-cell;
		vertical-align: middle;
	}
	.display-table {
		display: table;
		width: 100%;
		height: 100%;
	}
	.home-up {
		z-index: 10;
		position: relative;
	}
	.play-btn {
		border: 2px solid ${colors.BASE_BLUE};
		border-radius: 50%;
		color: ${colors.BASE_BLUE} !important;
		width: 60px;
		height: 60px;
		display: block;
		font-size: 30px;
		margin-right: auto;
		margin-left: auto;
		line-height: 60px;
		margin-top: 10px;
		text-align: center;
	}
	.play-shadow {
		border-radius: 50%;
		border: 1px solid #585e6b;
		width: 82px;
		height: 82px;
		margin: 20px auto;
	}
	.home-desc {
		color: rgba(255, 255, 255, 0.7);
		font-size: 15px;
		max-width: 600px;
		margin: 0 auto;
	}
	/*----Demo 2 half screen ----*/
	.home-half {
		padding-bottom: 150px;
		padding-top: 220px;
	}
	/*-------Demo 3 Rgistartion form ------*/
	.home-registration-form .form-heading {
		margin-bottom: 25px;
	}
	.home-registration-form {
		padding: 15px 32px 32px 32px;
		border-radius: 3px;
		box-shadow: 0px 0px 3px 0px #000000;
	}
	.home-subtitle-width-100 {
		max-width: 100%;
	}
	.small-text {
		font-size: 14px;
	}
	.home-btn-width {
		width: 100%;
	}
	/*----Demo 4 Dashboard image ----*/
	.home-cell-bottom {
		display: table-cell;
		vertical-align: bottom;
	}
	.home-padding-t-120 {
		padding-top: 120px;
	}
	/*---Demo 5 Subscribe -----*/
	.subscribe-form input {
		padding: 15px 20px;
		width: 100%;
		font-size: 17px;
		color: #4c5667 !important;
		border: none;
		outline: none !important;
		padding-right: 180px;
		padding-left: 30px;
		background-color: rgba(255, 255, 255, 0.85);
		border-radius: 30px;
	}
	.subscribe-form button {
		position: absolute;
		text-transform: uppercase;
		top: 6px;
		right: 8px;
		outline: none !important;
		border-radius: 30px;
		font-size: 16px;
		padding: 9px 30px;
	}
	.subscribe-form form {
		position: relative;
		max-width: 600px;
		margin: 0px auto;
	}
	/*----Demo 8 Home with video --------*/
	.frame-border {
		border: 9px solid rgba(0, 0, 0, 0.3);
		-webkit-border-radius: 5px 5px 5px 5px;
		-moz-border-radius: 5px 5px 5px 5px;
		border-radius: 5px 5px 5px 5px;
	}
	/*---Demo 9 Animated ---*/
	.slidero {
		top: 50%;
		transform: translateY(-50%);
		position: absolute;
		z-index: 100;
		left: 0;
		right: 0;
	}
	/*------Demo Video Background--*/
	.display-table-cell .text-zindex {
		z-index: 9;
	}
	/*======================================
     7. SERVICES
========================================*/
	.services-box i {
		font-size: 48px;
	}
	.services-box {
		padding: 15px 10px;
	}
	/*=====================================
     8. ABOUT US
======================================*/
	.features-box h2 {
		margin-bottom: 25px;
		margin-top: 0;
	}
	.features-item-list li:before {
		content: '';
		border-radius: 50%;
		background-color: ${colors.BASE_BLUE};
		width: 7px;
		height: 7px;
		position: absolute;
		left: 0;
		top: 14px;
	}
	.features-item-list li {
		position: relative;
		line-height: 24px;
		font-size: 15px;
		padding: 7px 0 7px 20px;
	}
	.features-img {
		max-width: 800px;
		margin: 0 0 0 auto;
	}
	/*======================================
    9.  PRICING BOX
========================================*/
	.pricing-box {
		padding: 50px 40px 50px 40px;
		border: 2px solid #eee;
	}
	.pricing-box h4 {
		font-size: 15px;
	}
	.pricing-box h1 {
		font-size: 36px;
		padding-top: 5px;
	}
	.pricing-border {
		width: 100%;
		height: 1px;
		margin-top: 35px;
		background-color: #e4e4e4;
	}
	.price-active {
		box-shadow: 0px 0px 22px 2px #f7f7f7;
	}
	.plan-features p {
		padding-top: 5px;
	}
	/*======================================
         10. TEAM
========================================*/
	.team-box {
		border-bottom: 1px solid #e9e9e9;
	}
	.team-name {
		font-size: 16px;
		padding-top: 20px;
		margin-bottom: 7px;
	}
	.team-designation {
		font-size: 13px;
		color: #898989;
	}
	/*=======================================
     11. OUR PROCESS
=========================================*/
	.process-box i {
		font-size: 48px;
		line-height: 72px;
	}
	.plan-line:before {
		content: '';
		border: 1px dashed #e0e0e0;
		position: absolute;
		width: 67%;
		left: 65%;
		top: 50px;
	}
	.process-left-icon {
		content: '';
		position: absolute;
		top: 10px;
		background-color: #000;
		border-radius: 50%;
		height: 50px;
		width: 50px;
	}
	.process-left-icon-1 i,
	.process-left-icon-2 i {
		font-size: 35px;
		border-radius: 50%;
		position: absolute;
		top: 83px;
		color: #fff;
		z-index: 9;
		background-color: ${colors.BASE_BLUE};
	}
	.process-left-icon-1 i {
		left: 63%;
	}
	.process-left-icon-2 i {
		left: 30%;
	}
	/*=======================================
       12. People Says
=========================================*/
	.testimonial-box img {
		margin: -40px auto;
		height: 68px;
		width: 68px;
	}
	.testimonial-decs h5 {
		padding: 50px 25px 40px;
		line-height: 24px;
		font-style: italic;
	}
	/*======================================
    13. Contact
=======================================*/
	.form-control {
		margin-bottom: 20px;
		box-shadow: none !important;
		height: 50px;
		padding-left: 20px;
		border: 1px solid #e0e0e0;
	}
	.form-control:focus {
		border-color: #ccc;
	}
	textarea.form-control {
		height: auto;
	}
	.error {
		margin: 8px 0px;
		display: none;
		color: red;
	}
	#ajaxsuccess {
		font-size: 16px;
		width: 100%;
		display: none;
		clear: both;
		margin: 8px 0px;
	}
	.error_message {
		padding: 10px;
		background-color: rgba(244, 35, 103, 0.2);
		margin-bottom: 20px;
		text-align: center;
	}
	.contact-loader {
		display: none;
	}
	#success_page {
		text-align: center;
		margin-bottom: 50px;
	}
	#success_page h3 {
		color: #0dba26;
		font-size: 22px;
	}
	/*======================================
       14. FOOTER
========================================*/
	.social-icon {
		border: 4px solid rgba(255, 255, 255, 0.25);
		border-radius: 50%;
		color: rgba(255, 255, 255, 0.25) !important;
		width: 48px;
		height: 48px;
		display: block;
		font-size: 16px;
		line-height: 42px;
		text-align: center;
	}
	.cta {
		padding: 30px 0;
	}
	.social-icon:hover i {
		color: ${colors.BASE_BLUE};
		transition: all 0.5s;
	}
	.footer {
		padding: 50px 0;
	}
	.footer h5 {
		font-weight: 700;
	}
	.footer-list li a {
		color: #898989 !important;
		padding-top: 8px;
		display: inline-block;
		font-size: 14px;
	}
	.contact-title {
		font-size: 20px;
	}
	.contact-detail {
		padding-left: 25px;
		font-size: 12px;
	}
	.subscribe {
		position: relative;
		width: 100%;
		margin-top: 15px;
		margin-bottom: 25px;
	}
	.subscribe input {
		height: 40px;
		background-color: #f4f4f4 !important;
		box-shadow: none !important;
		border: none;
		padding-right: 50px;
	}
	.subscribe .submit {
		position: absolute;
		top: 0;
		right: 0;
		font-size: 20px;
		width: 50px;
		line-height: 45px;
		text-align: center;
		color: #acacac !important;
	}
	.footer-alt-border {
		background-color: #f5f5f5;
		height: 1px;
		width: 100%;
	}
	.footer-alt {
		padding: 30px 0;
	}
	.copy-rights {
		margin-bottom: 0;
		line-height: 36px;
	}
	/*=====================================
    15. RESPONSIVE
====================================*/
	@media (max-width: 1023px) {
		.navbar-custom .navbar-nav {
			margin-left: 0;
		}
		.home-half .slidero {
			top: 80%;
			transform: translateY(-50%);
			position: absolute;
			z-index: 100;
			left: 0;
			right: 0;
		}
		.home-half {
			padding-bottom: 100px;
			padding-top: 120px;
		}
		.home-padding-t-150 {
			padding-top: 110px;
		}
		.navbar-custom {
			margin-top: 0px;
			padding: 10px 0px !important;
			background-color: #272a33 !important;
			box-shadow: 0 10px 33px rgba(0, 0, 0, 0.1);
			color: #fff !important;
		}
		.navbar-white {
			margin-top: 0px;
			padding: 10px 0px !important;
			background-color: #fff !important;
			box-shadow: 0 10px 33px rgba(0, 0, 0, 0.1);
			color: #fff !important;
		}
		.navbar-white .navbar-toggler {
			color: #393f4f !important;
		}
		.navbar-custom .navbar-nav li a {
			transition: all 0.4s;
			margin: 0px;
		}
		.navbar-custom > .container-fluid {
			width: 100%;
		}
		.navbar-custom .navbar-nav li.active a {
			color: #fff !important;
			border-color: transparent;
		}
		.navbar-custom > .container {
			width: 90%;
		}
		.navbar-toggler {
			font-size: 24px;
			margin-top: 0px;
			margin-bottom: 0px;
			color: #fff !important;
		}
		.login-btn {
			padding-left: 10px;
		}
		.navbar-custom .navbar-brand {
			line-height: 24px;
		}
		.home-title {
			font-size: 32px;
			line-height: 48px;
		}
		.vertical-content {
			display: inherit;
		}
		.team-box {
			margin-top: 45px;
		}
		.footer-alt .float-none {
			float: none !important;
			text-align: center;
		}
		.features-img {
			margin-top: 30px;
		}
		.float-left.pull-none {
			float: none !important;
			text-align: center;
		}
		.float-right.pull-none {
			float: none !important;
			text-align: center;
		}
		.pricing-box {
			margin-top: 30px;
		}
	}
	@media (max-width: 991px) and (min-width: 200px) {
		.plan-line:before {
			content: '';
			display: none;
		}
		.process-left-icon-1 i,
		.process-left-icon-2 i {
			display: none;
		}
	}
	@media (max-width: 768px) {
		.social {
			margin-top: 0;
		}
		.social-icon {
			margin-bottom: 5px;
		}
		.testimonial-box {
			margin-top: 80px;
		}
		.contact-title {
			text-align: left;
		}
	}
	@media (max-height: 420px) {
		.navbar-collapse {
			max-height: 200px;
			overflow-y: auto;
		}
	}
	.light-theme & {
		background: ${colors.GRAY_900};
	}
`;
