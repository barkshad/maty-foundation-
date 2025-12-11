
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, BookOpen } from 'lucide-react';
import { STUDENT_PROFILES } from '../constants';
import { PageRoute, StudentProfile } from '../types';
import AnimatedText from '../components/AnimatedText';

interface SponsorshipProps {
  navigate: (page: PageRoute) => void;
}

// Student Card Component
const StudentCard: React.FC<{ student: StudentProfile; onSelect: () => void; }> = ({ student, onSelect }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
    onClick={onSelect}
    className="bg-white border rounded-2xl overflow-hidden shadow-lg cursor-pointer group card-shine"
    style={{ borderColor: 'var(--border-color)'}}
  >
    <div className="h-56 overflow-hidden">
      <img src={student.image} alt={student.firstName} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>
    <div className="p-5 text-center">
      <h3 className="text-2xl font-bold font-serif">{student.firstName}</h3>
      <p className="text-sm uppercase tracking-wider font-bold mb-2" style={{ color: 'var(--primary-blue)'}}>{student.age} years old</p>
      <p className="text-sm" style={{ color: 'var(--text-light)'}}>Dream: <span className="font-semibold">{student.dream}</span></p>
    </div>
    <div className="p-3 text-center font-bold text-sm" style={{ backgroundColor: 'var(--secondary-blue)', color: 'var(--primary-blue)'}}>
      Learn More & Sponsor
    </div>
  </motion.div>
);

// Student Modal Component
const StudentModal: React.FC<{ student: StudentProfile; onClose: () => void; navigate: (page: PageRoute) => void; }> = ({ student, onClose, navigate }) => {
  const handleSponsorClick = () => {
    navigate(PageRoute.GET_INVOLVED);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:w-1/2 relative">
          <img src={student.image} alt={student.firstName} className="w-full h-64 md:h-full object-cover" />
           <button onClick={onClose} className="absolute top-4 right-4 bg-white/70 backdrop-blur-sm p-2 rounded-full text-gray-700 hover:bg-white hover:scale-110 transition-transform">
             <X size={20} />
           </button>
        </div>
        <div className="md:w-1/2 p-8 flex flex-col overflow-y-auto">
          <h2 className="text-4xl font-serif font-bold mb-2">{student.firstName}</h2>
          <p className="font-bold mb-4" style={{ color: 'var(--text-light)'}}>{student.age} years old, {student.gender}</p>
          <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-main)'}}>{student.bio}</p>
          
          <div className="mb-6">
            <h4 className="font-bold flex items-center mb-3"><BookOpen size={18} className="mr-2" style={{ color: 'var(--primary-blue)'}}/> Sponsorship Provides:</h4>
            <ul className="space-y-2 text-sm">
              {student.sponsorshipNeeded.map((item, idx) => (
                <li key={idx} className="flex items-center p-2 rounded-md" style={{ backgroundColor: 'var(--secondary-blue)'}}>
                  <Heart size={14} className="mr-3 flex-shrink-0" style={{ color: 'var(--primary-blue)'}} fill="currentColor"/>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.button 
            onClick={handleSponsorClick}
            className="w-full btn-primary py-3 text-lg mt-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sponsor {student.firstName}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Sponsorship: React.FC<SponsorshipProps> = ({ navigate }) => {
  const [selectedStudent, setSelectedStudent] = useState<StudentProfile | null>(null);

  const [students] = useState(STUDENT_PROFILES);

  return (
    <div className="min-h-screen pb-24 bg-background-soft">
      <div className="relative pt-20 pb-24 px-4 text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1541823709869-72439c090e87?auto=format&fit=crop&q=80&w=1470" alt="Child with a bright future" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/70 to-accent-blue/40"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          className="relative z-10"
        >
          <AnimatedText text="Sponsor a Child" className="text-4xl font-serif font-bold mb-4 text-white [text-shadow:0_3px_5px_rgba(0,0,0,0.3)]" />
          <p className="text-lg max-w-3xl mx-auto text-slate-100 [text-shadow:0_2px_4px_rgba(0,0,0,0.4)]">Change a life through education. Your sponsorship provides a child with the tools they need to build a brighter future for themselves and their community.</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="mb-12 text-center">
            <h2 className="text-3xl font-serif font-bold mb-2">Meet the Children</h2>
            <p style={{ color: 'var(--text-light)' }}>Click on a profile to learn more about their story and dreams.</p>
        </div>
        
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {students.map((student) => (
              <StudentCard key={student.id} student={student} onSelect={() => setSelectedStudent(student)} />
            ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedStudent && (
          <StudentModal student={selectedStudent} onClose={() => setSelectedStudent(null)} navigate={navigate}/>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sponsorship;
