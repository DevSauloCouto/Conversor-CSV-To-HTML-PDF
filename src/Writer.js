const fs = require("fs");
const util = require("util");

class Writer{

    constructor(){
        this.writer = util.promisify(fs.writeFile);
    }

    async Write(fileName, data){
        try{
            await this.writer(fileName, data);
            return "Arquivo escrito e salvo com sucesso! :)";
        }catch(err){
            return "Erro ao salvar arquivo :(";
        }
    }

}

module.exports = Writer;