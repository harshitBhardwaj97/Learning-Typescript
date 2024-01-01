import { Equal, Expect } from "../helpers/type-utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

type TInputProps = Omit<InputProps, "onChange"> & {
  onChange: (value: string) => void;
};

export const Input = (props: TInputProps) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);
        type test = Expect<Equal<typeof e, string>>;
      }}
    ></Input>
  );
};
