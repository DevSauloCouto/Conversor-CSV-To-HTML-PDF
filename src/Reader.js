const fs = require("fs");
const util = require("util");

class Reader{
    reader;
    constructor(){
        this.reader = util.promisify(fs.readFile);
    }

    async Read(filePath){
        try{
            return await this.reader(filePath, {encoding: "utf-8"})
        }catch(err){
            return new Error("Houve algum erro :(");
        }
    }

}

module.exports = Reader;