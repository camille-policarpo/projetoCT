import { FormEvent, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Flex, Box, Text, Input, Button, Image } from '@chakra-ui/react';


const Home: NextPage = () => {
  const [texto, setTexto] = useState('');

  async function onSubmit(event: FormEvent){
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Flex as={"form"} h={"100vh"} justifyContent="center" alignItems={"center"} bg="pink.400" onSubmit= {(event) => onSubmit(event)}>
          <Box borderRadius="xl" bg="whiteAlpha.400" padding="10">
            <Text>{texto}</Text>
            <Input onChange= {(event) => setTexto(event.target.value)}/>
            <Button type="submit">ENVIAR</Button>

            

          </Box>
        </Flex>
      </main>
    </div>
  )
}

export default Home


