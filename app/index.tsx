import { UntilYouDieForm } from "./until-you-die-form";
import { z } from "zod";
import {create} from "zustand";

type UntilYouDieStore = {
    data: UntilYouDieForm;
    setData: (data: UntilYouDieStore["data"]) => void;
};

export const useUntilYouDieStore = create<UntilYouDieStore>((set) => ({
    data:{

    },
    setData: (data) => set({data}),
}));

export const UntilYouDieSchema = z.object({
    
});

export type UntilYouDieForm = z.infer<typeof UntilYouDieSchema>;