# fastdbinnodejs
Simple raw and fast database for node.js
Nasıl kullanılır:
kullanmak istediğimz modüle import ediyoruz
<code>const dbman=require("../FastDBLite/fastdb.js")</code>
Sonrasında;
Veri eklemek için;
InsertData(Object) metodunu kullanıyoruz
Database'in içindeki verilerden istediğimiz içeriği string olarak yazıp
SearchInData(param) metodu ile arıyoruz. Eğer içerik mevcutsa o kaydın/kayıtların
blok numarasını(chunknumber) ve veriyi döndürüyor.
Veriyi Güncellemek için;
UpdateData(chunknumber,Object)
Veriyi Silmek için:
DeleteData(chunknumber) Not:Veri tamamen silinmiyor işaretlenir ve geri kurtarılabilir
Veriyi Kurtarmak için:
RecoverData(chunknumber)
 
How to usage;
import dbman
<code>const dbman=require("../FastDBLite/fastdb.js")</code>
Data insert:InsertData(Object)
Data search in database:SearchInData(String)
returned chunknumber,data
Data update:UpdateData(chunknumber,Object)
Data delete:DeleteData(chunknumber) Note:Data not permanent deleted
Data recover:RecoverData(chunknumber)
