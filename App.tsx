import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const tasks = [
  { title: 'Clean the kitchen', detail: 'Due today · Alex', color: '#E9F3FF' },
  { title: 'Take out recycling', detail: 'Due today · You', color: '#EAF7EF' },
  { title: 'Buy groceries', detail: 'Tomorrow · Jamie', color: '#FFF3E6' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>YOUR SHARED SPACE</Text>
            <Text style={styles.heading}>Roomsync</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>Y</Text>
          </View>
        </View>

        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Living together, in sync.</Text>
          <Text style={styles.welcomeCopy}>
            Keep chores, plans, and shared responsibilities in one place.
          </Text>
          <View style={styles.roomPill}>
            <Text style={styles.roomPillText}>⌂  My shared home</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming tasks</Text>
          <Text style={styles.muted}>This week</Text>
        </View>

        {tasks.map((task) => (
          <View key={task.title} style={styles.taskCard}>
            <View style={[styles.taskIcon, { backgroundColor: task.color }]}>
              <Text style={styles.check}>✓</Text>
            </View>
            <View style={styles.taskText}>
              <Text style={styles.taskTitle}>{task.title}</Text>
              <Text style={styles.taskDetail}>{task.detail}</Text>
            </View>
            <Text style={styles.chevron}>›</Text>
          </View>
        ))}

        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>A little teamwork goes a long way</Text>
          <Text style={styles.tipCopy}>
            Add your roommates and start sharing the load.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F6F7FB' },
  container: { padding: 22, paddingTop: 28, paddingBottom: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25 },
  eyebrow: { color: '#7C8497', fontSize: 11, fontWeight: '700', letterSpacing: 1.5 },
  heading: { color: '#20263A', fontSize: 32, fontWeight: '800', marginTop: 5 },
  avatar: { width: 43, height: 43, borderRadius: 22, backgroundColor: '#DCE6FF', alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: '#3657A6', fontSize: 17, fontWeight: '800' },
  welcomeCard: { backgroundColor: '#334F9B', borderRadius: 22, padding: 22, marginBottom: 28 },
  welcomeTitle: { color: '#FFFFFF', fontSize: 23, lineHeight: 29, fontWeight: '800', maxWidth: 250 },
  welcomeCopy: { color: '#E1E8FF', fontSize: 14, lineHeight: 21, marginTop: 9, maxWidth: 280 },
  roomPill: { alignSelf: 'flex-start', backgroundColor: '#FFFFFF22', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 8, marginTop: 19 },
  roomPillText: { color: '#FFFFFF', fontWeight: '600', fontSize: 12 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 13 },
  sectionTitle: { color: '#20263A', fontSize: 19, fontWeight: '800' },
  muted: { color: '#8991A3', fontSize: 12, fontWeight: '600' },
  taskCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 14, borderRadius: 16, marginBottom: 10 },
  taskIcon: { width: 40, height: 40, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  check: { color: '#405477', fontSize: 18, fontWeight: '700' },
  taskText: { flex: 1, marginLeft: 12 },
  taskTitle: { color: '#283047', fontSize: 14, fontWeight: '700' },
  taskDetail: { color: '#8A91A2', fontSize: 12, marginTop: 5 },
  chevron: { color: '#A0A6B4', fontSize: 25, marginLeft: 8 },
  tipCard: { borderWidth: 1, borderColor: '#E5E8F0', borderRadius: 17, padding: 17, marginTop: 16 },
  tipTitle: { color: '#30384F', fontWeight: '700', fontSize: 14 },
  tipCopy: { color: '#858DA0', fontSize: 12, lineHeight: 18, marginTop: 6 },
});
