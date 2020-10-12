import config from '../config';

export default function fetchGraphQl({
  query,
  variables
}: {
  query: string;
  variables?: any;
}) {
  return fetch(config.API_URL, {
    method: 'POST',
    body: JSON.stringify({query, variables})
  })
    .then(response => response.json())
    .then(response => response.data);
}
