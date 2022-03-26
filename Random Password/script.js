// Database قاعدة البيانات
const chars = [{1:`1234567890`}, 
{2:`QWASZXDCEVFRGTBHNYJUMKILPO`},
 {3:`qwaszedxrctfgvbgnhmukjipmlo`}, 
 {4:`!@#$%^&*()"?:><{}`}]

// دالة generate
function generate() {


    let randompassword = "" 


    let collection_1 = chars [0] ["c"]
    let collection_2 = chars [1] ["2"]
    let collection_3 = chars [2] ["3"]
    let collection_4 = chars [3] ["4"]

 randomPassword = 
 randomPassword + 
 collection_1.charAt(Math.floor(Math.random() * collection_1.length));

 randomPassword = 
 randomPassword + 
 collection_2.charAt(Math.floor(Math.random() * collection_2.length));


 randomPassword = 
 randomPassword + 
 collection_3.charAt(Math.floor(Math.random() * collection_3.length));


 randomPassword = 
 randomPassword + 
 collection_4.charAt(Math.floor(Math.random() * collection_4.length));


display.value = randompassword;
}