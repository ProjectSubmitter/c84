studentarrray=[];
function submit(){
    var name1=document.getElementById("nameofthestudent1").value;
    var name2=document.getElementById("nameofthestudent2").value;
    var name3=document.getElementById("nameofthestudent3").value;
    var name4=document.getElementById("nameofthestudent4").value;
    var name5=document.getElementById("nameofthestudent5").value;
    var name6=document.getElementById("nameofthestudent6").value;
    studentarrray.push(name1);
    studentarrray.push(name2);
    studentarrray.push(name3);
    studentarrray.push(name4);
    studentarrray.push(name5);
    studentarrray.push(name6);
    document.getElementById("display_name").innerHTML=studentarrray;
}