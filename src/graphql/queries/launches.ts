import gql from 'graphql-tag'

export const LastLaunch = gql`
  query lastLaunch {
    launchesPast (limit: 1, sort: "launch_date_utc", order: "desc") {
      mission_name
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
            payload_mass_lbs
          }
        }
      }
      launch_date_utc
    }
  }
`

export const ListLaunches = gql`
  query listLaunches ($limit: Int!) {
    launches (limit: $limit, sort: "launch_date_utc", order: "desc") {
      mission_name
      rocket {
        rocket_name
      }
      launch_date_utc
      id
    }
  }
`

export const SelectLaunch = gql`
  query selectLaunch ($id: ID!) {
    launch(id: $id) {
      mission_name
      details
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
            payload_mass_lbs
          }
        }
      }
      launch_date_utc
    }
  }
`
