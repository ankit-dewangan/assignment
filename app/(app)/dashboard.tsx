import { StatsCard } from '@/components/StatsCard';
import { Typography } from '@/components/ui/Typography';
import { theme } from '@/constants/theme';
import { useUser } from '@/context/UserContext';
import { mockStats } from '@/utils/mockData';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Dashboard() {
  const { userData } = useUser();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View>
            <Typography variant="subtitle2">Welcome back,</Typography>
            <Typography variant="h1">
              {userData ? `${userData.firstName} ${userData.lastName}` : 'Guest'}
            </Typography>
          </View>
        </View>

        <View style={styles.section}>
          <Typography variant="h2">Your Statistics</Typography>
          <View style={styles.statsContainer}>
            {mockStats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Typography variant="h2">Recent Activity</Typography>
          <View style={styles.placeholder}>
            <Typography variant="subtitle1">No recent activity</Typography>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    padding: theme.spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: theme.spacing.lg,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  placeholder: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.xl,
    alignItems: 'center',
  },
});