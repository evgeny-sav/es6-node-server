import { format, createLogger, transports } from 'winston';
const { combine, timestamp, label, printf } = format;

const logger = createLogger({
  format: combine(
    label({ label: 'API' }),
    timestamp(),
    printf(info => {
      return `${info.timestamp} [${info.label}:${info.level.toUpperCase()}] : ${
        info.message
      }`;
    })
  ),
  transports: [new transports.Console()],
});

export default logger;
