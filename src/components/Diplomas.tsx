import { t } from '../translations'
import { Links } from './Links'

export const Diplomas = (props: typeof t.fr.mainContent.diplomas) => {
  return (
    <div className="box">
      <h2>{props.title}</h2>
      {props.children.map(c => (
        <DiplomasItem {...c} />
      ))}
    </div>
  )
}

const DiplomasItem = (props: typeof t.fr.mainContent.diplomas.children[number]) => {
  return (
    <div className="sub-box">
      <span className="box-title">{props.name}</span>
      <br />
      <span className="box-subtitle">
        {props.year} | <Links links={props.institutes} />
        {props.location}
      </span>
      <br />
    </div>
  )
}
