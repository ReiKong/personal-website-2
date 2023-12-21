import Image from 'next/image'
import SideBar from '../components/sideBar'
import MainContent from '../components/mainContent'
import Footer from '../components/navigation/footer'

const themes = [
  { name: "Beige" },
  { name: "Brown" },
  { name: "Navy" },
  { name: "White" },
  { name: "Light Green" },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="sweIndex">
        <SideBar />
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}
