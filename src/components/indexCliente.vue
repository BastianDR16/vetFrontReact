<template>
  <div>
    <h2>Agregar Cliente</h2>

    <form @submit.prevent="agregarCliente">
      <div>
        <label for="nombre">Nombre:</label>
        <input v-model="nuevoCliente.nombre" type="text" id="nombre" required>
      </div>

      <div>
        <label for="apellido">Apellido:</label>
        <input v-model="nuevoCliente.apellido" type="text" id="apellido" required>
      </div>

      <div>
        <label for="correo_electronico">Correo Electrónico:</label>
        <input v-model="nuevoCliente.correo_electronico" type="email" id="correo_electronico" required>
      </div>

      <div>
        <label for="telefono">Teléfono:</label>
        <input v-model="nuevoCliente.telefono" type="text" id="telefono" required>
      </div>
      <div>
        <label for="password">password:</label>
        <input v-model="nuevoCliente.password" type="text" id="password" required>
      </div>
      <button type="submit">Agregar Cliente</button>
    </form>

    <h2>Lista de Clientes</h2>
    <ul>
      <li v-for="cliente in clientes" :key="cliente.id">
        {{ cliente.nombre }} {{ cliente.apellido }} - {{ cliente.correo_electronico }} - {{ cliente.telefono }}
        <router-link :to="{ name: 'editCliente', params: { id: cliente.id } }">Editar</router-link>
        <button @click="eliminarCliente(cliente.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      clientes: [],
      nuevoCliente: {
        nombre: '',
        apellido: '',
        correo_electronico: '',
        telefono: '',
      },
    };
  },
  mounted() {
    this.obtenerClientes();
  },
  methods: {
    async agregarCliente() {
      try {
        await this.EnviarSolicitudHTTPAgregarCliente(this.nuevoCliente);
        this.obtenerClientes();
      } catch (error) {
        console.error('Error al agregar el cliente:', error);
      }
    },
    async EnviarSolicitudHTTPAgregarCliente(cliente) {
      try {
        await axios.post('http://127.0.0.1:8000/api/v1/clientes', cliente);
        console.log('Cliente agregado exitosamente');
      } catch (error) {
        console.error('Error al agregar el cliente:', error);
        throw error;
      }
    },
    obtenerClientes() {
      axios.get('http://127.0.0.1:8000/api/v1/clientes')
        .then(response => {
          this.clientes = response.data;
        })
        .catch(error => {
          console.error('Error al obtener la lista de clientes:', error);
        });
    },
    editarCliente(clienteId) {
      this.$router.push({ path: `/editar/${clienteId}` });
    },
    eliminarCliente(clienteId) {
      if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
        axios.delete(`http://127.0.0.1:8000/api/v1/clientes/${clienteId}`)
          .then(response => {
            this.obtenerClientes();
            console.log('Cliente eliminado exitosamente:', response.data);
          })
          .catch(error => {
            console.error('Error al eliminar el cliente:', error);
          });
      }
    },
  },
};
</script>

<style>
</style>
