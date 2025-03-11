import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const AuthLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        Header
        {children}
        Footer
      </body>
    </html>
  );
}