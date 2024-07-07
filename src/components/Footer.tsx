import { Email } from '@/assets'
import { ArrowRightIcon, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1113px] pb-8 pt-20">
      <div className="flex justify-between">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="font-mochiyPop text-xl text-[#57AC49]">
              AgriCargas
            </span>
            <p className="max-w-[306px] text-sm text-zinc-500">
              Use our built-in analytics dashboard to pull valuable insights and
              monitor the value of your Krypto portfolio over time.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Phone color="#A6A6A7" />
              <span className="text-sm text-zinc-500">
                +244 943434233 | +244 9342312344
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Image src={Email} alt="Email" width={24} height={24} />
              <span className="text-sm text-zinc-500">agricargas@co.ao</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="font-mochiyPop text-xl text-[#57AC49]">
            Informations
          </span>
          <div className="flex flex-col gap-3">
            <Link
              href={'/'}
              className="text-sm text-zinc-500 transition-all hover:underline active:scale-95"
            >
              Contacts
            </Link>
            <Link
              href={'/'}
              className="text-sm text-zinc-500 transition-all hover:underline active:scale-95"
            >
              Regulation
            </Link>
            <Link
              href={'/'}
              className="text-sm text-zinc-500 transition-all hover:underline active:scale-95"
            >
              Safety Tips
            </Link>
            <Link
              href={'/'}
              className="text-sm text-zinc-500 transition-all hover:underline active:scale-95"
            >
              Terms and conditions
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="font-mochiyPop text-xl text-[#57AC49]">
            Quick links
          </span>
          <div className="flex flex-col gap-3">
            <Link
              href={'/'}
              className="text-sm text-zinc-500 transition-all hover:underline active:scale-95"
            >
              About Us
            </Link>
            <Link
              href={'/'}
              className="text-sm text-zinc-500 transition-all hover:underline active:scale-95"
            >
              How it works
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="font-mochiyPop text-xl text-[#57AC49]">
            Create an account
          </span>
          <p className="max-w-[260px] text-sm text-zinc-500">
            Use our built-in analytics dashboard to pull valuable insights and
            monitor
          </p>

          <Button color="green" text="Create an account">
            <ArrowRightIcon color="#FFF" />
          </Button>
        </div>
      </div>

      <hr className="mt-20" />
      <div className="flex w-full items-center justify-between">
        <span className="text-sm text-zinc-500">
          @2022 | Agriargas. All rights reserved
        </span>

        <div className="mt-8">
          <span className="text-sm text-zinc-500">Privacy Policy</span>
          <span className="text-sm text-zinc-500">Site map</span>
        </div>
      </div>
    </footer>
  )
}
