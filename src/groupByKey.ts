type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item: T) => {
    const keyValue = item[key];
    const keyStr = String(keyValue);

    if (!acc[keyStr]) {
      acc[keyStr] = [];
    }

    acc[keyStr].push(item);

    return acc;
  }, {} as GroupsMap<T>);
}
