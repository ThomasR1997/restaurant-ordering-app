import {
  AppDiv,
  BackgroundDiv,
  BuyButton,
  CartDiv,
  FlexBox,
  MarginDiv,
  MenuDiv,
  ModalDiv,
  OrderDiv,
  ProductDiv,
  ProductName,
  ProductPrice,
  RemoveButton,
  StyledButton,
  StyledDiv,
  StyledH1,
  StyledImg,
  StyledInput,
  StyledP,
  StyledText,
  StyledTitle,
  ThanksDiv,
} from "../../components/StyledComponents";

// Library for random id
import { v4 as uuidv4 } from "uuid";

import pizza from "../../images/pizza.png";
import burger from "../../images/burger.png";
import beer from "../../images/beer.png";
import { useState } from "react";

export const LandingPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState("");

  // Handlers for products
  // Stores product,price and id array in a state
  const handlePizza = () => {
    setCartItems([...cartItems, { product: "Pizza", price: 14, id: uuidv4() }]);
  };

  const handleBurger = () => {
    setCartItems([
      ...cartItems,
      { product: "Hamburger", price: 12, id: uuidv4() },
    ]);
  };

  const handleBeer = () => {
    setCartItems([...cartItems, { product: "Beer", price: 12, id: uuidv4() }]);
  };

  // Styles for components
  const handleOrder = () => {
    document.getElementById("showModal").style.display = "block";

    // Im stupid and could't get styling with classnames to work, so I used a bunch of id's
    document.getElementById("brightness").style.filter = "brightness(50%)";
    document.getElementById("brightness1").style.filter = "brightness(50%)";
    document.getElementById("brightness2").style.filter = "brightness(50%)";
    document.getElementById("brightness3").style.filter = "brightness(50%)";
    document.getElementById("brightness4").style.filter = "brightness(50%)";
    document.getElementById("brightness5").style.filter = "brightness(50%)";
  };

  const handlePay = (e) => {
    // prevents my form from refreshing the website
    e.preventDefault();

    // sets cartItems to an empty array
    setCartItems([]);

    // Styling for various components
    document.getElementById("showModal").style.display = "none";

    document.getElementById("brightness").style.filter = "brightness(100%)";
    document.getElementById("brightness1").style.filter = "brightness(100%)";
    document.getElementById("brightness2").style.filter = "brightness(100%)";
    document.getElementById("brightness3").style.filter = "brightness(100%)";
    document.getElementById("brightness4").style.filter = "brightness(100%)";
    document.getElementById("brightness5").style.filter = "brightness(100%)";

    document.getElementById("thanks").style.display = "block";

    // Gets name from input field
    setName(document.getElementById("yourName").value);
  };

  // Gets total price of selected products
  const initialValue = 0;
  const total = cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialValue
  );

  const totalPrice = total.toFixed(2);

  // Removes selected item from array
  const removeItem = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);

    setCartItems(newCartItems);
  };

  return (
    <MarginDiv>
      <AppDiv>
        <BackgroundDiv id="brightness">
          <StyledTitle>Jimmy's Diner</StyledTitle>
          <StyledText>The best burgers and pizzas in town.</StyledText>
        </BackgroundDiv>
        <MenuDiv id="brightness1">
          <FlexBox>
            <StyledImg src={pizza} alt="pizza" />

            <ProductDiv>
              <h2>Pizza</h2>
              <StyledP>pepperoni, mushroom, mozarella</StyledP>
              <h3>$14</h3>
            </ProductDiv>
          </FlexBox>

          <StyledButton onClick={() => handlePizza()}>+</StyledButton>
        </MenuDiv>
        <MenuDiv id="brightness2">
          <FlexBox>
            <StyledImg src={burger} alt="burger" />

            <ProductDiv>
              <h2>Hamburger</h2>
              <StyledP>beef, cheese, lettuce</StyledP>
              <h3>$12</h3>
            </ProductDiv>
          </FlexBox>

          <StyledButton onClick={() => handleBurger()}>+</StyledButton>
        </MenuDiv>
        <MenuDiv id="brightness3">
          <FlexBox>
            <StyledImg src={beer} alt="beer" />

            <ProductDiv>
              <h2>Beer</h2>
              <StyledP>grain, hops, yeast, water</StyledP>
              <h3>$12</h3>
            </ProductDiv>
          </FlexBox>

          <StyledButton onClick={() => handleBeer()}>+</StyledButton>
        </MenuDiv>

        <OrderDiv id="brightness4">
          {cartItems &&
            cartItems.map((item, index) => {
              return (
                <CartDiv key={index}>
                  <FlexBox>
                    <ProductName>{item.product}</ProductName>
                    <RemoveButton onClick={() => removeItem(item.id)}>
                      remove
                    </RemoveButton>
                  </FlexBox>

                  <ProductPrice>${item.price}</ProductPrice>
                </CartDiv>
              );
            })}
          <CartDiv total>
            <h2>Total price:</h2>

            <h3>${totalPrice}</h3>
          </CartDiv>
          <BuyButton onClick={() => handleOrder()}>Complete order</BuyButton>
        </OrderDiv>

        <ModalDiv id="showModal">
          <StyledH1>Enter card details</StyledH1>
          <form onSubmit={(e) => handlePay(e)}>
            <StyledInput
              id="yourName"
              placeholder="Enter your name"
              type="text"
              required
            />
            <br />
            <StyledInput
              placeholder="Enter card number"
              type="number"
              required
            />
            <br />
            <StyledInput placeholder="Enter CVV" type="number" required />
            <br />
            <BuyButton>Pay</BuyButton>
          </form>
        </ModalDiv>
        <ThanksDiv id="brightness5">
          <StyledDiv id="thanks">
            <h2>Thanks, {name}! Your order is on its way!</h2>
          </StyledDiv>
        </ThanksDiv>
      </AppDiv>
    </MarginDiv>
  );
};
