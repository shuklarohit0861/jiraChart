import { useMemo } from "react";
import styles from "./bar.module.css";

interface BarInterface {
  name: string;
  colour: string;
  ticketCount: number;
  maxTicketCount: number;
}

const Bar = ({ name, colour, ticketCount, maxTicketCount }: BarInterface) => {
  return (
    <div
      className={styles.bar_item}
      style={{
        backgroundColor: colour,
        height: `${(ticketCount / maxTicketCount) * 100}%`,
      }}
    >
      <div className={styles.tooltip}>{`${name} - ${ticketCount}`}</div>
    </div>
  );
};

interface DataInterface {
  data: { name: string; colour: string; ticketCount: number; id: string }[];
}

const BarChart = ({ data }: DataInterface) => {
  const maxTicketCount = useMemo(() => {
    return data.reduce((prev, curr) => {
      if (prev > curr.ticketCount) {
        return prev;
      }
      return curr.ticketCount;
    }, 0);
  }, [data]);

  return (
    <div className={styles.bar_container}>
      <div className={styles.bar}>
        {data.map((item) => {
          return (
            <Bar key={item.id} {...item} maxTicketCount={maxTicketCount} />
          );
        })}
      </div>
      <div className={styles.y_axis}>Number of tickets</div>
      <div className={styles.x_axis}>Departments</div>
    </div>
  );
};

export default BarChart;
