import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = twilio(accountSid, authToken);

function send(textMessage, phoneNumber) {
    return twilioClient.messages.create({
        body: textMessage,
        from: process.env.TWILIO_NUMBER,
        to: `${phoneNumber}`
    });
}

export { send };