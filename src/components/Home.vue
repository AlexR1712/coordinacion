<template>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      
  <table class="table">
    <tr class="text-center">
      <th class="text-center">Cedula</th>
      <th class="text-center">Nombre</th>
      <th class="text-center">Fecha</th>
    </tr>
  <!-- Aqui ira el for -->
    <tr v-for="student in students">
      <td>{{student['26799219']}}</td>
      <td>{{student['ALEJANDRO JOSE']}} {{student['CASANOVA URIBE']}}</td>
      <td>{{student['19/01/2017 hora 8:00 am']}}</td>
    </tr>
  <!-- Aqui termina el for -->
  </table>

    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Pagina de Inicio Editado',
      students: []
    }
  },
  mounted: function () {
    this.getStudents()
    console.log('Se monto estudiantes')
  },
  methods: {
    getStudents: function () {
      var self = this
      axios.get('https://api.myjson.com/bins/1h45r7').then((response) => {
        self.students = response.data
      })
    }
  }
}
window.document.title = 'Coordinacion de Sistemas - Inicio'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
