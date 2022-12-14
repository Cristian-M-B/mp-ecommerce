import Link from 'next/link'
import { Navbar, Text } from '@nextui-org/react'

export default function Nav() {
    return (
        <Navbar isBordered variant='static' css={{ backgroundColor: '#000080', marginBottom: '20px' }}>
            <Link href='/'>
                <Navbar.Brand>
                    <Text b>Tienda Azul</Text>
                </Navbar.Brand>
            </Link>
        </Navbar>
    )
}