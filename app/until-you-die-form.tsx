"use client";

import { DatePicker } from "@/components/DatePicker";
import Timer from "@/components/Timer";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  UntilYouDieSchema,
  type UntilYouDieForm,
  useUntilYouDieStore,
} from "./store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import WeeksTable from "@/components/WeeksTable";
import { zodResolver } from "@hookform/resolvers/zod";

const birthPlaceOptions = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

interface UntilYouDieFormProps extends React.HTMLAttributes<HTMLFormElement> {
  formId?: string;
}

export function UntilYouDieForm({
  className,
  formId = "until-you-die-form",
}: UntilYouDieFormProps) {
  const setData = useUntilYouDieStore((state) => state.setData);
  const form = useForm<UntilYouDieForm>({
    resolver: zodResolver(UntilYouDieSchema),
    defaultValues: {
      birthDate: undefined,
      birthPlace: undefined,
    },
  });

  const { isDirty } = form.formState;

  const onSubmit = async (data: UntilYouDieForm) => {
    console.log("Form submitted", data);
    try {
      setData(data);
      toast.success("Calculation successful.");
    } catch (error) {
      console.error("Error calculating.", error);
      toast.error("Error calculating.");
    }
  };

  const exportToPdf = async () => {
    const html2canvas = (await import("html2canvas")).default;
    const { jsPDF } = await import("jspdf");

    const el = document.getElementById("weeks-grid");
    if (!el) {
      toast.error("Grid not found.");
      return;
    }

    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const ratio = Math.min(
      pageWidth / canvas.width,
      pageHeight / canvas.height
    );
    const imgWidth = canvas.width * ratio;
    const imgHeight = canvas.height * ratio;

    const x = (pageWidth - imgWidth) / 2;
    const y = (pageHeight - imgHeight) / 2;

    pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);

    pdf.save("until-you-die-weeks.pdf");
  };

  return (
    <Form {...form}>
      <form
        id={formId}
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-4", className)}
      >
        <FormField
          control={form.control}
          name="birthDate"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel className="mb-1">Date of Birth</FormLabel>
              <DatePicker field={field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="birthPlace"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Place of Birth</FormLabel>
              <Select onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select birthplace..." />
                </SelectTrigger>
                <SelectContent>
                  {birthPlaceOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button
          form={formId}
          type="submit"
          disabled={!isDirty}
          variant="outline"
          className="border-violet-500 bg-violet-950 text-white hover:bg-violet-700 hover:text-white"
        >
          Calculate your remaining lifetime
        </Button>

        <Timer />

        <WeeksTable />

        <Button
          type="button"
          onClick={exportToPdf}
          variant="outline"
          className="mt-4 border-violet-500 bg-violet-950 text-white hover:bg-violet-700 hover:text-white"
        >
          Export as PDF
        </Button>
      </form>
    </Form>
  );
}
