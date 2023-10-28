import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function fromNow(time: string | Date) {
  return dayjs(time).fromNow();
}

export function formatTime(
  time: string | Date | null,
  format = 'YYYY.MM.DD h:mm A'
) {
  return dayjs(time).format(format);
}
