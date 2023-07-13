import React, { FC } from "react";

interface Props {
  error: string;
}

const Error: FC<Props> = ({ error }) => {
  return <h4>{error}</h4>;
};

export default Error;
