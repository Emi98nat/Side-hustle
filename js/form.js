//variables
let p1 = document.querySelector('#password');
let p2 = document.querySelector('#cpassword');
let forms = document.getElementsByTagName('form')[0];
let checkPw = document.getElementById('ca');
function focus(e) {
    let F = e.setAttribute('class', 'error');
    return F;
}
function remove(e){
    e.setAttribute('class','clearError');
}
p1.addEventListener('mouseout', remove(p1));
p2.addEventListener('mouseout', remove(p1));
let p = document.createElement('p');
ca.addEventListener('click', function() {
    if (p1.value === "" && p2.value === "") {
        p.innerHTML = `${Error('fill in both password fields')} <span class = 'black'>❌</span>`;
        p.setAttribute('class', 'red');
        focus(p1);
        focus(p2);
        
    } else {
        
        if(p1.value === p2.value){
            p1.addEventListener('change', remove(p1));
        p2.addEventListener('change',remove(p2));
        p.innerHTML = `nice one <span="green">✅</span>`
        remove(p1);
        remove(p2);
        p.setAttribute('class','black');
        }else{
            p.innerHTML = `${Error("the passwords don't match")} <span class="black">👯<span>`;
            focus(p1);
            focus(p2);
            p.setAttribute('class', 'red');
            
        }
    }
    forms.firstElementChild.append(p);
        
    });
