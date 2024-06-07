import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../gameQueryStore";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchQuery = useGameQueryStore((state) => state.setSearchQuery);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (ref.current) {
      setSearchQuery(ref.current.value);
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          name="search"
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          ref={ref}
        />
      </InputGroup>
    </form>
  );
}

export default SearchBar;
