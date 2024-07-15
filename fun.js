function run()
{
    var form = document.getElementsByTagName("form")[0]
    var ele = document.getElementById("tex")
    var inner = document.getElementsByClassName("inner")[0]
    if(ele.value == "")
    {
        console.log("Enter something")
        return 0
    }
    var obj= document.createElement("li")
    var main
    obj.setAttribute("id","c1")
    inner.appendChild(obj)
    obj.textContent=ele.value
    ele.value=""
    var del= document.createElement("input")
    del.setAttribute("id","del")
    del.type="button"
    del.value="X"
    obj.appendChild(del)
    
    del.addEventListener('click',function()
{
    inner.removeChild(obj)
})
}
var delet = document.getElementById("del")
