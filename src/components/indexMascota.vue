<template>
  <div>
    <h2>Agregar Mascota</h2>

    <form @submit.prevent="agregarMascota">
      <div>
        <label for="nombre">Nombre:</label>
        <input v-model="nuevaMascota.nombre" type="text" id="nombre" required>
      </div>

      <div>
        <label for="fecha_nacimiento">Fecha de Nacimiento:</label>
        <input v-model="nuevaMascota.fecha_nacimiento" type="date" id="fecha_nacimiento" required>
      </div>

      <div>
        <label for="especie">Especie:</label>
        <input v-model="nuevaMascota.especie" type="text" id="especie" required>
      </div>

      <div>
        <label for="raza">Raza:</label>
        <input v-model="nuevaMascota.raza" type="text" id="raza" required>
      </div>

      <div>
        <label for="color">Color:</label>
        <input v-model="nuevaMascota.color" type="text" id="color" required>
      </div>

      <div>
        <label for="peso">Peso:</label>
        <input v-model="nuevaMascota.peso" type="text" id="peso" required>
      </div>

      <div>
        <label for="altura">Altura:</label>
        <input v-model="nuevaMascota.altura" type="text" id="altura" required>
      </div>

      <div>
        <label for="diagnostico">Diagnóstico:</label>
        <input v-model="nuevaMascota.diagnostico" type="text" id="diagnostico" required>
      </div>
      <div>
        <label for="tratamiento">Tratamiento:</label>
        <input v-model="nuevaMascota.tratamiento" type="text" id="tratamiento" required>
      </div>
      <div>
        <label for="notas_adicionales">Notas adicionales:</label>
        <input v-model="nuevaMascota.notas_adicionales" type="text" id="notas_adicionales" required>
      </div>
      <div>
        <label for="id_cliente">cliente:</label>
        <input v-model="nuevaMascota.id_cliente" type="text" id="id_cliente" required>
      </div>

      <!-- Agrega los demás campos según sea necesario -->

      <button type="submit">Agregar Mascota</button>
    </form>
    <h2>Lista de Mascotas</h2>
    <ul>
      <li v-for="mascota in Mascotas" :key="mascota.id">
        {{ mascota.nombre }} {{ mascota.fecha_nacimiento }} - {{ mascota.especie }} - {{ mascota.raza }} - {{ mascota.color }} - {{ mascota.peso }} - {{ mascota.altura }} - {{ mascota.diagnostico }}
        <router-link :to="{ name: 'editMascota', params: { id: mascota.id } }">Editar</router-link>
        <button @click="eliminarMascota(mascota.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>






<script>
import axios from 'axios';

export default {
  data() {
    return {
      Mascotas: [],
      nuevaMascota: {
        nombre: '',
        fecha_nacimiento: '',
        especie: '',
        raza: '',
        color: '',
        peso: '',
        altura: '',
        diagnostico: '',
        tratamiento: '',
        notas_adicionales: '',
        id_cliente: '',
      },
    };
  },
  mounted() {
    this.obtenerMascotas();
  },
  methods: {
    async agregarMascota() {
      try {
        await this.EnviarSolicitudHTTPAgregarCliente(this.nuevaMascota);
        this.obtenerClientes();
      } catch (error) {
        console.error('Error al agregar el cliente:', error);
      }
    },
    async EnviarSolicitudHTTPAgregarCliente(mascotaid) {
      try {
        await axios.post('http://127.0.0.1:8000/api/v1/mascotas', mascotaid);
        console.log('Cliente agregado exitosamente');
      } catch (error) {
        console.error('Error al agregar el cliente:', error);
        throw error;
      }
    },
    obtenerMascotas() {
      axios.get('http://127.0.0.1:8000/api/v1/mascotas')
        .then(response => {
          this.Mascotas = response.data;
        })
        .catch(error => {
          console.error('Error al obtener la lista de mascotas:', error);
        });
    },
    editarMascota(mascotasid) {
      this.$router.push({ path: `/editar/${mascotasid}` });
    },
    eliminarMascota(mascotasid) {
      if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
        axios.delete(`http://127.0.0.1:8000/api/v1/mascotas/${mascotasid}`)
          .then(response => {
            this.obtenerMascotas();
            console.log('Cliente eliminado exitosamente:', response.data);
          })
          .catch(error => {
            console.error('Error al eliminar la mascota:', error);
          });
      }
    },
  },
};
</script>
  