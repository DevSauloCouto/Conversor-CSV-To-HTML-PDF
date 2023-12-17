class Processor{

    static Process(data){
        const separatorLine = data.split("\r\n");
        const rows = [];

        separatorLine.forEach(row => {
            const arrRow = row.split(",");
            rows.push(arrRow);
        })
        
        return rows;
    }

}

module.exports = Processor;