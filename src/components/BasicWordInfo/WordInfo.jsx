import {Container, Box, Text, Heading, Stack} from '@chakra-ui/react'

function WordInfo({word, phonetic, origin, meanings}){
    return(
        <Box maxW="md" p={10} my={5}>
            <Container>
                <Heading as="h3" >{word} :</Heading>             
                    <Text my={2}>
                        <strong>Pronunciation: </strong>
                        { phonetic[0].text }
                    </Text>
                <audio src={phonetic[0].audio} controls></audio>
            </Container>
        </Box>            
    )
}

export default WordInfo;