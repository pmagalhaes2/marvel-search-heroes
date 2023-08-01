import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > img {
    max-width: 80%;
  }
`;

export const Content = styled(Header)`
  padding: 2rem 5rem;
  margin: 0 5%;

  @media (max-width: 1100px) {
    padding: 2rem 0;
    margin: 0 auto;
    align-items: center;
    text-align: center;
  }
`;

export const CharacterContainer = styled.div`
  border-radius: 10px;
  width: 100%;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  background-color: ${({ theme }) => theme.COLORS["soft-green"]};

  img {
    border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
    width: 40%;
  }

  > img {
    width: 25rem;
    height: 25rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    row-gap: 1rem;
    margin: 0 auto;

    > img {
      display: none;
    }
  }
`;

export const DetailsContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: justify;
  gap: 2rem;

  h1 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.COLORS.grey};
    font-weight: ${({ theme }) => theme.FONTWEIGHT.bold};
  }

  button {
    width: 5rem;
    height: 2rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.red};
    color: ${({ theme }) => theme.COLORS.white};
    border-radius: 6px;
    box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
    font-weight: ${({ theme }) => theme.FONTWEIGHT.bold};
    border: ${({ theme }) => `1px solid ${theme.COLORS.red}`};

    &:hover {
      background-color: ${({ theme }) => theme.COLORS["medium-red"]};
    }
  }

  @media (max-width: 1100px) {
    padding: 2rem 0;
    width: 100%;
    align-items: center;
  }
`;

// <!-- HTML !-->
// <button class="button-3" role="button">Button 3</button>

// /* CSS */
// .button-3 {
//   appearance: none;
//   background-color: #2ea44f;
//   border: 1px solid rgba(27, 31, 35, .15);
//   border-radius: 6px;
//   box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
//   box-sizing: border-box;
//   color: #fff;
//   cursor: pointer;
//   display: inline-block;
//   font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
//   font-size: 14px;
//   font-weight: 600;
//   line-height: 20px;
//   padding: 6px 16px;
//   position: relative;
//   text-align: center;
//   text-decoration: none;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   vertical-align: middle;
//   white-space: nowrap;
// }

// .button-3:focus:not(:focus-visible):not(.focus-visible) {
//   box-shadow: none;
//   outline: none;
// }

// .button-3:hover {
//   background-color: #2c974b;
// }

// .button-3:focus {
//   box-shadow: rgba(46, 164, 79, .4) 0 0 0 3px;
//   outline: none;
// }

// .button-3:disabled {
//   background-color: #94d3a2;
//   border-color: rgba(27, 31, 35, .1);
//   color: rgba(255, 255, 255, .8);
//   cursor: default;
// }

// .button-3:active {
//   background-color: #298e46;
//   box-shadow: rgba(20, 70, 32, .2) 0 1px 0 inset;
// }

export const InfosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 50%;
  justify-content: space-between;
  align-items: flex-start;
  font-weight: ${({ theme }) => theme.FONTWEIGHT.bold};
  font-size: 0.875rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    width: fit-content;
  }

  @media (max-width: 1100px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;

export const ComicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 2rem;

  h3 {
    color: ${({ theme }) => theme.COLORS.grey};
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 3rem;
    justify-items: flex-start;
    max-width: 100%;

    > div {
      width: min-content;
    }

    @media (max-width: 1100px) {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      row-gap: 1rem;
      width: 100%;

      > div {
        width: 100%;
        align-items: center;
      }
    }
  }

  p {
    color: ${({ theme }) => theme.COLORS.grey};
  }
`;
