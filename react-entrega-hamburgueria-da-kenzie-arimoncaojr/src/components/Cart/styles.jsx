import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 0.8rem;

  .container {
    display: flex;
    justify-content: space-between;
    width: 70%;
  }
`;

export const DivImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--card-width-small);
  height: var(--card-height-small);
  background-color: var(--grey-3);
  border-radius: 5px;
  margin-left: 0.5rem;

  img {
    width: 90%;
  }
`;
export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  height: var(--card-height-small);
  h4 {
    font-size: var(--font-title-4);
    font-weight: var(--font-weight-1);
  }
  p {
    font-size: var(--font-text-3);
    color: var(--grey-2);
  }
`;
export const DivBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  p {
    font-size: var(--font-text-3);
    color: var(--grey-2);
  }
  button {
    border: transparent;
    background-color: transparent;
    color: #bdbdbd;
    font-size: var(--font-text-3);

    @media (min-width: 768px) {
      :hover {
        color: var(--grey-2);
      }
    }
  }
`;
