import {
  aliments,
  alimentsOthers,
  ananas,
  maca,
  mamao,
  mango,
  maracuja,
} from '@/assets'
import Image from 'next/image'
import React from 'react'
import ProductCard from './ProductCard'

export default function OurProdutcs() {
  return (
    <div className="px-40 py-28">
      <h2 className="text-[#57AC49] font-bold text-xl uppercase">
        02. OUR PRODUCTS
      </h2>

      <div className="mt-10 grid grid-cols-4 gap-5">
        <ProductCard fruit="Apple" theme="light" size="medium">
          <Image src={maca} alt="Apple" className="absolute bottom-0 left-0" />
        </ProductCard>

        <ProductCard fruit="Papaya" theme="dark">
          <Image
            src={mamao}
            alt="Papaya"
            className="absolute bottom-0 left-12"
          />
        </ProductCard>

        <ProductCard fruit="Passion fruit" theme="light">
          <Image
            src={maracuja}
            alt="Passion fruit"
            className="absolute bottom-0 left-0"
          />
        </ProductCard>

        <ProductCard fruit="Ananas" theme="dark">
          <Image
            src={ananas}
            alt="Ananas"
            className="absolute -bottom-4 left-20"
          />
        </ProductCard>
      </div>
      <div className="mt-5 flex justify-between gap-5">
        <ProductCard fruit="Apple" theme="light" size="medium">
          <Image src={mango} alt="mango" className="absolute bottom-0 left-0" />
        </ProductCard>

        <ProductCard fruit="Papaya" theme="dark" size="large">
          <Image
            src={aliments}
            alt="aliments"
            className="absolute bottom-0 left-0"
          />
        </ProductCard>

        <ProductCard fruit="Passion fruit" theme="light">
          <Image
            src={alimentsOthers}
            alt="aliments Others"
            className="absolute bottom-0 left-0"
          />
        </ProductCard>
      </div>
    </div>
  )
}
