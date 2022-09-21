import { t } from '../translations'
import { Links } from './Links'

export const Experiences = (props: typeof t.fr.mainContent.experiences) => {
  return (
    <div className="box">
      <h2>{props.title}</h2>
      {props.children.map(c => (
        <ExperiencesItem {...c} />
      ))}
    </div>
  )
}

const ExperiencesItem = (props: typeof t.fr.mainContent.experiences.children[number]) => {
  return (
    <div className="sub-box">
      <span className="box-title">{props.title}</span>
      <br />
      <span className="box-subtitle">
        {props.duration} | <Links links={props.companies} /> {props.location}
      </span>
      <br />
      <div className="box-desc">
        {props.mission}
        <ul>
          {props.details.map(d => (
            <li>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
