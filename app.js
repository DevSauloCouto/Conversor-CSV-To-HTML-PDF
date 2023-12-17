const Reader = require("./src/Reader");
const Processor = require("./src/Processor");
const Table = require("./src/Table");
const HtmlParser = require("./src/HtmlParser");
const Writer = require("./src/Writer");
const PDFWriter = require("./src/PDFWriter");

const reader = new Reader();
const writer = new Writer();

async function main(){
    const data = await reader.Read("./csv/DadosUsuarios.csv");
    const dataProcess = Processor.Process(data);

    console.log(dataProcess);
    const users = new Table(dataProcess);

    const htmlConvert = await HtmlParser.Parse(users);

    const writeHTML = await writer.Write(`HTMLTable${Date.now()}.html`, htmlConvert);
    
    const PDFwrite = PDFWriter.WritePDF(`HTMLTable${Date.now()}.pdf`, htmlConvert);
    
    console.log(writeHTML);
    console.log(PDFwrite);

}

main();