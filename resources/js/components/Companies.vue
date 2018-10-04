 <template>
    <div class="container">

        <div class="my-3 p-3 bg-white rounded shadow-sm">
            <h6 class="border-bottom border-gray pb-2 mb-0">Filtros de Pesquisa</h6>
            <div class="media text-muted pt-3">


            </div>
            <small class="d-block text-center mt-3">
                <button class="btn btn-success" data-target="#addNew">Pesquisar</button>
                <button class="btn btn-danger" data-target="#addNew">Limpar</button>
            </small>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Instituições</h3>

                        <div class="card-tools">
                            <div class="input-group input-group-sm">
                                <button class="btn btn-success" data-toggle="modal" data-target="#addNew">Novo <i class="fas fa-user-plus"></i> </button>
                            </div>
                        </div>
                    </div >
                    <!-- /.card-header -->
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover">
                            <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Type</th>
                                <th>Registered at</th>
                                <th>Modify</th>
                            </tr>
                            <tr v-for="company in companies" :key="company.id">
                                <td>{{company.id}}</td>
                                <td>{{company.name}}</td>
                                <td>{{company.email}}</td>
                                <td>{{company.type}}</td>
                                <td>{{company.created_at | myDate}}</td>
                                <td>
                                    <a href="#">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                    /
                                    <a href="#">
                                        <i class="fa fa-trash"></i>
                                    </a>
                                </td>
                            </tr>
                            </tbody></table>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.card -->
            </div>
        </div>

        <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNewLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addNewLabel">Inserir Instituição</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <form @submit.prevent="createCompany">
                        <div class="modal-body">
                            <div class="form-group">
                                <input v-model="form.name" type="text" name="name" placeholder="Name"
                                       class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                                <has-error :form="form" field="name"></has-error>
                            </div>

                            <div class="form-group">
                                <input v-model="form.email" type="text" name="email" placeholder="Email"
                                       class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                                <has-error :form="form" field="email"></has-error>
                            </div>

                            <div class="form-group">
                                <select v-model="form.type" type="text" name="type" placeholder="Type"
                                       class="form-control" :class="{ 'is-invalid': form.errors.has('type') }">
                                    <option value="">Selecione o tipo de instituição</option>
                                    <option value="admin">Matriz</option>
                                    <option value="user">Revendedora</option>
                                </select>
                                <has-error :form="form" field="type"></has-error>
                            </div>

                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                companies : {},
                form : new Form({
                    name : '',
                    email : '',
                    type : ''
                })
            }
        },

        methods : {
            loadCompanies(){
                axios.get("api/company").then(({ data }) => (this.companies = data.data));
            },

            createCompany(){
                this.form.post('api/company')
            }
        },

        created() {
            this.loadCompanies();
        }
    }
</script>
