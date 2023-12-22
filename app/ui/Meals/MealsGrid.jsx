import MealItem from "./MealItem";
import Style from "./mealsGrid.module.css";

export default function MealsGrid({ meals }) {
    return (
        <ul className={Style.meals}>
            {meals.map(meal => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    )
}
