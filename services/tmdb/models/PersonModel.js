import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

import { tmdbConfig } from '../config'

export const PersonModel = ({
  biography,
  birthday,
  combined_credits,
  deathday,
  known_for_department,
  name,
  place_of_birth,
  profile_path,
}) => ({
  biography,
  birthday: `${birthday} (${dayjs().from(birthday, true)})`,
  birthPlace: place_of_birth,
  credits: combined_credits,
  deathday,
  name,
  profile: profile_path
    ? `${tmdbConfig.basePathProfile}${profile_path}`
    : '/images/icons/no-photos.svg',
  role: known_for_department.toLowerCase(),
})
