<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="cyan" dark fixed app>
      <v-spacer></v-spacer>
      <v-toolbar-title >信用卡管理系统</v-toolbar-title>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <template>
            <PersonInfo></PersonInfo>
            <Attence></Attence>
            <MenuInfo></MenuInfo>
            <NoticeInfo></NoticeInfo>
          </template>
          <!--<div id="mainContain">-->
            <!--<div id="personInfo">-->

              <!--<div id="pi-info-brief" >-->
                <!--<div style="background-color: #6ff566; height: 120px;width: 1200px;">-->
                  <!--<div>-->
                    <!--<h3 style="float:left">员工：张柳</h3>-->
                    <!--<h3  style="float:left">部门：测试部</h3>-->
                  <!--</div>-->
                  <!--<div style="float: right;">-->
                    <!--<router-link to="/PersonInfo" >个人信息</router-link>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div id="pi-info-menu" style="background-color: #ff6975;height: 120px;width: 1200px;">-->
                  <!--<div style="float: left;width: 300px;"><router-link to="/Attence">出勤天数</router-link></div>-->
                  <!--<div style="float: left;width: 300px;"><router-link to="/Attence">异常次数</router-link></div>-->
                  <!--<div style="float: left;width: 300px;"><router-link to="/Attence">出差次数</router-link></div>-->
                  <!--<div style="float: left;width: 300px;"><router-link to="/Attence">请假次数</router-link></div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div id="mainFunction" >-->
              <!--&lt;!&ndash;<div style="float: left;"><router-link to="/MenuInfo">功能菜单</router-link></div>&ndash;&gt;-->
              <!--<div >-->
                <!--<div id="menu-1" style="width: 1200px;height:100px;">-->
                  <!--<div style="width: 400px;height:100px;float:left"><router-link to="/Attence">考勤日历</router-link></div>-->
                  <!--<div style="width: 400px;height:100px;float:left">我的假期</div>-->
                  <!--<div style="width: 400px;height:100px;float:left">薪资福利</div>-->
                <!--</div>-->
                <!--<div id="menu-2" style="width: 1200px;height:100px;">-->
                  <!--<div style="width: 400px;height:100px;float:left">人事审批</div>-->
                  <!--<div style="width: 400px;height:100px;float:left">在线请假</div>-->
                  <!--<div style="width: 400px;height:100px;float:left">我的申请</div>-->
                <!--</div>-->
                <!--<div id="menu-3" style="width: 1200px;height:100px;">-->
                  <!--<div style="width: 400px;height:100px;float:left">绩效考核</div>-->
                  <!--<div style="width: 400px;"></div>-->
                  <!--<div style="width: 400px;"></div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div id="notice">-->
              <!--<div style="float: left;"><router-link to="/NoticeInfo">公告信息</router-link></div>-->
            <!--</div>-->
          <!--</div>-->


        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="cyan" app>
      <v-spacer></v-spacer>
      <span class="white--text" id="copyRight" >&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import MenuInfo from '../components/Index/MenuInfo'
  import PersonInfo from "./Index/PersonInfo";
  import Attence from "./Index/Modules/Attence";
  import NoticeInfo from "./Index/NoticeInfo";
  export default {
    components: {NoticeInfo, Attence, PersonInfo,MenuInfo},
    comments: {PersonInfo,MenuInfo,NoticeInfo,Attence},
    name: 'Home',
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>
<style>
  #mainContain{ border:1px solid #F00; width:1200px; height:700px;position:relative;top:-80px;}
  #personInfo {border:1px solid #F00; width:1200px; height:250px;}
  #mainFunction {border:1px solid #F00; width:1200px; height:250px;}
  #notice {border:1px solid #F00; width:1200px; height:200px;}
</style>

