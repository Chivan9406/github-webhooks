import {envs} from '../../config'

export class DiscordService {
    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL

    constructor() {
    }

    async notify(message: string) {
        const body = {
            content: message,
            embeds: [
                {
                    image: {url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazV4M3lsMW0yeml4bmFyemt6ZnlqdmY5YnFtenZ2dGFyYXVvZDQ1MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NytMLKyiaIh6VH9SPm/giphy.gif'}
                }
            ]
        }

        const resp = await fetch(this.discordWebhookUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })

        if (!resp.ok) {
            console.log('Error sending message to Discord')
            return false
        }

        return true
    }
}