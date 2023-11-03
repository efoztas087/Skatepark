const readlinesync = require("readline-sync")
stuk0();

function stuk0() {
    console.log(`
  
    ░▀█▀░█░█░█▀▀░░░█▀▀░█░█░█▀█░▀█▀░█▀▀░█▀█░█▀█░█▀▄░█░█
    ░░█░░█▀█░█▀▀░░░▀▀█░█▀▄░█▀█░░█░░█▀▀░█▀▀░█▀█░█▀▄░█▀▄
    ░░▀░░▀░▀░▀▀▀░░░▀▀▀░▀░▀░▀░▀░░▀░░▀▀▀░▀░░░▀░▀░▀░▀░▀░▀                                                                                               
                                                                                                                                            
    `)

    const startvraag = readlinesync.question("PRESS ENTER TO START")
    if (startvraag === "") {
        stuk1();
    }
    else (stuk0())

}








function stuk1() {
    var vraag1 = readlinesync.question(`Je word wakker
    A: Gezicht wassen
    B: Doorslapen
    `)
    if (vraag1 = "a") {
        stuk2()
    }
    else if (vraag1 = "b") {
        einde1()
    }
    else (stuk1)


}
function stuk2() {
    var vraag2 = readlinesync.question(`Je hebt je gezicht gewassen er is 
    geen eten 
    
Wat ga je doen
A: Je pakt je skateboard en gaat naar skatepark
B: Je gaat boodschappen doen
`)
    if (vraag2 = "a") {
        stuk3()
    }
    else if (vraag2 = "b") {
        stuk4()
    }
    else (stuk2)


}
function stuk3() {
    const vraag3 = readlinesync.question(`Je hebt je skateboard gepakt
    Wat ga je doen??
    A:  Je gaat rijdend 
    B:  Je gaat lopend 
    `)
    if (vraag3 = "a") {
        stuk7()
    }
    else if (vraag3 = "b") {
        stuk6()
    }
    else (stuk3)


}
function stuk4() {
    const vraag4 = readlinesync.question(`Je bent nu in de winkel 
    Wat ga je kopen??
    A: Je koopt ontbijt
    B: je koopt kleine hapjes
    `)
    if (vraag4 = "a") {
        stuk9()
    }
    else if (vraag4 = "b") {
        stuk5()
    }
    else (stuk4)


}
function stuk5() {
    const vraag5 = readlinesync.question(`Je gaat terug naar huis hoe ga je
    A: Lopend
    B: Op de skateboard`)
    if (vraag5 = "a") {
        einde1()
    }
    else if (vraag5 = "b") {
        einde1()
    }
    else (stuk5)


}
function stuk6() {
    const vraag6 = readlinesync.question(`Je gaat lopend maar je kan kiezen korte of lange weg
    Wat ga je doen??
    A: Je neemt de korte weg
    B: Je neemt de lange weg`)
    if (vraag6 = "a") {
        stuk7()
    }
    else if (vraag6 = "b") {
        stuk8()
    }
    else (stuk6)


}
function stuk7() {
    const vraag7 = readlinesync.question(`Je neemt de korte weg en je ziet een bos
    Wat ga je doen??
    A:  Je pakt je skateboard in je hand en gaat door de bos  
    B:  Je niet door de bos lopen
    `)
    if (vraag7 = "a") {
        stuk13()
    }
    else if (vraag7 = "b") {
        stuk12()
    }
    else (stuk7)


}
function stuk8() {
    const vraag8 = readlinesync.question(`Je neemt de lange weg 
    Wat ga je doen
    A: Je pakt je skateboard en loopt naar skatepark
    B: Weg was lang dus je keert terug naar huis`)
    if (vraag8 = "a") {
        einde2()
    }
    else if (vraag8 = "b") {
        einde1()
    }
    else (stuk8)


}
function stuk9() {
    const vraag9 = readlinesync.question(`Je hebt je boodschappen gedaan je gaat 
    naar huis je heb lange en korte weg 
    Wat ga je doen??
    A: Je neemt korte weg 
    B: Je neemt lange weg`)
    if (vraag9 = "a") {
        einde1()
    }
    else if (vraag9 = "b") {
        einde1()
    }
    else (stuk9)


}
function stuk10() {
    const vraag10 = readlinesync.question(`Je bent aan het skaten naar het park maar je valt en je hebt een 
    grote schaafwond 
    Wat ga je doen??
    A: Je gaat naar ziekenhuis
    B: Je heb niet veel pijn dus je gaat naar het park`)
    if (vraag10 = "a") {
        einde3()
    }
    else if (vraag10 = "b") {
        einde2()
    }
    else (stuk10)


}
function stuk11() {
    const vraag11 = readlinesync.question(`Je kwam iemand tegen die je kent 
    Wat ga je doen??
    A: Je gaat met hem naar je eigen huis
    B: Je gaat met hem naar skatepark`)
    if (vraag11 = "a") {
        einde1()
    }
    else if (vraag1 = "b") {
        einde2()
    }
    else (stuk11)


}
function stuk12() {
    const vraag12 = readlinesync.question(`Wat ga je doen je wilt niet door de bos want dan
    worden je schoenen vies
    Wat ga je doen??
    A: Je loopt door de bos naar skatepark
    B: Je gaat terug naar huis want je wilt schone schoenen`)
    if (vraag12 = "a") {
        stuk13()
    }
    else if (vraag12 = "b") {
        einde1()
    }
    else (stuk12)


}
function stuk13() {
    const vraag13 = readlinesync.question(`Je loopt door de bos maar in je ooghoek zie je een 
    klein huisje
    Wat ga je doen??
    A: Je gaat naar dat kleine huisje
    B: Je vind dat eng dus je gaat naar skatepark`)
    if (vraag13 = "a") {
        stuk14()
    }
    else if (vraag13 = "b") {
        einde2()
    }
    else (stuk13)


}
function stuk14() {
    const vraag14 = readlinesync.question(`Je loopt langzaam naar het huis en je hoort iemand hijgen
    Wat ga je doen??
    A: Je klopt heel netjes op de deur
    B: Je trapt de deur open`)
    if (vraag14 = "a") {
        stuk16()
    }
    else if (vraag14 = "b") {
        stuk15()
    }
    else (stuk14)


}
function stuk15() {
    const vraag15 = readlinesync.question(`Je trapt de deur open maar je komt niets tegen
    Wat ga je doen??
    A: Je laat alles liggen en gaat naar skatepark
    B: Je heb geen zin meer om te skaten dus je gaat naar huis
    `)
    if (vraag15 = "a") {
        einde2()
    }
    else if (vraag15 = "b") {
        einde1()
    }
    else (stuk15)


}
function stuk16() {
    const vraag16 = readlinesync.question(`Je klopt op de deur maar je hoort nog steeds iemand hijgen
    Wat ga je doen??
    A: Je trapt die deur open
    B: Je word bang want je hoort iemand heel hard gillen en je begint te rennen naar skatepark`)
    if (vraag16 = "a") {
        stuk17
    }
    else if (vraag16 = "b") {
        einde2()
    }
    else (stuk16)


}
function stuk17() {
    const vraag17 = readlinesync.question(`Je gaat door met zoeken en je trapt de deur open maar je ziet een hendel op de grond 
    Wat ga je doen??
    A: Je trekt aan dat hendel 
    B: Je vind het niet interresant dus je gaat naar skatepark`)
    if (vraag17 = "a") {
        stuk18()
    }
    else if (vraag17 = "b") {
        einde2()
    }
    else (stuk17)


}
function stuk18() {
    const vraag18 = readlinesync.question(`Je trekt aan het hendel en ziet een klein deurtje komen 
    Wat ga je doen??
    A: Je opent de deur
    B: Je hoort meer gegil dus je word bang en gaat naar skatepark`)
    if (vraag18 = "a") {
        stuk19()
    }
    else if (vraag18 = "b") {
        einde2()
    }
    else (stuk18)


}
function stuk19() {
    const vraag19 = readlinesync.question(`Je opent die kleine deurtje en hoort veel gegil 
    Wat ga je doen??
    A: Je opent die deur en je luisterd wat er allemaal gebeurd 
    B: Je hoort wat er allemaal gebeurd je word bang je rent naar skatepark en verteld alles aan iedereen
    `)
    if (vraag19 = "a") {
        stuk20()
    }
    else if (vraag19 = "b") {
        einde2()
    }
    else (stuk19)


}
function stuk20() {
    const vraag20 = readlinesync.question(`Je opent die deur en tijdens het luisteren zie je een ladder naar beneden gaan
    Wat ga je doen??
    A: Je gaat naar beneden met de hulp van de ladder 
    B: Je laat alles liggen je gaat naar huis en verteld alles aan papa en mama`)
    if (vraag20 = "a") {
        stuk21()
    }
    else if (vraag1 = "b") {
        einde1()
    }
    else (stuk20)


}
function stuk21() {
    const vraag21 = readlinesync.question(`Je loopt naar beneden je ziet de vrouw vastgebonden zitten
    Wat nu??
    A: Je verlost haar en gaat helpen
    B: Je word bang en belt de politie`)
    if (vraag21 = "a") {
        stuk22
    }
    else if (vraag21 = "b") {
        einde4()
    }
    else (stuk21)


}
function stuk22() {
    const vraag22 = readlinesync.question(`Je heb haar verlost en loopt veilig uit dat huis
    Wat ben je van plan om te gaan doen??
    A: Je gaat naar het ziekenhuis met haar voor de verwondingen
    B: Je gaat naar huis om te praten over wat er is gebeurd met je ouders erbij`)
    if (vraag22 = "a") {
        einde3()
    }
    else if (vraag22 = "b") {
        einde1()
    }
    else (stuk22)


}



function einde1() {
    console.log(`Je gaat terug naar huis`)
}
function einde2() {
    console.log(`Je bent aangekomen bij het skatepark`)
}
function einde3() {
    console.log(`Je gaat naar het ziekenhuis`)
}
function einde4() {
    console.log(`Je belt de politie`)
}