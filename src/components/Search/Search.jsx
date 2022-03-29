import {    
    Box,    
    Container,
    Button,
    Input, 
    Heading
  } from '@chakra-ui/react';

function Search() {
    return (
        <Container>
            <Box textAlign="center" mt={8} fontSize="xl">
                <Heading as="h2">English Dictionary</Heading>
                <Input my={4} placeholder='Search for a Word' size='lg' />
                <Button background="purple.400">Search</Button>        
            </Box>
        </Container>
    )
}

export default Search;