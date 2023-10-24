import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

export const metadata = {
  title: 'clientless-graphql'
};

export default function RootLayout({children}: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
