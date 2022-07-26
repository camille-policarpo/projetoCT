import { FormEvent, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Flex, Box, Text, Input, Button, Image } from '@chakra-ui/react';
import { Coordenadas, Openmeteo } from '../services/axios';
import { FaTemperatureHigh } from 'react-icons/fa'
import { TbTemperatureMinus , TbTemperaturePlus } from 'react-icons/tb'
import { MdOutlineWaterDrop } from 'react-icons/md'

interface Coordenada {
  latitude: number;
  longitude: number;

}

interface Tempo {
  temperature_2m: number;

}

const Home: NextPage = () => {

  const [coordenadas, setCoordenada] = useState<Coordenada | null>();
  const [texto, setTexto] = useState('');
 
  let  temp, umi, tMin, tMax

  async function onSubmit(event: FormEvent){
    event.preventDefault();
    const res = await Coordenadas.get(`search?name=${texto}&count=1`)
    //await Coordenadas.get(`search?name=${texto}&count=1`).then((data) => {
    //setCoordenada(data.data)
    //}
    //)
  
    const {latitude,longitude,timezone} = res.data.results[0]


    let newTimezone = timezone.replace ('/', '%2F');

  
    const api = await Openmeteo.get(`forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m&daily=temperature_2m_max,temperature_2m_min&timezone=${newTimezone}`)

     console.log(api.data)



      tMax = api.data.daily.temperature_2m_max[0]

      return (
        tMax
      )
    
  }

  
  


  return (
    <div>
      <Head>
        <title>Consulte o tempo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Flex as="form" alignItems={"center"} h='100vh' justifyContent='center' bg='blue.200' onSubmit={(event) => onSubmit(event)}>
          <Flex borderRadius="xl" bg='whiteAlpha.400' padding={"10"} direction={'column'}> 
          <Input onChange={(event) => setTexto(event.target.value)}/>
          <Button type="submit">ENVIAR</Button>

          <Flex alignItems='start' direction={'column'}>
            <FaTemperatureHigh />   <Text> Temperatura em celsius: {temp}</Text>
            <MdOutlineWaterDrop />  <Text> Umidade: {umi}</Text>
            <TbTemperaturePlus />   <Text> Temp máxima do dia: {tMax}</Text>
            <TbTemperatureMinus />  <Text> Temp mínima do dia: {tMin}</Text>
          </Flex>

          </Flex>
        </Flex>

      </main>
    </div>
  )
}

export default Home