"use client"

import {
  CurrencyDollarIcon,
  FireIcon,
  GlobeAltIcon,
  GlobeAsiaAustraliaIcon,
  MapIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid"
import {
  Timeline,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from "@material-tailwind/react"

export default function TimelineView() {
  return (
    <div className="w-[25rem]">
      <Timeline>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="border-blue-gray-50 shadow-blue-gray-900/5 relative rounded-xl border bg-white py-3 pr-8 pl-4 shadow-lg">
            <TimelineIcon className="p-3" variant="ghost">
              <SunIcon className="h-5 w-5" />
            </TimelineIcon>
            <div className="flex flex-col gap-1 text-left">
              <Typography variant="h6" color="blue-gray">
                The Big Bang
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                13.79 billion years ago
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>

        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="border-blue-gray-50 shadow-blue-gray-900/5 relative rounded-xl border bg-white py-3 pr-8 pl-4 shadow-lg">
            <TimelineIcon className="p-3" variant="ghost" color="green">
              <GlobeAsiaAustraliaIcon className="h-5 w-5" />
            </TimelineIcon>
            <div className="flex flex-col gap-1 text-left">
              <Typography variant="h6" color="blue-gray">
                Earth
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                4.5 billion years ago
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="border-blue-gray-50 shadow-blue-gray-900/5 relative rounded-xl border bg-white py-3 pr-8 pl-4 shadow-lg">
            <TimelineIcon className="p-3" variant="ghost">
              <MapIcon className="h-5 w-5" />
            </TimelineIcon>
            <div className="flex flex-col gap-1 text-left">
              <Typography variant="h6" color="blue-gray">
                BACH was born
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                21 March 1685
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="border-blue-gray-50 shadow-blue-gray-900/5 relative rounded-xl border bg-white py-3 pr-8 pl-4 shadow-lg">
            <TimelineIcon className="p-3" variant="ghost" color="purple">
              <MoonIcon className="h-5 w-5 text-purple-600" />
            </TimelineIcon>
            <div className="flex flex-col gap-1 text-left">
              <Typography variant="h6" style={{ color: "#9932CC" }}>
                Solana first block
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                16 March 2020
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="border-blue-gray-50 shadow-blue-gray-900/5 relative rounded-xl border bg-white py-3 pr-8 pl-4 shadow-lg">
            <TimelineIcon className="p-3" variant="ghost" color="green">
              <CurrencyDollarIcon className="h-5 w-5" />
            </TimelineIcon>
            <div className="flex flex-col gap-1 text-left">
              <Typography variant="h6" color="blue-gray">
                €BACH was minted.
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                December 31, 2021. Total supply 18,419,500.{" "}
                <span className="font-bold text-purple-600 italic">Chromatic</span>.
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="border-blue-gray-50 shadow-blue-gray-900/5 relative rounded-xl border bg-white py-3 pr-8 pl-4 shadow-lg">
            <TimelineIcon className="p-3" variant="ghost" color="green">
              <GlobeAltIcon className="h-5 w-5" />
            </TimelineIcon>
            <div className="flex flex-col gap-1 text-left">
              <div className="flex items-center gap-2">
                <Typography variant="h6" color="blue-gray">
                  €BACH Community
                </Typography>
                <span className="rounded-full bg-purple-200 px-3 py-1 text-xs font-semibold text-purple-700 shadow">
                  We are here
                </span>
              </div>
              <Typography variant="small" color="gray" className="font-normal">
                2021 - 2025. Airdrops, token burn, liquidity.
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="border-blue-gray-50 shadow-blue-gray-900/5 relative rounded-xl border bg-white py-3 pr-8 pl-4 shadow-lg">
            <TimelineIcon className="p-3" variant="ghost" color="green">
              <GlobeAltIcon className="h-5 w-5" />
            </TimelineIcon>
            <div className="flex flex-col gap-1 text-left">
              <Typography variant="h6" style={{ color: "#111827" }}>
                NotWallet Crypto v1 Release
              </Typography>
              <Typography variant="small" style={{ color: "#111827" }} className="font-normal">
                Visit{" "}
                <a
                  href="https://notwallet.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline hover:text-green-800"
                >
                  NotWallet Crypto non-custodial Solana stablecoin wallet.
                </a>
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="border-blue-gray-50 shadow-blue-gray-900/5 relative rounded-xl border bg-white py-3 pr-8 pl-4 shadow-lg">
            <TimelineIcon className="p-3" variant="ghost" color="purple">
              <FireIcon className="h-5 w-5 text-purple-600" />
            </TimelineIcon>
            <div className="flex flex-col gap-1 text-left">
              <Typography variant="h6" style={{ color: "#9932CC" }}>
                1st midsummer burn
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                21 June 2025. Target total supply: 12,000,000
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="border-blue-gray-50 shadow-blue-gray-900/5 relative rounded-xl border bg-white py-3 pr-8 pl-4 shadow-lg">
            <TimelineIcon className="p-3" variant="ghost" color="purple">
              <FireIcon className="h-5 w-5 text-purple-600" />
            </TimelineIcon>
            <div className="flex flex-col gap-1 text-left">
              <div className="flex items-center gap-2">
                <Typography variant="h6" style={{ color: "#9932CC" }}>
                  ICO Preparation
                </Typography>
                <span className="rounded-full bg-purple-200 px-3 py-1 text-xs font-semibold text-purple-700 shadow">
                  We are here
                </span>
              </div>
              <Typography variant="small" color="gray" className="font-normal">
                Non-profit organization, IPs coordination, legal stuff, and more.
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="border-blue-gray-50 shadow-blue-gray-900/5 relative rounded-xl border bg-white py-3 pr-8 pl-4 shadow-lg">
            <TimelineIcon className="p-3" variant="ghost" color="yellow">
              <CurrencyDollarIcon className="h-5 w-5 text-yellow-500" />
            </TimelineIcon>
            <div className="flex flex-col gap-1 text-left">
              <Typography variant="h6" style={{ color: "#111827" }}>
                Token Upgrade
              </Typography>
              <Typography variant="small" style={{ color: "#111827" }} className="font-normal">
                <a
                  href="https://spl.solana.com/token-upgrade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline hover:text-black"
                >
                  SPL Token 2022 upgrade
                </a>
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="border-blue-gray-50 shadow-blue-gray-900/5 relative rounded-xl border bg-white py-3 pr-8 pl-4 shadow-lg">
            <TimelineIcon className="p-3" variant="ghost" color="purple">
              <CurrencyDollarIcon className="h-5 w-5" />
            </TimelineIcon>
            <div className="flex flex-col gap-1 text-left">
              <Typography variant="h6" style={{ color: "#9932CC" }}>
                NotDAX Digital Assets Exchange
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                2026, Q3.{" "}
                <a
                  href="https://notdax.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 underline hover:text-purple-800"
                >
                  Visit NotDAX
                </a>
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="border-blue-gray-50 shadow-blue-gray-900/5 relative rounded-xl border bg-white py-3 pr-8 pl-4 shadow-lg">
            <TimelineIcon className="p-3" variant="ghost" color="purple">
              <FireIcon className="h-5 w-5 text-purple-600" />
            </TimelineIcon>
            <div className="flex flex-col gap-1 text-left">
              <Typography variant="h6" style={{ color: "#9932CC" }}>
                12th burn
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Target total supply: 2,100,000
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineHeader className="border-blue-gray-50 shadow-blue-gray-900/5 relative rounded-xl border bg-white py-3 pr-8 pl-4 shadow-lg">
            <TimelineIcon className="p-3" variant="ghost" color="green">
              <GlobeAltIcon className="h-5 w-5" />
            </TimelineIcon>
            <div className="flex flex-col gap-1 text-left">
              <Typography variant="h6" color="blue-gray">
                Ubiquity
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Money flows like data.™
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
      </Timeline>
    </div>
  )
}
