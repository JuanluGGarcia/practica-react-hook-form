import styled from 'styled-components';

const StyledAside = styled.aside`
	background-image: url('/assets/images/bg-main-mobile.png');
	background-repeat: no-repeat;
	background-size: cover;
	height: 15rem;
	padding-inline: 1rem;
	padding-top: 2rem;
	margin-bottom: 4rem;
`;

const StyledBackCard = styled.div`
	background-image: url('public/assets/images/bg-card-back.png');
	background-repeat: no-repeat;
	background-size: cover;
	width: 17.8125rem;
	height: 9.8125rem;
	margin-left: auto;
	position: relative;
`;

const StyledFrontCard = styled.div`
	background-image: url('public/assets/images/bg-card-front.png');
	background-repeat: no-repeat;
	background-size: cover;
	width: 17.8125rem;
	height: 9.8125rem;
	color: #fff;
	position: absolute;
	top: 8rem;
	padding: 1.25rem;
`;

const StyledFrontCardImg = styled.img`
	width: 3.375rem;
	height: auto;
	margin-bottom: 2.3125rem;
`;

const StyledFrontCardNumber = styled.span`
	font-size: 1.125rem;
`;

const StyledFrontCardDiv = styled.div`
	font-size: .5625rem;
	text-transform: uppercase;
	letter-spacing: .0804rem;
	margin-top: 1.0625rem;
	display: flex;
	justify-content: space-between;
`;



const StyledBackCardSpan = styled.span`
	position: absolute;
	right: 2.5rem;
	top: 4.375rem;
	color: #fff;
	text-align: right;
	font-size: .5625rem;
	font-weight: 500;
	letter-spacing: .0804rem;
	text-transform: uppercase;
`;

export {
	StyledAside,
	StyledFrontCard,
	StyledFrontCardImg,
	StyledFrontCardNumber,
	StyledFrontCardDiv,
	StyledBackCard,
	StyledBackCardSpan
};

// import styled from 'styled-components';

// const StyledContainerCards = styled.div`
// 	position: relative;
// `;

// const StyledCardBack = styled.img`

// `;

// const StyledCardFront = styled.img`

// `;

// export { StyledContainerCards, StyledCardBack, StyledCardFront };
