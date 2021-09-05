<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { provide } from 'vue'
import { apolloClient } from './graphql/client'
import { DefaultApolloClient } from '@vue/apollo-composable'

provide(DefaultApolloClient, apolloClient)
</script>
