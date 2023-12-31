import { Flex, Spinner } from "@chakra-ui/react";

export default function LoaderIcon() {
    return (
        <Flex
            w="100%"
            h="100vh"
            position="relative"
            justifyContent={'center'}
            alignItems="center"
        >
            <Spinner size={'xl'} />
        </Flex>
    )
}