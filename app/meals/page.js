import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import MealsGrid from "../ui/Meals/MealsGrid";
import Mealsloading from "../ui/Meals/MealsLoading";
import Style from "./page.module.css";

export const metadata = {
    title: 'All Meals',
    description: 'Browse the delicious meals shared by our vibrant community.',
};

async function Meals() {
    const meals = await getMeals();

    return <MealsGrid meals={meals} />
}

export default function MealsPage() {
    //* cta === call to action

    return (
        <>
            <header className={Style.header}>
                <h1>
                    Delicious meals, created <span className={Style.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favourite recipe and cook it yourself. It is easy and fun!
                </p>
                <p className={Style.cta}>
                    <Link href="/meals/share">Share your favourite recipe</Link>
                </p>
            </header>
            <main className={Style.main}>
                <Suspense fallback={<Mealsloading />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    )
}
