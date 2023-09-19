# fastdbinnodejs
<h1>Simple raw and fast database for node.js</h1>
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
 
<h2>How to usage</h2>;
import dbman once:
<code>const dbman=require("../FastDBLite/fastdb.js")</code>
Data insert:InsertData(Object)\n
Data search in database:SearchInData(String)\n
returned chunknumber,data\n
Data update:UpdateData(chunknumber,Object)\n
Data delete:DeleteData(chunknumber) Note:Data not permanent deleted\n
Data recover:RecoverData(chunknumber)\n
