import { Navbar, Text, Row } from '@nextui-org/react'

export default function Footer() {
    return (
        <Navbar isBordered variant='static' css={{ backgroundColor: '#000080', marginTop: '20px' }}>
            <Row justify='center'>
                <Text b>Todos los derechos reservados</Text>
            </Row>
        </Navbar>
    )
}