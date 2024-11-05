import { useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ComboboxProps {
  field: ControllerRenderProps<any, "birthPlace">;
}

const birthPlaceOptions = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

export function Combobox({ field }: ComboboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isOpen ? "true" : "false"}
          className="w-[200px] justify-between"
        >
          {field.value
            ? birthPlaceOptions.find((option) => option.value === field.value)
                ?.label || "Unknown"
            : "Select birthplace..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search birthplace..." />
          <CommandEmpty>No birthplace found.</CommandEmpty>
          <CommandGroup>
            {birthPlaceOptions.map((option) => (
              <CommandItem
                key={option.value}
                onSelect={(currentValue) => {
                  field.onChange(
                    currentValue === field.value ? "" : currentValue
                  );
                  setIsOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    field.value === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
