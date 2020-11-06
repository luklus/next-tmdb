import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

import { tmdbConfig } from '../config'

export const PersonModel = ({
  biography,
  birthday,
  combined_credits,
  deathday,
  images,
  known_for_department = null,
  name,
  place_of_birth,
  profile_path,
}) => ({
  biography,
  birthday: `${birthday} (${dayjs().from(birthday, true)})`,
  birthPlace: place_of_birth,
  credits: combined_credits,
  deathday,
  gallery: images.profiles.map((item) => ({
    img: `${tmdbConfig.basePathProfile}${item.file_path}`,
  })),
  name,
  profile: profile_path
    ? `${tmdbConfig.basePathProfile}${profile_path}`
    : tmdbConfig.basePathEmpty,
  role: known_for_department ? known_for_department.toLowerCase() : null,
})
