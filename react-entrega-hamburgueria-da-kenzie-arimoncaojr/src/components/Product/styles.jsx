import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: var(--card-width-default);
  height: var(--card-height-default);
  border-radius: 5px;
  border: 2px solid var(--grey-3);
  gap: 15px;

  .div-img {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-4);
    width: var(--card-width-default);
    height: 9.375rem;
    border-radius: 2px 2px 0px 0px;
  }
  img {
    height: 100%;
  }
  .div-infos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    margin-left: 1rem;
  }
  .div-infos h2 {
    font-size: var(--font-title-3);
    font-weight: var(--font-weight-1);
  }
  .div-infos span {
    font-size: var(--font-text-3);
    color: var(--grey-2);
  }
  .div-infos p {
    font-size: var(--font-text-2);
    font-weight: var(--font-weight-2);
    color: var(--color-primary);
  }
  .div-infos button {
    border: transparent;
    border-radius: 8px;
    width: var(--button-width-default);
    height: var(--button-height-default);
    background-color: var(--color-primary);
    color: var(--color-white);
    font-size: var(--font-text-2);

    @media (min-width: 768px) {
      :hover {
        background-color: #005a26;
      }
    }
  }
`;
