<template>
    <div class="container">

        <div class="my-3 p-3 bg-white rounded shadow-sm">
            <h6 class="border-bottom border-gray pb-2 mb-0">Dados do Cliente</h6>
            <div class="media text-muted pt-3">

            </div>
        </div>

        <div class="my-3 p-3 bg-white rounded shadow-sm">
            <h6 class="border-bottom border-gray pb-2 mb-0">Dados do Automotor</h6>
            <div class="media text-muted pt-3">

            </div>
        </div>

        <div class="my-3 p-3 bg-white rounded shadow-sm">
            <h6 class="border-bottom border-gray pb-2 mb-0">Dados do Contrato</h6>
            <div class="media text-muted pt-3">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                contracts : {},
                form : new Form({
                    num_contract : ''
                })
            }
        },

        methods : {
            loadContracts(){
                //axios.get("api/contract").then(({ data }) => (this.contracts = data.data));
            },

            createContract(){
                this.form.post('api/contract')
            }
        },

        created() {
            this.loadContracts();
        }
    }
</script>
