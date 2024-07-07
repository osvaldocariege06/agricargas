import React from 'react'
import PartnerCard from './PartnerCard'
import { partners01, partners02, partners03, partners04 } from '@/assets'

export default function Partners() {
  return (
    <div className="px-40 py-28">
      <h2 className="text-[#57AC49] font-bold text-xl uppercase">
        04. Partners
      </h2>

      <div className="mt-12 grid grid-cols-4 gap-6">
        <PartnerCard
          name="Benjamin Maiato"
          company="Lavra-Ortoga"
          image={partners01}
        />
        <PartnerCard
          name="Cataria Florence"
          company="Lavra-benfica streat"
          image={partners02}
        />
        <PartnerCard
          name="Sião Bernardo"
          company="Lavra-X4Team"
          image={partners03}
        />
        <PartnerCard
          name="Crisvan dos Santos"
          company="Lavra-Bom sabor"
          image={partners04}
        />
      </div>
    </div>
  )
}
