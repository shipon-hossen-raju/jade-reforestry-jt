import React from "react";

export type InputChangeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;
export type ChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>;
