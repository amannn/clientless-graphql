import Country from 'components/Country';
import {graphql} from 'gql';
import fetchGraphQl from 'utils/fetchGraphQl';

const query = graphql(/* GraphQL */ `
  query Home {
    countries(filter: {continent: {eq: "EU"}}) {
      code

      # The country fragment is used here without having to
      # import from Country.tsx. This enables RSC support.
      ...Country_country
    }
  }
`);

export default async function Index() {
  const data = await fetchGraphQl({query});

  return (
    <>
      <h1>European countries</h1>
      <ul>
        {data.countries.map((country) => (
          <Country key={country.code} country={country} />
        ))}
      </ul>
    </>
  );
}
