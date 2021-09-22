import React, {useState} from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import InfoSection from '../components/InfoSection/InfoSection'
import About from '../components/About/About'
import Games from '../components/Games/Games'
import NFTCollections from '../components/NFT Collections/NFTCollections'


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
            <About />
            <Games />
            <NFTCollections />
        </>
    )
}

export default Home
