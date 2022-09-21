import { t } from '../translations'

export const Tech = (props: typeof t.fr.mainContent.techs) => {
  return (
    <div className="box">
      <h2>{props.title}</h2>
      <div className="flex">
        {props.children.map(c => (
          <TechItem {...c} />
        ))}
      </div>
    </div>
  )
}

const TechItem = (props: typeof t.fr.mainContent.techs.children[number]) => {
  return (
    <div className="row mb1">
      <span className="box-title">{props.title}</span>
      <br />
      <span className="box-desc">{props.content}</span>
    </div>
  )
}
