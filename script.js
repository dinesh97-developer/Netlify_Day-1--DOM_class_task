/* for(var i=0;i<10;i++)
{
    var res =  document.createElement("div");
    //<div> </div>
    // step 2: add the content inside the tag
    //res.innerHTML = "This is created dynamically";
    res.innerHTML = `${i}`;
    //res.innerHTML = "<p>This is P tag using innerHTML</p>";
    //res.innerText = "<p>This is P tag using innerText </p>";
    //<div> this is div created dynamically </div>
    //step 3: add the element to the document
    document.body.append(res);
} */
/* // ID and Class selector
var res = document.createElement("div");
res.innerHTML = "This is div tag";
res.className = "main";
res.id = "main2";
document.body.append(res);
 */
/* // While using for loop
arr = ["Dinesh","Kumar"];
for(i=0;i<arr.length;i++)
{
    var container = document.createElement("div");
    container.className = "container";
    var row = document.createElement("div");
    row.className = "row";
    var col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `${arr[i]}`;
    document.body.append(container);
    container.append(row);
    row.append(col);
} */
/* var container = document.createElement("div");
container.className = "container";
var row = document.createElement("div");
row.className = "row";
var col = document.createElement("div");
col.className = "col";
col.innerHTML = "first";
document.body.append(container);
container.append(row);
row.append(col); */

function foo(){
    var first = document.getElementById("fn").value;
    var middle = document.getElementById("md").value;
    var last = document.getElementById("ln").value;
    var email = document.getElementById("email").value;
    console.log ("First name:"+first);
    console.log ("Middle name:"+middle);
    console.log ("Last name:"+last);
    console.log ("Email ID:"+email);
    /* console.log `"First name:"${first}`;
    console.log `"Middle name:"${middle}`;
    console.log `"Last name:"${last}`;
    console.log `"Email ID:"${email}`; */
}
