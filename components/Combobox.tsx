"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const birthplaces = [
  {
    value: "africa",
    label: "Africa",
  },
  {
    value: "america",
    label: "America",
  },
  {
    value: "asia",
    label: "Asia",
  },
  {
    value: "europe",
    label: "Europe",
  },
  {
    value: "oceania",
    label: "Oceania",
  },
]

export function Combobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")



  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? birthplaces.find((birthplace) => birthplace.value === value)?.label
            : "Select birthplace..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput placeholder="Search birthplace..." />
          <CommandList>
            <CommandEmpty>No birthplace found.</CommandEmpty>
            <CommandGroup>
              {birthplaces.map((birthplace) => (
                <CommandItem
                  key={birthplace.value}
                  value={birthplace.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === birthplace.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {birthplace.label}
                </CommandItem>
              ))}
              
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
