import { Identity, MainContent } from './components'
import { t } from './translations'

function App() {
  const lang = t.fr

  return (
    <div className="cv-wrapper">
      <Identity {...lang.identity} />
      <MainContent {...lang.mainContent} />
    </div>
  )
}

export default App
