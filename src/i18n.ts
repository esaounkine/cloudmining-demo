import { init, getLocaleFromNavigator, addMessages } from "svelte-i18n";
import en from "./locale/en.json";
import ru from "./locale/ru.json";

export const initI18n = (defaultLang: string = "en") => {
  addMessages("en", en);
  addMessages("ru", ru);

  init({
    fallbackLocale: defaultLang,
    initialLocale: getLocaleFromNavigator(),
  });
};
