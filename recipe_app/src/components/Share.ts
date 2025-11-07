export function useShareRecipe() {
  async function shareRecipe(title: string, text: string, url: string) {
    try {
      if (!navigator.canShare) {
        alert("Your browser doesn't support the Web Share API.")
        return
      }
      // await navigator.share({ title, text, url })
      await navigator.share({
        title,
        text: `${text}\n${url}`,
      })
      console.log('Game shared successfully!')
    } catch (err) {
      console.error('Error sharing game:', err)
    }
  }

  return { shareRecipe }
}
