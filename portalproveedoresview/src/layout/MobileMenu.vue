<template>
  <ul class="nav nav-mobile-menu">
    <base-dropdown>
      <template slot="title">
        <i class="fa fa-globe"></i>
        <b class="caret"></b>
        <span class="notification">5 Notifications</span>
      </template>
      <a class="dropdown-item" href="#">Notification 1</a>
      <a class="dropdown-item" href="#">Notification 2</a>
      <a class="dropdown-item" href="#">Notification 3</a>
      <a class="dropdown-item" href="#">Notification 4</a>
      <a class="dropdown-item" href="#">Another notification</a>
    </base-dropdown>
    <li class="nav-item">
      <a href="#" class="nav-link">
        <i class="nc-icon nc-zoom-split hidden-lg-up"></i>
        <span class="d-lg-none">Search</span>
      </a>
    </li>
    <base-dropdown title="Dropdown">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </base-dropdown>
    <!--
    <li class="nav-item">
      <a class="nav-link" href="#pablo">
        <span class="no-icon">Log out</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="#/admin/login" class="nav-link">
        <span class="no-icon">Login</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="#/admin/proveedor" class="nav-link">
        <span class="no-icon">Alta de proveedor</span>
      </a>
    </li>
    -->
     <sidebar-link to="/login">
      <i class="nc-icon nc-chart-pie-35"></i>
      <p>Login</p>
    </sidebar-link>
    <sidebar-link to="/proveedor">
      <i class="nc-icon nc-chart-pie-35"></i>
      <p>Alta de proveedor</p>
    </sidebar-link>
  </ul>
</template>
<script>
  export default {
    name: 'mobile-menu'
  }
</script>
<style>
</style>
