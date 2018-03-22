<template>
          <div>
              <h1>Ajouter une propriete du graph</h1>    
              <form v-on:submit.prevent="ajouterChart">
                   <div class="row">
                         <div class="col-md-6">
                              <div class="form-group">
                                   <label for="label">label</label>  
                                   <input type="text" class="form-control" v-model="chart.label">  
                              </div>
                         </div>
                   </div>
                   <div class="row">
                         <div class="col-md-6">
                              <div class="form-group">
                                   <label for="label">valeur</label>  
                                   <input type="text" class="form-control" v-model="chart.value">  
                              </div>
                         </div>
                   </div><br/>
                    <div class="form-group">
                       <button class="btn btn-primary">Ajouter chart</button>
                    </div>
                   
                    <li v-bind:key="data.id" v-for="data in datas">
                                 {{data.label}}
                                 {{data.value}}
                    </li> 
              </form>

          </div>
            
</template>

<script> 
   export default {

       data:function () {
           
           return {
               
               chart: 
               {},
               datas:[],

           }
       },
       methods: {
           ajouterChart(){   
             let uri = 'http://localhost:8000/graph';
             this.axios.post(uri,this.chart).then((response) => {
                this.$router.push({name : 'ajouterChart'})
             });
           },
           afficherChart(){
                let uri ='http://localhost:8000/graph';
                this.axios.get(uri).then((response)=> {
                       this.chart = response.data;
                });
           }
       }
   }
</script>