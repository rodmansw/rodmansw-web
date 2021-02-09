import { useState } from 'react'

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  )
}

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  )
}

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-300 ml-6">{children}</p>
    </li>
  )
}

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="Joined Four Code C.A.">
        It was time for a change in my career, and Four Code came calling. The
        best part was that I started using new technologies such as React.js.
      </Step>
      <Step title="Landed First Full-time Remote Job at Grupo Abraxas">
        Things wasn't great in Venezuela, and got the chance to join a Venture
        Builder Company in Mexico dedicated to create disruptive technology
        companies that solves the greatest challenges of humanity by integrating
        cutting-edge technologies, machine learning & Artificial Intelligence.
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Graduated College 🎓">
        One of my most cherished accomplishments.
      </Step>
      <Step title="Full-Time at Innova ProSystem">
        This internship meant a lot to me. Being able to work part-time while
        still getting my school work done was huge. I was offered and accepted a
        full-time offer with Innova ProSystem.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Started a Self-taught Journey">
        I wasn't learning what I expected in college. So I decided to learn on
        my own.
      </Step>
      <Step title="Landed First Internship">
        Finally felt like I understood this whole programming thing. My
        interviewing skills weren't great, but I managed to snag my first
        internship.
      </Step>
    </ul>
    <Divider />
    <Year>2012</Year>
    <ul>
      <Step title="Started Climbing">
        I fell in love with climbing and can't stop now.
      </Step>
      <Step title="Graduated High School">
        I now have a bachelor of science degree.
      </Step>
      <Step title="Started University at Universidad Dr. José Gregorio Hernández">
        I started a career as a systems engineer with nothing else in mind than
        knowing more about programming.
      </Step>
    </ul>
    <Divider />
    <Year>1996</Year>
    <ul>
      <Step title="Born 🍼" />
    </ul>
  </>
)

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false)

  return (
    <>
      <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h2>
      <Year>2021</Year>
      <ul>
        <Step title="Blogging">
          I want to share knowlage and the things I'm learning with everyone I
          can. Help people to learn new things is such a joy, and the wonderful
          thing about learning is that no one can snatch it from us.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Workshops">
          I've been teaching and mentoring for a long time ago now. I finally
          broke my shy self and started doing workshops for all the members of
          the company starting with topics such as Hasura and React.js
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Became a Tech Lead 👨🏻‍💻">
          Starting at the beginning of 2019, I moved into a tech leadership
          role. Analyzing users' needs and then finding solutions to serve them.
          <br />
          Guiding the team through technical issues and challenges to get the
          job done and also make the experience valuable for their personal
          growth.
        </Step>
        <Step title="Moved to Mexico">
          Such an amazing and terrifying experience. I can help my family in a
          better way and finally got to know my coworkers in person. I'm so
          grateful to all of them.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  )
}
