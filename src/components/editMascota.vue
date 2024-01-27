<template>
  <div>
    <h2>Editar Mascota</h2>

    <form @submit.prevent="updateMascota">
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
        <label for="id_cliente">Cliente:</label>
        <input v-model="nuevaMascota.id_cliente" type="text" id="id_cliente" required>
      </div>

      <button type="submit">Actualizar Mascota</button>
    </form>
  </div>
</template>
  
<script>
import axios from 'axios';

  export default {
  data() {
    return {
      Mascotas: [],
      nuevaMascota: {
        id: null,
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
 async mounted() {
  console.log('Método mounted ejecutado');
  this.nuevaMascota = await this.obtenerMascotaDesdeAPI(this.$route.params.id);
  console.log(this.nuevaMascota);
},

  methods: {
    async updateMascota() {
      try {
        await this.EnviarSolicitudHTTPActualizarMascota(this.nuevaMascota);
        // Puedes realizar alguna acción adicional después de actualizar, si es necesario
      } catch (error) {
        console.error('Error al actualizar la mascota:', error);
      }
    },
    async obtenerMascotaDesdeAPI(mascotaId) {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/mascotas/${mascotaId}`);
        return response.data;
      } catch (error) {
        console.error('Error al obtener la mascota desde la API:', error);
        return null;
      }
    },
    async EnviarSolicitudHTTPActualizarMascota(mascota) {
      try {
        await axios.put(`http://127.0.0.1:8000/api/v1/mascotas/${mascota.id}`, mascota);
        console.log('Mascota actualizada exitosamente');
      } catch (error) {
        console.error('Error al actualizar la mascota:', error);
        throw error;
      }
    },
  },
};
</script>
  
  <style>
  </style>
  