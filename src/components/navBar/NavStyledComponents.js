import styled from "styled-components";

export const StyledNav = styled.nav`
  * {
    margin: 0;
    padding: 0;
    line-height: auto;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  position: fixed;
  width: 100%;
  padding: 5px;
  /* height: 48px; */
  top: 0px;
  color: white;
  transition: all 0.1s;
  z-index: 2;
  pointer-events: default;
  flex-wrap: wrap;
  svg {
    fill: white;
  }

  hr {
    height: 16px;
    border: 1px solid white;
  }
  ul {
    display: flex;
    list-style: none;
    /* gap: 32px; */
    padding: 0px 14px;
    align-items: center;
    gap: 16px;
    li {
      padding: 8px 10px;
      border-radius: 10px;
      cursor: pointer;
      pointer-events: default;
      font-size: 14px;
      font-weight: medium;
    }
  }
  .navLogo {
    padding-right: 20px;
    svg {
      height: 100%;
      width: 120px;
    }
  }
  input {
    color: white;
  }
  .navSearchBarLi {
    @media (max-width: 1200px) {
      display: none;
    }
  }
  .navCenter {
    @media (max-width: 1200px) {
      display: none;
    }
  }
  .navLeft {
    padding-right: 0px;
  }
  .navRight {
    padding-left: 0px;
  }
  ${({ persist, solidNav }) =>
    (persist || solidNav) &&
    `
    background-color: white;
    color: black;
    hr {
      border: 1px solid black;
    }
    svg {
      fill: black;
    }
    input{
        color: black;
    }
  `}
  &:hover {
    background-color: white;
    color: black;
    hr {
      border: 1px solid black;
    }
    svg {
      fill: black;
    }
    input {
      color: black;
    }
  }
`;

export const DropDownMenu = styled.div`
  position: fixed;
  padding: 80px;
  display: flex;
  width: 100%;
  background-color: white;
  transform: ${({ slide }) => (slide ? "translateY(0)" : "translateY(-150%)")};
  opacity: ${({ slide }) => (slide ? "1" : "0")};
  transition: all 0.5s;
  gap: 32px;
  z-index: 1;
  height: 489px;
  max-height: 50vh;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  h3 {
    cursor: pointer;
  }
  ul {
    /* min-height: 300px; */
    list-style: none;
    text-align: left;
    flex-grow: ${({ promo }) => (promo ? "0" : "1")};
    min-width: 178px;
    height: fit-content;
  }
  hr {
    border: none;
    background-color: rgba(15, 15, 15, 0.1);
    height: 6px;
    width: 100%;
    margin: 8px 0px 16px;
  }

  li {
    height: 31px;
    margin-bottom: 8px;
    letter-spacing: 0.1px;
    font-size: 14px;
    font-family: "Gotham-Light", sans-serif;
    cursor: pointer;
    &:hover {
      font-family: "Gotham-Medium", sans-serif;
      letter-spacing: 0px;
      /* letter-spacing: -0.01px; */
    }
  }
  .nav-drop-section-left {
    display: flex;
    gap: 16px;
    flex-grow: 1;
    flex-wrap: wrap;
    align-content: flex-start;
    min-height: 300px;
  }
  .nav-drop-section-promo {
    min-width: 30%;
    h2 {
      margin-top: 16px;
    }
  }
`;

export const Indicator = styled.div`
  position: absolute;
  height: ${({ setting }) => `${setting.height}px`};
  width: ${({ setting }) => `${setting.width}px`};
  transform: translateX(${({ setting }) => `${setting.posX}px`});
  @media (max-width: 389px) {
    transform: translateX(${({ setting }) => `${setting.posX}px`})
      translateY(${({ setting }) => `calc(-100% + ${setting.posY + 14}px)`});
  }
  z-index: -1;
  transition: ${({ setting }) =>
    setting.initial ? "all 0.5s cubic-bezier(0.55, 0, 0, 1)" : "none"};
  border-radius: 10px;
  background-color: rgba(15, 15, 15, 0.1);
`;

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  border: ${({ active }) => (active ? "1px solid #d6d7d8" : "none")};
  padding-right: 12px;
  border-radius: 32px;

  button {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    /* transform: translateX(-100%); */
  }
  input {
    background: none;
    outline: none;
    border: none;
    font-size: 14px;
    font-family: "Gotham-Medium", sans-serif;
    padding: 12px;
    width: ${({ active }) => (active ? "200px" : "0px")};
  }
`;
