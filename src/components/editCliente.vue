<template>
  <div>
    <h2>Editar Cliente</h2>

    <form @submit.prevent="updateCliente">
      <div>
        <label for="nombre">Nombre:</label>
        <input v-model="cliente.nombre" type="text" id="nombre" required>
      </div>

      <div>
        <label for="apellido">Apellido:</label>
        <input v-model="cliente.apellido" type="text" id="apellido" required>
      </div>

      <div>
        <label for="correo_electronico">Correo Electrónico:</label>
        <input v-model="cliente.correo_electronico" type="email" id="correo_electronico" required>
      </div>

      <div>
        <label for="telefono">Teléfono:</label>
        <input v-model="cliente.telefono" type="text" id="telefono" required>
      </div>

      <button type="submit">Actualizar Cliente</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cliente: {
        id: null,
        nombre: '',
        apellido: '',
        correo_electronico: '',
        telefono: '',
        // Otros campos según sea necesario
      },
    };
  },
  
  async mounted() {
    this.cliente = await this.obtenerClienteDesdeAPI(this.$route.params.id);
  },
  methods: {
    async updateCliente() {
      try {
       
        await this.EnviarSolicitudHTTPActualizarCliente(this.cliente);
        
      
      } catch (error) {
        console.error('Error al actualizar el cliente:', error);
      }
    },
    
    async obtenerClienteDesdeAPI(clienteId) {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/clientes/${clienteId}`);
        return response.data;
      } catch (error) {
        console.error('Error al obtener el cliente desde la API:', error);
        return null;
      }
    },
    
    async EnviarSolicitudHTTPActualizarCliente(cliente) {
      try {
        await axios.put(`http://127.0.0.1:8000/api/v1/clientes/${cliente.id}`, cliente);
        console.log('Cliente actualizado exitosamente');
      } catch (error) {
        console.error('Error al actualizar el cliente:', error);
        throw error;
      }
    }
  },
};
</script>

<style>
</style>
