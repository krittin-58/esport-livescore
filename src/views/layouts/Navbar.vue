<template>
      <div>
        <v-toolbar
        color="black">
          
          <v-toolbar-title class="white--text">Livescore</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn
            text
            color="white"
            to="/"
          >
            Home
          </v-btn>
          
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            color="white"
            to="/live"
            v-bind="attrs"
            v-on="on"
          >
            <v-badge
                color="red"
                dot
              >
                Live
              </v-badge>
          </v-btn>
            </template>
            <span>Coming Soon!</span>
          </v-tooltip>
          
          <v-btn
            text
            color="white"
            to="/matches"
          >
            Matches
          </v-btn>

          <v-btn
            text
            color="white"
            to="/schedules"
          >
            Schedules
          </v-btn>
          
          <v-btn
            text
            color="white"
            to="/games"
          >
            Games
          </v-btn>
          <v-btn
            text
            color="white"
            to="/about-us"
          >
            About us
          </v-btn>
          
        </v-toolbar>
      </div>
</template>