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
                        <h3 class="card-title">Lista de Usuários</h3>

                        <div class="card-tools">
                            <div class="input-group input-group-sm">
                                <button class="btn btn-success" @click="newModal">Add New <i class="fas fa-user-plus"></i> </button>
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
                            <tr v-for="user in users" :key="user.id">
                                <td>{{user.id}}</td>
                                <td>{{user.name}}</td>
                                <td>{{user.email}}</td>
                                <td>{{user.type}}</td>
                                <td>{{user.created_at | myDate}}</td>
                                <td>
                                    <a href="#">
                                        <i class="fa fa-edit" @click='editModal(user)'></i>
                                    </a>
                                    /
                                    <a href="#">
                                        <i class="fa fa-trash" @click='deleteUser(user.id)'></i>
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
                        <h5 class="modal-title" v-show="editMode" id="addNewLabel">Update User's Info</h5>
                        <h5 class="modal-title" v-show="!editMode" id="addNewLabel">Add new User</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <form @submit.prevent="editMode ? updateUser() : createUser()">
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
                                    <option value="">Select User Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                                <has-error :form="form" field="type"></has-error>
                            </div>

                            <div class="form-group">
                                <input v-model="form.password" type="password" name="password" placeholder="Password"
                                       class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                                <has-error :form="form" field="password"></has-error>
                            </div>

                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            <button v-show="editMode" type="submit" class="btn btn-success">Update</button>
                            <button v-show="!editMode" type="submit" class="btn btn-primary">Create</button>
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
                editMode : true,
                users : {},
                form : new Form({
                    id : '',
                    name : '',
                    email : '',
                    password : '',
                    type : ''
                })
            }
        },

        methods : {
            loadUsers(){
                axios.get("api/user").then(({ data }) => (this.users = data.data));
            },

            createUser(){
                this.$Progress.start();
                //axios.post('api/user', this.form)
                this.form.post('api/user')
                .then(()=>{
                    $('#addNew').modal('hide');
                    swal({
                        type: 'success',
                        title: 'User Created in successfully'
                        })
                    this.$Progress.finish();
                    this.loadUsers();
                })
                .catch(()=>{
                    this.$Progress.fail();
                })
            },

            updateUser(){
                this.$Progress.start();
                this.form.put('api/user/'+this.form.id)
                .then(() => {
                    //sucess
                    $('#addNew').modal('hide');
                    swal(
                        'Updated!',
                        'Your User has been updated.',
                        'success'
                    )
                    this.$Progress.finish();
                    this.loadUsers();
                })
                .catch(() => {
                    this.$Progress.fail();
                });
                
            },

            deleteUser(id){
                this.$Progress.start();
                swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.value) {
                            this.form.delete('api/user/'+id).then(()=>{
                                swal(
                                'Deleted!',
                                'Your User has been deleted.',
                                'success'
                                )
                            });
                        }
                        this.$Progress.finish();
                        this.loadUsers();
                    }).catch(()=>{
                        this.$Progress.fail();
                        swal("Failed!", "There was something is wrong.", "warning");
                    });
            },

            newModal(){
                this.editMode=false;
                this.form.reset();
                $('#addNew').modal('show');
            },

            editModal(user){
                this.editMode=true;
                this.form.reset();
                $('#addNew').modal('show');
                this.form.fill(user);
            }
        },

        created() {
            this.loadUsers();
        }
    }
</script>
