import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  position: fixed;
  width: 100%;
  top: 0px;
  color: white;
  transition: all 0.1s;
  z-index: 2;
  pointer-events: default;

  hr {
    height: 16px;
    border: 1px solid white;
  }
  ul {
    display: flex;
    list-style: none;
    /* gap: 32px; */
    padding: 14px;
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
  ${({ persist }) =>
    persist &&
    `
    background-color: white;
    color: black;
    hr {
      border: 1px solid black;
    }
  `}
  &:hover {
    background-color: white;
    color: black;
    hr {
      border: 1px solid black;
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
  h3 {
    cursor: pointer;
  }
  ul {
    min-height: 300px;
    list-style: none;
    text-align: left;
    flex-grow: 1;
    flex-wrap: wrap;
    min-width: 178px;
  }
  hr {
    border: 3px solid rgba(15, 15, 15, 0.1);
    width: 100%;
    margin: 8px 0px 32px;
  }
  li {
    height: 31px;
    margin-bottom: 12px;
    letter-spacing: 0.1px;
    font-size: 14px;
    font-family: "Gotham-Light", sans-serif;
    &:hover {
      font-family: "Gotham-Medium", sans-serif;
      letter-spacing: 0px;
      /* letter-spacing: -0.01px; */
    }
  }
`;

export const Indicator = styled.div`
  position: absolute;
  height: ${({ setting }) => `${setting.height}px`};
  width: ${({ setting }) => `${setting.width}px`};
  transform: translateX(${({ setting }) => `${setting.posX}px`});
  z-index: -1;
  transition: ${({ setting }) =>
    setting.initial ? "all 0.7s cubic-bezier(0.75, 0, 0, 1)" : "none"};
  border-radius: 10px;
  background-color: rgba(15, 15, 15, 0.1);
`;
