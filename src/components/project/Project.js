import { NavLink } from 'react-router-dom'
import './style.css'

const Project = ({ title, img, gitHubLink, id }) => {
  return (
    <NavLink to={`/project/${id}`}>
      <li className="project">
        <a href={gitHubLink}>
          <img src={img} alt="Project img" className="project__img" />
          <h3 className="project__title">{title}</h3>
        </a>
      </li>
    </NavLink>
  )
}

export default Project
