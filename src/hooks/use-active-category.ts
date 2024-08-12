import { create } from "zustand";

import { Category } from "@/app/(routes)/(home)/_components/Projects/projects-data";

type State = {
    activeCategory: Category;
};

type Action = {
    setActiveCategory: (category: Category) => void;
};

type UseActiveCategoryType = State & Action;

export const useActiveCategory = create<UseActiveCategoryType>((set) => ({
    activeCategory: Category["Web Design"],
    setActiveCategory: (category: Category) =>
        set({ activeCategory: Category[category] }),
}));
