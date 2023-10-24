/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query Home {\n    countries(filter: {continent: {eq: \"EU\"}}) {\n      code\n\n      # The country fragment is used here without having to\n      # import from Country.tsx. This enables RSC support.\n      ...Country_country\n    }\n  }\n": types.HomeDocument,
    "\n    fragment Country_country on Country {\n      name\n    }\n  ": types.Country_CountryFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Home {\n    countries(filter: {continent: {eq: \"EU\"}}) {\n      code\n\n      # The country fragment is used here without having to\n      # import from Country.tsx. This enables RSC support.\n      ...Country_country\n    }\n  }\n"): typeof import('./graphql').HomeDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment Country_country on Country {\n      name\n    }\n  "): typeof import('./graphql').Country_CountryFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
