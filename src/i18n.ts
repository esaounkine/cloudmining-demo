import { init, getLocaleFromNavigator, addMessages } from "svelte-i18n";
import en from "./locale/en.json";

export const initI18n = () => {
  addMessages("en", en);

  init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator(),
  });
};
