import Heading from "./Heading"
import Section from "./Section"
import { roadmap } from "../constants/index"

const Roadmap = () => {
  return (
    <Section id="roadmap" className="overflow-hidden">
        <div className="container md:pb-10">
            <Heading tag='Ready to get started' title="What we're working on"/>

          </div>
    {roadmap.map((item, idx) => (
      <div key={idx} className={`p-4 rounded shadow ${item.status === 'done' ? 'bg-green-500' : item.status === 'in progress' ? 'bg-yellow-500' : 'bg-gray-500'}`}>
        <h3 className="font-bold text-lg mb-2">{item.title}</h3>
        <p className="mb-1">{item.description}</p>
        <span className="text-xs font-semibold">{item.status}</span>
      </div>
    ))}
    </Section>
  )
}

export default Roadmap