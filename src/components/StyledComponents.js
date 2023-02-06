import styled from "styled-components";

import image1 from "../images/image.png";

///////////////////// default state styling //////////////////////

// Outer div for margin
export const MarginDiv = styled.div`
  margin: 4em;
`;

// Div containing the app
export const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Header background image
export const BackgroundDiv = styled.div`
  background-image: url(${image1});
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 31.25em;
  padding: 1.77em 6.25em;

  @media only screen and (max-width: 600px) {
    width: 15em;
  }

  @media only screen and (max-width: 440px) {
    width: 17em;
    padding: 1em 2em;
  }

  @media only screen and (max-width: 340px) {
    width: 15em;
    padding: 0.5em 1em;
  }
`;

// Header title
export const StyledTitle = styled.h1`
  color: white;
  margin: 0.25em;
  font-size: 39px;
`;

// Header text
export const StyledText = styled.p`
  color: white;
  margin-top: 0;
  font-size: 22px;
`;

// Div for menu product
export const MenuDiv = styled.div`
  background-color: white;
  border-bottom: gray solid 2px;
  padding: 1em 3em;
  width: 31.5em;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 600px) {
    width: 21.5em;
  }

  @media only screen and (max-width: 440px) {
    width: 15em;
  }

  @media only screen and (max-width: 340px) {
    width: 17em;
    padding: 0;
  }
`;

// Utility div for item placement
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

// Product image
export const StyledImg = styled.img`
  margin-right: 2em;
`;

// Div for product text, info and price
export const ProductDiv = styled.div`
  text-align: start;
`;

// For paragraph color
export const StyledP = styled.p`
  color: #8b8b8b;
`;

// Add to cart button styling
export const StyledButton = styled.button`
  border-radius: 50%;
  border: #dedede solid 2px;
  width: 2em;
  height: 2em;
  background-color: white;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
  }
`;

////////////////// Pre checkout state styling /////////////////////

// Div for containing your order
export const OrderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  @media only screen and (max-width: 600px) {
    width: 27.5em;
  }

  @media only screen and (max-width: 440px) {
    width: 21em;
  }

  @media only screen and (max-width: 340px) {
    width: 17em;
  }
`;

// Div for cart items placement
export const CartDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 3em;
  width: 31.5em;

  // prop for blackline over total price
  border-top: ${(props) => (props.total ? "2px solid black" : null)};

  @media only screen and (max-width: 600px) {
    width: 21.5em;
  }

  @media only screen and (max-width: 440px) {
    width: 15em;
  }

  @media only screen and (max-width: 340px) {
    width: 11em;
  }
`;

// Remove margin on product name & price
export const ProductName = styled.h2`
  margin: 0;
`;

export const ProductPrice = styled.h3`
  margin: 0;
`;

// Styling for the remove button
export const RemoveButton = styled.button`
  border: none;
  background-color: transparent;
  color: #8b8b8b;
  margin: 0 1em;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

// Styling for Complete order button
export const BuyButton = styled.button`
  background-color: #16db99;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  padding: 1em 2em;
  margin: 2em 0;
  width: 76%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
  }
`;

///////////////////// Checkout modal styling /////////////////////////

// Styling for modal div
export const ModalDiv = styled.div`
  background-color: white;
  width: 33em;
  border-radius: 5px;
  position: absolute;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  display: none;

  @media only screen and (max-width: 600px) {
    width: 21.5em;
  }

  @media only screen and (max-width: 440px) {
    width: 18em;
  }

  @media only screen and (max-width: 340px) {
    width: 15em;
  }
`;

// Title for modal
export const StyledH1 = styled.h1`
  font-size: 24px;
  margin: 1.5em;
`;

// Styling for modal inputs
export const StyledInput = styled.input`
  padding: 1em;
  width: 70%;
  margin: 0.5em;
  border-radius: 5px;

  -webkit-appearance: none;
  -moz-appearance: textfield;
`;

//////////////////// Order complete styling ///////////////////////

// Styling for bottom div
export const ThanksDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
  padding: 1em 4em;
  width: 29.5em;
  height: 12em;

  @media only screen and (max-width: 600px) {
    width: 21.5em;
    padding: 1em 3em;
  }

  @media only screen and (max-width: 440px) {
    width: 17em;
    padding: 1em 2em;
  }

  @media only screen and (max-width: 340px) {
    width: 15em;
    padding: 1em;
  }
`;

// Styling for order message
export const StyledDiv = styled.div`
  background-color: #ecfdf5;
  padding: 1em 4em;
  display: none;

  @media only screen and (max-width: 340px) {
    padding: 0.5em 1em;
  }
`;
