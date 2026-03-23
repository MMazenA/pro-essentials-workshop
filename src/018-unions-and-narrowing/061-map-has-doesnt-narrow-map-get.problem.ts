type Event = {
  message: string;
};

const processUserMap = (eventMap: Map<string, Event>) => {
  const x = eventMap.get("error")
  if (x) {
    const message = x.message;

    throw new Error(message);
  }
};
