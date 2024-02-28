import styled from 'styled-components';

const StyledAside = styled.aside`
	background-image: url('/assets/images/bg-main-mobile.png');
	background-repeat: no-repeat;
	background-size: cover;
	height: 240px;
	padding-inline: 16px;
	padding-top: 32px;
`;

const StyledFrontCard = styled.div`
	background-image: url('public/assets/images/bg-card-front.png');
	background-repeat: no-repeat;
	background-size: cover;
	width: 285px;
	height: 156.208px;
	color: #fff;
	position: absolute;
	top: 120px;
	padding: 20px;
`;

const StyledFrontCardImg = styled.img`
	width: 54px;
	height: auto;
	margin-bottom: 37px;
`;

const StyledFrontCardNumber = styled.span`
	font-size: 18px;
`;

const StyledFrontCardDiv = styled.div`
	font-size: 9px;
	text-transform: uppercase;
	letter-spacing: 1.286px;
	margin-top: 17px;
	display: flex;
	justify-content: space-between;
`;

const StyledBackCard = styled.div`
	background-image: url('public/assets/images/bg-card-back.png');
	background-repeat: no-repeat;
	background-size: cover;
	width: 285px;
	height: 156.208px;
	margin-left: auto;
	position: relative;
`;

const StyledBackCardSpan = styled.span`
	position: absolute;
	right: 40px;
	top: 70px;
	color: #fff;
	text-align: right;
	font-size: 9px;
	font-weight: 500;
	letter-spacing: 1.286px;
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
