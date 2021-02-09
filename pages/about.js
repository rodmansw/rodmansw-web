import Container from '@/components/Container'
import Timeline from '@/components/Timeline'

export default function About() {
  return (
    <Container title="About – Rodman Swanston">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-300">
          <p>Hi, I’m Rodman Swanston. I’m a developer and Tech Enthusiast.</p>
          <p>
            I'm a System Engineer with 5 years of experience as a Web Developer
            making multi platform apps, involved in the whole software
            development life cycle, developing technological solutions for
            private organization and working hard to make the world better with
            software. For me being self-taught and keeping abreast of new
            technologies is essential.
          </p>
          <p>
            I spend my free time learning new things, climbing, playing video
            games, and enjoying time with friends and family.
          </p>
        </div>
        <Timeline />
      </div>
    </Container>
  )
}
