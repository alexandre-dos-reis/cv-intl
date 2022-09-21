import { t } from '../translations'
import { Diplomas } from './Diplomas'
import { Experiences } from './Experiences'
import { Projects } from './Projects'
import { Tech } from './Tech'

export const MainContent = (props: typeof t.fr.mainContent) => {
  return (
    <div className="right-side">
      <Projects {...props.projects} />
      <Experiences {...props.experiences} />
      <Diplomas {...props.diplomas} />
      <Tech {...props.techs} />
    </div>
  )
}
