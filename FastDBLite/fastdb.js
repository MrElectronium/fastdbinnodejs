'use strict'

const fs = require('fs');
var dbpath = "./dbfiles/db.fstdb";

//default chunksize=512 byte
const chunksize = 512;
var buffer = Buffer.alloc(chunksize);

async function InsertData(payload) {
    try {
        buffer.fill(' ');
        let data=JSON.stringify(payload);
        if(data.length>buffer.length-1)
        return "Error payload is bigger than chunksize";
        buffer.write(data);
        let fd = await fs.promises.open(dbpath, "a");
        await fd.appendFile(buffer);
        await fd.close();
        return payload;
    }
    catch (err) {
        throw err;
    }
}
async function SearchParam(param) {
    try {
        let fd = await fs.promises.open(dbpath, "r");
        let fsize = (await (fd.stat())).size;
        let chunks = Math.round(fsize / chunksize);
        let data;
        let founded=[];
        for (let i = 0; i < chunks; i++) {
            buffer.fill(' ');
            await fd.read(buffer, 0, buffer.length, i * chunksize);
            data = buffer.toString().trim();
            if (data.includes(param) && data[0]!=="/") {
              founded.push({chnum: i, data: data});                
            }
        }
        fd.close();
        return founded;
    }
    catch (error) {
        throw error;
    }
}
async function UpdateData(chnum, payload) {
    try {        
        buffer.fill(" ");        
        let data=JSON.stringify(payload);
        if(data.length>buffer.length-1)
        return "Error payload is bigger than reserved space";
        buffer.write(data);
        let fd = await fs.promises.open(dbpath, "r+");
        await fd.write(buffer, 0, buffer.length, chnum * chunksize);
        await fd.close();
        return payload;
    } catch (error) {
        throw error;
    }
}
async function DeleteData(chnum)
{
    try {
        let fd = await fs.promises.open(dbpath, "r+");
        buffer.fill(" ");
        await fd.read(buffer,0,buffer.length,chnum * chunksize);
        let data=buffer.toString();
        if(data[0]==="/")
        {
            fd.close();
            return "Data not found";
        }
        data="/"+data;
        buffer.fill(' ');
        buffer.write(data);
        await fd.write(buffer, 0, buffer.length, chnum * chunksize);
        await fd.close();
        return "Data is deleted";
    } catch (error) {
        throw error;
    }
}
async function RecoverData(chnum)
{
    try {
        let fd = await fs.promises.open(dbpath, "r+");
        buffer.fill(" ");
        await fd.read(buffer,0,buffer.length,chnum * chunksize);
        let data=buffer.toString();
        if(data[0]!=="/")
        {
            await fd.close();
            return "Error recovery failed";
        }
        data=data.slice(1,data.length-1);
        buffer.fill(' ');
        buffer.write(data);
        await fd.write(buffer, 0, buffer.length, chnum * chunksize);
        await fd.close();
        return "Data is recovered";
    } catch (error) {
        throw error;
    }
}

module.exports={
    SearchInData:SearchParam,
    InsertData:InsertData,
    UpdateData:UpdateData,
    DeleteData:DeleteData,
    RecoverData:RecoverData
}







