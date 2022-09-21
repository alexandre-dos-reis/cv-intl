import { t } from '../translations'

export const Projects = (props: typeof t.fr.mainContent.projects) => {
  return (
    <div className="box">
      <h2>{props.title}</h2>
      {props.children.map(c => (
        <ProjectItem {...c} />
      ))}
    </div>
  )
}

export const ProjectItem = (props: typeof t.fr.mainContent.projects.children[number]) => {
  return (
    <div className="sub-box">
      <span className="box-title">
        {props.title}
        {' '}<a href={props.link.href}>{props.link.label}</a>
      </span>
      <br />
      <div className="box-desc">{props.stack}</div>
    </div>
  )
}
