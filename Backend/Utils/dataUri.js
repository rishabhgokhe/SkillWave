import DataURIParser from 'datauri/parser.js'
import path from 'path';

export default function getDataUri(file) {
    const parser =  new DataURIParser();

    // extName gets the extension name of uploaded file for example .jpg, .png etc
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
}