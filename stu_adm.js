function funs(){
    if(!isStudentNo(document.getElementById("inputnumber").value)){
        alert("学生编号是10位");
        document.getElementById("inputnumber").focus();
		return false;
    }
    if(!isStudentName(document.getElementById("inputname").value)){
        alert("学生姓名填写中文");
		document.getElementById("inputname").focus();
		return false;        
    }
    if(!isTelNum(document.getElementById("inputtel").value)){
        alert("电话号码为11位手机号");
        document.getElementById("inputtel").focus();
        return false;
    }
    if(!isEmail(document.getElementById("inputemail").value)){
        alert("邮箱地址错误");
		document.getElementById("inputemail").focus();
		return false; 
    }
    /*至此前面四个的验证均为正确，返回正确*/
    alert("提交成功");
    return true;
}

/*验证学号*/
function isStudentNo(str){
    var reg=/^[A-Z|a-z|0-9]{10}$/;
    return reg.test(str);
}

/*验证姓名*/
function isStudentName(str){
    var reg=/^[\u4E00-\u9FA5]{2,4}$/;
    return reg.test(str);
}

/*验证电话*/
function isTelNum(str){
    var reg=/^[0-9]{11}$/;
    return reg.test(str);
}

/*验证emial*/
function isEmail(str){
    var reg=/^[A-Za-z0-9_-]+@[A-Za-z0-9]+\.[a-zA-Za-z0-9]+$/;
    return reg.test(str);
}

