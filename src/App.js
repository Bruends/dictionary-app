import React from 'react';
import {
  ChakraProvider,
  theme,
  Stack,
  Spinner,
  Flex,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Search from './components/Search';
import WordInfo from './components/WordInfo';
import WordMeanings from './components/WordMeanings';
import { useSelector } from 'react-redux';

function App() {
  // getting global state
  const state = useSelector(state => state);

  return (
    <ChakraProvider theme={theme}>
      {/* theme switch button */}
      <Flex w="90%" justifyContent="flex-end" p={4}>
        <ColorModeSwitcher />
      </Flex>

      {/* search bar */}
      <Search />

      {/* Loading Spinner */}
      <Flex justify="center" w="100%" mt={8}>
        {state.loading ? <Spinner size="xl" color="purple.500" /> : null}
      </Flex>

      {/* word info */}
      {state.data && (
        <Stack wrap="wrap" direction="row" justify="center">
          <WordMeanings {...state.data} />
          <WordInfo {...state.data} />
        </Stack>
      )}

      {/* error alerts */}
      {state.error && (
        <Flex justify="center" w="60ch" mt={8} mx="auto">
          <Alert status="error" borderRadius={4}>
            <AlertIcon />
            {state.error}
          </Alert>
        </Flex>
      )}
    </ChakraProvider>
  );
}

export default App;
