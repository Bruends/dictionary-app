import { Box, Container, Button, Input, Heading } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchWordInfo } from '../../apiRequest/apiRequest';

function handleClick(dispatch, search, event) {
  event.preventDefault();
  dispatch(fetchWordInfo(search));
}

function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  return (
    <Container>
      <Box textAlign="center" mt={8} fontSize="xl">
        <Heading>English Dictionary</Heading>
        <form
          onSubmit={event => {
            handleClick(dispatch, search, event);
          }}
        >
          <Input
            value={search}
            onChange={({ target }) => {
              setSearch(target.value);
            }}
            my={4}
            placeholder="Search Word"
            size="lg"
            borderColor="purple.500"
            focusBorderColor="purple.400"
            required
          />

          <Button background="purple.400" type="submit">
            Search <SearchIcon ml={2} />
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Search;
