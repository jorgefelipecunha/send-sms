import * as TwilioService from '../services/twilio.js';

async function sendMessage(request, response) {
    const { message, phoneNumber } = request.body;

    try {
        const responseTwilio = await TwilioService.send(message, phoneNumber);
        response.send(responseTwilio);
    } catch (error) {
        response.status(error.status).send(error);
    }
}

export { sendMessage };