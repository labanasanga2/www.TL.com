import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const RelationshipTimer = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [nextAnniversary, setNextAnniversary] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [nextMeetup, setNextMeetup] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [meetupDate, setMeetupDate] = useState<string | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Load meetup date from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('nextMeetupDate');
    if (saved) setMeetupDate(saved);
  }, []);

  useEffect(() => {
    const startDate = new Date('2025-08-01T00:00:00');

    const calculateTime = () => {
      const now = new Date();

      // Calculate time elapsed since August 1, 2025
      const diffMs = now.getTime() - startDate.getTime();
      const totalSeconds = Math.floor(diffMs / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);

      // Calculate months difference
      let months = (now.getFullYear() - startDate.getFullYear()) * 12;
      months += now.getMonth() - startDate.getMonth();
      if (now.getDate() < startDate.getDate()) {
        months--;
      }

      // Calculate remaining days after months
      const tempDate = new Date(startDate);
      tempDate.setMonth(tempDate.getMonth() + months);
      const remainingMs = now.getTime() - tempDate.getTime();
      const remainingDays = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
      const remainingHours = Math.floor((remainingMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const remainingMinutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
      const remainingSeconds = Math.floor((remainingMs % (1000 * 60)) / 1000);

      setTimeElapsed({
        months: Math.max(0, months),
        days: Math.max(0, remainingDays),
        hours: Math.max(0, remainingHours),
        minutes: Math.max(0, remainingMinutes),
        seconds: Math.max(0, remainingSeconds),
      });

      // Calculate next anniversary (1st of next month)
      let nextAnniversaryDate = new Date(now.getFullYear(), now.getMonth(), 1);
      if (now.getDate() >= 1) {
        nextAnniversaryDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      }

      const nextDiffMs = nextAnniversaryDate.getTime() - now.getTime();
      const nextTotalSeconds = Math.floor(nextDiffMs / 1000);
      const nextTotalMinutes = Math.floor(nextTotalSeconds / 60);
      const nextTotalHours = Math.floor(nextTotalMinutes / 60);
      const nextTotalDays = Math.floor(nextTotalHours / 24);

      setNextAnniversary({
        days: Math.max(0, nextTotalDays),
        hours: Math.max(0, nextTotalHours % 24),
        minutes: Math.max(0, nextTotalMinutes % 60),
        seconds: Math.max(0, nextTotalSeconds % 60),
      });

      // Calculate next meetup countdown
      if (meetupDate) {
        const meetupDateTime = new Date(meetupDate).getTime();
        const meetupDiffMs = meetupDateTime - now.getTime();

        if (meetupDiffMs > 0) {
          const meetupTotalSeconds = Math.floor(meetupDiffMs / 1000);
          const meetupTotalMinutes = Math.floor(meetupTotalSeconds / 60);
          const meetupTotalHours = Math.floor(meetupTotalMinutes / 60);
          const meetupTotalDays = Math.floor(meetupTotalHours / 24);

          setNextMeetup({
            days: meetupTotalDays,
            hours: meetupTotalHours % 24,
            minutes: meetupTotalMinutes % 60,
            seconds: meetupTotalSeconds % 60,
          });
        } else {
          setNextMeetup({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [meetupDate]);

  const handleSetMeetupDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setMeetupDate(date);
    localStorage.setItem('nextMeetupDate', date);
    setShowDatePicker(false);
  };

  const TimeBlock = ({ value, label, size = 'large' }: { value: number; label: string; size?: 'large' | 'small' }) => (
    <div className={`flex flex-col items-center ${size === 'large' ? 'mx-2 sm:mx-3' : 'mx-1'}`}>
      <div
        className={`
          relative bg-gradient-to-b from-christmas-red/20 to-christmas-red/5 
          backdrop-blur-md border border-christmas-red/30 rounded-lg
          flex items-center justify-center
          shadow-[0_0_20px_rgba(220,38,38,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]
          ${size === 'large' ? 'w-14 h-16 sm:w-20 sm:h-24' : 'w-10 h-12 sm:w-12 sm:h-14'}
        `}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-lg bg-christmas-red/10 blur-sm" />

        {/* Number */}
        <span
          className={`
            relative z-10 font-mono font-bold text-christmas-red
            ${size === 'large' ? 'text-2xl sm:text-4xl' : 'text-lg sm:text-xl'}
          `}
          style={{
            textShadow: '0 0 10px rgba(220,38,38,0.5), 0 0 20px rgba(220,38,38,0.3)',
          }}
        >
          {String(value).padStart(2, '0')}
        </span>

        {/* Scan line effect */}
        <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse" />
        </div>
      </div>

      <span
        className={`
          mt-1 uppercase tracking-wider text-christmas-gold font-medium
          ${size === 'large' ? 'text-[10px] sm:text-xs' : 'text-[8px] sm:text-[10px]'}
        `}
      >
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-4 animate-fade-in">
      {/* Main Timer - Time Together */}
      <div className="text-center">
        <p className="text-xs sm:text-sm text-christmas-gold/80 uppercase tracking-[0.2em] mb-3 font-medium">
          ✨ Together For ✨
        </p>

        <div className="flex items-end justify-center">
          <TimeBlock value={timeElapsed.months} label="Months" />
          <TimeBlock value={timeElapsed.days} label="Days" />
          <TimeBlock value={timeElapsed.hours} label="Hours" />
          <TimeBlock value={timeElapsed.minutes} label="Mins" />
          <TimeBlock value={timeElapsed.seconds} label="Secs" size="small" />
        </div>
      </div>

      {/* Divider */}
      <div className="w-32 h-px bg-gradient-to-r from-transparent via-christmas-gold/50 to-transparent" />

      {/* Next Anniversary Countdown */}
      <div className="text-center">
        <p className="text-[10px] sm:text-xs text-foreground/60 uppercase tracking-[0.15em] mb-2">
          💕 Next Anniversary In 💕
        </p>

        <div className="flex items-end justify-center">
          <TimeBlock value={nextAnniversary.days} label="Days" size="small" />
          <TimeBlock value={nextAnniversary.hours} label="Hrs" size="small" />
          <TimeBlock value={nextAnniversary.minutes} label="Min" size="small" />
          <TimeBlock value={nextAnniversary.seconds} label="Sec" size="small" />
        </div>
      </div>

      {/* Divider */}
      <div className="w-32 h-px bg-gradient-to-r from-transparent via-christmas-gold/50 to-transparent" />

      {/* Next Meetup Countdown */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <p className="text-[10px] sm:text-xs text-foreground/60 uppercase tracking-[0.15em]">
            💑 Next Meetup In 💑
          </p>
          <button
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="p-1 rounded-full bg-christmas-red/20 hover:bg-christmas-red/40 transition-colors"
            title="Set meetup date"
          >
            <Calendar className="w-3 h-3 text-christmas-gold" />
          </button>
        </div>

        {showDatePicker && (
          <div className="mb-2 animate-fade-in">
            <input
              type="datetime-local"
              onChange={handleSetMeetupDate}
              value={meetupDate || ''}
              className="px-3 py-1 rounded-lg bg-background/50 border border-christmas-red/30 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-christmas-red/50"
            />
          </div>
        )}

        {meetupDate ? (
          <div className="flex items-end justify-center">
            <TimeBlock value={nextMeetup.days} label="Days" size="small" />
            <TimeBlock value={nextMeetup.hours} label="Hrs" size="small" />
            <TimeBlock value={nextMeetup.minutes} label="Min" size="small" />
            <TimeBlock value={nextMeetup.seconds} label="Sec" size="small" />
          </div>
        ) : (
          <p className="text-xs text-foreground/40 italic">Click calendar to set date</p>
        )}
      </div>
    </div>
  );
};

export default RelationshipTimer;