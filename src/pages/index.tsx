import styled from 'styled-components';

export default function Home() {
  return (
    <HomepageContainer>
      <CustomCard bg='var(--color-html)'>
        <h3>HTML</h3>
      </CustomCard>
      <CustomCard bg='var(--color-css)'>
        <h3>CSS</h3>
      </CustomCard>
      <CustomCard bg='var(--color-sass)'>
        <h3>SASS</h3>
      </CustomCard>
      <CustomCard bg='var(--color-js)'>
        <h3>JavaScript</h3>
      </CustomCard>
      <CustomCard bg='var(--color-git)'>
        <h3>GIT</h3>
      </CustomCard>
    </HomepageContainer>
  );
}

const CustomCard = styled.div`
  box-shadow: 0 0 10px rgba(128, 128, 128, 0.3);
  padding: 2rem;
  border-radius: 10px;
  cursor: pointer;
  transition: box-shadow 0.15s;
  background-color: ${(props: any) => (props.bg ? props.bg : 'white')};

  & * {
    pointer-events: none;
  }

  &:hover {
    border: 1px solid rgba(128, 128, 128, 0.7);
    box-shadow: 0 0 10px rgba(128, 128, 128, 0.5);
  }
`;
const HomepageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  & > * {
    width: 100%;
    max-width: 250px;
    min-width: 250px;
  }
`;
