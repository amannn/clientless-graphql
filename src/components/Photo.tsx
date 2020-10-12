import {Photo_PhotoFragment} from '../../graphQlTypes';

type Props = {
  photo: Photo_PhotoFragment;
};

const fragments = {
  photo: /* GraphQL */ `
    fragment Photo_photo on Photo {
      id
      title
      url
      album {
        title
      }
    }
  `
};

export default function Photo({photo}: Props) {
  return (
    <div>
      <img height={200} src={photo.url} />
      <p>
        <b>{photo.title}</b> from <b>{photo.album?.title}</b>
      </p>
    </div>
  );
}
Photo.fragments = fragments;
