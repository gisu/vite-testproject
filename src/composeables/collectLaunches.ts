import { computed, ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { LastLaunch, ListLaunches, SelectLaunch } from '@/graphql/queries/launches'
import { ILastLaunch, ILastLaunchData, ILaunchList, ISelectedLaunch } from '@/typescript/interfaces/launches-interfaces'

/**
 * Returns the last launch
 */
export function lastLaunch() : ILastLaunch {
  const { result, loading, error } = useQuery(LastLaunch)

  const launchResult = computed((): ILastLaunchData => {
    if (loading.value) return {}
    return result.value?.launchesPast[0]
  })

  return {
    loading,
    error,
    launchResult
  }
}

/**
 * Collect
 * @param limit
 */
export function launches(limit: number) : ILaunchList {
  const queryVariables = ref({ limit: limit })

  const { result, loading, error } = useQuery(ListLaunches, queryVariables)

  return {
    result,
    loading,
    error
  }
}

export function selectLaunch(id: number) : ISelectedLaunch {
  const queryVariables = ref({ id: id })

  const { result, loading, error } = useQuery(SelectLaunch, queryVariables)

  const launchDetail = computed(() => {
    if (loading.value) return {}
    return result.value?.launch
  })

  return {
    launchDetail,
    loading,
    error
  }
}
