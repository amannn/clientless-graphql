import {TypedDocumentString} from 'gql/graphql';

const API_URL = 'https://countries.trevorblades.com/';

export default function fetchGraphQl<Result, Variables>({
  query,
  variables
}: {
  query: TypedDocumentString<Result, Variables>;
  variables?: Record<string, any>;
}) {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({query, variables})
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .then((response) => response.data as Result);
}
