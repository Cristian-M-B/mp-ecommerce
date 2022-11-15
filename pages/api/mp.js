import mercadopago from 'mercadopago'

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { item } = req.body

        mercadopago.configure({
            access_token: 'APP_USR-8709825494258279-092911-227a84b3ec8d8b30fff364888abeb67a-1160706432',
            integrator_id: 'dev_24c65fb163bf11ea96500242ac130004'
        })

        let preference = {
            items: [
                {
                    id: item.id,
                    title: item.name,
                    description: item.description,
                    picture_url: item.image,
                    unit_price: item.price,
                    quantity: 1,
                    category_id: 'phones'
                }
            ],
            payer: {
                name: 'Lalo',
                surname: 'Landa',
                email: 'test_user_36961754@testuser.com',
                phone: {
                    area_code: '11',
                    number: 42875106
                },
                address: {
                    street_name: 'Calle falsa',
                    street_number: 123,
                    zip_code: '1665'
                }
            },
            payment_methods: {
                excluded_payment_methods: [
                    { id: 'visa' }
                ],
                installments: 6
            },
            auto_return: 'approved',
            back_urls: {
                success: process.env.BACK_URL_SUCCESS,
                pending: process.env.BACK_URL_PENDING,
                failure: process.env.BACK_URL_FAILURE
            },
            notification_url: process.env.NOTIFICATION_URL,
            external_reference: process.env.EMAIL_MP
        }

        mercadopago.preferences
            .create(preference)
            .then(function (response) {
                res.json(response.body.init_point)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}
