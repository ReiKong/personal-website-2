import Image from 'next/image'
import SideBar from '../components/sideBar'
import MainContent from '../components/mainContent'
import Footer from '../components/navigation/footer'
import MobileMenu from '../components/navigation/mobileNav'

export default function Home() {
  return (
    <div className="flex flex-col">
      <MobileMenu />
      <div className="sweIndex">
        <SideBar />
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}
