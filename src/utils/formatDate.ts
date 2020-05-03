import { format } from 'date-fns';

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return format(date, 'dd/mm/yyyy');
};

export default formatDate;
