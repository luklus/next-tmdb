import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

import { tmdbConfig } from '../config'

export const PersonModel = ({
  birthday,
  deathday,
  known_for_department,
  name,
  place_of_birth,
  profile_path,
}) => ({
  birthday: `${birthday} (${dayjs().from(birthday, true)})`,
  birthPlace: place_of_birth,
  deathday,
  name,
  profile: `${tmdbConfig.basePathProfile}${profile_path}`,
  role: known_for_department.toLowerCase(),
})
