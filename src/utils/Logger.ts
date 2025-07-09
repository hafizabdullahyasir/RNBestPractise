type LogType = 'info' | 'warn' | 'error' | 'debug';

const emojiMap: Record<LogType, string> = {
  info: 'ℹ️',
  warn: '⚠️',
  error: '❌',
  debug: '🐛',
};

export const Logger = {
  info: (msg: string, ...args: any[]) => console.log(`${emojiMap.info} ${msg}`, ...args),
  warn: (msg: string, ...args: any[]) => console.warn(`${emojiMap.warn} ${msg}`, ...args),
  error: (msg: string, ...args: any[]) => console.error(`${emojiMap.error} ${msg}`, ...args),
  debug: (msg: string, ...args: any[]) => console.debug(`${emojiMap.debug} ${msg}`, ...args),
};
