import { t } from '../translations'
import { IdentitySection } from './IdentitySection'
import { Profile } from './Profile'

export const Identity = (props: typeof t.fr.identity) => {
  const { contact, hobbies, info, interests, languages, social } = props.children
  return (
    <div className="left-side">
      <Profile subtitle={props.subtitle} />
      <IdentitySection element={info} />
      <IdentitySection element={contact} />
      <IdentitySection element={social} />
      <IdentitySection element={languages} />
      <IdentitySection element={interests} />
      <IdentitySection element={hobbies} />
    </div>
  )
}
