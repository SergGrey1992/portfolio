const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN ?? ''
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID ?? ''

const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`

export async function POST(req: Request) {
    const { message, name, email } = await req.json()

    const text = `
            Новое сообщение:
            Имя: ${name}
            Email: ${email}
            Сообщение: ${message}
        `
    try {
        const response = await fetch(TELEGRAM_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: text,
            }),
        })

        if (response.ok) {
            // res.status(200).json({ success: true });
            return Response.json({ status: 200 })
        } else {
            // res.status(response.status).json({ error: 'Failed to send message' });
            return Response.json({
                status: response.status,
                message: 'Failed to send message',
            })
        }
    } catch (error) {
        return Response.json({ status: 500, message: 'ERROR' })
    }
    // return Response.json({ status: 'success', data: message })
}
