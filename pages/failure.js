import Layout from '../components/Layout'
import { Grid, Row, Text } from '@nextui-org/react'

export default function Success() {
    return (
        <Layout>
            <Grid.Container alignItems='center' css={{ height: '80vh' }}>
                <Row justify='center'>
                    <Text b>¡Tu pago fue rechazado!</Text>
                </Row>
            </Grid.Container>
        </Layout>
    )
}