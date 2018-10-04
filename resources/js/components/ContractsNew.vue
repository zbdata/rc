<template>
    <div class="container">
        <div class="my-3 p-3 bg-white rounded shadow-sm">
            <h6 class="border-bottom border-gray pb-2 mb-0">Dados do Cliente</h6>

            
      </div>
      <div class="my-3 p-3 bg-white rounded shadow-sm">
            <h6 class="border-bottom border-gray pb-2 mb-0">Dados do Automotor</h6>
            

      </div>
      <div class="my-3 p-3 bg-white rounded shadow-sm">
            <h6 class="border-bottom border-gray pb-2 mb-0">Dados do Contrato</h6>
            
        
      </div>

      <small class="d-block text-center mt-3">
                <button class="btn btn-success" data-target="#addNew">Gravar</button>
                <button class="btn btn-danger" data-target="#addNew">Limpar</button>
                    <router-link to="/contracts">
                        <button class="btn btn-success" >Retornar</button>
                    </router-link>
        </small>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>
