import './style.css'

import gitHub from '../../img/icons/gitHub.svg'
import linkedIn from '../../img/icons/linkedIn.svg'

const footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://github.com/SerhioCapitano">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://www.linkedin.com/in/sergej-klimenko-87373322b/">
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default footer
