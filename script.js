function carregar() {
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')   
    var data = new Date()
    var hour = data.getHours()
    var minutes = data.getMinutes()
    //
    if (hour >=0 && hour <= 4) {
        //dawn
        img.src = 'dawn.jpg'
        document.body.style.background = '#161838'
        text.innerHTML = 'Are u ok? u problably should be sleeping...'
    } else if (hour == 5) {
        //almost morning
        img.src = 'almostmorning.jpg'
        document.body.style.background = '#db790f'
        text.innerHTML = 'Hey, u woke up early! I hope u have a nice day! '
        text2.innerHTML = 'If you did not sleep yet, I still hope you have a nice day!'
    
    } else if (hour >=6 && hour < 12) {
            //good morning
            img.src = 'morning.jpg'
            document.body.style.background = '#F5DEB3'
            text.innerHTML = 'Good morning! I hope u have a nice day!!'
            text2.innerHTML = 'Remember, the earlyer bird catchs the worm'
    } else if (hour >= 12 && hour <= 18) {
        //good afternoon
        img.src = 'afternoon.jpg' 
        document.body.style.background = '#FFA500'
        text.innerHTML = 'Its afteroon! Time to be productive!'
        text2.innerHTML = 'I know you are giving your best!!'
    } else if (hour == 18 && minutes >= 30) {
        //night is calling, baby!
        img.src = 'scorpions.jpg'
        document.body.style.background = '#471254'
        text.innerHTML = 'NIGHT IS CALLING, I HAVE TO GO! THE WOLF IS HUNGRY, HE RUNS TO SHOW'
        text2.innerHTML = 'Here I am! ROCK YOU LIKE A HURRICANE'
        alert('YOU FOUND THE EASTER EGG!!! :)')
    } else {
        //good night
        img.src = 'night.jpg'
        document.body.style.background = '#9400D3'
        text.innerHTML = 'You made it until night, congratulations!'
        text2.innerHTML = 'I know u tried to give your best!'
    }
    if (hour >= 12){
        msg.innerHTML = `Now it's ${hour}:${minutes} PM`
    } else{
        msg.innerHTML = `Now it's ${hour}:${minutes} AM` 
    }
}

