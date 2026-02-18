import ButtonGradient from './assets/svg/ButtonGradient'
import Benefits from './components/Benefits'
import Collaboration from './components/Collaboration'
//import Button from './components/Button'
import  {Header}  from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
// import Section from './components/Section'

function App() {


  return (
  <div>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
     <Header/>
     <Hero/>
     <Benefits/>
     <Collaboration/>
     <Services />
    <Pricing/>
    </div>

    <ButtonGradient />
         
    
  </div>
  )
}

export default App
 