import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { SECRET_SHEETS_EMAIL, SECRET_SHEETS_PRIVATE_KEY, SECRET_SHEET_ID } from '$env/static/private'

// Connect to google sheets API
const serviceAccountAuth = new JWT({
    email: SECRET_SHEETS_EMAIL,
    key: SECRET_SHEETS_PRIVATE_KEY.split(String.raw`\n`).join('\n'),
    scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
    ],
});
const doc = new GoogleSpreadsheet(SECRET_SHEET_ID, serviceAccountAuth);

export async function load({ fetch }) {

    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["questions"];

    let questions = {};
    const rows = await sheet.getRows();

    for (let row of rows) {
        const question = row.get("Question");
        const answer = row.get("Answer");

        if (question && answer) {
            questions[question] = answer;
        }
    }

    return { questions };
}
