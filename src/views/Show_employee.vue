<template>
  <div class="container my-5">
   <h2>เเสดงข้อมูลลูกค้า</h2>


    <table class="table table-hover">
  <thead class = "table-dark">   
    <tr>
      <th scope="col">รหัสพนักงาน</th>
      <th scope="col">ชื่อ-นามสกุล</th>
      <th scope="col">เเผนก</th>
      <th scope="col">เงินเดือน</th>
      <th scope="col">เข้างาน</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in employees" :key="item.employees_id">
      <td>{{item.emp_id}}</td>
      <td>{{item.full_name}}</td>
      <td>{{item.department}}</td>
      <td>{{item.salary}}</td>
      <td>
      <span v-if="item.active==1">ปกติ</span>
      <span v-else>ลาออก</span>


      {{item.create_at}}</td>

    </tr>

  </tbody>
</table>




  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const employees = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const res = await fetch('http://localhost/project-vue-68707650/php_api/show_employee.php')
    employees.value = await res.json()
  } catch (err) {
    error.value = 'โหลดข้อมูลไม่สำเร็จ'
  } finally {
    loading.value = false
  }
})
</script>

<style lang="">

</style>

