<template>
  <div id="employees">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Manager</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees">
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
          <td>{{ employee.manager }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
</script>

<style scoped>
</style>

