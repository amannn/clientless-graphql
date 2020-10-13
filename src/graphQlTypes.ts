export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type PageQueryOptions = {
  paginate?: Maybe<PaginateOptions>;
  slice?: Maybe<SliceOptions>;
  sort?: Maybe<Array<Maybe<SortOptions>>>;
  operators?: Maybe<Array<Maybe<OperatorOptions>>>;
  search?: Maybe<SearchOptions>;
};

export type PaginateOptions = {
  page?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type SliceOptions = {
  start?: Maybe<Scalars['Int']>;
  end?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type SortOptions = {
  field?: Maybe<Scalars['String']>;
  order?: Maybe<SortOrderEnum>;
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type OperatorOptions = {
  kind?: Maybe<OperatorKindEnum>;
  field?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum OperatorKindEnum {
  GTE = 'GTE',
  LTE = 'LTE',
  NE = 'NE',
  LIKE = 'LIKE'
}

export type SearchOptions = {
  q?: Maybe<Scalars['String']>;
};




















export type CreateAlbumInput = {
  title: Scalars['String'];
  userId: Scalars['ID'];
};

export type UpdateAlbumInput = {
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type CreateCommentInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  body: Scalars['String'];
};

export type UpdateCommentInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type CreatePhotoInput = {
  title: Scalars['String'];
  url: Scalars['String'];
  thumbnailUrl: Scalars['String'];
};

export type UpdatePhotoInput = {
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
};

export type CreatePostInput = {
  title: Scalars['String'];
  body: Scalars['String'];
};

export type UpdatePostInput = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type CreateTodoInput = {
  title: Scalars['String'];
  completed: Scalars['Boolean'];
};

export type UpdateTodoInput = {
  title?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
};

export type CreateUserInput = {
  name: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  address?: Maybe<AddressInput>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyInput>;
};

export type AddressInput = {
  street?: Maybe<Scalars['String']>;
  suite?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  geo?: Maybe<GeoInput>;
};

export type GeoInput = {
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type CompanyInput = {
  name?: Maybe<Scalars['String']>;
  catchPhrase?: Maybe<Scalars['String']>;
  bs?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  address?: Maybe<AddressInput>;
  phone?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  company?: Maybe<CompanyInput>;
};

export enum CacheControlScope {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}


export type Photo_photoFragment = { id?: Maybe<string>, title?: Maybe<string>, url?: Maybe<string>, album?: Maybe<{ title?: Maybe<string> }> };

export type HomeQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeQuery = { photos?: Maybe<{ data?: Maybe<Array<Maybe<Photo_photoFragment>>> }> };
