/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Continent = {
  code: Scalars['ID']['output'];
  countries: Array<Country>;
  name: Scalars['String']['output'];
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Country = {
  awsRegion: Scalars['String']['output'];
  capital?: Maybe<Scalars['String']['output']>;
  code: Scalars['ID']['output'];
  continent: Continent;
  currencies: Array<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  emoji: Scalars['String']['output'];
  emojiU: Scalars['String']['output'];
  languages: Array<Language>;
  name: Scalars['String']['output'];
  native: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  phones: Array<Scalars['String']['output']>;
  states: Array<State>;
  subdivisions: Array<Subdivision>;
};


export type CountryNameArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
};

export type Language = {
  code: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  native: Scalars['String']['output'];
  rtl: Scalars['Boolean']['output'];
};

export type LanguageFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Query = {
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages: Array<Language>;
};


export type QueryContinentArgs = {
  code: Scalars['ID']['input'];
};


export type QueryContinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};


export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};


export type QueryCountryArgs = {
  code: Scalars['ID']['input'];
};


export type QueryLanguageArgs = {
  code: Scalars['ID']['input'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};

export type State = {
  code?: Maybe<Scalars['String']['output']>;
  country: Country;
  name: Scalars['String']['output'];
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type Subdivision = {
  code: Scalars['ID']['output'];
  emoji?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = { countries: Array<{ code: string, name: string }> };

export type Country_CountryFragment = { name: string };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const Country_CountryFragmentDoc = new TypedDocumentString(`
    fragment Country_country on Country {
  name
}
    `, {"fragmentName":"Country_country"}) as unknown as TypedDocumentString<Country_CountryFragment, unknown>;
export const HomeDocument = new TypedDocumentString(`
    query Home {
  countries(filter: {continent: {eq: "EU"}}) {
    code
    ...Country_country
  }
}
    fragment Country_country on Country {
  name
}`) as unknown as TypedDocumentString<HomeQuery, HomeQueryVariables>;