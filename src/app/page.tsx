import Country from 'components/Country';
import executeGraphQl from 'utils/executeGraphQl';
import {graphql} from '@/fuse';

const query = graphql(`
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
  const data = await executeGraphQl({query});
  const visited = ['AT', 'DE'];

  return (
    <>
      <h1>European countries</h1>
      <ul>
        {data.countries.map((country) => {
          // @ts-expect-error -- Only available in child
          country.name;

          return (
            <Country
              key={country.code}
              visited={visited.includes(country.code)}
              country={country}
            />
          );
        })}
      </ul>
    </>
  );
}
