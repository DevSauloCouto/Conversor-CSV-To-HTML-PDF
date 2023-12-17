const pdf = require("html-pdf");

class PDFWriter{

    static WritePDF(fileName, html){
        pdf.create(html, {}).toFile(fileName, (err) => err);
        return "Arquivo PDF escrito e salvo com sucesso! :)";
    }

}

module.exports= PDFWriter;