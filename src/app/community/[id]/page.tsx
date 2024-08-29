import Event from '@/components/event'
import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { Community, events, links } from '@/data/data'
import Link from 'next/link'
import React from 'react'


const CommunityPage = () => {
  
  return (
    <div>
      <section>
        <div className='border border-sky-100 mb-4'>
          <img src={`${Community.bannerUrl}`} alt="Community's image" />
        </div> 
        <div className="mt-auto flex flex-col px-2">
          {Community.socials && Community.socials.length > 0 && (
            <div className="flex flex-row flex-wrap items-start gap-1">
              {Community.socials?.map((link, idx) => (
                <Link href={link?.href} key={idx} target="_blank">
                  <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <br />
      <section>
        <h1 className='mt-4 p-5  font-bold text-3xl'>{Community.title}</h1>
        <hr />
        <br />
        <h1>About us</h1>
        <br />
        <div dangerouslySetInnerHTML={{ __html: Community.description }}></div>
      </section>
      <br />
      <section className='statistique grid grid-cols-2 gap-4 '>
        {Community.satistique && Community.satistique.length >=1 && Community.satistique.map(el => (
          <div className="border-4 p-6 cursor-pointer">
          <h1 className=" font-bold text-3xl">{el.number}</h1>
          <p> {el.description}</p>
        </div>
        ))}
        
      </section>

      <h1 className='text-4xl text-center p-6 m-6'>Upcoming Events</h1>

      {/* sm:640px md:768 */}

      <section className='upcoming-event p-2 md:p-6 m-5 grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 border xl:w-full'>

        {/* TODO: Loop through an array of upcoming events and display them */}
         
        {events.map((el:EventProps) => {
          return (
            <Event key={el.title} {...el} />
          )
        })}

      </section>
      <br />
      <hr />
      <br />
    </div>
  );
}

export default CommunityPage