$("form").on("submit",(e)=>{
    e.preventDefault();
    console.log("hola")
    let codigo = $(`#entrada`).val();
    $.ajax({
        type: `GET`,
        url:`https://superheroapi.com/api/10159065442633551/${codigo}`,
        dataType:"json",
        mode:"cors",
        credentials:"include",
        success: (superDatos) => {
            console.log(superDatos)
        },
        error: (error) =>{
            console.error(error)
        }
    })
})
