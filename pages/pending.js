import Script from 'next/script'
import Layout from '../components/Layout'
import { Grid, Col, Row, Text } from '@nextui-org/react'

export default function Success({ query }) {
    return (
        <Layout>
            <Script src='https://www.mercadopago.com/v2/security.js' view='' />
            <Grid.Container alignItems='center' css={{ height: '80vh' }}>
                <Col>
                    <Row justify='center'>
                        <Text b>¡Tu pago esta pendiente!</Text>
                    </Row>
                    <Row justify='center'>
                        <Text>ID de pago: {query.payment_id}</Text>
                    </Row>
                    <Row justify='center'>
                        <Text>Metodo de pago: {query.payment_type}</Text>
                    </Row>
                    <Row justify='center'>
                        <Text>Referencia externa: {query.external_reference}</Text>
                    </Row>
                </Col>
            </Grid.Container>
        </Layout>
    )
}

export function getServerSideProps({ query }) {
    return {
        props: {
            query
        }
    }
}