'use client';

import {FragmentType, graphql, useFragment} from '@/fuse';

const Country_country = graphql(`
  fragment Country_country on Country {
    name
  }
`);

type Props = {
  country: FragmentType<typeof Country_country>;
  visited?: boolean;
};

export default function Country({visited, ...data}: Props) {
  const country = useFragment(Country_country, data.country);

  // @ts-expect-error -- Only available in parent. Note that this is TS-only, the property actually does exist here.
  country.code;

  return (
    <li>
      {country.name} {visited && '(visited)'}
    </li>
  );
}
