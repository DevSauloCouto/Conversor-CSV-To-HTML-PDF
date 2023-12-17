class Table{
    header;
    rows;
    constructor(dataProcess){
        this.header = dataProcess[0];
        dataProcess.shift();
        this.rows = dataProcess;
    }

    get RowCount(){
        return this.rows.length;
    }

    get ColumnCount(){
        return this.header.length;
    }

}

module.exports = Table;