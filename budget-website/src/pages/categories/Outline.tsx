
import { Outlet } from 'react-router-dom'
import Page from '../../components/Page'

const Outline = () => {
  return (
    <Page>
      <main className='main'>
        <p>
          This is the page of a list
        </p>
        <Outlet />
      </main>
    </Page>
  )
}

export default Outline