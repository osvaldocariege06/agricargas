import { Email } from '@/assets'
import { ArrowRightIcon, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

export default function Footer() {
  return (
    <footer className="pt-20 pb-8 max-w-[1113px] w-full mx-auto">
      <div className="flex justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-[#57AC49] font-mochiyPop text-xl ">
              AgriCargas
            </span>
            <p className="max-w-[306px] text-sm text-zinc-500">
              Use our built-in analytics dashboard to pull valuable insights and
              monitor the value of your Krypto portfolio over time.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <Phone color="#A6A6A7" />
              <span className="text-sm text-zinc-500">
                +244 943434233 | +244 9342312344
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <Image src={Email} alt="Email" width={24} height={24} />
              <span className="text-sm text-zinc-500">agricargas@co.ao</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-[#57AC49] font-mochiyPop text-xl ">
            Informations
          </span>
          <div className="flex flex-col gap-3">
            <Link
              href={'/'}
              className="text-zinc-500 text-sm active:scale-95 hover:underline transition-all"
            >
              Contacts
            </Link>
            <Link
              href={'/'}
              className="text-zinc-500 text-sm active:scale-95 hover:underline transition-all"
            >
              Regulation
            </Link>
            <Link
              href={'/'}
              className="text-zinc-500 text-sm active:scale-95 hover:underline transition-all"
            >
              Safety Tips
            </Link>
            <Link
              href={'/'}
              className="text-zinc-500 text-sm active:scale-95 hover:underline transition-all"
            >
              Terms and conditions
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-[#57AC49] font-mochiyPop text-xl ">
            Quick links
          </span>
          <div className="flex flex-col gap-3">
            <Link
              href={'/'}
              className="text-zinc-500 text-sm active:scale-95 hover:underline transition-all"
            >
              About Us
            </Link>
            <Link
              href={'/'}
              className="text-zinc-500 text-sm active:scale-95 hover:underline transition-all"
            >
              How it works
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-[#57AC49] font-mochiyPop text-xl ">
            Create an account
          </span>
          <p className="text-zinc-500 max-w-[260px] text-sm">
            Use our built-in analytics dashboard to pull valuable insights and
            monitor
          </p>

          <Button color="green" text="Create an account">
            <ArrowRightIcon color="#FFF" />
          </Button>
        </div>
      </div>

      <hr className="mt-20" />
      <div className="flex items-center justify-between w-full">
        <span className="text-zinc-500 text-sm">
          @2022 | Agriargas. All rights reserved
        </span>

        <div className="mt-8">
          <span className="text-zinc-500 text-sm">Privacy Policy</span>
          <span className="text-zinc-500 text-sm">Site map</span>
        </div>
      </div>
    </footer>
  )
}
