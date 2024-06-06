import { createClient } from "graphql-ws"
import { ApolloClient, InMemoryCache, HttpLink, split, from } from "@apollo/client/core"
import { onError } from "@apollo/client/link/error"
import { removeTypenameFromVariables } from "@apollo/client/link/remove-typename"
import { GraphQLWsLink } from "@apollo/client/link/subscriptions"
import { getMainDefinition } from "@apollo/client/utilities"
import { logErrorMessages } from "@vue/apollo-util"

const cache = new InMemoryCache()

// Http endpoint
const httpEndpoint = import.meta.env.VUE_APP_GRAPHQL_HTTP || "https://pubnet.astrograph.io/graphql"
const wsEndpoint = import.meta.env.VUE_APP_GRAPHQL_WS || "wss://pubnet.astrograph.io/graphql"

const httpLink = new HttpLink({ uri: httpEndpoint })
const wsLink = new GraphQLWsLink(createClient({ url: wsEndpoint }))

const splitLink = split(
  // split subscription queries to websocket link
  ({ query }) => {
    const definition = getMainDefinition(query)
    return definition.kind === "OperationDefinition" && definition.operation === "subscription"
  },
  wsLink,
  httpLink
)

const removeTypenameLink = removeTypenameFromVariables()

// Log any GraphQL errors or network error that occurred
const errorLink = onError((error) => {
  logErrorMessages(error)
})

// Files URL root
const apolloClient = new ApolloClient({
  cache,
  link: from([errorLink, removeTypenameLink, splitLink]),
  connectToDevTools: import.meta.env.DEV
})

export default apolloClient

// const apolloProvider = createApolloProvider({
//   defaultClient: apolloClient,
//   defaultOptions: {
//     $query: {
//       // fetchPolicy: 'cache-and-network',
//     }
//   },
//   errorHandler(error) {
//     // eslint-disable-next-line no-console
//     console.log(
//       "%cError",
//       "background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",
//       error.message
//     );
//   }
// })
