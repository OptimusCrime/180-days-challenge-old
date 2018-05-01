import parse from 'date-fns/parse'
import differenceInDays from 'date-fns/difference_in_days'

const dateTimeStringToObj = (str) => {
  return parse(str.split('@')[0].trim());
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
  const parsedDateStart = dateTimeStringToObj(date_start);

  return entries.map(entry => {
    return differenceInDays(parse(entry.added), parsedDateStart);
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
