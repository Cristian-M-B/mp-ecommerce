import Products from '../data/products'
import Layout from '../components/Layout'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Grid, Col, Image, Text, Button, Row } from '@nextui-org/react'


export default function Item({ item }) {
    const router = useRouter()

    const payment = async () => {
        try {
            const { data } = await axios.post('/api/mp', { item })
            router.push(data)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <Layout>
            {item
                ? <Grid.Container>
                    <Col span={6}>
                        <Image
                            src={item.image}
                            width={350}
                            height={450}
                            alt={item.name}
                        />
                    </Col>
                    <Col span={6} css={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(0,-50%)' }}>
                        <Text b>{item.name}</Text>
                        <Text>{item.description} </Text>
                        <Text>$ {item.price}</Text>
                        <Button auto color='gradient' onClick={payment}>Pagar la compra</Button>
                    </Col>
                </Grid.Container>
                : <Row justify='center' align='center' css={{ height: '80vh' }}>
                    <Text b>
                        ¡Este producto no existe!
                    </Text>
                </Row>
            }
        </Layout>
    )
}

export function getServerSideProps({ query }) {

    const item = Products.find(item => item.name === query.name)

    return {
        props: {
            item: item ? item : null
        }
    }
}