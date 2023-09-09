"use client"
import { GPU } from "@/types"
import { Container, Box, Text, SimpleGrid, ListItem, Flex, Stack, VStack, Button, Heading, StackDivider, useColorModeValue, List, Image } from "@chakra-ui/react"

export default function GPUDetailsPage({ gpu }: { gpu: GPU }) {
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              gpu.image
            }
            fit={'contain'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {gpu.nom}
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                {gpu.description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('orange.500', 'orange.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Détails
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Coeurs :
                  </Text>{' '}
                  {gpu.nb_coeur} coeurs
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Ventilateurs :
                  </Text>{' '}
                  {gpu.nb_ventilateurs}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Sorties Vidéos :
                  </Text>{' '}
                  {gpu.nb_video_output}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            borderRadius={"lg"}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Utiliser pour une configuration
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  )
}