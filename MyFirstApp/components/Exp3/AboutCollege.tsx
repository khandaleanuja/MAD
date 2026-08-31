import React from 'react';
import {

  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

const AboutCollege = () => {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.heading}>
        About Our College
      </Text>

      <Text style={styles.paragraph}>
        Our college is a reputed educational institution
        committed to providing quality education to students.
        It provides a positive environment where students
        can develop their academic and professional skills.
      </Text>

      <Text style={styles.paragraph}>
        The college offers various undergraduate and
        postgraduate programs in different fields of
        engineering, technology, science and management.
        Students can select courses according to their
        interests and career goals.
      </Text>

      <Text style={styles.paragraph}>
        The college has experienced and qualified faculty
        members who guide students throughout their academic
        journey. Faculty members encourage students to
        participate in academic and technical activities.
      </Text>

      <Text style={styles.paragraph}>
        The college provides well-equipped laboratories
        where students can gain practical knowledge.
        These laboratories help students understand
        concepts through experiments and hands-on learning.
      </Text>

      <Text style={styles.paragraph}>
        The college library provides students with access
        to textbooks, reference books, journals and other
        educational resources. Students can use the library
        for studying and completing academic projects.
      </Text>

      <Text style={styles.paragraph}>
        Various technical events, workshops and seminars
        are organized throughout the academic year.
        These activities help students improve their
        technical knowledge and practical skills.
      </Text>

      <Text style={styles.paragraph}>
        The college also encourages students to participate
        in sports and cultural activities. Such activities
        help students maintain a balance between academics
        and extracurricular development.
      </Text>

      <Text style={styles.paragraph}>
        Students are encouraged to participate in project
        competitions, coding events, internships and
        industrial visits. These opportunities provide
        valuable exposure to real-world technologies.
      </Text>

      <Text style={styles.paragraph}>
        The college focuses on developing communication,
        teamwork, leadership and problem-solving skills.
        These skills help students become confident and
        capable professionals.
      </Text>

      <Text style={styles.paragraph}>
        Our college aims to prepare students for successful
        careers and responsible citizenship. Through quality
        education, practical training and overall development,
        the institution helps students achieve their goals.
      </Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  paragraph: {
    fontSize: 17,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#333',
  },
});

export default AboutCollege;