import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/providers/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative w-16 h-8 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-lg"
      aria-label="Toggle theme"
    >
      {/* Track background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 dark:from-gray-600 dark:to-gray-800 transition-all duration-300" />
      
      {/* Slider circle */}
      <div 
        className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-lg transition-all duration-300 transform ${
          isDark ? 'translate-x-8' : 'translate-x-1'
        }`}
      >
        {/* Icons inside the circle */}
        <div className="flex items-center justify-center w-full h-full">
          <Sun 
            className={`h-4 w-4 text-yellow-500 transition-all duration-300 ${
              isDark ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            }`} 
          />
          <Moon 
            className={`absolute h-4 w-4 text-blue-600 transition-all duration-300 ${
              isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`} 
          />
        </div>
      </div>
    </button>
  )
}
