import { Navbar, Text } from '@nextui-org/react'

export default function Nav() {
    return (
        <Navbar isBordered variant='static' css={{ backgroundColor: '#000080', marginBottom: '20px' }}>
            <Navbar.Brand>
                <Text b>Tienda Azul</Text>
            </Navbar.Brand>
        </Navbar>
    )
}