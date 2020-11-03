import Seo from '@components/Seo';
import styled from '@emotion/styled';
import { FunctionComponent } from 'react';

interface Props {}

const WelcomeWrapper = styled.div({
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
});

const Welcome = styled.div({
  display: 'grid',
  gap: 20,
  justifyItems: 'center',
  textAlign: 'center',
});

const HomePage: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Seo title='Template' />
      <WelcomeWrapper>
        <Welcome>
          <h1>Welcome to the Nextjs Starter</h1>
          <p>Nextjs - TypeScript - Emotion Styled - SCSS - Aliases</p>
        </Welcome>
      </WelcomeWrapper>
    </>
  );
};

export default HomePage;
