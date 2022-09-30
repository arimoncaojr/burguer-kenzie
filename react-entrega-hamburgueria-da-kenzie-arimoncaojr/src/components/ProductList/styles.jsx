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
  }
  header .div-menu {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
  }
  header img {
    margin-left: 18.5rem;
  }
`;

export const ContainerProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 50%;
  gap: 10px;
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

  ul {
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

  button {
    border: transparent;
    border-radius: 8px;
    width: var(--button-width-default);
    height: var(--button-height-default);
    background-color: var(--color-primary);
    color: var(--color-white);
    font-size: var(--font-text-2);
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
