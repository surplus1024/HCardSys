<template>
  <v-app id="inspire">
    <h1>卡中心人力系统</h1>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>登录</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on">
                      <v-icon large>code</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn icon large href="https://codepen.io/johnjleider/pen/wyYVVj" target="_blank" v-on="on">
                      <v-icon large>mdi-codepen</v-icon>
                    </v-btn>
                  </template>
                  <span>Codepen</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="loginForm">
                  <v-text-field prepend-icon="person" name="loginForm.loginName" label="Login" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="loginForm.loginPass" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login()">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'Login',
    data: () => ({
      loginForm: {
        loginName: '',
        loginPass: ''
      },
      drawer: null,
    }),
    methods: {
      login(){
        alert("登录成功")
        this.$router.push("Home");
      }
    },
    props: {
      source: String
    },
    reutrn: {
      // login: '',
      // password: ''
    }
  }
</script>
