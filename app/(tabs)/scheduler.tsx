import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { MessageSquareText, Plus, Calendar, Clock } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';

export default function SchedulerScreen() {
  const { isDark } = useTheme();
  const [scheduledTexts, setScheduledTexts] = useState([]);

  const theme = {
    text: '#f0f0f0',
    background: isDark ? '#0B0909' : '#003C24',
    primary: isDark ? '#8C8C8C' : '#f0f0f0',
    secondary: isDark ? '#4A5568' : '#012d1c',
    accent: isDark ? '#44444C' : '#002818',
    cardBackground: isDark ? '#1A1A1A' : '#002818',
    border: isDark ? '#333333' : '#012d1c',
    isDark,
  };

  const handleAddScheduledText = () => {
    // TODO: Navigate to create scheduled text screen
    console.log('Add scheduled text pressed');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <MessageSquareText size={32} color={theme.text} />
        <Text style={[styles.title, { color: theme.text }]}>Text Scheduler</Text>
        <TouchableOpacity
          style={[styles.addButton, { backgroundColor: theme.secondary }]}
          onPress={handleAddScheduledText}
        >
          <Plus size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {scheduledTexts.length === 0 ? (
          <View style={styles.emptyState}>
            <View style={[styles.emptyIcon, { backgroundColor: theme.accent }]}>
              <MessageSquareText size={48} color={theme.primary} />
            </View>
            <Text style={[styles.emptyTitle, { color: theme.text }]}>
              No Scheduled Texts
            </Text>
            <Text style={[styles.emptySubtitle, { color: theme.primary }]}>
              Schedule text messages to send at the perfect time
            </Text>
            <TouchableOpacity
              style={[styles.emptyActionButton, { backgroundColor: theme.secondary }]}
              onPress={handleAddScheduledText}
            >
              <Plus size={20} color="#FFFFFF" />
              <Text style={styles.emptyActionButtonText}>Schedule Your First Text</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.textsList}>
            {/* TODO: Render scheduled texts list */}
            <Text style={[styles.placeholder, { color: theme.primary }]}>
              Scheduled texts will appear here
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Feature Preview */}
      <View style={[styles.featurePreview, { backgroundColor: theme.cardBackground, borderColor: theme.border }]}>
        <View style={styles.featureHeader}>
          <Calendar size={20} color="#3B82F6" />
          <Text style={[styles.featureTitle, { color: theme.text }]}>Coming Soon</Text>
        </View>
        <Text style={[styles.featureDescription, { color: theme.primary }]}>
          Schedule text messages to be sent at specific times. ARMi will remind you and help you send the perfect message.
        </Text>
        <View style={styles.featureList}>
          <View style={styles.featureItem}>
            <Clock size={16} color={theme.primary} />
            <Text style={[styles.featureItemText, { color: theme.text }]}>
              Schedule for any date and time
            </Text>
          </View>
          <View style={styles.featureItem}>
            <MessageSquareText size={16} color={theme.primary} />
            <Text style={[styles.featureItemText, { color: theme.text }]}>
              Pre-write your message
            </Text>
          </View>
          <View style={styles.featureItem}>
            <Plus size={16} color={theme.primary} />
            <Text style={[styles.featureItemText, { color: theme.text }]}>
              Auto-fill contact info
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 12,
    flex: 1,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
    paddingHorizontal: 40,
  },
  emptyActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 8,
  },
  emptyActionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  textsList: {
    paddingTop: 20,
  },
  placeholder: {
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  featurePreview: {
    margin: 20,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
  },
  featureHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  featureDescription: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  },
  featureList: {
    gap: 8,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  featureItemText: {
    fontSize: 14,
    fontWeight: '500',
  },
});