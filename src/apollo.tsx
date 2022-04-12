

import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import { getWithExpiry } from './util';

const httpLink = createHttpLink({
    uri: "https://nestjs--graphql.herokuapp.com/graphql",
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = getWithExpiry("token");
    // return the headers to the context so httpLink can read them

    // How do I get my react state here?

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    };
});

const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export { apolloClient }
