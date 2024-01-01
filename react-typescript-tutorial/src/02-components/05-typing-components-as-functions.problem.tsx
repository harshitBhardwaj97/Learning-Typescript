import React from "react";

interface ButtonProps {
  className: string;
}

/* @ts-expect-error */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return {
    ohDear: "123",
  };
};

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
    </>
  );
};
