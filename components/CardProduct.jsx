import { useRouter } from 'next/router'
import { Card, Text, Row, Button } from '@nextui-org/react'

export default function CardProduct({ product }) {
    const router = useRouter()
    
    return (
        <Card variant='flat' css={{ mw: '350px', margin: '5px' }}>
            <Card.Header>
                <Row justify='center'>
                    <Text b>{product.name}</Text>
                </Row>
            </Card.Header>
            <Card.Body>
                <Card.Image
                    src={product.image}
                    objectFit='cover'
                    width='100%'
                    height={400}
                    alt={product.name}
                />
            </Card.Body>
            <Row justify='center'>
                <Text b>$ {product.price}</Text>
            </Row>
            <Card.Footer>
                <Row justify='center'>
                    <Button
                        color='gradient'
                        onClick={() => router.push(encodeURIComponent(product.name))}
                    >
                        Comprar
                    </Button>
                </Row>
            </Card.Footer>
        </Card>
    )
}