import Products from '../data/products'
import Layout from '../components/Layout'
import CardProduct from '../components/CardProduct'
import { Grid } from '@nextui-org/react'

export default function Home() {
  return (
    <Layout>
      <Grid.Container justify='center'>
        {Products.map(product => <CardProduct product={product} />)}
      </Grid.Container>
    </Layout>
  )
}
