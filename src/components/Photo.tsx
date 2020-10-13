/** @jsx jsx */
import {jsx} from '@emotion/core';
import {Photo_photoFragment} from 'graphQlTypes';
import {Theme} from 'theme';

type Props = {
  photo: Photo_photoFragment;
};

export default function Photo({photo}: Props) {
  return (
    <div css={{padding: 10}}>
      <img height={200} src={photo.url} />
      <div css={{fontFamily: 'sans-serif', marginTop: 10}}>
        <p css={{fontSize: 20, margin: 0}}>{photo.title}</p>
        <p css={(theme: Theme) => ({margin: 0, color: theme.colors.gray})}>
          {photo.album?.title}
        </p>
      </div>
    </div>
  );
}

Photo.fragments = {
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
