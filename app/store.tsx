import { z } from "zod";
import { create } from "zustand";

export const UntilYouDieSchema = z.object({
  birthDate: z.date(),
  birthPlace: z.enum(["Africa", "America", "Asia", "Europe", "Oceania"]),
});

export type UntilYouDieForm = z.infer<typeof UntilYouDieSchema>;

type UntilYouDieStore = {
  data: UntilYouDieForm | null;
  setData: (data: UntilYouDieForm) => void;
};

export const useUntilYouDieStore = create<UntilYouDieStore>((set) => ({
  data: null,
  setData: (data) => set({ data }),
}));
