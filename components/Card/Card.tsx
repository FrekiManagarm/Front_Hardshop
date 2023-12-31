"use client"

import { 
    Center,
    Box,
    useColorModeValue,
    Heading,
    Text,
    Stack
} from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"


export default function Card({ id, image, name, type, prop1, prop2, link }: { id: number, image: string, name: string, type: string, prop1: string, prop2: string, link: string }) {
    return (
        <Link href={link}>
            <Center py={12}>
                <Box
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}>
                    <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'270px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${image})`,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                        filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={image}
                        style={{ borderRadius: "25px" }}
                        alt="#"
                    />
                    </Box>
                    <Stack pt={10} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                        {type}
                    </Text>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {name}
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={800} fontSize={'xl'}>
                            {prop1}
                        </Text>
                        <Text color={'gray.600'}>
                            {prop2}
                        </Text>
                    </Stack>
                    </Stack>
                </Box>
            </Center>
        </Link>
    )
}