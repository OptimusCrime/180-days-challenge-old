import differenceInDays from 'date-fns/difference_in_days'

const months = {
  'Jan': 1,
  'Feb': 2,
  'Mar': 3,
  'Apr': 4,
  'May': 5,
  'Jun': 6,
  'Jul': 7,
  'Aug': 8,
  'Sep': 9,
  'Oct': 10,
  'Nov': 11,
  'Dec': 12,
};

const dateTimeStringToObj = (str) => {
  return parseDate(str.split('@')[0].trim());
};

const parseDate = (str) => {
  const dateSplit = str.split(' ');
  const date = parseInt(dateSplit[0].replace('.', ''));
  const month = parseInt(months[dateSplit[1]]);
  const year = parseInt(dateSplit[2]);

  return new Date(year, month, date);
};

const sortDateValues = (first, second) => {
  if (first > second) {
    return 1;
  }
  if (second > first) {
    return -1;
  }

  return 0;
};

const parseEntries = (entries, date_start) => {
  const parsedDateStart = parseDate(date_start);

  return entries.map(entry => {
    return differenceInDays(dateTimeStringToObj(entry.added), parsedDateStart);
  }).sort((first, second) => sortDateValues(first, second));
};

export function parseProgressDataSet(entries, date_start, days_since_start, tick) {
  const parsedEntries = parseEntries(entries, date_start);

  let dataSet = [];

  for (let i = 0; i < days_since_start; i++) {
    dataSet.push(parsedEntries.filter(entry => entry <= i + 1).length);
  }

  return dataSet;
}

export function parseGrowthDataSet(days_since_start, tick) {
  let dataSet = [];

  for (let i = 0; i < days_since_start; i++) {
    dataSet.push(tick * i);
  }

  return dataSet;
}

export function parseLabels(days_since_start) {
  let dataSet = [];

  for (let i = 1; i <= days_since_start; i++) {
    dataSet.push(i);
  }

  return dataSet;
}
