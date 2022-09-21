window.onload = function(){ 
    const questions = document.querySelectorAll(".btn-wrap");

    questions.forEach(question => {
        question.addEventListener('click', function(){
            if (question.parentNode.classList.contains('active')) {
                question.parentNode.classList.toggle('active');
            } else {
                questions.forEach(question => {
                    question.parentNode.classList.remove('active')
                });
                question.parentNode.classList.add('active')
            }
        })
    })
}