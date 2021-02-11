<template>
      <div>
        <v-toolbar
        color="transparent">
          
          <v-toolbar-title class="black--text">Livescore</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn
            text
            color="black"
            to="/"
          >
            Home
          </v-btn>
          
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            color="black"
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
            color="black"
            to="/leagues"
          >
            Leagues
          </v-btn>

          <v-btn
            text
            color="black"
            to="/matches"
          >
            Matches
          </v-btn>

          <v-btn
            text
            color="black"
            to="/schedules"
          >
            Schedules
          </v-btn>
          
          <v-btn
            text
            color="black"
            to="/games"
          >
            Games
          </v-btn>
          <v-btn
            text
            color="black"
            to="/about-us"
          >
            About us
          </v-btn>
          
        </v-toolbar>
      </div>
</template>