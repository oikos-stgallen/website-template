import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
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


// Convert number to column name
function colName(n) {
    var ordA = 'a'.charCodeAt(0);
    var ordZ = 'z'.charCodeAt(0);
    var len = ordZ - ordA + 1;

    var s = "";
    while (n >= 0) {
        s = String.fromCharCode(n % len + ordA) + s;
        n = Math.floor(n / len) - 1;
    }
    return s;
}


export async function load({ fetch }) {
    let projects = [];

    await doc.loadInfo();
    const sheet = doc.sheetsByTitle["projects"];
    const max_cell = `${colName(sheet.columnCount)}${sheet.rowCount}`
    const rows = await sheet.getRows();
    await sheet.loadCells(`A1:${max_cell}`);

    for (let row of rows) {
        const name = row.get("Name");
        const description = row.get("Description");
        const url = row.get("Url");

        const index = row._worksheet.headerValues.indexOf("Image")
        const cell = sheet.getCell(row.rowNumber - 1, index)

        //TODO: extract url from formula in a more solid way
        const image = cell.formula.match(/"([^"]+)"/)[1]
        projects.push({ name, description, url, image });
    }

    return { projects };
}