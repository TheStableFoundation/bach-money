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
                13.79 billion years years ago
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
                4.5 billion years old ago
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
            <TimelineIcon className="p-3" variant="ghost" color="red">
              <MoonIcon className="h-5 w-5" />
            </TimelineIcon>
            <div className="flex flex-col gap-1 text-left">
              <Typography variant="h6" color="blue-gray">
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
                €BACH token minted.
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                2022. Total supply 18,419,500. <span className="font-bold text-red-500 italic">Chromatic</span>.
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
              <Typography variant="h6" color="blue-gray">
                Community bootstrapping
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                2022 - 2025. Airdrops, token burn, liquidity.
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="border-blue-gray-50 shadow-blue-gray-900/5 relative rounded-xl border bg-white py-3 pr-8 pl-4 shadow-lg">
            <TimelineIcon className="p-3" variant="ghost" color="red">
              <FireIcon className="h-5 w-5" />
            </TimelineIcon>
            <div className="flex flex-col gap-1 text-left">
              <Typography variant="h6" color="red">
                1st midsummer burn
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                21 juni 2025. Target total supply 12,000,000
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="border-blue-gray-50 shadow-blue-gray-900/5 relative rounded-xl border bg-white py-3 pr-8 pl-4 shadow-lg">
            <TimelineIcon className="p-3" variant="ghost" color="red">
              <FireIcon className="h-5 w-5" />
            </TimelineIcon>
            <div className="flex flex-col gap-1 text-left">
              <Typography variant="h6" color="deep-orange">
                12th burn
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Target total supply 1,212,121.2
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
                USEd (dollar), USEe (euro), and other USEs stablecoins.
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
      </Timeline>
    </div>
  )
}
