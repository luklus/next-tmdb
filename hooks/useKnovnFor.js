export const useKnovnFor = (credits) => {
  let knovnForArray = []
  const uniqueCredits = new Map()

  for (let [key, val] of Object.entries(credits)) {
    for (const item of val) {
      if (!uniqueCredits.has(item.credit_id)) {
        uniqueCredits.set(item.credit_id, true)

        knovnForArray.push(item)
      }
    }
  }

  knovnForArray.sort((a, b) => b.popularity - a.popularity)

  return { knovnForArray: knovnForArray.slice(0, 8) }
}
