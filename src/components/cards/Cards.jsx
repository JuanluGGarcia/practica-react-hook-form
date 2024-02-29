// import { StyledCardBack, StyledCardFront, StyledContainerCards } from "./styles";

import {
	StyledAside,
	StyledBackCard,
	StyledBackCardSpan,
	StyledFrontCard,
	StyledFrontCardDiv,
	StyledFrontCardImg,
	StyledFrontCardNumber
} from './styles';

const Cards = ({ formValues }) => {
	return (
		<StyledAside>
			<StyledBackCard>
				<StyledBackCardSpan>{formValues.card_cvc || '000'}</StyledBackCardSpan>
			</StyledBackCard>
			<StyledFrontCard>
				<StyledFrontCardImg src='assets/images/card-logo.svg' alt='' />
				<StyledFrontCardNumber>{formatCreditNumber(formValues.card_number) || '0000 0000 0000 0000'}</StyledFrontCardNumber>
				<StyledFrontCardDiv>
					<span>Jane Appleseed</span>
					<span>00/00</span>
				</StyledFrontCardDiv>
			</StyledFrontCard>
		</StyledAside>

		
	);
};

const formatCreditNumber = creditCardNumber => {
	if (!creditCardNumber) return;
	return creditCardNumber.match(/.{1,4}/g).join(' ');
};

export default Cards;
