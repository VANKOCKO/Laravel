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
                                   <input type="text" class="form-control" v-model="chart.valeur">  
                              </div>
                         </div>
                   </div><br/>
                    <div class="form-group">
                       <button class="btn btn-primary">Add Item</button>
                    </div>
              </form>
          </div>    
</template>

<script> 

   module.exports = {

       data:function () {
           
           return {
               
                chart : {}

           }
       },
       methods: {

           ajouterChart(){   
             let uri = 'http://localhost:8000/chart/ajouter';
             this.axios.post(uri,this.chart).then((response) =>{
                this.$router.push({name : 'chart'})
             });
           },
       }
   }
</script>
