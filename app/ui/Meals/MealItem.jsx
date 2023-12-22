import Image from "next/image";
import Link from "next/link";
import Style from "./mealItem.module.css";

export default function MealItem({ title, slug, image, summary, creator }) {
    return (
        <article className={Style.meal}>
            <header>
                <div className={Style.image}>
                    <Image src={image} alt={title} fill />
                </div>
                <div className={Style.headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={Style.content}>
                <p className={Style.summary}>{summary}</p>
                <div className={Style.actions}>
                    <Link href={`/meals/${slug}`}>View Details</Link>
                </div>
            </div>
        </article>
    )
}
