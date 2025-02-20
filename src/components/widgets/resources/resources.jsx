import Container from "../widget/container";
import Raw from "../widget/raw";

import Disk from "./disk";
import Cpu from "./cpu";
import Memory from "./memory";
import CpuTemp from "./cputemp";
import Uptime from "./uptime";

export default function Resources({ options }) {
  const { expanded, units } = options;
  let { refresh } = options;
  refresh = Math.max(refresh, 1000);
  return <Container options={options}>
    <Raw>
      <div className="flex flex-row self-center flex-wrap justify-between">
        {options.cpu && <Cpu expanded={expanded} refresh={refresh} />}
        {options.memory && <Memory expanded={expanded} refresh={refresh} />}
        {Array.isArray(options.disk)
          ? options.disk.map((disk) => <Disk key={disk} options={{ disk }} expanded={expanded} refresh={refresh} />)
          : options.disk && <Disk options={options} expanded={expanded} refresh={refresh} />}
        {options.cputemp && <CpuTemp expanded={expanded} units={units} refresh={refresh} />}
        {options.uptime && <Uptime refresh={refresh} />}
      </div>
      {options.label && (
        <div className="ml-6 pt-1 text-center text-theme-800 dark:text-theme-200 text-xs">{options.label}</div>
      )}
    </Raw>
  </Container>;
}
