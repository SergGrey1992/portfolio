import React from 'react'
import { calculateAge } from '@/shared/lib/calculateAge'

export const About = () => {
    return (
        <>
            <h1>My name is Sergey Tsviatkou</h1>
            <h2>
                I am {calculateAge('1992-05-21')} years old, and I reside in the
                picturesque city of Minsk, Belarus.
            </h2>
            <h3>
                I am a passionate developer of web and mobile applications,
                favoring technologies such as React and Next.js for web
                development, and React Native for mobile app creation.
            </h3>
            <div>
                <p>
                    My dedication to learning and exploring new technologies
                    keeps me at the cutting edge in the rapidly evolving world
                    of IT. I continually expand my knowledge by studying the
                    latest advancements in technology during my free time.
                </p>
            </div>
            <div>
                <p>
                    Besides technology, I have a passion for cars, which serves
                    as both a hobby and a source of inspiration. I also enjoy
                    taking walks in the fresh air, regardless of the weather,
                    making my strolls the perfect way to rejuvenate.
                </p>
            </div>
            <div>
                <p>
                    My key personal qualities include resilience and
                    determination, which help me achieve my goals in both my
                    professional life and personal endeavors.
                </p>
            </div>
        </>
    )
}
