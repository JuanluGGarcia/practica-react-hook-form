import styled from 'styled-components';

const StyledCardsContainer = styled.div`
	/* background-image: url('/assets/images/bg-main-mobile.png'); */
	background-repeat: no-repeat;
	width: 100%;
	background-size: 100% 15.375rem;
	padding: 1.5rem 2rem;
	margin-bottom: 0;

	@media screen and (min-width: 750px) {
	}
`;
const StyledCardFront = styled.div`
	background-image: url(/assets/images/bg-card-front.png);
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	max-width: 25rem;
	height: 12rem;
	border-radius: 10px;
	color: #fff;
	position: relative;
	padding: 2rem;
	top: -5.5rem;
	right: 1rem;

	&::after {
		content: url(/assets/images/card-logo.svg);
		position: absolute;
		top: 1.6875rem;
		left: 1.6875rem;
	}

	@media screen and (max-width: 46.875rem) {
	}
`;

const StyledCardFrontNumberSpan = styled.span`
	font-size: 1rem;
	font-weight: bold;
	letter-spacing: 4px;
	margin-bottom: 10px;
`;

const StyledCardFrontDetails = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	word-spacing: 6px;
`;

const StyledCardFrontNameSpan = styled.span``;
const StyledCardFrontMonthSpan = styled.span``;
const StyledCardFrontYearSpan = styled.span``;

const StyledCardBack = styled.div`
	background-image: url(/assets/images/bg-card-back.png);
	background-size: contain;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: end;
	max-width: 25rem;
	height: 12rem;
	border-radius: 10px;
	color: #fff;
	position: relative;
	padding: 3rem;
	top: 0;
	left: 1rem;

	@media screen and (max-width: 46.875rem) {
		/* margin: 1rem 2rem 1rem auto; */
		/* position: absolute; */
		/* width: inherit; */
		/* z-index: 10; */
		/* top: 10rem; */
	}
`;

const StyledCardBackCvcSpan = styled.span`
	/* position: absolute;
	right: 3.75rem;
	top: 6.8125rem;
	font-size: 1.5rem; */
`;

export {
	StyledCardsContainer,
	StyledCardFront,
	StyledCardFrontNumberSpan,
	StyledCardFrontDetails,
	StyledCardFrontNameSpan,
	StyledCardFrontMonthSpan,
	StyledCardFrontYearSpan,
	StyledCardBack,
	StyledCardBackCvcSpan
};

// const StyledAside = styled.aside`
// 	background-image: url('/assets/images/bg-main-mobile.png');
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	height: 15rem;
// 	padding-inline: 1rem;
// 	padding-top: 2rem;
// 	margin-bottom: 4rem;
// 	@media screen and (min-width: 40.625rem) {
// 		background-image: url('/assets/images/bg-main-desktop.png');
// 		background-repeat: no-repeat;
// 		background-size: cover;
// 		height: 100vh;
// 		width: 100%;
// 	}
// `;

// const StyledBackCard = styled.div`
// 	background-image: url('public/assets/images/bg-card-back.png');
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	width: 21.25rem;
// 	height: 11.75rem;
// 	margin-left: auto;
// 	position: relative;
// 	border-radius: 8px;

// 	@media screen and (min-width: 40.625rem) {
// 		/* width: 21.25rem;
// 		height: 11.75rem; */
// 	}
// `;

// const StyledFrontCard = styled.div`
// 	background-image: url('public/assets/images/bg-card-front.png');
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	width: 21.25rem;
// 	height: 11.75rem;
// 	color: #fff;
// 	position: absolute;
// 	top: 8rem;
// 	padding: 1.25rem;
// 	border-radius: 8px;

// 	@media screen and (min-width: 40.625rem) {
// 		/* width: 20rem;
// 		height: 12rem; */
// 	}
// `;

// const StyledFrontCardImg = styled.img`
// 	width: 3.375rem;
// 	height: auto;
// 	margin-bottom: 2.3125rem;
// `;

// const StyledFrontCardNumber = styled.span`
// 	display: block;
// 	font-size: 1.375rem;
// 	margin: 0 0 1rem;
// `;

// const StyledFrontCardName = styled.span`
// 	font-size: 1rem;
// `;

// const StyledFrontCardDate = styled.span`
// 	font-size: 1rem;
// `;

// const StyledFrontCardDiv = styled.div`
// 	font-size: 0.5625rem;
// 	text-transform: uppercase;
// 	letter-spacing: 0.0804rem;
// 	margin-top: 0 auto 32px;
// 	display: flex;
// 	justify-content: space-between;
// `;

// const StyledBackCardSpan = styled.span`
// 	position: absolute;
// 	right: 2.5rem;
// 	top: 4.375rem;
// 	color: #fff;
// 	text-align: right;
// 	font-size: 1.5rem;
// 	font-weight: 500;
// 	letter-spacing: 0.0804rem;
// 	text-transform: uppercase;
// `;

// export {
// 	StyledAside,
// 	StyledFrontCard,
// 	StyledFrontCardImg,
// 	StyledFrontCardNumber,
// 	StyledFrontCardName,
// 	StyledFrontCardDate,
// 	StyledFrontCardDiv,
// 	StyledBackCard,
// 	StyledBackCardSpan
// };
