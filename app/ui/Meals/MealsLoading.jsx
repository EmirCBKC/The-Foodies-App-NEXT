import Style from "./mealsLoading.module.css";

export default function Mealsloading() {
    return (
        <p className={Style.loading}>
            Fetching meals...
        </p>
    )
}
