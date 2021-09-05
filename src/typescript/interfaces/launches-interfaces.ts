interface ILaunchLinks {
  article_link: string
  video_link: string
}
interface ILaunchPayload {
  payload_type: string
  payload_mass_kg: string
  payload_mass_lbs: string
}
interface ILaunchRocket {
  rocket_name: string
  second_stage?: {
    payloads: ILaunchPayload[]
  }
}

export interface ILaunches {
  id: number
  launch_date_utc: string
  mission_name: string
  rocket: ILaunchRocket
}

export interface ILastLaunchData {
  launch_date_utc?: string
  launch_site?: any
  links?: ILaunchLinks
  mission_name?: string
  rocket?: ILaunchRocket
}

export interface ILaunchesDetails {
  id: string
  launch_date_utc: Date
  mission_name: string
  rocket?: ILaunchRocket
}

interface ILaunchBase {
  loading?: any
  error?: any
}

export interface ILastLaunch extends ILaunchBase {
  launchResult: ILastLaunchData | any
}

export interface ILaunchList extends ILaunchBase {
  result: ILaunches[] | any
}

export interface ISelectedLaunch extends ILaunchBase {
  launchDetail: ILaunchesDetails[] | any
}
