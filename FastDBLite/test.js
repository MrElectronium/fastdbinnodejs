const dbman=require("../FastDBLite/fastdb.js")
//User data add example
//Usage;
//Data insert:InsertData(Object)
//Data search in database:SearchInData(String)
// returned chunknumber,data
//Data update:UpdateData(chunknumber,Object)
//Data delete:DeleteData(chunknumber) Note:Data not permanent deleted
//Data recover:RecoverData(chunknumber)
async function addtest()
{
let result=await dbman.InsertData({user:"Test",pass:"123456"});
console.log(result);
}
async function searchtest()
{
let result=await dbman.SearchInData("Test");
console.log(result);
}
async function updatetest()
{
let result=await dbman.UpdateData(0,{user:"Test",pass:"23456"});
console.log(result);
}
async function deletetest()
{
let result=await dbman.DeleteData(0);
console.log(result);
}
async function recovertest()
{
let result=await dbman.RecoverData(0);
console.log(result);
}

