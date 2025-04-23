import { useState, ChangeEvent, InputHTMLAttributes } from "react";
import useDebounce from "@hooks/useDebounce";

interface ISearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string;
  delayMS?: number;
  onChange: (value: string) => void;
}

const SearchInput = ({
  value,
  onChange,
  delayMS = 1000,
  ...props
}: ISearchInputProps) => {
  const [displayValue, setDisplayValue] = useState<string>(value);
  const debounceChange = useDebounce(onChange, delayMS);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue: string = String(event.target.value as string | number);
    setDisplayValue(newValue);
    debounceChange(newValue);
  }

  return (
    <input
      type="search"
      value={displayValue}
      onChange={handleChange}
      {...props}
    />
  );
};

export default SearchInput;
