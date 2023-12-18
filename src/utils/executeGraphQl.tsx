import {TypedDocumentNode} from '@graphql-typed-document-node/core';
import {print} from 'graphql';

const API_URL = 'https://countries.trevorblades.com/';

export default function executeGraphQl<Result, Variables>({
  query,
  variables
}: {
  query: TypedDocumentNode<Result, Variables>;
  variables?: Variables;
}) {
  const body = JSON.stringify({
    query: print(query),
    variables
  });

  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .then((response) => response.data as Result);
}
