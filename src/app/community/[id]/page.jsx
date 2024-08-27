import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import React from 'react'

const CommunityPage = () => {
  const links =  [
    {
      type: "Website",
      href: "https://magicui.design",
      icon: <Icons.globe className="size-3" />,
    },
    {
      type: "GitHub",
      href: "https://github.com/magicuidesign/magicui",
      icon: <Icons.github className="size-3" />,
    },
    {
      type: "WhatsApp",
      href: "https://chatcollect.com",
      icon: <Icons.whatsapp className="size-3" />,
    },
  ]
  return (
    <div>
      
      <section>
        <div className='border border-sky-100 mb-4'>
          <img src="/communities/laravel-cm.png" alt="Community's image" />
        </div> 
        <div className="mt-auto flex flex-col px-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
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
        <h1 className='mt-4 p-5 text-white font-bold text-2xl'>Laravel Cameroun</h1>
        <br />
        <hr />
        <br />
        <h1>About us</h1>
        <br />
        <h1 className='text-white font-bold text-xl'>Nous construisons une communauté Open Source d'apprenants et d'enseignants!</h1>
        <p><strong className='text-white font-bold'>" Tout le monde enseigne, tout le monde apprend "</strong> . Tel est l'esprit qui est derrière la communauté. Une communauté qui se veut grandissante et qui donne la possibilité à tout le monde de partager ses connaissances et d'apprendre.

</p>
      </section>
      <br />
      <section className='statistique grid grid-cols-2 gap-2'>
        <div className="border border-red-500 w-1/2">
          <h1 className="text-white font-bold text-2xl">600+</h1>
          <p>Membres qui ont rejoint les différents groupes de la communauté!          </p>
        </div>
        <div className="border border-red-500 w-1/2">
          <h1 className="text-white font-bold text-2xl">50k+</h1>
          <p>Développeurs PHP & Laravel dans l’ensemble du territoire national.</p>
        </div>
        <div className="border border-red-500 w-1/2">
          <h1 className="text-white font-bold text-2xl">10k+</h1>
          <p><strong>stars</strong> sur les projets réalisés par les développeurs Camerounais sur Github.</p>
        </div>
        <div className="border border-red-500 w-1/2">
          <h1 className="text-white font-bold text-2xl">9%</h1>
          <p>Taux de participation aux événements car la communauté est encore très jeune!</p>
        </div>
      </section>
    </div>
  )
}

export default CommunityPage