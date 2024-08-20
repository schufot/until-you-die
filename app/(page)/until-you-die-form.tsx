import { DatePicker } from "@/components/DatePicker";
import Timer from "@/components/Timer";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  UntilYouDieSchema,
  type UntilYouDieForm,
  useUntilYouDieStore,
} from "../store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
            <FormItem>
              <div className="">
                <FormLabel>Date of Birth</FormLabel>
              </div>
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
                  <SelectItem value="Africa">Africa</SelectItem>
                  <SelectItem value="America">America</SelectItem>
                  <SelectItem value="Asia">Asia</SelectItem>
                  <SelectItem value="Europe">Europe</SelectItem>
                  <SelectItem value="Oceania">Oceania</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button
          form={formId}
          type="submit"
          disabled={!isDirty}
          variant={"outline"}
          className="border-violet-500 bg-violet-950 text-white hover:bg-violet-700 hover:text-white"
        >
          Calculate your remaining lifetime
        </Button>
        <Timer />
      </form>
    </Form>
  );
}
