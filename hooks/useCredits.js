import { appsConfig } from '../config/apps'
import { CreditModel } from '../services/tmdb/models/CreditModel'

export const useCredits = (creditsResponse) => {
  const creditsObiect = {
    acting: [...creditsResponse.cast].map((item) =>
      CreditModel(item, 'acting')
    ),

    crew: creditsResponse.crew
      .filter((item) => item.department.toLowerCase() === 'crew')
      .map((item) => CreditModel(item, 'crew')),

    directing: creditsResponse.crew
      .filter((item) => item.department.toLowerCase() === 'directing')
      .map((item) => CreditModel(item, 'directing')),

    production: creditsResponse.crew
      .filter((item) => item.department.toLowerCase() === 'production')
      .map((item) => CreditModel(item, 'production')),

    writing: creditsResponse.crew
      .filter((item) => item.department.toLowerCase() === 'writing')
      .map((item) => CreditModel(item, 'writing')),
  }

  const switchCredits = appsConfig.switches.credits.filter(
    (item) => creditsObiect[item.type].length
  )

  return {
    creditsObiect,
    switchCredits,
  }
}
