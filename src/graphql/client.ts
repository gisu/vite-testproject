import { ApolloClient, createHttpLink, HttpOptions, InMemoryCache } from '@apollo/client/core'

const createLink = (opts: HttpOptions = {}) => {
  return createHttpLink({ uri: import.meta.env.VITE_API_ENDPOINT, ...opts })
}

// eslint-disable-next-line no-return-assign
export const setAuthToken = (token?: string) => {
  const options: HttpOptions = {
    headers: {
      Authorization: token ? `Bearer ${token}` : null
    }
  }

  apolloClient.setLink(createLink(options))
}

// Cache implementation
const cache = new InMemoryCache({})

// Create the apollo client
export const apolloClient = new ApolloClient({
  cache,
  link: createLink(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network'
    }
  }
})
