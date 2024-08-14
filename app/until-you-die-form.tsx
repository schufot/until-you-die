import { Combobox } from "@/components/Combobox";
import Timer from "@/components/Timer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { UntilYouDieSchema, type UntilYouDieForm } from ".";

interface UntilYouDieFormProps extends React.HTMLAttributes<HTMLFormElement> {
    onSubmitAction: (data: UntilYouDieForm) => Promise<void>;
    formId?: string;
}

export function UntilYouDieForm({
    className,
    onSubmitAction,
    formId = "until-you-die-form",
}: UntilYouDieFormProps){
    const form = useForm({
        resolver: zodResolver(UntilYouDieSchema),
        defaultValues:{

        },
    });

    const {isDirty} = form.formState;

    const onSubmit = async (data: UntilYouDieForm) => {
        console.log("Form submitted");
        try{
            console.log(data);
            toast.success("Calculation successfull.");
        } catch (error){
            console.error("Error calculating.", error);
            toast.error("Error calculating.");
        }
    };

    return (
        <Form {...form}>
            <form 
            id={formId}
            onSubmit={form.handleSubmit(onSubmit)}
            className={cn("space-y-4", className)}>
                <Calendar captionLayout="dropdown-buttons" fromYear={1950} toYear={2050}/>
                <Combobox></Combobox>
                <Button form={formId} type="submit" disabled={!isDirty} variant={"outline"} className='border-violet-500 bg-violet-950 text-white hover:bg-violet-700 hover:text-white'>
                Calculate your remaining lifetime
                </Button>
                <Timer/>

            </form>
        </Form>
    )

};

