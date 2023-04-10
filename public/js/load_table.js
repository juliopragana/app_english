var editor;

function load_table_phrases() {
  
    var url = "/admin/load-phrases"; 

    var table = $('#table').DataTable({

      "ajax": {
        "url": url,
        "dataSrc": ""
      },
      "bProcessing": true,
      
      "columns": [
  
        { data: "portuguese", "className": "text-center" },        
        { data: "english", "className": "text-center" },
        { data: "pronunciation", "className": "text-center" },
        { data: "category.name", "className": "text-center" },    
        {
          data: "id", "className": "text-center", render: function (data, type, row, meta) {
            return type === 'display' ?
              '<button class="btn btn-sm visualizar" onclick="openModalPhrase('+data+')" data-id="' + data + '"><i class="fa-solid fa-pen-to-square"></i></button>\ '+
              '<button class="btn btn-sm visualizar" onclick="openModalPhraseDelete('+data+')" data-id="' + data + '"><i class="fa-solid fa-trash"></i></button>\ '
              :
              data;
            }
         }         
      ],
       
      "order": [[ 0, "asc" ]],
      
      
    });

    
  };

  function load_table_categories() {
  
    var url = "/admin/load-categories"; 

    var table = $('#table').DataTable({

      "ajax": {
        "url": url,
        "dataSrc": ""
      },
      "bProcessing": true,
      
      "columns": [
  
        { data: "name", "className": "text-center" },       
        {
          data: "id", "className": "text-center", render: function (data, type, row, meta) {
            return type === 'display' ?
              '<button class="btn btn-sm visualizar" onclick="edit('+data+')" data-id="' + data + '"><i class="fa fa-info-circle"></i></button>\ '
              :
              data;
            }
         }         
      ],
       
      "order": [[ 0, "asc" ]],
      
      
    });

    
  };

  function load_table_levels() {
  
    var url = "/admin/load-levels"; 

    var table = $('#table').DataTable({

      "ajax": {
        "url": url,
        "dataSrc": ""
      },
      "bProcessing": true,
      
      "columns": [
  
        { data: "name", "className": "text-center" },       
        {
          data: "id", "className": "text-center", render: function (data, type, row, meta) {
            return type === 'display' ?
              '<button class="btn btn-sm visualizar" onclick="openModal('+data+')" data-id="' + data + '"><i class="fa fa-info-circle"></i></button>\ '
              :
              data;
            }
         }         
      ],
       
      "order": [[ 0, "asc" ]],
      
      
    });

    
  };



  function reload_table(){
    var table = $('#table').DataTable();
    table.ajax.reload();
  }

  function openModalPhraseDelete(data){
    alert("Clicou" + data)
  }
