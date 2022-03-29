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

async function handleClick(dispatch, search) {
    try {
        dispatch({ type: 'FETCH_START' });
        const data = await fetchWordInfo(search);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch(error){
        dispatch({ type: 'FETCH_ERROR', payload: error });
    }
}

function Search() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState(' ');

    return (
        <Container>
            <Box textAlign="center" mt={8} fontSize="xl">
                <Heading as="h2">English Dictionary</Heading>
                <Input 
                    value={search}
                    onChange={({target}) => { setSearch(target.value) }} 
                    my={4} 
                    placeholder='Search for a Word' 
                    size='lg' 
                />
                <Button onClick={() => {handleClick(dispatch, search)}} background="purple.400">Search</Button>        
            </Box>
        </Container>
    )
}

export default Search;