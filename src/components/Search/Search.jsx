import {    
    Box,    
    Container,
    Button,
    Input, 
    Heading
  } from '@chakra-ui/react';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchWordInfo } from '../../apiRequest/apiRequest';

function handleClick(dispatch, search, event) {
    event.preventDefault();
    dispatch(fetchWordInfo(search));
}

function Search() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState(' ');

    return (
        <Container>
            <Box textAlign="center" mt={8} fontSize="xl">
                <Heading as="h2">English Dictionary</Heading>
                <form onSubmit={(event) => {handleClick(dispatch, search, event)}} >
                    <Input 
                        value={search}
                        onChange={({target}) => { setSearch(target.value) }} 
                        my={4} 
                        placeholder='Search for a Word' 
                        size='lg' 
                    />
                    <Button                        
                        background="purple.400" 
                        type='submit'
                    >Search
                    </Button>
                </form>        
            </Box>
        </Container>
    )
}

export default Search;