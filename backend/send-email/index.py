import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с контактной формы на почту info@kassa-business.ru"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    email = body.get('email', '').strip()
    phone = body.get('phone', '').strip()
    message = body.get('message', '').strip()

    if not name or not email or not message:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Заполните обязательные поля'}, ensure_ascii=False)
        }

    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    smtp_user = 'info@kassa-business.ru'
    to_email = 'info@kassa-business.ru'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта 1C Matrix от {name}'
    msg['From'] = smtp_user
    msg['To'] = to_email

    html = f"""
    <html>
    <body style="font-family: Arial, sans-serif; color: #222; max-width: 600px; margin: 0 auto;">
      <div style="background: #f5c000; padding: 20px 30px; border-radius: 8px 8px 0 0;">
        <h2 style="margin: 0; color: #1a1000;">Новая заявка с сайта 1C Matrix</h2>
      </div>
      <div style="background: #fff; padding: 30px; border: 1px solid #e8e0cc; border-top: none; border-radius: 0 0 8px 8px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #888; width: 120px;">Имя:</td>
            <td style="padding: 10px 0; font-weight: bold;">{name}</td>
          </tr>
          <tr style="background: #fafafa;">
            <td style="padding: 10px 0; color: #888;">E-mail:</td>
            <td style="padding: 10px 0;"><a href="mailto:{email}" style="color: #c8a000;">{email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #888;">Телефон:</td>
            <td style="padding: 10px 0;">{phone if phone else '—'}</td>
          </tr>
          <tr style="background: #fafafa;">
            <td style="padding: 10px 0; color: #888; vertical-align: top;">Сообщение:</td>
            <td style="padding: 10px 0; white-space: pre-wrap;">{message}</td>
          </tr>
        </table>
      </div>
    </body>
    </html>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }