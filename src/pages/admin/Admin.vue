<template>
  <Layout class="layout">
    <Header>
      <Menu mode="horizontal" theme="dark" active-name="1">
        <div class="layout-logo"></div>
        <div class="layout-nav">
          <!--<MenuItem name="1">-->
          <!--<Icon type="ios-navigate"></Icon>-->
          <!--Item 1-->
          <!--</MenuItem>-->
        </div>
      </Menu>
    </Header>
    <Layout>
      <Sider hide-trigger :style="{background: '#fff'}">
        <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              页面设置
            </template>
            <MenuItem name="1-1">diypage</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout :style="{padding: '0 24px 24px'}">
        <Breadcrumb :style="{margin: '24px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>自定义页面</BreadcrumbItem>
          <BreadcrumbItem>页面列表</BreadcrumbItem>
        </Breadcrumb>
        <Content :style="{padding: '24px', background: '#fff'}">
          <router-view />
        </Content>
      </Layout>
    </Layout>
  </Layout>
</template>
<script>
export default {};
</script>
<style scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  height: 100%;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
