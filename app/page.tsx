import Image from 'next/image'
import SideBar from '../components/sideBar'
import MainContent from '../components/mainContent'

export default function Home() {
  return (
      <div className="sweIndex" data-theme="beige">
        <SideBar/>
        <MainContent/>
      </div>
  )
}
