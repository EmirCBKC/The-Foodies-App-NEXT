"use server";

import slugify from "slugify";
import { redirect } from "next/navigation";
import { createMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMealForm(prevState, formData) {

    function isInvalidText(text) {
        return !text || text.trim() === "";
    }

    const newMeal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
        creator: formData.get("name"),
        creator_email: formData.get("email")
    };

    // console.log(newMeal);

    if (isInvalidText(newMeal.title) ||
        isInvalidText(newMeal.summary) ||
        isInvalidText(newMeal.instructions) ||
        isInvalidText(newMeal.creator) ||
        isInvalidText(newMeal.creator_email) ||
        !newMeal.creator_email.includes("@") ||
        !newMeal.image ||
        newMeal.image.size === 0) {
        return {
            message: "Invalid input."
        };
    }

    await createMeal(newMeal);
    revalidatePath("/meals");

    newMeal.title = slugify(newMeal.title, { lower: true });
    redirect(`/meals/${newMeal.title}`);
}