# fastdbinnodejs
<h1>Node.js için Kolay ve aşırı basit kullanımlı ham veritabanı</h1>
Nasıl kullanılır:
kullanmak istediğimz modüle import ediyoruz
<code>const dbman=require("../FastDBLite/fastdb.js")</code>
Sonrasında;
<p>Veri eklemek için</p>
InsertData(Object) metodunu kullanıyoruz
<p>Veri aramak için;</p>
Database'in içindeki verilerden istediğimiz içeriği string olarak yazıp
SearchInData(param) metodu ile arıyoruz. Eğer içerik mevcutsa o kaydın/kayıtların
blok numarasını(chunknumber) ve veriyi döndürüyor.
<p>Veriyi Güncellemek için</p>
UpdateData(chunknumber,Object)
<p>Veriyi Silmek için</p>
DeleteData(chunknumber) Not:Veri tamamen silinmiyor işaretlenir ve geri kurtarılabilir
<p>Veriyi Kurtarmak için</p>
RecoverData(chunknumber)
For english:
How to use:
We import it into the module we want to use
<code>const dbman=require("../FastDBLite/fastdb.js")</code>
After that;
<p>To add data</p>
We use the InsertData(Object) method
<p>To search for data;</p>
We write the content we want from the data in the database as a string and
We search with the SearchInData(param) method. If content exists, that record(s)
It returns the block number and data.
<p>To Update Data</p>
UpdateData(chunknumber,Object)
<p>To Delete Data</p>
DeleteData(chunknumber) Note: The data is marked as not completely deleted and can be recovered
<p>To Recover Data</p>
RecoverData(chunknumber)
 
