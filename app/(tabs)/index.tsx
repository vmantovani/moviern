import { ActivityIndicator, StyleSheet, Text } from "react-native"

import { View } from "@/components/Themed"
import { useEffect, useState } from "react"
import { fetchTopRatedMovies } from "@/api/movies"
import { FlashList } from "@shopify/flash-list"

export default function TabOneScreen() {
  const [movies, setMovies] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true)

      try {
        const movies = await fetchTopRatedMovies()
        setMovies(movies)
      } catch (error) {
        setError(error as Error)
      }

      setIsLoading(false)
    }
    fetchMovies()
  }, [])

  if (isLoading) {
    return <ActivityIndicator />
  }

  if (error) {
    return <Text>{error.message}</Text>
  }

  return (
    <View style={styles.container}>
      <FlashList
        data={movies}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
        estimatedItemSize={100}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
})
