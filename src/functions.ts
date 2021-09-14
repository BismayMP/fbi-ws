// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import fetch from 'node-fetch'
import { BodyType } from './types'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getPage = async (body: BodyType) => {
  const params = new URLSearchParams()
  for (const param in body) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    params.append(param, body[param])
  }
  const response = await fetch(
    `https://api.fbi.gov/wanted/v1/list?${params.toString()}`,
  )
  return await response.json()
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getWantedPerson = async (url: string) => {
  const response = await fetch(url)
  return await response.json()
}
