<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
        <ul class="navbar-nav nav-drop-menu mt-2">
          <base-dropdown>
            <template slot="title">
              <b class="caret"></b>
              <i class="fa fa-file" aria-hidden="true"></i>
              <span>Proveedores</span>
            </template>
              <a class="dropdown-item" href="#">Notification 1</a>
              <a class="dropdown-item" href="#">Notification 2</a>
          </base-dropdown>
          <sidebar-link to="/admin/mis-datos">
            <i class="nc-icon nc-circle-09"></i>
            <p>Mis datos</p>
          </sidebar-link>
          <sidebar-link to="/admin/ingresar-factura">
            <i class="nc-icon nc-notes"></i>
            <p>Ingresar Facturas</p>
          </sidebar-link>
          <sidebar-link to="/admin/mercancia">
          <i class="nc-icon nc-app"></i>
          <p>Entrada de mercancia</p>
          </sidebar-link>
          <sidebar-link to="/admin/resumen-factura">
            <i class="nc-icon nc-paper-2"></i>
            <p>Resumen de Facturas</p>
          </sidebar-link>
          <sidebar-link to="/admin/complemento">
            <i class="nc-icon nc-single-copy-04"></i>
            <p>Complemento de pagos</p>
          </sidebar-link>
          <sidebar-link to="/admin/ayuda">
            <i class="fa fa-question" aria-hidden="true"></i>
            <p>Ayuda</p>
          </sidebar-link>
        </ul>
      <!--
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Administracion</p>
      </sidebar-link>
      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>Perfil de usuario</p>
      </sidebar-link>
      <sidebar-link to="/admin/proveedor">
        <i class="nc-icon nc-circle-09"></i>
        <p>Alta de Proveedor</p>
      </sidebar-link>
      <sidebar-link to="/admin/table-list">
        <i class="nc-icon nc-notes"></i>
        <p>Listado</p>
      </sidebar-link>
      
      <sidebar-link to="/admin/typography">
        <i class="nc-icon nc-paper-2"></i>
        <p>Typography</p>
      </sidebar-link>
      <sidebar-link to="/admin/icons">
        <i class="nc-icon nc-atom"></i>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/admin/maps">
        <i class="nc-icon nc-pin-3"></i>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/admin/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Notifications</p>
      </sidebar-link>

      <template slot="bottom-links">
        <sidebar-link class="active"
                      to="/admin/upgrade">
          <i class="nc-icon nc-alien-33"></i>
          <p>Upgrade to PRO</p>
        </sidebar-link>
      </template>-->
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
    
</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
