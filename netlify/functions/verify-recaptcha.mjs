import fetch from 'node-fetch';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { recaptchaValue } = JSON.parse(event.body);
  const secretKey = process.env.VITE_RECAPTCHA_SECRET_KEY;

  if (!recaptchaValue) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'reCAPTCHA value is missing.' }),
    };
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${recaptchaValue}`,
    });

    const data = await response.json();

    if (data.success) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: 'reCAPTCHA verified successfully.' }),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, message: 'Failed to verify reCAPTCHA.', 'error-codes': data['error-codes'] }),
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error.' }),
    };
  }
}; 