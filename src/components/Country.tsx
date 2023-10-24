'use client';

import {graphql} from 'gql';
import {Country_CountryFragment} from 'gql/graphql';

type Props = {
  country: Country_CountryFragment;
};

export default function Country({country}: Props) {
  return <li>{country.name}</li>;
}

Country.fragments = {
  country: graphql(/* GraphQL */ `
    fragment Country_country on Country {
      name
    }
  `)
};
