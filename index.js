function buscarPersonagem() {

    const id_personagem = document.getElementById("id_personagem").value
    console.log(id_personagem)
    const id_personagem2 = document.getElementById("id_personagem2").value
    console.log(id_personagem2)

    $.ajax({
        url: "https://rickandmortyapi.com/api/character/" + [String(id_personagem) , String(id_personagem2)],
        type: "get",
        success: function (result) {
            const divResultado = document.getElementById("resultado_api");

            document.getElementById("img_personagem").src = result[0].image
            document.getElementById("nome").innerHTML = result[0].name
            document.getElementById("status").innerHTML = result[0].status
            document.getElementById("species").innerHTML = result[0].species
            document.getElementById("gender").innerHTML = result[0].gender

            const divResultado2 = document.getElementById("resultado_api2");

            document.getElementById("img_personagem2").src = result[1].image
            document.getElementById("nome2").innerHTML = result[1].name
            document.getElementById("status2").innerHTML = result[1].status
            document.getElementById("species2").innerHTML = result[1].species
            document.getElementById("gender2").innerHTML = result[1].gender
        }
    });
}