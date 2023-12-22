"use client";

import { useFormState } from "react-dom";
import ImagePicker from '@/app/ui/Meals/ImagePicker';
import MealsFormSubmit from '@/app/ui/Meals/MealsFormSubmit';
import { shareMealForm } from '@/lib/actions';
import Style from './page.module.css';

export default function ShareMealPage() {

    const [state, formAction] = useFormState(shareMealForm, {
        message: null
    });

    return (
        <>
            <header className={Style.header}>
                <h1>
                    Share your <span className={Style.highlight}>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={Style.main}>
                <form className={Style.form} action={shareMealForm}>
                    <div className={Style.row}>
                        <p>
                            <label htmlFor="name">Your name</label>
                            <input type="text" id="name" name="name" required />
                        </p>
                        <p>
                            <label htmlFor="email">Your email</label>
                            <input type="email" id="email" name="email" required />
                        </p>
                    </div>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required />
                    </p>
                    <p>
                        <label htmlFor="summary">Short Summary</label>
                        <input type="text" id="summary" name="summary" required />
                    </p>
                    <p>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows="10"
                            required
                        ></textarea>
                    </p>
                    <ImagePicker label="Your image" name="image" />
                    {state.message && <p>{state.message}</p>}
                    <p className={Style.actions}>
                        <MealsFormSubmit />
                    </p>
                </form>
            </main>
        </>
    );
}
