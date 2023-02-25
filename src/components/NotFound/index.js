import Header from '../Header'
import {NotFoundCon, NotFoundImg} from './styledComponents'

const NotFound = () => (
  <>
    <Header />
    <NotFoundCon>
      <NotFoundImg
        alt="not found"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
      />
      <h1>Page Not Found</h1>
      <p>We are sorry, the page you requested could not be found</p>
    </NotFoundCon>
  </>
)

export default NotFound
