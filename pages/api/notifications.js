let notifications = ['0001']

export default function handler(req, res) {
    if (req.method === 'POST') {
        notifications.push(req.body)
        res.status(200).send('OK')
    }

    if (req.method === 'GET') {
        res.json(notifications)
    }
}