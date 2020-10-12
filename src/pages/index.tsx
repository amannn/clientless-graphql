import Head from 'next/head';
import {HomeQuery} from '../../graphQlTypes';
import Photo from '../components/Photo';
import fetchGraphQl from '../utils/fetchGraphQl';

type Props = {
  data: HomeQuery;
};

const query = /* GraphQL */ `
  query Home {
    photos(options: {paginate: {limit: 2}}) {
      data {
        ...Photo_photo
      }
    }
  }
  ${Photo.fragments.photo}
`;

export async function getServerSideProps() {
  return {
    props: {
      data: await fetchGraphQl({query})
    }
  };
}

export default function Home({data}: Props) {
  return (
    <>
      <Head>
        <title>graphql-code-generator-example</title>
      </Head>
      <div>
        {data.photos.data.map(photo => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    </>
  );
}
