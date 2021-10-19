import React, {useState} from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import InfoSection from '../components/InfoSection/InfoSection'
import About from '../components/About/About'
import Games from '../components/Games/Games'
import NFTCollections from '../components/NFT Collections/NFTCollections'
import Roadmap from '../components/Roadmap/Roadmap'
import Download from '../components/Download/Download'
import Footer from '../components/Footer/Footer'
// import HowToBuy from '../components/HowToBuy/HowToBuy'
import Faq from '../components/Faq/Faq'

function Home() {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <InfoSection />
            <About/>
            <Games/>
            <NFTCollections />
            <Roadmap />
            {/* <HowToBuy /> */}
            <Faq />
            <Download />
            <Footer />
        </>
    )
}

export default Home
