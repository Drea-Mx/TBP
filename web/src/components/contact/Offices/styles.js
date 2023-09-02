import styled from 'styled-components';

export const OfficesContainer = styled.div`
  padding: 1.5rem 3.125rem;
  background-color: #1A43F5;
  color: #fff;
  display: flex;
  align-items: center;

  h3 {
    width:34%;
  }

  .offices {
    width: 66%;
    display: flex;

    div {
      width: 50%;
    }
  }

  @media (max-width: 680px) {
    padding: 1.5rem 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.75rem;

    * {
      width: 100% !important;
    }

    .offices {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
`