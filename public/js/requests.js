function save_phrase(id){

    var portuguese = document.getElementById("portuguese").value;
    var english = document.getElementById("english").value;
    var pronunciation = document.getElementById("pronunciation").value;
    var selectCategorie = document.getElementById("selectCategories").value;
    var audio = new FormData();
    audio.append('file', document.getElementById('audio').files[0]);

    if(portuguese !== "" && english !== "" && pronunciation !== "" && selectCategorie !== "") {
        axios.post('/admin/phrase', {
            id: id,
            portuguese: portuguese,
            english: english,
            pronunciation: pronunciation,
            categoryId: selectCategorie,
            audio: audio
        }).then((response) => {
            if(response.data.success){  
               reload_table()
               if(id !== undefined){
                $.notify("Dados alterados com sucesso!", "success");  
               }else{
                $.notify("Frase cadastrada com sucesso", "success");
                resetFormPhrase()   
               }
              
            }else{
                $.notify("Não foi possível realizar a alteração! Verifique se todos campos estão preenchidos", "error");
            }
        
        })
    }  
   
}

function save_categorie(){
    var name = document.getElementById("name").value;
    if(name != undefined){
        axios.post('/admin/categorie', {
            name: name
        }).then((response) => {
            if(response.data.success){  
               reload_table()
               $.notify("Categoria cadastrada com sucesso", "success");
               document.getElementById('name').value='';
            }else{
               alert("Deu erro")
            }
        
        }).catch((err) => {
            alert("Deu erro" + err)
        });
    }
}

function save_level(){
    var name = document.getElementById("name").value;
    if(name != undefined){
        axios.post('/admin/level', {
            name: name
        }).then((response) => {
            if(response.data.success){  
               reload_table()
               $.notify("Categoria cadastrada com sucesso", "success");
               document.getElementById('name').value='';
            }else{
               alert("Deu erro no if")
            }
        
        }).catch((err) => {
            alert("Deu erro no cathc" + err)
        });
    }
}

async function openModalPhrase(data){
       $('#modalPhrase').modal('show');
       if(data != undefined){
        await axios.get("/admin/phrase/"+data).then((response)=>{
            $('#portuguese').val(response.data.portuguese);
            $('#english').val(response.data.english);
            $("#pronunciation").val(response.data.pronunciation);
            $("#selectCategories").val(response.data.category.id);
            $('#btnModalPhrase').replaceWith('<button class="btn btn-success" onclick="save_phrase('+response.data.id+')" id="btnModalPhrase">Salvar alterações</button>')
        })
       }
}

function close_modal(){
    $('#modalPhrase').modal('toggle');
    resetFormPhrase();
}

async function edit_phrase(id){
    alert(id)
    await console.log("edit" + id)
}


function resetFormPhrase() {
    $('#portuguese').val("");
    $('#english').val("");
    $("#pronunciation").val("");
    $('#selectCategories').prop('selectedIndex',0);
}