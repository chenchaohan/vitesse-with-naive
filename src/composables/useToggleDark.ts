//@ts-ignore
import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils.js";

const isDark = useDark()
const toggleDark = useToggle(isDark)

watchEffect(()=>{
    if (isDark.value) {
        toggleTheme({
            scopeName: "theme-dark",
        });
        console.log("已切换为暗色主题");
    } else {
        toggleTheme({
            scopeName: "theme-default",
        });
        console.log("已切换为默认主题");
    }
})

export const useToggleDark = () =>{
    return {
        isDark, toggleDark
    }
}
