import React from 'react';
import { ChakraProvider, theme, Stack, Spinner} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Search from './components/Search'
import WordInfo from './components/WordInfo';
import WordMeanings from './components/WordMeanings';
import { useSelector } from 'react-redux';

function App() {
  
  const state = useSelector((state) => state);
  
  
  return (
    <ChakraProvider theme={theme}>      
      <ColorModeSwitcher justifySelf="flex-end" />
      <Search />

      <Stack align="center" mt={8}>
        {/* render loading spinner */}
        {state.loading ? <Spinner size='xl' /> : null}
      </Stack>

      {state.data ? (
        <Stack wrap="wrap" direction="row" justify="center">
          <WordInfo {...state.data} />
          <WordMeanings {...state.data} />
        </Stack>
      ): null}
      
      
    </ChakraProvider>
  );
}

export default App;
