let notifications = ['0001']

export default function handler(req, res) {
    if (req.method === 'POST') {
        if (req.body.action === 'payment.created') {
            console.log(req.body.data.id)
            notifications.push(req.body)
            res.status(200).send('OK')
        }
    }

    if (req.method === 'GET'){
        res.json(notifications)
    }
}