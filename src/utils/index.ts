/**
 * Convert a short YT Link in a longer variant
 * @param link
 */
export const convertYoutubeLink = (link: string) => {
  const youtubeId = link.split('/').slice(-1)
  return `https://www.youtube-nocookie.com/embed/${youtubeId}`
}
