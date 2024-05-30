import React from 'react'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'

interface PagePropsType {}

const Page = () => {
    return (
        <main style={{ marginLeft: 100 }}>
            <AnimationSection>
                <>
                    <h2>Title</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ab adipisci aut autem consequatur deleniti
                        deserunt dolore dolorem, eos eveniet id, impedit
                        molestiae mollitia non numquam officia officiis, quasi
                        qui quia quisquam sequi sit temporibus ut voluptas? A ab
                        distinctio dolor hic itaque, laudantium omnis reiciendis
                        sequi tenetur. Exercitationem, magnam quo.
                    </p>
                </>
            </AnimationSection>
        </main>
    )
}

export default Page
