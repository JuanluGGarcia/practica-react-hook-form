// import { StyledCardBack, StyledCardFront, StyledContainerCards } from "./styles";

import {
	StyledCardBack,
	StyledCardBackCvcSpan,
	StyledCardFront,
	StyledCardFrontNumberSpan,
	StyledCardFrontDetails,
	StyledCardFrontNameSpan,
	StyledCardFrontMonthSpan,
	StyledCardFrontYearSpan,
	StyledCardsContainer
} from './styles';

// import {
// 	StyledAside,
// 	StyledBackCard,
// 	StyledBackCardSpan,
// 	StyledFrontCard,
// 	StyledFrontCardDiv,
// 	StyledFrontCardImg,
// 	StyledFrontCardNumber
// } from './styles';

const Cards = ({ formValues }) => {
	return (
		<StyledCardsContainer>

			<StyledCardBack>
				<StyledCardBackCvcSpan>000</StyledCardBackCvcSpan>
			</StyledCardBack>

			<StyledCardFront>
				<StyledCardFrontNumberSpan>
					0000 0000 0000 0000
				</StyledCardFrontNumberSpan>
				<StyledCardFrontDetails>
					<StyledCardFrontNameSpan>Jane Appleseed</StyledCardFrontNameSpan>
					<div>
						<StyledCardFrontMonthSpan>00</StyledCardFrontMonthSpan>
						<span>/</span>
						<StyledCardFrontYearSpan>00</StyledCardFrontYearSpan>
					</div>
				</StyledCardFrontDetails>
			</StyledCardFront>
		</StyledCardsContainer>
		// <StyledAside>
		// 	<StyledBackCard>
		// 		<StyledBackCardSpan>{formValues.card_cvc || '000'}</StyledBackCardSpan>
		// 	</StyledBackCard>
		// 	<StyledFrontCard>
		// 		<StyledFrontCardImg src='assets/images/card-logo.svg' alt='' />
		// 		<StyledFrontCardNumber>{formatCreditNumber(formValues.card_number) || '0000 0000 0000 0000'}</StyledFrontCardNumber>
		// 		<StyledFrontCardDiv>
		// 			<span>Jane Appleseed</span>
		// 			<span>00/00</span>
		// 		</StyledFrontCardDiv>
		// 	</StyledFrontCard>
		// </StyledAside>
	);
};

// const formatCreditNumber = creditCardNumber => {
// 	if (!creditCardNumber) return;
// 	return creditCardNumber.match(/.{1,4}/g).join(' ');
// };

export default Cards;
