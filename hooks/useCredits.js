import { appsConfig } from '../config/apps'

export const useCredits = (creditsResponse) => {
  const creditsObiect = {
    acting: [...creditsResponse.cast],

    crew: creditsResponse.crew.filter(
      (item) => item.department.toLowerCase() === 'crew'
    ),
    directing: creditsResponse.crew.filter(
      (item) => item.department.toLowerCase() === 'directing'
    ),
    production: creditsResponse.crew.filter(
      (item) => item.department.toLowerCase() === 'production'
    ),
    writing: creditsResponse.crew.filter(
      (item) => item.department.toLowerCase() === 'writing'
    ),
  }

  const switchCredits = appsConfig.switches.credits.filter(
    (item) => creditsObiect[item.type].length
  )

  return {
    creditsObiect,
    switchCredits,
  }
}
