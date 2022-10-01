import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--grey-4);
    width: 100%;
    height: 5rem;
    position: fixed;

    @media (max-width: 1087px) {
      height: 8rem;
    }
  }
  header .div-menu {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 1087px) {
      flex-wrap: nowrap;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }
  }
  header img {
    margin-left: 18.5rem;
    cursor: pointer;

    @media (min-width: 768px) {
      :hover {
        -webkit-animation: swing 1s ease;
        animation: swing 1s ease;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
      }
    }

    @media (max-width: 1088px) {
      margin-left: unset;
    }
  }
`;

export const ContainerProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 50%;
  gap: 10px;

  @media (max-width: 1087px) {
    display: flex;
    flex-wrap: unset;
    justify-content: flex-start;
    overflow-x: scroll;
    width: 90%;
  }
  .loader {
    animation: is-rotating 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: #51d4db;
    height: 50px;
    width: 50px;

    @keyframes is-rotating {
      to {
        transform: rotate(1turn);
      }
    }
    @media (max-width: 1087px) {
      display: none;
    }
  }

  h1 {
    font-size: var(--font-title-1);
    font-weight: var(--font-weight-1);
  }
`;

export const ContainerSecondary = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 10rem;
`;

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1088px) {
    width: 90%;
  }
  .div-title {
    display: flex;
    align-items: center;
    border-radius: 5px 5px 0px 0px;
    background-color: var(--color-primary);
    height: 4.063rem;
  }
  h2 {
    margin-left: 1rem;
    color: var(--color-white);
    font-size: var(--font-title-3);
    font-weight: var(--font-weight-1);
  }
  .div-infos {
    display: flex;
    gap: 15px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 22.813rem;
    background-color: var(--grey-4);
    border-radius: 0px 0px 5px 5px;
    height: 9.875rem;

    @media (max-width: 1088px) {
      width: 100%;
    }
  }
  h3 {
    font-size: var(--font-title-3);
    color: var(--grey-1);
    font-weight: var(--font-weight-1);
  }
  span {
    font-size: var(--font-text-2);
    color: var(--grey-2);
  }
`;

export const ListedsOnCart = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 22.813rem;
  background-color: var(--grey-4);
  height: 19.188rem;
  animation: slideDown 2s;
  @keyframes slideDown {
    0% {
      display: none;
    }
    15% {
      margin-top: 50px;
    }
    50% {
      margin-top: 20px;
    }
    100% {
      margin-top: 0px;
    }
  }
  @media (max-width: 1088px) {
    width: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
  }
`;

export const TotalValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 22.813rem;
  height: 9.875rem;
  border-radius: 0px 0px 5px 5px;
  border-top: 2px solid var(--grey-3);
  background-color: var(--grey-4);
  animation: slide 2s;
  @keyframes slide {
    0% {
      display: none;
    }
    15% {
      margin-top: 50px;
    }
    50% {
      margin-top: 20px;
    }
    100% {
      margin-top: 0px;
    }
  }
  @media (max-width: 1088px) {
    width: 100%;
  }

  div {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
  div p {
    font-size: var(--font-text-2);
    font-weight: var(--font-weight-2);
  }
  div p + p {
    color: var(--grey-2);
  }
  button {
    width: 21.438rem;
    height: 3.75rem;
    border: transparent;
    background-color: var(--grey-3);
    color: var(--grey-2);
    border-radius: 8px;
    margin-bottom: 1rem;
    font-size: var(--font-text-1);
    font-weight: var(--font-weight-2);
    @media (max-width: 1088px) {
      width: 95%;
    }

    @media (min-width: 768px) {
      :hover {
        transition: 0.5s ease-in;
        background-color: #b9b8b8;
        -webkit-animation: swing 1s ease;
        animation: swing 1s ease;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
      }
    }
  }
`;

export const ContainerInBtn = styled.form`
  display: flex;
  align-items: center;
  gap: 40px;
  border: 2px solid
    ${(props) => (props.focus ? "var(--grey-1)" : "var(--grey-3)")};
  border-radius: 8px;
  background-color: var(--color-white);
  width: var(--input-width-default);
  margin-right: 17rem;

  @media (max-width: 1088px) {
    margin-right: unset;
  }

  button {
    border: transparent;
    border-radius: 8px;
    width: var(--button-width-default);
    height: var(--button-height-default);
    background-color: var(--color-primary);
    color: var(--color-white);
    font-size: var(--font-text-2);

    @media (min-width: 768px) {
      :hover {
        transition: 0.5s ease-in;
        background-color: #005a26;
        -webkit-animation: swing 1s ease;
        animation: swing 1s ease;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
      }
    }
  }

  input {
    border: transparent;
    height: var(--input-height-default);
    border-radius: 8px;
    border: 2px solid transparent;
    padding: 0px 10px 0px 15px;
    outline: none;
  }

  input::placeholder {
    font-size: var(--font-text-1);
    color: var(--grey-3);
  }
`;
