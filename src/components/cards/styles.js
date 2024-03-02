import styled from 'styled-components';

const StyledCardsContainer = styled.div`
	padding: 2rem;
	position: relative;
	/* background-color: orange; */
	margin-bottom: 140px;

	@media screen and (min-width: 900px) {
		height: 100vh;
		width: 50%;
		margin: 0;
		/* padding: 3rem; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
const StyledCardFront = styled.div`
	background-image: url(/assets/images/bg-card-front.png);
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 21rem;
	max-width: 25rem;
	height: 12rem;
	border-radius: 10px;
	color: #fff;
	position: absolute;
	padding: 32px;
	left: 1rem;
	top: 150px;

	@media screen and (min-width: 900px) {
		left: 8rem;
		top: 80px;
	}
`;

const StyledCardFrontLogo = styled.img`
	position: absolute;
	top: 1.6875rem;
	left: 1.6875rem;
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

const StyledCardBack = styled.div`
	background-image: url(/assets/images/bg-card-back.png);
	background-size: cover;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	/* width: inherit; */
	width: 21rem;
	max-width: 25rem;
	height: 12rem;
	border-radius: 10px;
	color: #fff;
	position: relative;
	padding: 32px;
	left: 1rem;

	@media screen and (min-width: 900px) {
		top: 120px;
		left: 4rem;
	}
`;

const StyledCardBackCvcSpan = styled.span`
	position: absolute;
	right: 3rem;
	top: 5rem;
	font-size: 1.5rem;
`;

const StyledCardFrontNameSpan = styled.span``;
const StyledCardFrontMonthSpan = styled.span``;
const StyledCardFrontYearSpan = styled.span``;

export {
	StyledCardsContainer,
	StyledCardFront,
	StyledCardFrontLogo,
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
