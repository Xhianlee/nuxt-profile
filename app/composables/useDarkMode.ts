export const useDarkMode = () => {
  const isDark = useState('isDark', () => false)

  const apply = () => {
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  const init = () => {
    const saved = localStorage.getItem('theme')
    isDark.value = saved
      ? saved === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
    apply()
  }

  const toggle = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    apply()
  }

  return { isDark, init, toggle }
}