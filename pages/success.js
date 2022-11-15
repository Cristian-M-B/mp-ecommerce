import Layout from '../components/Layout'
import { Grid, Col, Row, Text } from '@nextui-org/react'

export default function Success({ query }) {
    return (
        <Layout>
            <Grid.Container alignItems='center' css={{ height: '80vh' }}>
                <Col>
                    <Row justify='center'>
                        <Text b>¡Tu pago fue aprobado!</Text>
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