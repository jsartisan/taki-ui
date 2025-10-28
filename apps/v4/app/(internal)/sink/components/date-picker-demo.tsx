"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Calendar } from "@/registry/new-york-v4/ui/calendar"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/new-york-v4/ui/drawer"
import { DialogTrigger } from "@/registry/new-york-v4/ui/dialog"
import { Popover } from "@/registry/new-york-v4/ui/popover"

export function DatePickerDemo() {
  return (
    <div className="flex flex-col items-start gap-4 md:flex-row">
      <DatePickerSimple />
      <DataPickerWithDropdowns />
      <DatePickerWithRange />
    </div>
  )
}

function DatePickerSimple() {
  const [date, setDate] = React.useState<Date>()

  return (
    <DialogTrigger>
      <Button
        variant={"outline"}
        className={cn(
          "min-w-[200px] justify-start px-2 font-normal",
          !date && "text-muted-foreground"
        )}
      >
        <CalendarIcon className="text-muted-foreground" />
        {date ? format(date, "PPP") : <span>Pick a date</span>}
      </Button>
      <Popover className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </Popover>
    </DialogTrigger>
  )
}

function DatePickerWithRange() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 20),
    to: addDays(new Date(new Date().getFullYear(), 0, 20), 20),
  })

  return (
    <DialogTrigger>
      <Button
        id="date"
        variant={"outline"}
        className={cn(
          "w-fit justify-start px-2 font-normal",
          !date && "text-muted-foreground"
        )}
      >
        <CalendarIcon className="text-muted-foreground" />
        {date?.from ? (
          date.to ? (
            <>
              {format(date.from, "LLL dd, y")} -{" "}
              {format(date.to, "LLL dd, y")}
            </>
          ) : (
            format(date.from, "LLL dd, y")
          )
        ) : (
          <span>Pick a date</span>
        )}
      </Button>
      <Popover className="w-auto p-0">
        <Calendar
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
        />
      </Popover>
    </DialogTrigger>
  )
}

function DataPickerWithDropdowns() {
  const [date, setDate] = React.useState<Date>()
  const [open, setOpen] = React.useState(false)
  const isMobile = useIsMobile(450)

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "min-w-[200px] justify-start px-2 font-normal",
              !date && "text-muted-foreground"
            )}
          >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
            <CalendarIcon className="text-muted-foreground ml-auto" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="sr-only">
            <DrawerTitle>Select a date</DrawerTitle>
            <DrawerDescription>
              Pick a date for your appointment.
            </DrawerDescription>
          </DrawerHeader>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(day) => {
              setDate(day)
              setOpen(false)
            }}
          />
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <DialogTrigger>
      <Button
        variant="outline"
        className={cn(
          "min-w-[200px] justify-start px-2 font-normal",
          !date && "text-muted-foreground"
        )}
        onPress={() => setOpen(!open)}
      >
        {date ? format(date, "PPP") : <span>Pick a date</span>}
        <CalendarIcon className="text-muted-foreground ml-auto" />
      </Button>
      <Popover className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          captionLayout="dropdown"
        />
        <div className="flex gap-2 border-t p-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onPress={() => setOpen(false)}
          >
            Done
          </Button>
        </div>
      </Popover>
    </DialogTrigger>
  )
}
