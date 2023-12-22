import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";
import Style from "./page.module.css";

export async function generateMetadata({ params }) {

    const meal = await getMeal(params.mealDetail);

    if (!meal) notFound();

    return {
        title: meal.title,
        description: meal.summary
    };
}

export default async function MealDetailPage({ params }) {

    const meal = await getMeal(params.mealDetail);

    if (!meal) notFound();

    const { title, image, summary, creator, creator_email, instructions } = meal;

    return (
        <>
            <header className={Style.header}>
                <div className={Style.image}>
                    <Image src={image} alt={title} fill />
                </div>
                <div className={Style.headerText}>
                    <h1>{title}</h1>
                    <p className={Style.creator}>
                        by <a href={`mailto:${creator_email}`}>{creator}</a>
                    </p>
                    <p className={Style.summary}>
                        {summary}
                    </p>
                </div>
            </header>
            <main className={Style.main}>
                <p className={Style.instructions} dangerouslySetInnerHTML={{ __html: instructions.replace(/\n/g, "<br/>") }}>
                </p>
            </main>
        </>
    )
}
