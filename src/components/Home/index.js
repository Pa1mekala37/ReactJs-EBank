import Header from '../Header'

import {
  HomeBgContainer,
  HomeCardContainer,
  HomeCardHeading,
  HomeCardImage,
} from './styledComponents'

const Home = () => (
  <>
    <HomeBgContainer>
      <Header />
      <HomeCardContainer>
        <HomeCardHeading>Your Flexibility, Our Excellence</HomeCardHeading>
        <HomeCardImage
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </HomeCardContainer>
    </HomeBgContainer>
  </>
)

export default Home
